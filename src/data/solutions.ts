import type { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'corporate-av',
    number: '01',
    title: 'Boardroom & Conference Room AV',
    tagline: 'Turnkey conference room AV solutions, meeting spaces and executive boardrooms.',
    description: 'We deliver turnkey conference room AV solutions and executive boardroom audio-visual systems in Chennai. Combining beamforming microphone arrays, fine-pitch LED display walls, Microsoft Teams & Zoom Room certified codecs, and single-touch automation macros for high-performing workplaces.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Executive Boardrooms',
      'High-Impact Video Conference Suites',
      'Agile Meeting Rooms',
      'All-Hands Townhall Areas',
      'Training & Innovation Labs'
    ],
    recommendedProducts: [
      'Direct-View Fine Pitch LED Displays (0.9mm - 1.2mm)',
      'Ceiling Beamforming Microphone Arrays (Shure MXA920 / Sennheiser TCC2)',
      'Enterprise AV-over-IP Signal Matrix (10G Zero Latency)',
      'Tabletop Capacitive Touch Automation Panels (Crestron / Extron)'
    ],
    services: [
      'Complete Boardroom Acoustic & AV Engineering',
      'Microsoft Teams & Zoom Rooms Certified Integration',
      'Single-Touch Meeting Automation Macros',
      'BYOM Single-Cable USB-C Laptop Docking'
    ],
    features: [
      {
        title: 'Snellen 20/20 Visual Clarity',
        description: 'Ultra-fine pixel pitch LED walls and 4K commercial monitors engineered for detailed spreadsheet and design review.'
      },
      {
        title: 'Steerable Microphone Lobes',
        description: 'Dynamic voice tracking isolates speakers and rejects HVAC/projector background noise.'
      },
      {
        title: 'Centralized Room Telemetry',
        description: 'Cloud dashboard monitoring of room occupancy, hardware health, and meeting analytics.'
      }
    ],
    specs: [
      { label: 'Voice Intelligibility', value: 'STI ≥ 0.72 (Excellent)' },
      { label: 'Display Resolution', value: '4K / 8K Ultra-HD' },
      { label: 'Switching Latency', value: '< 20ms Instant BYOM' },
      { label: 'Control Architecture', value: 'Native IP / BACnet / DALI' }
    ],
    ctaText: 'Design Boardroom AV'
  },
  {
    id: 'video-conferencing',
    number: '02',
    title: 'Video Conferencing Solutions',
    tagline: 'Microsoft Teams, Zoom and hybrid meeting room video conferencing systems in Chennai.',
    description: 'Enterprise video conferencing solutions in Chennai for modern boardrooms and meeting spaces. Native Microsoft Teams Rooms (MTR), Zoom Rooms, and Cisco Webex environments engineered with multi-camera AI speaker tracking, intelligent framing, beamforming audio, and effortless wireless screen sharing.',
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Microsoft Teams Rooms (MTR)',
      'Zoom Rooms Certified Spaces',
      'Hybrid Classroom Conference Suites',
      'Executive Telepresence Rooms',
      'Virtual Courtrooms & Telehealth'
    ],
    recommendedProducts: [
      'AI Director Multi-Camera Systems (Logitech Rally / Poly Studio)',
      'Ceiling Tile DSP Beamforming Microphones',
      'Enterprise Wireless Presentation Systems (Barco ClickShare)',
      'Interactive Whiteboard Touch Displays (75" - 86")'
    ],
    services: [
      'Native Codec Appliance & PC Room Provisioning',
      'AI Speaker Tracking & Auto-Framing Tuning',
      'Acoustic Echo Cancellation (AEC) Calibration',
      'Calendar Integration & One-Touch Join Setup'
    ],
    features: [
      {
        title: 'Multi-Camera AI Director',
        description: 'Auto-switches between wide room perspective and close-up active speaker framing smoothly.'
      },
      {
        title: 'Acoustic Fence Technology',
        description: 'Suppresses sounds outside the meeting perimeter, preventing distracting room noises from transmitting.'
      },
      {
        title: 'Wireless Presentation Security',
        description: 'WPA3 enterprise encrypted screen casting for laptops, iPads, and mobile devices.'
      }
    ],
    specs: [
      { label: 'Camera Resolution', value: '4K @ 60 FPS Optical PTZ' },
      { label: 'AEC Latency', value: '< 1.8ms Real-Time DSP' },
      { label: 'Wireless Casting', value: 'AirPlay, Miracast, Google Cast' },
      { label: 'Certification', value: 'Official MS Teams & Zoom Certified' }
    ],
    ctaText: 'Configure Video Conferencing'
  },
  {
    id: 'professional-audio',
    number: '03',
    title: 'Auditorium AV & Sound Systems',
    tagline: 'Auditorium AV solutions, PA systems, Dante network audio and stage acoustic modeling.',
    description: 'High-intelligibility auditorium AV solutions and sound systems engineered for universities, corporate seminar halls, and large convention venues. Featuring EASE 3D acoustic ray-tracing simulations, Dante/AES67 digital network audio, and high-SPL line array loudspeakers for uniform coverage.',
    heroImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Auditoriums & Large Seminar Halls',
      'Corporate Atriums & Cafeterias',
      'House of Worship Sanctuaries',
      'Luxury Retail & Hospitality Zones',
      'Convention Centers'
    ],
    recommendedProducts: [
      'Line Array & Column Loudspeakers (Bose Professional / JBL / Genelec)',
      'Digital Signal Processors (Q-SYS / Biamp Tesira / Symetrix)',
      'Multi-Channel Dante Power Amplifiers (Crown / Powersoft)',
      'Digital Wireless Microphone Systems (Shure ULX-D / Sennheiser EW-DX)'
    ],
    services: [
      'EASE Acoustic Modeling & Ray-Tracing Simulations',
      'Dante Audio-over-IP Matrix Configuration',
      'DSP Gain Structure & EQ Tuning with Smaart V8',
      'Multi-Zone Background Music Scheduling'
    ],
    features: [
      {
        title: 'Precise Sound Dispersion',
        description: 'Column arrays direct acoustic energy precisely toward listener ears while minimizing ceiling and wall reflections.'
      },
      {
        title: 'Dante Digital Backbone',
        description: 'Zero audio degradation with 512x512 uncompressed audio routing over standard Gigabit Ethernet.'
      },
      {
        title: 'Automated Feedback Suppression',
        description: 'Dynamic notch filters prevent screeching feedback even with open podium and lapel mics.'
      }
    ],
    specs: [
      { label: 'Coverage Uniformity', value: '± 1.5 dB SPL Across Seating' },
      { label: 'Network Audio', value: 'Dante / AES67 / AVB' },
      { label: 'DSP Processing', value: '64-bit Floating Point Architecture' },
      { label: 'THD + Noise', value: '< 0.002% @ 1kHz' }
    ],
    ctaText: 'Consult Audio Engineer'
  },
  {
    id: 'display-visual',
    number: '04',
    title: 'Display & Visual Solutions',
    tagline: 'LED walls, video walls, projectors, professional displays and digital signage.',
    description: 'Direct-view fine pitch LED displays, high-lumen 4K laser projection mapping, 24/7 mission-critical LCD video walls, and interactive collaboration screens designed for maximum visual impact.',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Corporate Lobby Video Walls',
      'Auditorium Main Stage Displays',
      'Experience Centers & Showrooms',
      'Control Rooms & Command Centers',
      'Digital Retail Storefronts'
    ],
    recommendedProducts: [
      'Fine-Pitch Direct-View MicroLED (0.9mm / 1.2mm / 1.5mm)',
      '4K 3-Chip DLP Laser Projectors (10,000 - 30,000 Lumens)',
      'Ultra-Narrow Bezel Commercial LCD Video Walls (0.88mm Bezel-to-Bezel)',
      'Hardware Multi-Window Video Processors'
    ],
    services: [
      'Structural Load & Thermal Management Engineering',
      'Color Gamut & Snellen Distance Calculation',
      'AV-over-IP 10G SDVoE Endpoint Integration',
      'Seamless Video Wall Alignment & Calibration'
    ],
    features: [
      {
        title: 'Bezel-Free MicroLED',
        description: 'Active silicon backplane with pure blacks, HDR10+, and 100,000 hours continuous operational lifespan.'
      },
      {
        title: '10G Zero-Latency Video',
        description: 'Uncompressed 4K60 4:4:4 matrix distribution over fiber/copper with sub-millisecond frame latency.'
      },
      {
        title: 'Redundant Power & Signal',
        description: 'Hot-swappable dual power supplies and dual loop signal failover for 24/7 reliability.'
      }
    ],
    specs: [
      { label: 'Pixel Pitch Options', value: '0.7mm to 2.5mm' },
      { label: 'Brightness Output', value: 'Up to 1,200 Nits HDR' },
      { label: 'Refresh Rate', value: '3,840 Hz High Refresh' },
      { label: 'Viewing Angle', value: '178° Horizontal / Vertical' }
    ],
    ctaText: 'Explore LED & Video Walls'
  },
  {
    id: 'smart-automation',
    number: '05',
    title: 'Smart Automation',
    tagline: 'Room automation, centralized control, lighting, curtains, HVAC and device control.',
    description: 'Crestron, Extron, and AMX control architectures uniting lighting circuits, motorized acoustic shades, climate management, video matrices, and AV hardware into intuitive custom touch glass interfaces.',
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Smart Corporate Boardrooms',
      'Automated Lecture Halls & Auditoriums',
      'Luxury Smart Residences',
      'Hospitality Executive Suites',
      'Multi-Room Operations Centers'
    ],
    recommendedProducts: [
      'Crestron 4-Series Core Control Processors',
      'Custom Tabletop & Wall Capacitive Touch Panels',
      'DALI / 0-10V Lighting Dimming Modules',
      'Quiet Motorized Drapery & Tensioned Screen Actuators'
    ],
    services: [
      'Custom UI/UX Ergonomic Interface Programming',
      'One-Touch Meeting Macro Automation',
      'BACnet, Modbus & DALI Building Automation Bridge',
      'Occupancy-Driven Energy Management Setup'
    ],
    features: [
      {
        title: 'One-Touch Room Activation',
        description: 'A single tap on "Meeting Mode" lowers shades, adjusts lighting to 40%, turns on 8K display, and activates Teams.'
      },
      {
        title: 'Eco-Smart Energy Savings',
        description: 'PIR sensors automatically power down AV systems and adjust HVAC when the room is vacant for 15 minutes.'
      },
      {
        title: 'Secure IP Topology',
        description: 'Enterprise 802.1X, AES-128, and active VLAN segregation protecting building networks.'
      }
    ],
    specs: [
      { label: 'Control Protocols', value: 'IP, RS-232, RS-485, Relay, IR, DALI' },
      { label: 'Macro Speed', value: '< 200ms Execution Time' },
      { label: 'UI Customization', value: '100% Brand Tailored Vector UI' },
      { label: 'Security Standard', value: 'TLS 1.3 / 802.1X Authentication' }
    ],
    ctaText: 'Design Automation Core'
  },
  {
    id: 'home-cinema',
    number: '06',
    title: 'Home Cinema',
    tagline: 'Dedicated home theatres, projectors, acoustics, immersive audio and automation.',
    description: 'Private residential cinema sanctuaries engineered with Dolby Atmos 9.4.6 spatial audio, native 4K laser projection, acoustically transparent woven screens, precision acoustic room damping, and starlight ceilings.',
    heroImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Dedicated Private Cinema Rooms',
      'Luxury Villa Media Rooms',
      'Acoustically Isolated Penthouse Theatres',
      'Outdoor Landscape Cinema Pavilions',
      'Audiophile Hi-Fi Listening Lounges'
    ],
    recommendedProducts: [
      'Native 4K Laser Cinema Projectors (Sony / JVC / Barco Residential)',
      'Acoustically Transparent 4K Fixed Frame Screens',
      'Dolby Atmos In-Wall & In-Ceiling Architectural Speakers (KEF / Bowers & Wilkins / Focal)',
      'Multi-Subwoofer DSP Room Correction Processors (Trinnov / StormAudio)'
    ],
    services: [
      'Acoustic Room Geometry & Modal Analysis',
      'Fabric-Wrapped Acoustic Bass Traps & Diffusers',
      'Custom Reclining Seating Sightline Engineering',
      'One-Touch Cinema Lighting & Scene Automation'
    ],
    features: [
      {
        title: 'Dolby Atmos 3D Immersive Sound',
        description: 'Object-based spatial audio surrounds viewers with pinpoint sound placement overhead and all around.'
      },
      {
        title: 'Reference 4K Color Accuracy',
        description: 'ISF-certified color calibration achieving 100% DCI-P3 cinematic wide color gamut.'
      },
      {
        title: 'Zero Sound Bleed Isolation',
        description: 'Decoupled double-stud walls and acoustic doors allow high-SPL cinematic bass without disturbing the rest of the house.'
      }
    ],
    specs: [
      { label: 'Audio Configuration', value: '7.2.4 up to 11.4.6 Dolby Atmos' },
      { label: 'Screen Aspect Ratio', value: '2.39:1 CinemaScope / 16:9 4K' },
      { label: 'Acoustic Target', value: 'RT60: 0.25s - 0.35s Uniform' },
      { label: 'Projector Contrast', value: 'Infinite Dynamic Contrast Laser' }
    ],
    ctaText: 'Design My Home Cinema'
  },
  {
    id: 'digital-signage',
    number: '07',
    title: 'Digital Signage',
    tagline: 'Commercial displays, menu boards, information screens and centralized content management.',
    description: 'Scalable cloud-managed digital signage networks, interactive wayfinding kiosks, digital menu boards, and ultra-high brightness window displays with synchronized multi-display playback.',
    heroImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Retail Chains & Shopping Malls',
      'Corporate Headquarters & Lobby Walls',
      'Hospital Patient Information Networks',
      'QSR Digital Menu Boards',
      'Transportation Hubs & Airport Displays'
    ],
    recommendedProducts: [
      'Commercial 24/7 High-Haze Displays (500 - 4,000 Nits)',
      'Cloud Media Players (BrightSign / SpinetiX)',
      'Interactive Capacitive Wayfinding Kiosks',
      'Ultra-Stretch Bar Displays for Shelving & Elevators'
    ],
    services: [
      'Cloud CMS Setup & Role-Based Content Scheduling',
      'Multi-Zone Interactive Content Template Design',
      'Remote Network Device Health Monitoring',
      'High-Brightness Outdoor Enclosure Engineering'
    ],
    features: [
      {
        title: 'Centralized Cloud Scheduling',
        description: 'Update pricing, announcements, and promotional video content across 500+ branch screens in seconds.'
      },
      {
        title: 'Sunlight-Readable Brightness',
        description: 'Up to 4,000 nits with auto-dimming ambient light sensors for storefront window visibility.'
      },
      {
        title: 'Failover Playback Engine',
        description: 'On-device caching ensures screens never show a blank display even during internet outages.'
      }
    ],
    specs: [
      { label: 'Duty Cycle', value: '24/7 / 365 Continuous Operation' },
      { label: 'Brightness Range', value: '500 to 4,000 Nits Ultra-Bright' },
      { label: 'CMS Architecture', value: 'Cloud SaaS / On-Premise Enterprise' },
      { label: 'Orientation Support', value: 'Portrait & Landscape Multi-Angle' }
    ],
    ctaText: 'Deploy Digital Signage'
  },
  {
    id: 'auditorium-av',
    number: '08',
    title: 'Auditorium & Large Venue AV',
    tagline: 'Auditoriums, training rooms, seminar halls and large-format presentation systems.',
    description: 'High-capacity theatrical sound reinforcement, stage motorized lighting trusses, multi-projector blending, broadcast video switching, and multi-language interpretation booths for 500 to 5,000+ seat venues.',
    heroImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'University & College Auditoriums',
      'Corporate Townhall Theatres',
      'Convention Center Plenary Halls',
      'Civic Performing Arts Centers',
      'Large Multi-Purpose Seminar Halls'
    ],
    recommendedProducts: [
      'Active Coaxial Line Array Sound Reinforcement',
      'High-Lumen Dual-Laser Blend Projectors (20,000+ Lumens)',
      '4K 12G-SDI Live Production Switchers & PTZ Broadcast Cameras',
      'Stage DMX Automated Lighting & Digital Audio Consoles'
    ],
    services: [
      'Comprehensive Acoustic Simulation (EASE / Odeon)',
      'Stage Lighting & Motorized Rigging Calculations',
      'Multi-Lingual Simultaneous Interpretation Systems',
      'Live Streaming & 4K Recording Infrastructure'
    ],
    features: [
      {
        title: 'Uniform Sound Pressure Distribution',
        description: 'Guarantees the back row experiences the exact same dynamic frequency response and vocal clarity as row one.'
      },
      {
        title: 'Ultra-Wide Blended Projection Canvas',
        description: 'Multi-projector edge blending creates seamless panoramic stage visual backdrops.'
      },
      {
        title: 'Master Control Booth Layout',
        description: 'Centralized FOH operator desk with digital mixing, lighting console, and video production matrix.'
      }
    ],
    specs: [
      { label: 'Seating Capacities', value: '200 to 5,000+ Seats' },
      { label: 'Acoustic Target', value: 'RT60: 0.9s - 1.2s Tuned' },
      { label: 'Video Infrastructure', value: '12G-SDI & SMPTE 2110 IP' },
      { label: 'SPL Headroom', value: '108 dB Continuous @ FOH' }
    ],
    ctaText: 'Engineer Auditorium AV'
  },
  {
    id: 'intelligent-lighting',
    number: '09',
    title: 'Intelligent Lighting',
    tagline: 'Architectural lighting, scene control, dimming and automated lighting systems.',
    description: 'DALI-2, 0-10V, and DMX architectural lighting systems engineered to deliver human-centric circadian rhythms, dynamic conference scene switching, and seamless integration with AV presentation modes.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Executive Boardrooms & Conference Rooms',
      'Architectural Corporate Atriums',
      'Luxury Hospitality Lounges & Restaurants',
      'Experience Centers & Museum Galleries',
      'Smart Modern Residences'
    ],
    recommendedProducts: [
      'DALI-2 Multi-Master Lighting Controllers (Lutron / Helvar / Crestron)',
      'Tunable White Human-Centric LED Drivers',
      'Architectural Engraved Backlit Keypads',
      'DMX Color-Changing Facade Fixtures'
    ],
    services: [
      'Lux Level & Glare (UGR < 19) Photometric Calculations',
      'Circadian Rhythm Tunable-White Programming',
      'AV Scene Preset Integration (Presentation, Video Call, Normal)',
      'Energy Management & Daylight Harvesting Sensors'
    ],
    features: [
      {
        title: 'Circadian Biological Rhythm',
        description: 'Automatically shifts color temperature from energetic 5000K in the morning to relaxing 2700K in the evening.'
      },
      {
        title: 'Flicker-Free Camera Dimming',
        description: 'Ultra-smooth 0.1% digital dimming curve eliminates video conference camera banding.'
      },
      {
        title: 'Daylight Harvesting',
        description: 'Photosensors dim perimeter lights when natural Chennai sunlight is abundant, saving up to 35% lighting energy.'
      }
    ],
    specs: [
      { label: 'Dimming Curve', value: '0.1% Smooth Linear / Logarithmic' },
      { label: 'Protocol Support', value: 'DALI-2, DMX-512, 0-10V, Phase' },
      { label: 'CRI Rating', value: 'CRI ≥ 95+ High Color Fidelity' },
      { label: 'Energy Savings', value: 'Up to 40% with Daylight Sensors' }
    ],
    ctaText: 'Integrate Smart Lighting'
  },
  {
    id: 'acoustics',
    number: '10',
    title: 'Acoustic Solutions',
    tagline: 'Acoustic treatment, sound isolation, room optimization and speech intelligibility.',
    description: 'Scientific acoustic design calculating RT60 reverberation, Noise Criteria (NC), sound transmission loss (STC), and modal resonances using high-performance fabric panels, bass traps, and micro-perforated wood.',
    heroImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Corporate Boardrooms & Teleconference Suites',
      'Auditoriums & Multipurpose Halls',
      'Broadcast & Podcasting Studios',
      'Dedicated Home Cinemas',
      'Open Office Acoustic Sound Masking Zones'
    ],
    recommendedProducts: [
      'Custom Fabric-Wrapped High-Density Fiber Panels',
      'Micro-Perforated Acoustic Timber Wall Paneling',
      'Broadband Corner Bass Traps & Skyline QRD Diffusers',
      'Direct-Field Sound Masking Emitters'
    ],
    services: [
      'On-Site Acoustic RT60 & STC Sound Level Audits in Chennai',
      '3D Acoustic Room Simulation & Ray-Tracing',
      'Architectural Acoustic Finish Integration',
      'HVAC Noise Attenuation & Baffle Engineering'
    ],
    features: [
      {
        title: 'Speech Transmission Index (STI > 0.70)',
        description: 'Eliminates room echoes so every spoken syllable is crystal clear on both sides of a hybrid conference call.'
      },
      {
        title: 'Architectural Aesthetic Integration',
        description: 'Acoustic fabrics and real wood veneers tailored to seamlessly match the interior designer’s palette.'
      },
      {
        title: 'Sound Masking Technology',
        description: 'Adds an engineered ambient pink spectrum background sound to safeguard corporate conversational privacy.'
      }
    ],
    specs: [
      { label: 'NRC Rating', value: '0.85 to 1.05 Absorption' },
      { label: 'Noise Criteria Target', value: 'NC-25 to NC-30 (Boardroom Grade)' },
      { label: 'Standards Compliance', value: 'ISO 3382 / ANSI S12.60' },
      { label: 'Fire Rating', value: 'Class A / Class 1 Fire Retardant' }
    ],
    ctaText: 'Request Acoustic Survey'
  },
  {
    id: 'control-rooms',
    number: '11',
    title: 'Control Rooms',
    tagline: 'Professional monitoring, visualization, control and communication systems.',
    description: '24/7 mission-critical operations centers, security monitoring hubs (SOC/NOC), and traffic management rooms featuring high-density video wall processing, redundant KVM over IP, and ergonomic operator consoles.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Network Operations Centers (NOC)',
      'Security Operations Centers (SOC)',
      'Smart City & Traffic Management Centers',
      'Industrial Plant SCADA Monitoring Rooms',
      'Emergency Dispatch & Crisis Management'
    ],
    recommendedProducts: [
      '24/7 Narrow-Bezel LCD & Fine-Pitch MicroLED Video Walls',
      'Hardware Multi-Source Video Wall Processors (Datapath / Barco)',
      'Zero-Latency KVM-over-IP Matrix Switches',
      'Ergonomic Motorized Sit-Stand Operator Consoles'
    ],
    services: [
      'Sightline & Operator Ergonomics (ISO 11064) Design',
      'Dual-Redundant Power & IP Signal Topology',
      'Dynamic Source Windowing & Preset Layout Programming',
      'Enterprise SCADA & CCTV Signal Ingestion'
    ],
    features: [
      {
        title: 'Uninterrupted 24/7/365 Reliability',
        description: 'Industrial-grade MTBF ratings, dual hot-swap power units, and automated failover processors.'
      },
      {
        title: 'Seamless KVM Switching',
        description: 'Single mouse and keyboard allows operator to seamlessly glide across 6+ discrete workstation monitors.'
      },
      {
        title: 'Crisis Mode Layout Recall',
        description: 'Instantly reorganize the 50-screen video wall layout with a single emergency macro button.'
      }
    ],
    specs: [
      { label: 'Standard Compliance', value: 'ISO 11064 Control Room Ergonomics' },
      { label: 'KVM Latency', value: '< 1ms Sub-Frame Switching' },
      { label: 'Signal Density', value: 'Up to 128 Live 4K Streams' },
      { label: 'Uptime SLA', value: '99.999% High Availability' }
    ],
    ctaText: 'Consult Control Room Specialist'
  },
  {
    id: 'hospitality-av',
    number: '12',
    title: 'Hospitality AV',
    tagline: 'Hotels, restaurants, conference facilities, lounges and guest entertainment.',
    description: 'Turnkey AV infrastructure for 5-star hotels, luxury resorts, banquet halls, and fine dining lounges—including divisible ballroom sound, background music zones, interactive IPTV, and digital concierge displays.',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    typicalEnvironments: [
      'Hotel Divisible Banquet Ballrooms',
      'All-Day Dining Restaurants & Rooftop Bars',
      'Hotel Executive Club Lounges & Boardrooms',
      'Luxury Spa Background Music Zones',
      'Resort Poolside & Outdoor Weatherproof AV'
    ],
    recommendedProducts: [
      'Multi-Zone Dante Network Audio Amplifiers',
      'Architectural In-Ceiling & Pendant Speakers',
      'Automated Ballroom Partition AV Combiners',
      'Commercial Weatherproof IP65 Outdoor Loudspeakers'
    ],
    services: [
      'Automated Partition Wall Auto-Combining AV Setup',
      'Custom Tablet Staff Music & Lighting Zone Controllers',
      'High-Definition In-Room IPTV System Integration',
      'Digital Event Signage & Wayfinding Deployment'
    ],
    features: [
      {
        title: 'Ballroom Partition Auto-Sensing',
        description: 'When movable walls close, audio and video matrix splits into 3 independent zones automatically; when opened, combines back into 1 grand hall.'
      },
      {
        title: 'Curated Multi-Zone Soundscapes',
        description: 'Different playlists and volume schedules for lobby, restaurant, bar, and spa managed from a single iPad.'
      },
      {
        title: 'IP65 Weatherproof Durability',
        description: 'UV-resistant and moisture-sealed outdoor speakers built to withstand coastal Chennai humidity and monsoons.'
      }
    ],
    specs: [
      { label: 'Zone Capacity', value: '64+ Independent Audio Zones' },
      { label: 'Ballroom Combining', value: 'Auto-Partition Relays' },
      { label: 'Outdoor Protection', value: 'IP65 Water & Dust Resistant' },
      { label: 'Control Interface', value: 'Locked Staff Tablet App' }
    ],
    ctaText: 'Explore Hospitality AV'
  }
];

// Compatibility aliases for legacy views
export const getSolutionById = (id: string): SolutionItem => {
  const found = solutionsData.find(s => s.id === id);
  if (found) return found;
  if (id === 'audio') return solutionsData[2]; // Professional Audio
  if (id === 'visual') return solutionsData[3]; // Display & Visual
  if (id === 'collaboration') return solutionsData[1]; // Video Conferencing
  if (id === 'automation') return solutionsData[4]; // Smart Automation
  if (id === 'experience') return solutionsData[5]; // Home Cinema
  return solutionsData[0];
};
