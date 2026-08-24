import type { CompanyStat, TimelineMilestone } from '../types';

export const companyDetails = {
  name: 'AVN Solutions',
  tagline: 'Engineering Experiences',
  secondaryTagline: 'From Sound → Vision → Intelligence',
  description: 'AVN Solutions is a premier Audio Visual technology and system integration enterprise headquartered in Chennai, Tamil Nadu. We specialize in engineering intelligent boardrooms, auditorium acoustics, fine-pitch LED video walls, hybrid collaboration, and unified automation systems.',
  address: {
    street: '10, MGR Rd, Ezhil Nagar, Ganesh Nagar',
    area: 'Sholinganallur',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600119',
    country: 'India',
    fullAddress: '10, MGR Rd, Ezhil Nagar, Ganesh Nagar, Sholinganallur, Chennai, Tamil Nadu 600119, India'
  },
  phone: '044 2450 1688',
  phoneInternational: '+91 44 2450 1688',
  email: 'contact@avnsolutions.in',
  hours: 'Monday – Saturday: 9:30 AM – 6:30 PM',
  mapUrl: 'https://maps.google.com/?q=AVN+Solutions+Sholinganallur+Chennai'
};

export const companyStats: CompanyStat[] = [
  {
    value: 1500,
    suffix: '+',
    label: 'Spaces Engineered',
    description: 'Corporate boardrooms, auditoriums, lecture halls, and luxury venues across India.'
  },
  {
    value: 99,
    suffix: '.8%',
    label: 'Uptime Reliability',
    description: 'Enterprise SLA support and continuous telemetry diagnostics.'
  },
  {
    value: 50,
    suffix: '+',
    label: 'Certified AV Engineers',
    description: 'CTS, CTS-D, CTS-I, Q-SYS, Crestron, and Dante Level 3 certified specialists.'
  },
  {
    value: 360,
    suffix: '°',
    label: 'Full Lifecycle Integration',
    description: 'From acoustic CAD modeling to hardware integration, commissioning & 24/7 support.'
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    year: 'Genesis',
    title: 'Foundations of AV Precision',
    description: 'Established in Chennai as a specialized professional audio and visual technology supplier, delivering acoustic solutions for auditoriums and corporate spaces.'
  },
  {
    year: 'Expansion',
    title: 'Digital Convergence & Unified Collaboration',
    description: 'Expanded integration capabilities into enterprise video conferencing, networked DSPs, and custom boardroom automation systems across South India.'
  },
  {
    year: 'Innovation',
    title: 'Direct-View LED & AV-over-IP Architecture',
    description: 'Pioneered seamless fine-pitch MicroLED video walls, 10G SDVoE network video routing, and AI-powered meeting room intelligence.'
  },
  {
    year: 'Present & Beyond',
    title: 'Engineering Intelligent Experiences',
    description: 'Delivering end-to-end turnkey AV infrastructure for multinational corporations, universities, luxury hotels, and mission-critical operations centers nationwide.'
  }
];

export const processSteps = [
  {
    step: '01',
    name: 'DISCOVER',
    subtitle: 'Acoustic & Spatial Audit',
    description: 'We perform on-site 3D spatial scanning, RT60 acoustic measurements, ambient lux analysis, and workflow consultation with stakeholders.'
  },
  {
    step: '02',
    name: 'DESIGN',
    subtitle: 'CAD Blueprint & Acoustic Simulation',
    description: 'Our certified engineers develop precision EASE acoustic models, single-line schematics, equipment rack elevations, and heat-dissipation blueprints.'
  },
  {
    step: '03',
    name: 'ENGINEER',
    subtitle: 'Custom Software & UI Programming',
    description: 'Custom automation firmware programming, DSP gain structure calibration, video matrix configuration, and user-friendly touch panel UI development.'
  },
  {
    step: '04',
    name: 'INSTALL',
    subtitle: 'Architectural Hardware Mounting',
    description: 'Structural ceiling rigging, vibration-isolated acoustic mounting, direct-view LED alignment, and clean structured cabling runs.'
  },
  {
    step: '05',
    name: 'INTEGRATE',
    subtitle: 'End-to-End System Commissioning',
    description: 'Digital audio tuning, pink noise frequency calibration, video EDID alignment, camera tracking zones, and network security hardening.'
  },
  {
    step: '06',
    name: 'TRAIN',
    subtitle: 'Operational Team Enablement',
    description: 'Hands-on operator training, executive walkthroughs, comprehensive as-built documentation, and video tutorials for seamless adoption.'
  },
  {
    step: '07',
    name: 'SUPPORT',
    subtitle: 'Proactive Telemetry & 24/7 SLA',
    description: 'Round-the-clock remote system diagnostics, preventative maintenance schedules, and rapid on-site emergency response.'
  }
];
