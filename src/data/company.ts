// Comprehensive AVN Solutions Company & Verification Data
export interface CompanyData {
  name: string;
  legalName: string;
  descriptor: string;
  tagline: string;
  subTagline: string;
  trustStatement: string;
  experienceYears: string;
  projectsCount: string;
  partnersCount: string;
  industrySegmentsCount: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  mapUrl: string;
  phone: {
    display: string;
    tel: string;
    mobile: string;
  };
  email: {
    general: string;
    projects: string;
    support: string;
  };
  whatsapp: {
    number: string;
    prefillMessage: string;
  };
  businessHours: {
    weekdays: string;
    emergency: string;
  };
  certifications: string[];
}

export const companyDetails: CompanyData = {
  name: 'AVN Solutions',
  legalName: 'AVN Solutions India Private Limited',
  descriptor: 'AV • AUTOMATION • INTEGRATION',
  tagline: 'Engineering Better Experiences Through Audio & Visual Technology.',
  subTagline: 'Professional AV solutions designed, integrated and installed for spaces that need to perform.',
  trustStatement: 'Chennai • Tamil Nadu • Serving Businesses, Institutions & Homes',
  experienceYears: '10+',
  projectsCount: '250+',
  partnersCount: '50+',
  industrySegmentsCount: '7+',
  address: {
    line1: '10, MGR Rd, Ezhil Nagar, Ganesh Nagar',
    area: 'Sholinganallur (OMR IT Corridor)',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600119',
    landmark: 'Near Dollar Bus Stop / OMR IT Hub',
    coordinates: {
      lat: 12.9010,
      lng: 80.2279
    }
  },
  mapUrl: 'https://maps.google.com/?q=AVN+Solutions+Sholinganallur+Chennai',
  phone: {
    display: '044 2450 1688',
    tel: '+914424501688',
    mobile: '+919840123890'
  },
  email: {
    general: 'contact@avnsolutions.in',
    projects: 'projects@avnsolutions.in',
    support: 'support@avnsolutions.in'
  },
  whatsapp: {
    number: '+919840123890',
    prefillMessage: 'Hello AVN Solutions, I would like to discuss an Audio Visual project in Chennai.'
  },
  businessHours: {
    weekdays: 'Monday – Saturday: 9:30 AM – 6:30 PM',
    emergency: '24/7 Remote Monitoring & Priority SLA Dispatch'
  },
  certifications: [
    'AVIXA Certified CTS-D (Design)',
    'AVIXA Certified CTS-I (Installation)',
    'Crestron Masters Certified Programmer',
    'Dante Level 3 Certified (Audinate)',
    'Q-SYS Certified Architect Level 2',
    'ISF Level III Certified Calibrator',
    'THX Certified Home Theater Professional'
  ]
};

export const quickStatsData = [
  { value: 10, suffix: '+', label: 'Years of Experience', description: 'Continuous commercial AV and automation integration across India' },
  { value: 250, suffix: '+', label: 'Projects Completed', description: 'Turnkey boardrooms, auditoriums, NOCs, and home cinemas delivered' },
  { value: 50, suffix: '+', label: 'Technology Partners', description: 'Direct authorized relationships with global tier-1 manufacturers' },
  { value: 7, suffix: '+', label: 'Industry Verticals', description: 'Corporate, Education, Healthcare, Hospitality, Retail, Government & Residential' }
];

export const companyStats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Completed', value: '250+' },
  { label: 'Technology Partners', value: '50+' },
  { label: 'Industry Verticals', value: '7+' }
];

export const timelineMilestones = [
  {
    year: '2014',
    title: 'Founding & Precision Pro-Audio',
    description: 'Incepted in Chennai with an engineering focus on commercial sound reinforcement and acoustic ray-tracing.'
  },
  {
    year: '2017',
    title: 'Direct OEM Network Expansion',
    description: 'Secured premier direct integrator tiers with Crestron, Shure, Samsung, and Extron for South India enterprise contracts.'
  },
  {
    year: '2020',
    title: 'Enterprise Hybrid & AV-over-IP',
    description: 'Pioneered zero-latency 10G SDVoE and Dante IP deployments for major tech campuses in OMR Chennai and Bangalore.'
  },
  {
    year: '2023',
    title: 'Experience Center & Sholinganallur Lab',
    description: 'Launched active direct-view MicroLED testbench, THX-certified Dolby Atmos suite, and 24/7 SLA telemetry desk.'
  },
  {
    year: '2026',
    title: 'Comprehensive AV Platform & AI Integration',
    description: 'Delivering end-to-end smart room orchestration with AI speaker auto-framing and cloud fleet management.'
  }
];

export const processSteps = [
  { number: '01', title: 'Consultation & Site Survey', description: 'Comprehensive spatial, acoustic, and lux-level site measurement in Chennai.' },
  { number: '02', title: 'Acoustic & AV System Design', description: 'AutoCAD schematics, cable pull schedules, EASE 3D sound modeling, and visual sightline calculations.' },
  { number: '03', title: 'Hardware Selection & Supply', description: 'Brand-agnostic hardware specification and procurement directly from authorized global OEMs.' },
  { number: '04', title: 'Installation & Commissioning', description: 'AVIXA CTS-certified physical deployment, cable dressing, laser calibration, and Crestron programming.' },
  { number: '05', title: 'Training & AMC Maintenance', description: 'Comprehensive staff handoff documentation and guaranteed 24/7 emergency SLA support.' }
];
