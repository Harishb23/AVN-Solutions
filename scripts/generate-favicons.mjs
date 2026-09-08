import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const PUBLIC_DIR = path.resolve('public');

// --- 1. PNG ENCODER ---
function createPng(width, height, getPixelFn) {
  const rowStride = 1 + width * 4;
  const raw = Buffer.alloc(height * rowStride);

  for (let y = 0; y < height; y++) {
    raw[y * rowStride] = 0; // Filter None
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelFn(x, y, width, height);
      const pxOffset = y * rowStride + 1 + x * 4;
      raw[pxOffset] = r;
      raw[pxOffset + 1] = g;
      raw[pxOffset + 2] = b;
      raw[pxOffset + 3] = a;
    }
  }

  const compressed = zlib.deflateSync(raw, { level: 9 });

  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[n] = c;
  }
  function crc32(buf) {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    }
    return (c ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(12 + len);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4);
    data.copy(buf, 8);
    const typeAndData = buf.slice(4, 8 + len);
    buf.writeUInt32BE(crc32(typeAndData), 8 + len);
    return buf;
  }

  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8 bits per channel
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const ihdr = makeChunk('IHDR', ihdrData);
  const idat = makeChunk('IDAT', compressed);
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

// --- 2. DECODE ORIGINAL LOGO TO SAMPLE PIXELS ---
function decodePng(filePath) {
  const buf = fs.readFileSync(filePath);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  const idatChunks = [];
  let offset = 8;
  while (offset < buf.length) {
    const len = buf.readUInt32BE(offset);
    const type = buf.toString('ascii', offset + 4, offset + 8);
    if (type === 'IDAT') idatChunks.push(buf.slice(offset + 8, offset + 8 + len));
    offset += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idatChunks));
  const bpp = 4;
  const rowStride = 1 + width * bpp;
  const pixels = Buffer.alloc(width * height * 4);

  let prevRow = Buffer.alloc(width * bpp);
  for (let y = 0; y < height; y++) {
    const rowStart = y * rowStride;
    const filter = raw[rowStart];
    const currRow = Buffer.alloc(width * bpp);
    for (let i = 0; i < width * bpp; i++) {
      const rawVal = raw[rowStart + 1 + i];
      const a = i >= bpp ? currRow[i - bpp] : 0;
      const b = prevRow[i];
      const c = i >= bpp ? prevRow[i - bpp] : 0;
      let val = 0;
      if (filter === 0) val = rawVal;
      else if (filter === 1) val = (rawVal + a) & 0xff;
      else if (filter === 2) val = (rawVal + b) & 0xff;
      else if (filter === 3) val = (rawVal + Math.floor((a + b) / 2)) & 0xff;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        let pr = c;
        if (pa <= pb && pa <= pc) pr = a;
        else if (pb <= pc) pr = b;
        val = (rawVal + pr) & 0xff;
      }
      currRow[i] = val;
    }
    currRow.copy(pixels, y * width * 4);
    prevRow = currRow;
  }
  return { width, height, pixels };
}

// Bounding box of the AVN mark in Logo_350x80-01.png:
// x: 36 to 570, y: 80 to 275
const logo = decodePng('src/assets/Logo_350x80-01.png');
const markBox = { minX: 36, maxX: 570, minY: 80, maxY: 275 };
const markW = markBox.maxX - markBox.minX + 1;
const markH = markBox.maxY - markBox.minY + 1;

// Function to generate square favicon pixel
function generateFaviconPixel(x, y, size) {
  const normX = x / size;
  const normY = y / size;

  // Rounded square tile background with radius = 0.22
  const cornerR = 0.20;
  const dx = Math.max(0, Math.abs(normX - 0.5) - (0.5 - cornerR));
  const dy = Math.max(0, Math.abs(normY - 0.5) - (0.5 - cornerR));
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Outside tile?
  if (dist > cornerR) {
    return [0, 0, 0, 0];
  }

  // Smooth edge anti-aliasing
  const aa = Math.min(1, Math.max(0, (cornerR - dist) * size * 1.5));

  // Tile background: Deep architectural slate navy #0B1422 -> #112035
  const bgGrad = normY;
  const bgR = Math.round(11 + (17 - 11) * bgGrad);
  const bgG = Math.round(20 + (32 - 20) * bgGrad);
  const bgB = Math.round(34 + (53 - 34) * bgGrad);

  // Subtle cyan/orange border glow on tile perimeter
  let r = bgR, g = bgG, b = bgB, a = Math.round(255 * aa);
  const borderDist = cornerR - dist;
  if (borderDist < 0.04) {
    const t = 1 - borderDist / 0.04;
    // Cyan #38BDF8 at top-left to Orange #FF5A1F at bottom-right
    const borderR = Math.round(56 + (255 - 56) * ((normX + normY) / 2));
    const borderG = Math.round(189 + (90 - 189) * ((normX + normY) / 2));
    const borderB = Math.round(248 + (31 - 248) * ((normX + normY) / 2));
    r = Math.round(r * (1 - t * 0.7) + borderR * (t * 0.7));
    g = Math.round(g * (1 - t * 0.7) + borderG * (t * 0.7));
    b = Math.round(b * (1 - t * 0.7) + borderB * (t * 0.7));
  }

  // Map mark into center with padding:
  // Target width = 80% of size
  const markTargetW = 0.82;
  const markTargetH = markTargetW * (markH / markW);
  const markLeft = (1 - markTargetW) / 2;
  const markTop = (1 - markTargetH) / 2;

  if (normX >= markLeft && normX <= markLeft + markTargetW &&
      normY >= markTop && normY <= markTop + markTargetH) {
    const localX = (normX - markLeft) / markTargetW;
    const localY = (normY - markTop) / markTargetH;
    const srcX = Math.floor(markBox.minX + localX * markW);
    const srcY = Math.floor(markBox.minY + localY * markH);

    if (srcX >= 0 && srcX < logo.width && srcY >= 0 && srcY < logo.height) {
      const idx = (srcY * logo.width + srcX) * 4;
      const logoA = logo.pixels[idx + 3] / 255;
      if (logoA > 0.1) {
        // Boost contrast of AVN mark so it shines brilliant cyan/white on the dark tile
        const logoR = logo.pixels[idx];
        const logoG = logo.pixels[idx + 1];
        const logoB = logo.pixels[idx + 2];
        
        // Enhance: crisp bright white/cyan tint for ultra-high legibility in Google search
        const enhancedR = Math.min(255, Math.round(logoR * 0.3 + 210));
        const enhancedG = Math.min(255, Math.round(logoG * 0.3 + 235));
        const enhancedB = Math.min(255, Math.round(logoB * 0.3 + 255));

        r = Math.round(r * (1 - logoA) + enhancedR * logoA);
        g = Math.round(g * (1 - logoA) + enhancedG * logoA);
        b = Math.round(b * (1 - logoA) + enhancedB * logoA);
      }
    }
  }

  return [r, g, b, a];
}

