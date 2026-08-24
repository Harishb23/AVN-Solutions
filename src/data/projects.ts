import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'chennai-tech-boardroom',
    number: '01',
    title: 'Next-Gen Executive Boardroom',
    clientType: 'Global Technology Enterprise',
    location: 'OMR Tech Corridor, Chennai, India',
    industry: 'Corporate',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A 28-seat executive boardroom equipped with a 165" bezel-less 4K Direct-View LED wall, Dante-networked ceiling beamforming microphones, and single-touch Crestron automation.',
    challenge: 'The executive boardroom featured extensive glass perimeter walls causing severe acoustic reflections and difficult lighting conditions, while requiring completely wireless executive table aesthetics.',
    solution: 'Engineered specialized DSP echo cancellation with acoustic micro-perforated wall treatments, installed motorized blackout shades integrated with environmental sensors, and recessed all microphones into custom acoustic ceiling tiles.',
    technologiesUsed: ['165" 4K DV-LED Wall', 'Shure MXA920 Ceiling Arrays', 'QSC Q-SYS Core DSP', 'Crestron 10.1" Touch Panel', 'Cisco Webex Room Kit Pro'],
    results: [
      'Zero visible cables on the conference table',
      'Crystal clear voice pickup across all 28 seated participants',
      'One-touch meeting initiation reducing meeting start latency from 8 mins to 5 seconds'
    ],
    completionYear: '2025'
  },
  {
    id: 'coimbatore-auditorium',
    number: '02',
    title: '1,200-Seat Academic Auditorium',
    clientType: 'Premier Engineering University',
    location: 'Coimbatore, Tamil Nadu',
    industry: 'Education',
    image: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Turnkey acoustic and AV transformation for a premier university auditorium featuring a curved 8K stage LED backdrop, line-array sound reinforcement, and automated multi-camera broadcast capture.',
    challenge: 'A massive 22-meter ceiling height generated severe 2.8s reverberation times making graduation speeches and lecture audio unintelligible in the rear balcony sections.',
    solution: 'Modeled acoustic room behavior in EASE software to specify precision absorption baffles and installed active digitally-steered line arrays covering the auditorium with uniform ±1.5dB sound pressure level.',
    technologiesUsed: ['Bose Professional ArenaMatch Line Arrays', 'Yamaha TF5 Digital Mixing Console', 'Absen 280" P1.9 LED Stage Display', 'Sony 4K PTZ Broadcast Cameras', 'Extron NAV 10G AV-over-IP'],
    results: [
      'Reverberation reduced from 2.8s down to an optimal 1.1s',
      'STI intelligibility improved to 0.74 in every balcony seat',
      'Simultaneous live-streaming capability to over 10,000 remote viewers'
    ],
    completionYear: '2024'
  },
  {
    id: 'chennai-luxury-hotel-ballroom',
    number: '03',
    title: '5-Star Convention Grand Ballroom',
    clientType: 'Luxury Hospitality Group',
    location: 'Guindy, Chennai, India',
    industry: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A multi-zone divisible ballroom system supporting 3 independent banquet partitions or one unified 800-person gala hall with dynamic audio routing and laser projection mapping.',
    challenge: 'The venue required seamless audio-visual routing that automatically reconfigures when acoustic airwalls are opened or closed without technical operator intervention.',
    solution: 'Designed an intelligent Q-SYS DSP architecture integrated with partition sensors that re-routes speaker channels and video matrix feeds automatically upon wall movement.',
    technologiesUsed: ['Panasonic 20,000 Lumen 4K Laser Projectors', 'QSC AcousticDesign In-Ceiling & Pendant Speakers', 'Crestron DM NVX 4K60 Encoders', 'iPad Pro Custom AVN Control App'],
    results: [
      'Instant automated zone switching when partition walls move',
      'Flawless background music & gala presentation audio',
      'Intuitive staff UI reducing operational training overhead'
    ],
    completionYear: '2024'
  },
  {
    id: 'bengaluru-innovation-center',
    number: '04',
    title: 'Immersive Experience & Innovation Center',
    clientType: 'Enterprise Automotive R&D',
    location: 'Electronic City, Bengaluru',
    industry: 'Experience Centers',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A futuristic digital showroom featuring interactive 360-degree curved LED tunnels, spatial 16-channel sound design, and floor-to-wall gesture-activated interactive content.',
    challenge: 'Synchronizing multi-surface 8K video output with microsecond-level spatial audio tracking as visitors walk through the experiential tunnel.',
    solution: 'Implemented high-performance media servers with SMPTE timecode sync feeding customized fine-pitch curved LED panels and boundary floor sensors.',
    technologiesUsed: ['Custom Curved 1.2mm DV-LED Walls', 'Genelec 8331A SAM Spatial Studio Monitors', 'Dataton WATCHOUT Media Servers', 'Hokuyo LiDAR Multi-Touch Sensors'],
    results: [
      'Over 95% client engagement rate during corporate automotive briefings',
      'Ultra-fluid 60fps interactive responsiveness with zero frame drops',
      'Recognized as the flagship technology showcase for the automotive brand'
    ],
    completionYear: '2025'
  },
  {
    id: 'chennai-noc-command-room',
    number: '05',
    title: '24/7 Smart Infrastructure NOC Room',
    clientType: 'Urban Infrastructure Authority',
    location: 'Chennai, Tamil Nadu',
    industry: 'Government & NOCs',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A mission-critical 48-feed monitoring command wall designed for continuous 24/7/365 operations with hardware multi-viewing, emergency broadcast override, and redundant power infrastructure.',
    challenge: 'Zero downtime tolerance, extreme source density (over 100 CCTV and telemetry inputs), and strict thermal management in an enclosed command room.',
    solution: 'Engineered an ultra-narrow bezel industrial video wall array with dedicated remote redundant power racks and fiber-isolated KVM matrix switching.',
    technologiesUsed: ['Barco UniSee 55" Bezel-less Display Matrix (4x3 Array)', 'Extron Quantum Ultra 4K Processor', 'IHSE Draco tera Enterprise KVM Matrix', 'Biamp TesiraFORTÉ DSP'],
    results: [
      'Continuous 100% uptime since commissioning',
      'Operators can drag and drop any data feed to any screen quadrant in under 1 second',
      'Sub-millisecond KVM latency across all console workstations'
    ],
    completionYear: '2024'
  }
];
