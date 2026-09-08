// Centralized SEO Routes & Metadata Architecture for AVN Solutions (Chennai)

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
  keywords: string;
  schemaType: 'LocalBusiness' | 'Service' | 'Product' | 'WebPage' | 'Article' | 'Organization';
  breadcrumbName: string;
}

export const SITE_URL = 'https://avnsolutions.in';

export const PUBLIC_ROUTES: RouteSEOConfig[] = [
  {
    id: 'home',
    path: '/',
    title: 'AVN Solutions | Audio Visual Equipment Supplier & AV Integrator Chennai',
    metaTitle: 'AVN Solutions | Audio Visual Equipment Supplier & AV Integrator Chennai',
    description: 'Premier Audio Visual Equipment Supplier, AV Integrator & Smart Automation company in Chennai. Turnkey boardroom AV, video walls, acoustic engineering & 24/7 SLA.',
    canonical: `${SITE_URL}/`,
    priority: 1.0,
    changefreq: 'daily',
    ogType: 'website',
    ogImage: `${SITE_URL}/logo.png`,
    keywords: 'Audio Visual Equipment Supplier Chennai, AV integrator Chennai, Audio visual company Chennai, AV solutions Chennai, Boardroom AV, Video wall supplier',
    schemaType: 'LocalBusiness',
    breadcrumbName: 'Home'
  },
  {
    id: 'solutions',
    path: '/solutions',
    title: 'Audio Visual & Smart Space Solutions Chennai | AVN Solutions',
    metaTitle: 'Turnkey Audio Visual Solutions Chennai | Boardrooms & Auditoriums',
    description: 'High-performance AV solutions for corporate boardrooms, video conferencing, auditorium acoustics, commercial LED video walls, and luxury private cinemas.',
    canonical: `${SITE_URL}/solutions`,
    priority: 0.95,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    keywords: 'AV solutions Chennai, Corporate boardroom AV, Video conferencing systems, Auditorium AV design, Commercial LED displays, Smart automation',
    schemaType: 'Service',
    breadcrumbName: 'Solutions'
  },
  {
    id: 'services',
    path: '/services',
    title: 'AV Installation, Acoustic Design & Maintenance Chennai | AVN Solutions',
    metaTitle: 'Professional AV Engineering & Maintenance Services Chennai',
    description: 'Turnkey AV engineering services in Chennai: AutoCAD single-line designs, acoustic RT60 simulations, CTS-certified physical installation, DSP programming & 24/7 SLA.',
    canonical: `${SITE_URL}/services`,
    priority: 0.95,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    keywords: 'AV installation Chennai, Audio visual system maintenance, Acoustic design Chennai, Crestron programming, AV annual maintenance contract',
    schemaType: 'Service',
    breadcrumbName: 'Services'
  },
  {
    id: 'products',
    path: '/products',
    title: 'Commercial AV Equipment & Hardware Catalog Chennai | AVN Solutions',
    metaTitle: 'Commercial Audio Visual Equipment Supplier Chennai | AV Hardware',
    description: 'Authorized supplier of commercial LED video displays, 4K laser projectors, beamforming ceiling microphone arrays, and digital audio DSP processors in Chennai.',
    canonical: `${SITE_URL}/products`,
    priority: 0.90,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    keywords: 'AV equipment supplier Chennai, LED video wall Chennai, 4K commercial projector, Beamforming microphone array, Digital DSP processor',
    schemaType: 'Product',
    breadcrumbName: 'Products'
  },
  {
    id: 'industries',
    path: '/industries',
    title: 'AV Solutions by Industry | Corporate, Education & Healthcare AVN',
    metaTitle: 'Industry-Specific AV Integration Solutions | AVN Chennai',
    description: 'Specialized AV system design for corporate workplaces, universities, healthcare centers, hospitality venues, and luxury residences across Tamil Nadu & India.',
    canonical: `${SITE_URL}/industries`,
    priority: 0.90,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    keywords: 'Corporate AV Chennai, Higher education smart classrooms, Healthcare telemedicine AV, Hospitality digital displays',
    schemaType: 'WebPage',
    breadcrumbName: 'Industries'
  },
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
    keywords: 'Crestron dealer Chennai, Q-SYS integrator Chennai, Shure audio partner, Samsung commercial display, Extron control systems',
    schemaType: 'Organization',
    breadcrumbName: 'Brands'
  },
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
    keywords: 'AV case studies Chennai, Conference room installation portfolio, Auditorium acoustic projects, Home theatre installation Chennai',
    schemaType: 'WebPage',
    breadcrumbName: 'Projects'
  },
  {
    id: 'insights',
    path: '/insights',
    title: 'AV Engineering Insights & Technical Guides | AVN Solutions',
    metaTitle: 'Technical AV Articles, Room Acoustic Guides & Insights',
    description: 'Expert engineering articles and guides on boardroom acoustic RT60 decay, Dante network audio distribution, laser projection vs LED videowalls, and AV automation.',
    canonical: `${SITE_URL}/insights`,
    priority: 0.85,
    changefreq: 'weekly',
    ogType: 'website',
    ogImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    keywords: 'Acoustic RT60 calculation, Dante audio distribution guide, LED wall vs projector guide, Boardroom AV design checklist',
    schemaType: 'Article',
    breadcrumbName: 'Insights'
  },
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
    keywords: 'AV room calculator, Screen viewing distance calculator, Speaker coverage calculator, AV budget estimator Chennai',
    schemaType: 'WebPage',
    breadcrumbName: 'Tools'
  },
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
    keywords: 'About AVN Solutions, AV company profile Chennai, AVIXA CTS certified engineers, AV integrator team Tamil Nadu',
    schemaType: 'Organization',
    breadcrumbName: 'About Us'
  },
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
    keywords: 'Contact AVN Solutions, AV showroom Chennai, Sholinganallur AV integrator, Audio visual quote Chennai',
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
  keywords: '404, Page Not Found',
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

  // Handle path without leading slash
  const cleanPathNoSlash = cleanPath.replace(/^\//, '');
  const foundById = PUBLIC_ROUTES.find(r => r.id === cleanPathNoSlash);
  if (foundById) return foundById;

  return NOT_FOUND_ROUTE;
}
