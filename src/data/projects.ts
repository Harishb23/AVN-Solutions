import type { ProjectItem, FeaturedCaseStudyData } from '../types';

export const featuredCaseStudy: FeaturedCaseStudyData = {
  title: 'Transforming an Executive Boardroom Into a Connected Collaboration Space',
  client: 'Global Automotive Headquarters',
  location: 'Chennai, Tamil Nadu',
  beforeImage: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=80',
  afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  requirements: [
    'Replace aging projector and cluttered tabletop cabling with a modern display canvas',
    'Ensure 100% voice clarity for 24 boardroom participants during hybrid video conferences',
    'Implement one-touch meeting automation with integrated DALI lighting and motorized shades',
    'Enable enterprise wireless presentation with BYOM multi-device support'
  ],
  technologies: [
    'Samsung 0.9mm Fine-Pitch MicroLED Display (165" 4K HDR)',
    'Shure MXA920 Ceiling Beamforming Microphone Arrays (Dual Array)',
    'Q-SYS Core 110f DSP Processor with IntelliMix Echo Cancellation',
    'Logitech Rally Ultra-HD PTZ Camera with DirectorAI tracking',
    'Crestron 4-Series Core Automation & TSW-1070 Touch Panel',
    'Barco ClickShare CX-50 Gen 2 Wireless BYOM System'
  ],
  challenges: 'The room had floor-to-ceiling glass walls causing severe flutter echo (RT60 > 1.2s) and high ambient daylight making previous projection systems washed out and difficult to read.',
  solution: 'We engineered custom acoustic wall paneling with micro-perforated wood veneer, installed a 1,000-nit high-brightness MicroLED display wall, and deployed steerable ceiling microphone lobes tuned with EASE modeling.',
  result: 'The executive board now starts global hybrid meetings in under 15 seconds with crystal-clear 360° audio pickup, zero visible tabletop clutter, and seamless automated lighting scenes.',
  metrics: [
    { label: 'Display Acuity', value: '4K Collaboration (0.9mm MicroLED)' },
    { label: 'Audio Pickup', value: '360° Seamless Coverage (STI 0.82)' },
    { label: 'Room Automation', value: 'One-Touch Unified Control (< 200ms)' },
    { label: 'Meeting Setup Time', value: 'Reduced from 8 Mins to 15 Secs' }
  ]
};

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-omr-boardroom',
    number: '01',
    title: 'Executive Global Boardroom',
    clientType: 'Fortune 500 Automotive HQ',
    location: 'Chennai, Tamil Nadu',
    industry: 'Corporate',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Turnkey 24-seater executive boardroom with 0.9mm MicroLED canvas, dual beamforming ceiling microphones, and Crestron automated lighting and curtains.',
    challenge: 'Severe glass reflection acoustics and washed-out legacy projection in a sunlit executive room.',
    solution: 'Engineered micro-perforated acoustic timber paneling, 1000-nit direct-view LED wall, and Dante networked DSP audio.',
    technologiesUsed: [
      '0.9mm MicroLED Display',
      'Shure MXA920 Ceiling Mics',
      'Crestron 4-Series Automation',
      'Barco ClickShare CX-50'
    ],
    results: [
      'Zero visible tabletop wire clutter',
      'STI speech intelligibility increased to 0.82',
      'One-touch start for MS Teams & Zoom'
    ],
    completionYear: '2025',
    metrics: [
      { label: 'Resolution', value: '8K Direct-View' },
      { label: 'Audio STI', value: '0.82 Optimal' },
      { label: 'Setup Time', value: '< 15 Seconds' }
    ]
  },
  {
    id: 'proj-univ-auditorium',
    number: '02',
    title: '1,200-Seat University Plenary Hall',
    clientType: 'Premier Institute of Technology',
    location: 'Chennai, Tamil Nadu',
    industry: 'Auditorium',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    summary: 'Large-scale auditorium sound reinforcement, multi-projector 4K laser blending, stage DMX automated lighting, and broadcast PTZ streaming.',
    challenge: 'Reverberant hall with uneven SPL distribution where rear balcony seats struggled with speech clarity.',
    solution: 'Deployed dual Bose Panaray line array columns with digital delay fills and 25,000 lumen Panasonic 4K laser edge-blended projection.',
    technologiesUsed: [
      'Bose Modular Line Arrays',
      'Panasonic 4K Laser Projection (Dual Blend)',
      'Q-SYS Core DSP Network',
      'Broadcast 4K PTZ Cameras'
    ],
    results: [
      'Uniform ±1.5dB sound pressure from front row to rear balcony',
      'Dual-language real-time wireless audio translation for international summits',
      'Seamless multi-angle live YouTube & Zoom broadcast'
    ],
    completionYear: '2025',
    metrics: [
      { label: 'Capacity', value: '1,200 Seats' },
      { label: 'Sound Coverage', value: '± 1.5 dB Uniform' },
      { label: 'Projection', value: '50,000 Lumens Blended' }
    ]
  },
  {
    id: 'proj-med-operating-theatre',
    number: '03',
    title: 'Integrated Digital Surgery & Telehealth Suite',
    clientType: 'Super-Speciality Hospital',
    location: 'Chennai, Tamil Nadu',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Zero-latency 4K uncompressed medical video matrixing, surgical camera feeds, and real-time remote specialist tele-consultation.',
    challenge: 'Need for sub-frame video transmission (< 1ms) so surgeons could operate with precision via digital endoscopic display monitors.',
    solution: 'Designed 10G SDVoE AV-over-IP fiber distribution routing uncompressed 4K60 4:4:4 medical video to sterile surgical booms and conference auditoriums.',
    technologiesUsed: [
      '10G SDVoE Zero-Latency AV-over-IP',
      'Medical Grade 4K Displays',
      'Surgical PTZ Ingestion Hubs',
      'Encrypted Tele-Surgical Bridge'
    ],
    results: [
      '0.04ms glass-to-glass surgical video transmission',
      'Live HD broadcast to auditorium for medical student observation',
      'HIPAA / ISO 27001 data compliance'
    ],
    completionYear: '2024',
    metrics: [
      { label: 'Transmission', value: '0.04ms Latency' },
      { label: 'Video Quality', value: '4K60 4:4:4 Uncompressed' },
      { label: 'Uptime', value: '99.999% SLA' }
    ]
  },
  {
    id: 'proj-luxury-hotel-ballroom',
    number: '04',
    title: '5-Star Luxury Resort Banquet & Audio Zones',
    clientType: 'Luxury Hospitality Group',
    location: 'Chennai, Tamil Nadu',
    industry: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    summary: 'Divisible grand ballroom with automated partition sensing, multi-zone architectural soundscape, and IP65 coastal weatherproof poolside audio.',
    challenge: 'Fast room turnarounds between weddings and corporate conferences requiring instant partitioning of audio and video sources.',
    solution: 'Installed automated relay-sensing partition controllers that split or combine DSP audio matrices in real time via staff iPads.',
    technologiesUsed: [
      'Dante Multi-Zone Network Amps',
      'Architectural In-Ceiling Array Speakers',
      'IP65 Outdoor Marine Speakers',
      'Custom iPad Staff UI App'
    ],
    results: [
      'Instant 3-way ballroom audio/visual partition splitting',
      'Resilient outdoor audio surviving coastal Chennai humidity and salt air',
      'Centralized cloud management across 42 zones'
    ],
    completionYear: '2024',
    metrics: [
      { label: 'Audio Zones', value: '42 Independent Zones' },
      { label: 'Partition Logic', value: 'Automated Sensor Trigger' },
      { label: 'Weatherproofing', value: 'IP65 Coastal Grade' }
    ]
  },
  {
    id: 'proj-smart-private-cinema',
    number: '05',
    title: 'Dolby Atmos 9.4.6 Private Home Cinema',
    clientType: 'Ultra-HNW Residence',
    location: 'Chennai, Tamil Nadu',
    industry: 'Residential',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    summary: 'Bespoke 12-seat private theatre with native 4K laser projection, 180" woven acoustically transparent screen, and Trinnov 3D audio calibration.',
    challenge: 'Preventing heavy bass vibrations from disturbing adjacent bedrooms while maintaining THX reference sound pressure levels.',
    solution: 'Constructed isolated room-within-a-room drywall with green glue damping, decoupled floating floor, and fabric-wrapped bass traps.',
    technologiesUsed: [
      'Sony Native 4K Laser Cinema Projector',
      'Trinnov Altitude 16 Processor',
      'KEF Ci-Reference In-Wall Speakers (9.4.6)',
      'Lutron Starlight & Scene Automation'
    ],
    results: [
      'ISF calibrated reference color with 100% DCI-P3 gamut',
      'Zero acoustic leakage to adjacent master bedroom suite',
      'One-touch iPad cinema automation'
    ],
    completionYear: '2025',
    metrics: [
      { label: 'Audio Layout', value: '9.4.6 Dolby Atmos' },
      { label: 'Screen Canvas', value: '180" 2.39:1 CinemaScope' },
      { label: 'Acoustic Decay', value: 'RT60 0.28s Reference' }
    ]
  },
  {
    id: 'proj-retail-flagship',
    number: '06',
    title: 'Curved LED Experience Center & Flagship Retail',
    clientType: 'Luxury Retail Chain',
    location: 'Chennai, Tamil Nadu',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    summary: 'Curved 1.2mm fine-pitch LED display wall with interactive touchscreen product configurators and cloud digital signage synchronizer.',
    challenge: 'High storefront ambient sunlight causing glare and need for non-standard curved architectural display curvature.',
    solution: 'Deployed custom radius faceted LED cabinetry with 1,200 nits high-contrast SMD chips and centralized cloud CMS scheduling.',
    technologiesUsed: [
      'Curved 1.2mm LED Direct-View Wall',
      'BrightSign Cloud Signage CMS',
      'Capacitive Interactive Touchboards',
      'High-Fidelity Architectural Audio'
    ],
    results: [
      '240% increase in customer interactive engagement time',
      'Instant promotion updates pushed across all retail branches from Chennai HQ',
      'Vibrant daylight-visible contrast even at noon'
    ],
    completionYear: '2024',
    metrics: [
      { label: 'LED Pitch', value: '1.2mm Curved Direct-View' },
      { label: 'Brightness', value: '1,200 Nits Daylight-HDR' },
      { label: 'CMS Sync', value: 'Real-Time Cloud Distribution' }
    ]
  }
];
