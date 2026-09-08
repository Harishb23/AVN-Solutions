// Centralized SEO Routes & Keyword Targeting Architecture for AVN Solutions (Chennai)

export interface RouteSEOConfig {
  id: string;
  path: string;
  title: string;
  metaTitle: string;
  description: string;
  canonical: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly';
  ogType: string;
  ogImage: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Commercial' | 'Informational' | 'Navigational' | 'Transactional';
  h1: string;
  schemaType: 'LocalBusiness' | 'Service' | 'Product' | 'WebPage' | 'Article' | 'Organization';
  breadcrumbName: string;
  targetSolutionId?: string; // For deep linking to solutions
}

export const SITE_URL = 'https://avnsolutions.in';

export const PUBLIC_ROUTES: RouteSEOConfig[] = [
  // 1. Homepage: Primary hub for local commercial searches
  {
    id: 'home',
    path: '/',
    title: 'AV Solutions in Chennai | Audio Visual Integrator | AVN Solutions',
    metaTitle: 'AV Solutions in Chennai | Premier Audio Visual Integrator',
    description: 'AVN Solutions is a premier audio visual company & AV integrator in Chennai. We deliver turnkey boardroom AV, video conferencing, video walls & 24/7 SLA.',
    canonical: `${SITE_URL}/`,
    priority: 1.0,
    changefreq: 'daily',
    ogType: 'website',
    ogImage: `${SITE_URL}/og-image.jpg`,
    primaryKeyword: 'AV solutions Chennai',
    secondaryKeywords: [
      'audio visual solutions Chennai',
      'AV company Chennai',
      'AV integrator Chennai',
      'audio visual company Chennai',
      'AV system integrator Chennai'
    ],
    searchIntent: 'Commercial',
    h1: 'AV Solutions & Audio Visual System Integration in Chennai',
    schemaType: 'LocalBusiness',
    breadcrumbName: 'Home'
  },

  // 2. Services: Targets AV Integration & AV Installation searches
  {
    id: 'services',
    path: '/services',
    title: 'AV Integration & Installation Services Chennai | AVN Solutions',
    metaTitle: 'AV Integration & Installation Services in Chennai',
    description: 'Expert AV integration services & professional AV installation in Chennai. CTS-certified engineers deliver turnkey system design, DSP tuning & 24/7 SLA.',
    canonical: `${SITE_URL}/services`,
    priority: 0.95,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'AV integration Chennai',
    secondaryKeywords: [
      'AV installation Chennai',
      'AV integration services',
      'AV system integration',
      'audio visual installation',
      'audio visual integration',
      'AV installation services'
    ],
    searchIntent: 'Commercial',
    h1: 'AV Integration & AV Installation Services in Chennai',
    schemaType: 'Service',
    breadcrumbName: 'Services'
  },

  // 3. Solutions Hub
  {
    id: 'solutions',
    path: '/solutions',
    title: 'Audio Visual Solutions for Businesses & Venues | AVN Solutions',
    metaTitle: 'Turnkey Audio Visual Solutions | Boardrooms & Auditoriums',
    description: 'Explore turnkey audio visual solutions engineered by AVN Solutions: boardrooms, video conferencing suites, auditoriums, LED video walls & smart automation.',
    canonical: `${SITE_URL}/solutions`,
    priority: 0.95,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'audio visual solutions',
    secondaryKeywords: [
      'AV solutions',
      'turnkey AV solutions',
      'commercial AV systems',
      'smart space integration'
    ],
    searchIntent: 'Commercial',
    h1: 'Audio Visual Solutions for Modern Business Spaces',
    schemaType: 'Service',
    breadcrumbName: 'Solutions'
  },

  // 4. Targeted Solution: Conference Room & Boardroom AV
  {
    id: 'solution-boardroom-av',
    path: '/solutions/boardroom-av',
    title: 'Conference Room & Boardroom AV Solutions | AVN Solutions',
    metaTitle: 'Conference Room & Boardroom AV Solutions | AVN Solutions',
    description: 'Transform meeting spaces with turnkey conference room AV solutions and executive boardroom systems: fine-pitch LED, beamforming mics & single-touch automation.',
    canonical: `${SITE_URL}/solutions/boardroom-av`,
    priority: 0.95,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'conference room AV solutions',
    secondaryKeywords: [
      'boardroom AV solutions',
      'conference room AV',
      'meeting room AV solutions',
      'boardroom AV',
      'meeting room AV',
      'meeting room solutions',
      'executive boardroom AV solutions'
    ],
    searchIntent: 'Commercial',
    h1: 'Conference Room & Boardroom AV Solutions',
    schemaType: 'Service',
    breadcrumbName: 'Boardroom AV',
    targetSolutionId: 'corporate-av'
  },

  // 5. Targeted Solution: Video Conferencing Solutions Chennai
  {
    id: 'solution-video-conferencing',
    path: '/solutions/video-conferencing',
    title: 'Video Conferencing Solutions Chennai | Teams & Zoom Rooms | AVN',
    metaTitle: 'Video Conferencing Solutions Chennai | Systems & Installation',
    description: 'Enterprise video conferencing solutions in Chennai. Certified Microsoft Teams & Zoom Rooms installation, AI multi-camera speaker tracking & wireless casting.',
    canonical: `${SITE_URL}/solutions/video-conferencing`,
    priority: 0.95,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'video conferencing solutions Chennai',
    secondaryKeywords: [
      'video conferencing solutions',
      'video conferencing systems',
      'video conferencing installation',
      'conference room video conferencing'
    ],
    searchIntent: 'Commercial',
    h1: 'Video Conferencing Solutions & Systems in Chennai',
    schemaType: 'Service',
    breadcrumbName: 'Video Conferencing',
    targetSolutionId: 'video-conferencing'
  },

  // 6. Targeted Solution: Auditorium AV & Sound Systems
  {
    id: 'solution-auditorium-av',
    path: '/solutions/auditorium-av',
    title: 'Auditorium AV Solutions & Sound Systems | AVN Solutions',
    metaTitle: 'Auditorium AV Solutions & High-Performance Sound Systems',
    description: 'Comprehensive auditorium AV solutions and sound systems: EASE acoustic ray-tracing, Dante line arrays, stage lighting, high-lumen projection & clear acoustics.',
    canonical: `${SITE_URL}/solutions/auditorium-av`,
    priority: 0.90,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'auditorium AV solutions',
    secondaryKeywords: [
      'auditorium sound system',
      'auditorium AV',
      'auditorium audio visual solutions',
      'large venue sound reinforcement'
    ],
    searchIntent: 'Commercial',
    h1: 'Auditorium AV Solutions & High-Performance Sound Systems',
    schemaType: 'Service',
    breadcrumbName: 'Auditorium AV',
    targetSolutionId: 'professional-audio'
  },

  // 7. Targeted Solution: Smart Classroom & Education AV
  {
    id: 'solution-smart-classroom-av',
    path: '/solutions/smart-classroom-av',
    title: 'Smart Classroom Solutions & Education AV | AVN Solutions',
    metaTitle: 'Smart Classroom Solutions & Education AV Integration',
    description: 'State-of-the-art smart classroom solutions and education AV in Chennai. Interactive touch displays, hybrid lecture capture, and speech intelligibility systems.',
    canonical: `${SITE_URL}/solutions/smart-classroom-av`,
    priority: 0.90,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'smart classroom solutions',
    secondaryKeywords: [
      'smart classroom AV',
      'smart classroom audio visual solutions',
      'higher education AV integration'
    ],
    searchIntent: 'Commercial',
    h1: 'Smart Classroom Solutions & Education AV Integration',
    schemaType: 'Service',
    breadcrumbName: 'Smart Classrooms'
  },

  // 8. Products: Equipment Supplier
  {
    id: 'products',
    path: '/products',
    title: 'Commercial AV Equipment Supplier Chennai | AV Hardware | AVN',
    metaTitle: 'Commercial Audio Visual Equipment Supplier Chennai',
    description: 'Authorized supplier of commercial LED video displays, 4K laser projectors, beamforming ceiling microphone arrays, and digital audio DSP processors in Chennai.',
    canonical: `${SITE_URL}/products`,
    priority: 0.90,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'AV equipment supplier Chennai',
    secondaryKeywords: [
      'audio visual equipment supplier',
      'LED video wall supplier Chennai',
      'commercial projector supplier Chennai',
      'professional audio systems Chennai'
    ],
    searchIntent: 'Commercial',
    h1: 'Commercial Audio Visual Equipment Supplier in Chennai',
    schemaType: 'Product',
    breadcrumbName: 'Products'
  },

  // 9. Industries
  {
    id: 'industries',
    path: '/industries',
    title: 'Audio Visual Solutions by Industry | Corporate, Education & Healthcare',
    metaTitle: 'Industry-Specific AV Integration Solutions | AVN Chennai',
    description: 'Specialized AV system design for corporate workplaces, universities, healthcare centers, hospitality venues, and luxury residences across Tamil Nadu & India.',
    canonical: `${SITE_URL}/industries`,
    priority: 0.90,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'corporate AV solutions',
    secondaryKeywords: [
      'education AV solutions',
      'healthcare AV integration',
      'hospitality AV systems'
    ],
    searchIntent: 'Commercial',
    h1: 'Industry-Specific Audio Visual Integration Solutions',
    schemaType: 'WebPage',
    breadcrumbName: 'Industries'
  },

  // 10. Brands & Technology Partners
  {
    id: 'brands',
    path: '/brands',
    title: 'Authorized AV Hardware Brands & Technology Partners | AVN Solutions',
    metaTitle: 'Certified AV Hardware Partners & Brands | AVN Solutions Chennai',
    description: 'Authorized integration partner for global AV brands: Crestron, Q-SYS, Extron, Shure, Samsung, LG, Barco, and Sennheiser in Chennai, Tamil Nadu.',
    canonical: `${SITE_URL}/brands`,
    priority: 0.85,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: `${SITE_URL}/logo.png`,
    primaryKeyword: 'Crestron dealer Chennai',
    secondaryKeywords: [
      'Q-SYS integrator Chennai',
      'Shure audio partner Chennai',
      'Samsung commercial display partner'
    ],
    searchIntent: 'Commercial',
    h1: 'Authorized AV Hardware Brands & Global Technology Partners',
    schemaType: 'Organization',
    breadcrumbName: 'Brands'
  },

  // 11. Projects & Case Studies
  {
    id: 'projects',
    path: '/projects',
    title: 'AV Integration Portfolio & Enterprise Case Studies | AVN Solutions',
    metaTitle: 'Enterprise AV Case Studies & Completed Projects Chennai',
    description: 'Explore AVN Solutions completed AV integration case studies: enterprise boardrooms, auditorium acoustics, town halls, and luxury home cinemas in Chennai.',
    canonical: `${SITE_URL}/projects`,
    priority: 0.85,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'AV integration portfolio',
    secondaryKeywords: [
      'boardroom installation case studies',
      'auditorium AV projects',
      'conference room AV installation portfolio'
    ],
    searchIntent: 'Commercial',
    h1: 'Enterprise AV Integration Portfolio & Case Studies',
    schemaType: 'WebPage',
    breadcrumbName: 'Projects'
  },

  // 12. Insights & Technical Articles
  {
    id: 'insights',
    path: '/insights',
    title: 'AV Engineering Insights, Acoustic Guides & Articles | AVN Solutions',
    metaTitle: 'Technical AV Articles, Room Acoustic Guides & Insights',
    description: 'Expert engineering articles and guides on boardroom acoustic RT60 decay, Dante network audio distribution, laser projection vs LED videowalls, and AV automation.',
    canonical: `${SITE_URL}/insights`,
    priority: 0.85,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    primaryKeyword: 'AV engineering guides',
    secondaryKeywords: [
      'room acoustic RT60 calculations',
      'Dante audio network design',
      'LED video wall vs projector comparison'
    ],
    searchIntent: 'Informational',
    h1: 'Audio Visual Engineering Insights & Technical Guides',
    schemaType: 'Article',
    breadcrumbName: 'Insights'
  },

  // 13. Tools & Engineering Calculators
  {
    id: 'tools',
    path: '/tools',
    title: 'Interactive AV Design Tools & Room Calculators | AVN Solutions',
    metaTitle: 'Free Audio Visual Room Calculators & Engineering Tools',
    description: 'Free online AV engineering tools: Screen distance & size calculator, speaker coverage & SPL calculator, and interactive turnkey AV budget estimator.',
    canonical: `${SITE_URL}/tools`,
    priority: 0.80,
    changefreq: 'monthly',
    ogType: 'website',
    ogImage: `${SITE_URL}/logo.png`,
    primaryKeyword: 'AV room calculator',
    secondaryKeywords: [
      'screen viewing distance calculator',
      'speaker SPL coverage calculator',
      'AV budget estimator'
    ],
    searchIntent: 'Informational',
    h1: 'Audio Visual Engineering Calculators & Room Design Tools',
    schemaType: 'WebPage',
    breadcrumbName: 'Tools'
  },

  // 14. About Us
  {
    id: 'about',
    path: '/about',
    title: 'About AVN Solutions | Premier AV System Integrator Chennai',
    metaTitle: 'About AVN Solutions India | AVIXA CTS Certified Integrators',
    description: 'Discover AVN Solutions, Chennai premier AV system integrator with AVIXA CTS-certified engineers, turnkey capabilities, 10+ years expertise, and 250+ delivered projects.',
    canonical: `${SITE_URL}/about`,
    priority: 0.80,
    changefreq: 'monthly',
    ogType: 'website',
    ogImage: `${SITE_URL}/logo.png`,
    primaryKeyword: 'AV integrator Chennai',
    secondaryKeywords: [
      'AV company profile Chennai',
      'AVIXA CTS certified engineers Chennai',
      'turnkey AV integration company'
    ],
    searchIntent: 'Navigational',
    h1: 'About AVN Solutions | Premier AV System Integrator in Chennai',
    schemaType: 'Organization',
    breadcrumbName: 'About Us'
  },

  // 15. Contact Us
  {
    id: 'contact',
    path: '/contact',
    title: 'Contact AVN Solutions | AV Showroom & Experience Center Chennai',
    metaTitle: 'Contact AVN Solutions Chennai | Consultation & Showroom Visit',
    description: 'Contact AVN Solutions at Sholinganallur, Chennai. Book an AV experience center demonstration, request an on-site technical audit, or get a quotation.',
    canonical: `${SITE_URL}/contact`,
    priority: 0.95,
    changefreq: 'monthly',
    ogType: 'website',
    ogImage: `${SITE_URL}/logo.png`,
    primaryKeyword: 'AV company Chennai',
    secondaryKeywords: [
      'AV showroom Chennai',
      'Sholinganallur AV integrator',
      'audio visual quote Chennai'
    ],
    searchIntent: 'Transactional',
    h1: 'Contact Chennai Leading AV Integration Specialists',
    schemaType: 'LocalBusiness',
    breadcrumbName: 'Contact'
  }
];

