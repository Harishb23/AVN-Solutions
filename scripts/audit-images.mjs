import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.resolve(__dirname, '../src');

function getAllFiles(dir, exts = ['.ts', '.tsx', '.css', '.html']) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, exts));
    } else if (exts.includes(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

const allFiles = getAllFiles(srcDir);
allFiles.push(path.resolve(__dirname, '../index.html'));

const urlRegex = /https:\/\/images\.unsplash\.com\/[^\s"'`)]+/g;
const urls = new Set();

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    urls.add(match[0]);
  }
}

console.log(`Extracted ${urls.size} unique Unsplash URLs across the codebase.`);

async function verifyAll() {
  let passed = 0;
  let failed = [];
  const urlList = Array.from(urls);

  // Batch verify 5 at a time
  const batchSize = 5;
  for (let i = 0; i < urlList.length; i += batchSize) {
    const batch = urlList.slice(i, i + batchSize);
    await Promise.all(
      batch.map(async (url) => {
        try {
          const res = await fetch(url, { method: 'HEAD' });
          if (res.ok) {
            passed++;
          } else {
            failed.push({ url, status: res.status });
          }
        } catch (err) {
          failed.push({ url, error: err.message });
        }
      })
    );
  }

  console.log(`Verified: ${passed} passed, ${failed.length} failed.`);
  if (failed.length > 0) {
    console.error('Failed URLs:', failed);
  } else {
    console.log('✅ ALL images returned 200 OK!');
  }
}

verifyAll();