// --- 3. GENERATE ALL GOOGLE-SPECIFIED FAVICON SIZES ---
const sizes = [
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 }
];

console.log('Generating Google-standard square PNG favicons...');
const pngBuffers = {};
for (const { name, size } of sizes) {
  const buf = createPng(size, size, (x, y, w, h) => generateFaviconPixel(x, y, w));
  fs.writeFileSync(path.join(PUBLIC_DIR, name), buf);
  pngBuffers[size] = buf;
  console.log(`✓ ${name} (${size}x${size}px) generated [${buf.length} bytes]`);
}

// --- 4. BUILD MULTI-SIZE favicon.ico ---
// Includes 16x16, 32x32, 48x48
console.log('Generating standard multi-resolution favicon.ico...');
const icoSizes = [16, 32, 48];
const icoPngs = icoSizes.map(sz => {
  if (pngBuffers[sz]) return { size: sz, buf: pngBuffers[sz] };
  const b = createPng(sz, sz, (x, y, w, h) => generateFaviconPixel(x, y, w));
  return { size: sz, buf: b };
});

const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0); // reserved
icoHeader.writeUInt16LE(1, 2); // 1 = ICO
icoHeader.writeUInt16LE(icoPngs.length, 4); // count

const dirEntries = [];
let imgOffset = 6 + 16 * icoPngs.length;
for (const { size, buf } of icoPngs) {
  const entry = Buffer.alloc(16);
  entry[0] = size >= 256 ? 0 : size; // width
  entry[1] = size >= 256 ? 0 : size; // height
  entry[2] = 0; // color count
  entry[3] = 0; // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bpp
  entry.writeUInt32LE(buf.length, 8); // size
  entry.writeUInt32LE(imgOffset, 12); // offset
  dirEntries.push(entry);
  imgOffset += buf.length;
}

const icoBuffer = Buffer.concat([icoHeader, ...dirEntries, ...icoPngs.map(p => p.buf)]);
fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
console.log(`✓ favicon.ico generated with 16x16, 32x32, 48x48 entries [${icoBuffer.length} bytes]`);

// --- 5. GENERATE CRISP VECTOR SVG FAVICON ---
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1320" />
      <stop offset="50%" stop-color="#111E2E" />
      <stop offset="100%" stop-color="#080E18" />
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF6B35" />
      <stop offset="100%" stop-color="#EA580C" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#0284C7" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#FF6B35" stop-opacity="0.8" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Rounded Squircle Base Tile -->
  <rect x="4" y="4" width="120" height="120" rx="28" fill="url(#bgGrad)" stroke="url(#borderGrad)" stroke-width="3" />

  <!-- Subtle Audio-Visual Waveform Lines in Background -->
  <g opacity="0.15">
    <line x1="20" y1="92" x2="108" y2="92" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="2 3" />
    <line x1="20" y1="36" x2="108" y2="36" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="2 3" />
  </g>

  <!-- Letter A (Left) -->
  <path d="M 28 84 L 40 44 L 48 44 L 60 84 L 51 84 L 48.5 75 L 39.5 75 L 37 84 Z M 41.5 68 L 46.5 68 L 44 54 Z" fill="#FFFFFF" />

  <!-- Letter V (Center - Vibrant Brand Orange Accent) -->
  <path d="M 52 44 L 64 84 L 72 84 L 84 44 L 75 44 L 68 70 L 61 44 Z" fill="url(#orangeGrad)" filter="url(#glow)" />

  <!-- Letter N (Right) -->
  <path d="M 76 44 L 84 44 L 97 68 L 97 44 L 105 44 L 105 84 L 97 84 L 84 60 L 84 84 L 76 84 Z" fill="#38BDF8" />

  <!-- Signal Pulse Dots underneath -->
  <circle cx="44" cy="94" r="2.5" fill="#38BDF8" />
  <circle cx="68" cy="94" r="3" fill="#FF6B35" />
  <circle cx="91" cy="94" r="2.5" fill="#38BDF8" />
</svg>`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), svgContent);
console.log(`✓ favicon.svg generated [${svgContent.length} bytes]`);

console.log('\n🎉 ALL GOOGLE-COMPLIANT FAVICONS READY!');
