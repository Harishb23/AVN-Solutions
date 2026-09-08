import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://avnsolutions.in';
const TODAY = new Date().toISOString().split('T')[0];

// All 11 public indexable pages
const SITEMAP_ENTRIES = [
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
  {
    loc: `${SITE_URL}/solutions`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.95',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        title: 'Corporate Boardroom & Conference AV Solutions Chennai',
        caption: 'Turnkey AV solutions for enterprise meeting rooms, auditoriums and video walls'
      }
    ]
  },
  {
    loc: `${SITE_URL}/services`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.95',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        title: 'AV Installation, Acoustic Design & Maintenance Chennai',
        caption: 'Comprehensive AV consulting, design, acoustic engineering and 24/7 SLA support'
      }
    ]
  },
  {
    loc: `${SITE_URL}/products`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.90',
    images: [
      {
        loc: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
        title: 'Audio Visual Equipment & Commercial Hardware Chennai',
        caption: 'Commercial LED display walls, 4K laser projectors, beamforming mic arrays, and digital DSP processors'
      }
    ]
  },
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
