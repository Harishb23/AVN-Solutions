import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://avnsolutions.in';
const TODAY = new Date().toISOString().split('T')[0];

// Verified public indexable pages
const SITEMAP_ENTRIES = [
  // 1. Home
  {
    loc: `${SITE_URL}/`,
    lastmod: TODAY,
    changefreq: 'daily',
    priority: '1.0',
    images: [
      {
        loc: `${SITE_URL}/logo.png`,
        title: 'AVN Solutions - Audio Visual Equipment Supplier & AV Integrator Chennai',
        caption: 'AVN Solutions India Private Limited - Headquarters & AV Integration Lab'
      },
      {
        loc: `${SITE_URL}/hero-bg.jpg`,
        title: 'AVN Solutions Experience Center Chennai',
        caption: 'Enterprise boardroom AV integration and video conferencing showroom'
      }
    ]
  },
  // 2. AV Integration Chennai
  {
    loc: `${SITE_URL}/av-integration-chennai`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.95',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        title: 'AV Integration Chennai - Turnkey Audio Visual System Integration',
        caption: 'Enterprise AV system design, AutoCAD schematics, Dante IP audio, and 10G SDVoE in Chennai'
      }
    ]
  },
  // 3. AV Installation Chennai
  {
    loc: `${SITE_URL}/av-installation-chennai`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.95',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        title: 'AV Installation Chennai - Commercial Audio Visual Installation',
        caption: 'Laser-aligned display mounting, concealed plenum cabling, and CTS-I field crews in Chennai'
      }
    ]
  },
  // 4. Conference Room AV Solutions
  {
    loc: `${SITE_URL}/conference-room-av-solutions`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.95',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        title: 'Conference Room AV Solutions - Boardrooms & Meeting Rooms Chennai',
        caption: 'Fine-pitch LED walls, beamforming mics, and single-touch Crestron automation'
      }
    ]
  },
  // 5. Video Conferencing Solutions Chennai
  {
    loc: `${SITE_URL}/video-conferencing-solutions-chennai`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.95',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        title: 'Video Conferencing Solutions Chennai - Microsoft Teams & Zoom Rooms',
        caption: 'AI multi-camera speaker tracking, AEC audio DSP, and wireless BYOM presentation'
      }
    ]
  },
  // 6. Services Hub: Comprehensive 12 Disciplines
  {
    loc: `${SITE_URL}/services`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.90',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        title: 'Comprehensive AV Services & 9-Stage Methodology Chennai',
        caption: 'AV consulting, design, acoustic engineering and 24/7 SLA support'
      }
    ]
  },
  // 7. Solutions Overview Hub
  {
    loc: `${SITE_URL}/solutions`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.90',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        title: 'Turnkey Audio Visual Solutions Chennai',
        caption: 'Enterprise AV systems for meeting rooms, auditoriums and video walls'
      }
    ]
  },
  // 8. Auditorium AV Solutions & Sound Systems
  {
    loc: `${SITE_URL}/solutions/auditorium-av`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.90',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
        title: 'Auditorium AV Solutions & High-Performance Sound Systems',
        caption: 'Dante line array audio distribution, EASE acoustic simulations, and stage lighting'
      }
    ]
  },
  // 7. Smart Classroom Solutions & Education AV
  {
    loc: `${SITE_URL}/solutions/smart-classroom-av`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.90',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
        title: 'Smart Classroom Solutions & Education AV Systems',
        caption: 'Interactive displays, lecture capture streaming, and university auditorium acoustics'
      }
    ]
  },
  // 8. Commercial Products Catalog
  {
    loc: `${SITE_URL}/products`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.90',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
        title: 'Commercial Audio Visual Equipment Supplier Chennai',
        caption: 'Commercial LED display walls, 4K laser projectors, beamforming mic arrays, and digital DSP processors'
      }
    ]
  },
  // 9. Industry Deployments
  {
    loc: `${SITE_URL}/industries`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.90',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        title: 'Industry AV Solutions - Corporate, Education, Healthcare, Hospitality',
        caption: 'Customized audio visual architectures built for diverse vertical industries'
      }
    ]
  },
  // 10. OEM Brands
  {
    loc: `${SITE_URL}/brands`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.85',
    images: [
      {
        loc: `${SITE_URL}/logo.png`,
        title: 'Authorized AV Hardware Partners & Brands Chennai',
        caption: 'Certified integration partner for Crestron, Q-SYS, Extron, Shure, Samsung, and LG'
      }
    ]
  },
  // 11. Projects & Case Studies
  {
    loc: `${SITE_URL}/projects`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.85',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        title: 'AVN Solutions Client Projects & Integrations Chennai',
        caption: 'Enterprise conference room, auditorium, and luxury home cinema installation portfolio'
      }
    ]
  },
  // 12. Engineering Insights
  {
    loc: `${SITE_URL}/insights`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.85',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        title: 'Technical AV Articles & Room Acoustic Guides',
        caption: 'Engineering insights on RT60 decay, Dante audio, and display calculations'
      }
    ]
  },
  // 13. Interactive Tools
  {
    loc: `${SITE_URL}/tools`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.80',
    images: [
      {
        loc: `${SITE_URL}/logo.png`,
        title: 'Interactive AV Design Tools & Room Calculators',
        caption: 'Screen viewing distance, speaker SPL, and AV budget estimator tools'
      }
    ]
  },
  // 14. About Company
  {
    loc: `${SITE_URL}/about`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.80',
    images: [
      {
        loc: `${SITE_URL}/logo.png`,
        title: 'About AVN Solutions India Private Limited',
        caption: 'Premier Audio Visual systems integrator in Chennai with AVIXA CTS engineers'
      }
    ]
  },
  // 15. Contact & Showroom
  {
    loc: `${SITE_URL}/contact`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.95',
    images: [
      {
        loc: `${SITE_URL}/logo.png`,
        title: 'Contact AVN Solutions Showroom & Experience Center Chennai',
        caption: 'Sholinganallur Chennai experience center demonstration and quotation'
      }
    ]
  }
];

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateXml() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\n';
  xml += '        http://www.google.com/schemas/sitemap-image/1.1\n';
  xml += '        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">\n\n';

  for (const entry of SITEMAP_ENTRIES) {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(entry.loc)}</loc>\n`;
    xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    xml += `    <priority>${entry.priority}</priority>\n`;

    if (entry.images && entry.images.length > 0) {
      for (const img of entry.images) {
        xml += '    <image:image>\n';
        xml += `      <image:loc>${escapeXml(img.loc)}</image:loc>\n`;
        xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
        xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
        xml += '    </image:image>\n';
      }
    }

    xml += '  </url>\n\n';
  }

  xml += '</urlset>\n';
  return xml;
}

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
const xmlContent = generateXml();
fs.writeFileSync(outputPath, xmlContent, 'utf-8');
console.log(`✅ Sitemap successfully generated with ${SITEMAP_ENTRIES.length} verified public pages at: ${outputPath}`);