export const NOT_FOUND_ROUTE: RouteSEOConfig = {
  id: '404',
  path: '/404',
  title: 'Page Not Found (404) | AVN Solutions Chennai',
  metaTitle: '404 - Page Not Found | AVN Solutions',
  description: 'The page you requested could not be found. Explore our audio visual solutions, services, products, or contact our Chennai engineering team.',
  canonical: `${SITE_URL}/404`,
  priority: 0.0,
  changefreq: 'monthly',
  ogType: 'website',
  ogImage: `${SITE_URL}/logo.png`,
  primaryKeyword: '404 page not found',
  secondaryKeywords: [],
  searchIntent: 'Navigational',
  h1: '404 - Page Not Found',
  schemaType: 'WebPage',
  breadcrumbName: 'Not Found'
};

export function getRouteById(id: string): RouteSEOConfig {
  return PUBLIC_ROUTES.find(r => r.id === id) || NOT_FOUND_ROUTE;
}

export function getRouteByPath(pathname: string): RouteSEOConfig {
  // Normalize path: remove trailing slash except for root '/'
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  
  // Exact match
  const found = PUBLIC_ROUTES.find(r => r.path === cleanPath);
  if (found) return found;

  // Handle aliases e.g. /solutions/conference-room-av -> solution-boardroom-av
  if (cleanPath === '/solutions/conference-room-av') {
    return getRouteById('solution-boardroom-av');
  }

  // Handle path without leading slash
  const cleanPathNoSlash = cleanPath.replace(/^\//, '');
  const foundById = PUBLIC_ROUTES.find(r => r.id === cleanPathNoSlash);
  if (foundById) return foundById;

  return NOT_FOUND_ROUTE;
}
