import type { IndustryItem } from '../types';

export const industriesData: IndustryItem[] = [
  {
    id: 'corporate',
    number: '01',
    name: 'Corporate & Enterprise',
    tagline: 'Smarter Workplaces. Better Collaboration.',
    description: 'Create connected workplaces with seamless collaboration, video conferencing, fine-pitch LED display canvases, and automated environmental controls designed around hybrid productivity.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Boardrooms',
      'Conference Rooms',
      'Meeting Rooms',
      'Training Rooms',
      'Executive Offices',
      'Experience Centres'
    ],
    recommendedSolutions: [
      'Corporate AV',
      'Video Conferencing (MTR / Zoom)',
      'Digital Signage',
      'Smart Automation',
      'Professional Audio'
    ],
    impactMetric: '40% faster meeting starts & 99.9% hybrid conference uptime',
    ctaText: 'Explore Corporate Solutions'
  },
  {
    id: 'education',
    number: '02',
    name: 'Education & Universities',
    tagline: 'Interactive Learning. Immersive Classrooms.',
    description: 'Empower modern educators and students with active learning environments, hybrid lecture capture, interactive displays, and high-intelligibility auditorium acoustics.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Tiered Lecture Theatres',
      'Smart Classrooms',
      'University Auditoriums',
      'Simulation & AR/VR Labs',
      'Faculty Collaboration Rooms',
      'Campus Broadcasting Studios'
    ],
    recommendedSolutions: [
      'Auditorium & Large Venue AV',
      'Interactive Displays & Touchboards',
      'Hybrid Lecture Capture & Streaming',
      'Acoustic Solutions',
      'Campus Public Address (PA)'
    ],
    impactMetric: '100% speech intelligibility across all classroom seats',
    ctaText: 'Explore Education AV'
  },
  {
    id: 'healthcare',
    number: '03',
    name: 'Healthcare & Medical',
    tagline: 'Critical Clarity. Telemedicine Precision.',
    description: 'Medical-grade visual systems, integrated operating room video routing, telemedicine conference suites, and hospital patient information networks engineered for absolute reliability.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Integrated Operating Theatres (OT)',
      'Telemedicine Suites',
      'Medical Seminar Halls',
      'Hospital Lobby Information Networks',
      'Doctor Consultation Lounges',
      'Simulation Training Centers'
    ],
    recommendedSolutions: [
      'Zero-Latency 4K Video Routing (SDVoE)',
      'Telemedicine Conferencing',
      'Digital Patient Signage & Queue Displays',
      'Acoustic Privacy & Sound Masking',
      'Centralized Emergency Paging'
    ],
    impactMetric: 'DICOM Part 14 calibrated imaging with sub-frame transmission',
    ctaText: 'Explore Healthcare AV'
  },
  {
    id: 'hospitality',
    number: '04',
    name: 'Hospitality & Hotels',
    tagline: 'Guest Immersion. Atmosphere Engineering.',
    description: 'Deliver unforgettable guest experiences with divisible banquet ballroom audio-visuals, curated background music zones, architectural lighting scenes, and outdoor weather-resistant entertainment.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Grand Banquet Ballrooms',
      'Fine Dining Restaurants & Bars',
      'Hotel Lobbies & Atriums',
      'Rooftop Lounges & Pool Decks',
      'Executive Club Meeting Suites',
      'Spa & Wellness Audio Zones'
    ],
    recommendedSolutions: [
      'Hospitality Multi-Zone AV',
      'Ballroom Auto-Partition Combining',
      'Architectural Scene Lighting',
      'IP65 Outdoor Weatherproof Audio',
      'Digital Concierge & Signage'
    ],
    impactMetric: 'Effortless iPad control over 50+ music and lighting zones',
    ctaText: 'Explore Hospitality AV'
  },
  {
    id: 'retail',
    number: '05',
    name: 'Retail & Commercial Showrooms',
    tagline: 'Captivate Shoppers. Elevate Brand Presence.',
    description: 'Transform brick-and-mortar retail with ultra-bright storefront window displays, fine-pitch LED video walls, interactive product kiosks, and high-fidelity zoned soundscapes.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Flagship Brand Stores',
      'Automotive Experience Centers',
      'Shopping Mall Atriums',
      'Storefront Window Showcases',
      'Interactive Product Demonstration Bays',
      'Fitting Room Smart Mirrors'
    ],
    recommendedSolutions: [
      'High-Brightness Digital Signage (3,500 Nits)',
      'Direct-View Curved LED Video Walls',
      'Interactive Touch Kiosks',
      'Background Sound Reinforcement',
      'Centralized Cloud Content CMS'
    ],
    impactMetric: 'Up to 3x increase in footfall engagement and dwell time',
    ctaText: 'Explore Retail AV'
  },
  {
    id: 'government',
    number: '06',
    name: 'Government & Defense',
    tagline: 'Mission-Critical Reliability. Secure Operations.',
    description: 'High-security command centers, legislative chambers, civic townhalls, and emergency response rooms built with encrypted AV networks, redundant signal matrices, and intuitive delegate audio systems.',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Legislative Assembly Chambers',
      'Emergency Operations Centers (EOC)',
      'Security Operations Centers (SOC)',
      'Courtrooms & Video Arraignment',
      'Civic Briefing Auditoriums',
      'Defense Situation Rooms'
    ],
    recommendedSolutions: [
      'Control Room 24/7 Video Walls',
      'Delegate Conference Microphone Systems',
      'Hardware-Encrypted AV-over-IP',
      'Simultaneous Multi-Language Interpretation',
      'Dual-Redundant Power & Control Architecture'
    ],
    impactMetric: '99.999% high-availability mission-critical operations',
    ctaText: 'Explore Government AV'
  },
  {
    id: 'residential',
    number: '07',
    name: 'Luxury Residential',
    tagline: 'Private Cinemas. Smart Living Refined.',
    description: 'Private home cinemas, whole-home multi-room high-resolution audio, architectural circadian lighting, motorized shades, and centralized smart home automation engineered for discerning homeowners.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Dedicated Dolby Atmos Private Theatres',
      'Living Room Media Walls & Hidden AV',
      'Whole-Home Distributed Hi-Fi Audio',
      'Outdoor Patio & Landscape Audio',
      'Smart Master Bedroom Automation',
      'Private Wine Cellars & Lounges'
    ],
    recommendedSolutions: [
      'Home Cinema Design & Acoustic Isolation',
      'Native 4K Laser Projection Systems',
      'Architectural In-Wall Invisible Speakers',
      'Centralized Lighting & Shading Automation',
      'Whole-Home High-Res Streaming'
    ],
    impactMetric: 'THX & ISF reference-level cinematic performance at home',
    ctaText: 'Explore Residential AV'
  },
  {
    id: 'entertainment',
    number: '08',
    name: 'Entertainment & Large Venues',
    tagline: 'High-Impact Production. Immense Dynamic Range.',
    description: 'Performing arts centers, concert halls, arena sound systems, and nightclub staging engineered with touring-grade line arrays, intelligent stage lighting, and synchronized 4K video mapping.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Performing Arts Theatres',
      'Concert Venues & Clubs',
      'Stadium & Arena Sound Zones',
      'Immersive Theme Parks',
      'Broadcast Production Stages'
    ],
    recommendedSolutions: [
      'High-SPL Line Array Systems',
      'Stage DMX Automated Lighting Trusses',
      '4K Multi-Projector Laser Edge Blending',
      'Live Digital Audio Mixing Consoles',
      'Broadcast 12G-SDI Video Switching'
    ],
    impactMetric: '110 dB clean continuous SPL with < 0.05% THD',
    ctaText: 'Explore Entertainment AV'
  },
  {
    id: 'worship',
    number: '09',
    name: 'Places of Worship',
    tagline: 'Crystal Clear Sermons. Inspiring Acoustics.',
    description: 'Acoustic treatment and steerable line-array column loudspeakers engineered specifically for reverberant stone and marble sanctuaries, ensuring every word and musical note is clearly understood.',
    image: 'https://images.unsplash.com/photo-1548625361-195feee10fce?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Sanctuaries & Prayer Halls',
      'Temple & Mosque Courtyards',
      'Choir & Altar Sound Zones',
      'Multi-Language Translation Rooms',
      'Overflow Video Streaming Halls'
    ],
    recommendedSolutions: [
      'Digitally Steerable Column Loudspeakers',
      'Sanctuary EASE Acoustic Simulation & Damping',
      'Wireless Multi-Mic Feedback Elimination',
      'Live Streaming & 4K PTZ Camera Broadcast',
      'Multi-Zone Outdoor Weatherproof Paging'
    ],
    impactMetric: 'STI speech score improved from 0.42 to 0.74 in high-echo halls',
    ctaText: 'Explore Worship AV'
  },
  {
    id: 'commercial',
    number: '10',
    name: 'Commercial Real Estate & Mixed-Use',
    tagline: 'Future-Proof Buildings. Intelligent Infrastructure.',
    description: 'Enterprise building tenant amenities, town hall event spaces, digital facade lighting, parking wayfinding, and integrated building management system (BMS) audio visual infrastructure.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    typicalSpaces: [
      'Commercial Tech Park Atriums',
      'Tenant Shared Townhalls',
      'Building Facades & Media Architecture',
      'Executive Briefing Centers',
      'Cafeterias & Fitness Amenity Zones'
    ],
    recommendedSolutions: [
      'Large Format Atrium LED Canvases',
      'Multi-Tenant Sound & Announcement Distribution',
      'Interactive Digital Directory Kiosks',
      'BMS BACnet / Modbus Automation Gateway',
      'Architectural Facade Lighting Control'
    ],
    impactMetric: 'Scalable campus-wide IP distribution across 10+ towers',
    ctaText: 'Explore Commercial Real Estate AV'
  }
];
