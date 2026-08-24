import type { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'corporate',
    name: 'Corporate & Enterprise',
    tagline: 'High-performance boardrooms and frictionless hybrid workspaces.',
    description: 'We equip Fortune 500 headquarters and modern technology enterprises with certified Microsoft Teams/Zoom rooms, multi-participant video walls, and automated executive boardrooms.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    solutions: ['Executive Boardrooms', 'Video Conferencing', 'Fine-pitch LED Walls', 'Room Automation', 'Ceiling Beamforming Audio', 'All-Hands Townhall Spaces'],
    keyEnvironments: ['Executive Boardrooms', 'Huddle Rooms', 'Townhall Auditoriums', 'Client Briefing Centers'],
    impactMetric: '99.98% Meeting Uptime & Zero Setup Friction'
  },
  {
    id: 'education',
    name: 'Education & Universities',
    tagline: 'Smart classrooms and broadcast-ready hybrid lecture halls.',
    description: 'Empowering institutions with interactive flat panels, automated lecture capture, multi-zone classroom audio amplification, and campus-wide AV streaming networks.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    solutions: ['Smart Classrooms', 'Tiered Lecture Halls', 'Campus Digital Signage', 'Automated Lecture Capture & Streaming', 'Interactive Multi-touch Panels'],
    keyEnvironments: ['Tiered Lecture Halls', 'Collaborative Learning Labs', 'Campus Auditoriums', 'Distance Education Studios'],
    impactMetric: '100% Student Voice & Visual Clarity'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Venues',
    tagline: 'Immersive soundscapes and architectural visual statements.',
    description: 'Transforming luxury hotels, rooftop lounges, banquet halls, and convention centers with multi-zone distributed audio, atmospheric architectural lighting, and video walls.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    solutions: ['Grand Ballroom Audio & Projection', 'Multi-Zone BGM Systems', 'Outdoor Weatherproof Sound', 'Architectural Mood Lighting', 'Digital Concierge Signage'],
    keyEnvironments: ['Grand Ballrooms', 'Luxury Lounges & Spas', 'Convention Centers', 'Poolside & Outdoor Terraces'],
    impactMetric: 'Dynamic Multi-zone Ambience with Intuitive Master Control'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Simulation',
    tagline: 'Ultra-low latency medical displays and surgical streaming.',
    description: 'Delivering medical-grade 4K visualization for operating suites, telemedicine consultation rooms, multidisciplinary team review theaters, and hospital auditoriums.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
    solutions: ['Surgical Video Routing', 'Telemedicine Conferencing', 'Medical Grade 4K Displays', 'Auditorium Case Review AV', 'Patient Info Signage'],
    keyEnvironments: ['Surgical Suites', 'MDT Conference Rooms', 'Hospital Command Hubs', 'Simulation Training Labs'],
    impactMetric: 'Zero-compression 4K60 Medical Video Transport'
  },
  {
    id: 'government',
    name: 'Government & NOCs',
    tagline: 'Mission-critical command rooms and secure council chambers.',
    description: 'Designing high-security council chambers, emergency operations centers (EOC), and 24/7 Network Operations Centers with redundant hardware and multi-source windowing.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    solutions: ['24/7 Mission Critical Video Walls', 'Secure Council Chambers', 'Simultaneous Interpretation', 'Hardware Multi-viewers', 'Redundant Failover Systems'],
    keyEnvironments: ['EOC Emergency Command Centers', 'City Surveillance NOCs', 'Legislative Council Chambers', 'Secure Briefing Rooms'],
    impactMetric: '24/7/365 Continuous Operation with Hot-swap Redundancy'
  },
  {
    id: 'auditoriums',
    name: 'Auditoriums & Performing Arts',
    tagline: 'Acoustic mastery and theatrical visual brilliance.',
    description: 'Full-scope acoustic treatment modeling, precision line-array speaker systems, stage lighting rigs, digital mixing consoles, and massive stage LED backdrops.',
    image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1600&q=80',
    solutions: ['Concert-Grade Line Arrays', 'Motorized Theatrical Lighting Rigs', 'Stage LED Backdrops', 'Digital Mixing Consoles & Dante Network', 'Acoustic Wall Paneling'],
    keyEnvironments: ['Performing Arts Theaters', 'Corporate Auditoriums', 'Civic Cultural Centers', 'Amphitheaters'],
    impactMetric: 'STI ≥ 0.72 Across 1,500+ Seat Capacities'
  },
  {
    id: 'worship',
    name: 'Places of Worship',
    tagline: 'Reverent acoustic clarity and live broadcast reach.',
    description: 'Solving complex reverberant sanctuaries with steerable column arrays, discrete microphone arrangements, live multi-camera broadcast capture, and visual lyric displays.',
    image: 'https://images.unsplash.com/photo-1548625361-16a75f973149?auto=format&fit=crop&w=1600&q=80',
    solutions: ['Digitally Steerable Column Speakers', 'Live Multi-Camera Streaming', 'Sanctuary LED Screens', 'Wireless Mic Ecosystems', 'Acoustic Reflection Treatment'],
    keyEnvironments: ['Main Prayer Halls', 'Broadcast Control Rooms', 'Overflow Rooms', 'Outdoor Courtyards'],
    impactMetric: 'Crystal Clear Speech Intelligibility in High-Reverb Architecture'
  },
  {
    id: 'retail',
    name: 'Retail & Experience Centers',
    tagline: 'Interactive sensory shopping and brand architecture.',
    description: 'Transforming retail flagships into captivating brand worlds with curved LED walls, directional audio spotlights, touch interactive kiosks, and centralized digital signage.',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80',
    solutions: ['Curved Architectural LED Displays', 'Directional Hyper-focused Audio', 'Interactive Touch Kiosks', 'Cloud Signage Management', 'Sensor-Triggered Media'],
    keyEnvironments: ['Flagship Retail Stores', 'Automotive Showrooms', 'Museums & Pavilions', 'Brand Experience Lounges'],
    impactMetric: '300% Higher Dwell Time & Customer Engagement'
  }
];
