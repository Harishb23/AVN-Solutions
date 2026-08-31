import type { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  // ================= DISPLAY & VIDEO =================
  {
    id: 'prod-led-microled',
    name: '0.9mm Direct-View MicroLED Display Wall',
    category: 'display',
    categoryName: 'Display & Video',
    subCategory: 'LED Displays',
    brand: 'Samsung / Absen / Unilumin',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-fine pixel pitch MicroLED display system delivering seamless 8K resolution, 1,000,000:1 contrast ratio, and 100,000-hour MTBF for corporate boardrooms and control centers.',
    keySpecs: [
      { label: 'Pixel Pitch', value: '0.9mm / 1.2mm Ultra-Fine' },
      { label: 'Brightness', value: '1,000 Nits HDR10+' },
      { label: 'Refresh Rate', value: '3,840 Hz' },
      { label: 'Viewing Angle', value: '178° H / 178° V' }
    ],
    applications: ['Executive Boardrooms', 'Broadcast Studios', 'Experience Centers', 'NOC/SOC Control Rooms'],
    featured: true
  },
  {
    id: 'prod-laser-proj-4k',
    name: '20,000 Lumen 3-Chip DLP 4K Laser Projector',
    category: 'display',
    categoryName: 'Display & Video',
    subCategory: 'Projectors',
    brand: 'Panasonic / Christie / Barco',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    description: 'High-brightness native 4K solid-state laser projector engineered for auditoriums, large venue stage mapping, and seamless edge-blended panoramic canvases.',
    keySpecs: [
      { label: 'Light Output', value: '20,000 ANSI Lumens' },
      { label: 'Native Resolution', value: '4K UHD (3840 × 2160)' },
      { label: 'Laser Lifespan', value: '20,000+ Hours Maintenance-Free' },
      { label: 'Lens Support', value: 'Motorized Ultra-Short to Long Throw' }
    ],
    applications: ['University Auditoriums', 'Corporate Plenary Halls', 'Architectural Mapping', 'Houses of Worship'],
    featured: true
  },
  {
    id: 'prod-lcd-videowall',
    name: '55" Ultra-Narrow Bezel (0.88mm) LCD Video Wall',
    category: 'display',
    categoryName: 'Display & Video',
    subCategory: 'Video Walls',
    brand: 'LG / Samsung Commercial / Barco',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    description: '24/7 continuous operation commercial IPS video wall panel with razor-thin 0.88mm even bezel, anti-glare 28% haze, and Daisy-Chain 4K loop-through.',
    keySpecs: [
      { label: 'Bezel-to-Bezel', value: '0.88mm Extreme Ultra-Narrow' },
      { label: 'Operation Duty', value: '24/7 / 365 Continuous' },
      { label: 'Surface Haze', value: '28% Anti-Glare Treatment' },
      { label: 'Daisy Chain', value: 'DisplayPort 1.2 / HDMI 2.0 4K' }
    ],
    applications: ['Security Operations Centers', 'Traffic Monitoring', 'Corporate Lobbies', 'Airport Terminals']
  },
  {
    id: 'prod-interactive-touch',
    name: '86" 4K Interactive Touch Collaboration Display',
    category: 'display',
    categoryName: 'Display & Video',
    subCategory: 'Interactive Displays',
    brand: 'Newline / Maxhub / SMART',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    description: 'Zero-bonding optical touch 4K screen with 40-point multi-touch, integrated 4K wide camera, 8-mic array, USB-C 65W PD charging, and native Android 13 + Windows OPS slot.',
    keySpecs: [
      { label: 'Touch Points', value: '40 Points IR / Zero-Bonding Glass' },
      { label: 'Connectivity', value: 'Full-Function USB-C (Video + Touch + 65W PD)' },
      { label: 'Expansion Slot', value: 'Intel OPS PC Module Supported' },
      { label: 'Glass Durability', value: '7H Hardness Anti-Fingerprint' }
    ],
    applications: ['Corporate Training Rooms', 'Smart Classrooms', 'Agile Huddle Spaces', 'Design Review Studios']
  },
  {
    id: 'prod-signage-highbright',
    name: '75" 4,000 Nits Window-Facing Digital Signage',
    category: 'display',
    categoryName: 'Display & Video',
    subCategory: 'Digital Signage',
    brand: 'Samsung SMART Signage / LG Commercial',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-high brightness commercial outdoor-facing window display engineered to overcome direct sunlight washout with built-in MagicINFO / webOS cloud CMS.',
    keySpecs: [
      { label: 'Peak Brightness', value: '4,000 Nits Daylight-Readable' },
      { label: 'Operating Temp', value: '0°C to 50°C Thermal Shielded' },
      { label: 'Polarized Sunglasses', value: 'QWP (Quarter Wave Plate) Tech' },
      { label: 'Cloud CMS', value: 'Integrated Media Engine & Wi-Fi' }
    ],
    applications: ['Retail Storefronts', 'Automotive Showrooms', 'QSR Menu Boards', 'Bank Branches']
  },

  // ================= AUDIO =================
  {
    id: 'prod-shure-mxa920',
    name: 'Shure Microflex Advance MXA920 Ceiling Array',
    category: 'audio',
    categoryName: 'Professional Audio',
    subCategory: 'Wireless & Array Microphones',
    brand: 'Shure',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    description: 'Flagship steerable ceiling array microphone with Automatic Coverage technology covering up to 30ft × 30ft room space with zero visible tabletop wiring.',
    keySpecs: [
      { label: 'Coverage Zones', value: 'Up to 8 Dedicated Steerable Lobes' },
      { label: 'Network Audio', value: 'Dante / AES67 Digital Audio' },
      { label: 'DSP Processing', value: 'Built-in IntelliMix AEC, AGC & Noise Reduction' },
      { label: 'Form Factor', value: 'Square Ceiling Tile & Round Architectural' }
    ],
    applications: ['Executive Boardrooms', 'Hybrid Classrooms', 'Courtrooms', 'High-Profile Conference Suites'],
    featured: true
  },
  {
    id: 'prod-qsys-dsp-core',
    name: 'Q-SYS Core 110f / Core Flex Enterprise DSP',
    category: 'audio',
    categoryName: 'Professional Audio',
    subCategory: 'Digital Signal Processors',
    brand: 'Q-SYS (QSC)',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    description: 'Software-based audio, video, and control processor supporting 128x128 network audio channels, multi-channel acoustic echo cancellation, and native VoIP bridging.',
    keySpecs: [
      { label: 'Network Channels', value: '128 × 128 Q-LAN / Dante Channels' },
      { label: 'AEC Channels', value: '16 Discrete Acoustic Echo Cancelling Channels' },
      { label: 'Control Engine', value: 'Lua Scripting & Native Control Engine' },
      { label: 'Analog I/O', value: '24 Software-Configurable Flex Channels' }
    ],
    applications: ['Enterprise Campus AV', 'Auditoriums', 'Convention Centers', 'Multi-Room Hospitality'],
    featured: true
  },
  {
    id: 'prod-bose-linearray',
    name: 'Bose Panaray MSA12X Modular Steerable Column',
    category: 'audio',
    categoryName: 'Professional Audio',
    subCategory: 'Speakers',
    brand: 'Bose Professional',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Digitally steerable column loudspeaker with 12 x 2.25-inch full-range transducers and discrete 50W Class-D amplification per driver for reverberant acoustic spaces.',
    keySpecs: [
      { label: 'Driver Array', value: '12 × 2.25" Full-Range Transducers' },
      { label: 'Built-in Amps', value: '12 × 50W Digital Class-D Amplifiers' },
      { label: 'Beam Steering', value: 'Digital Steering via Bose Modeler' },
      { label: 'Input Protocol', value: 'Dante Audio & Analog Balanced' }
    ],
    applications: ['Places of Worship', 'Auditoriums', 'Civic Chambers', 'High-Ceiling Atriums']
  },
  {
    id: 'prod-sennheiser-ewdx',
    name: 'Sennheiser EW-DX Digital Wireless Mic System',
    category: 'audio',
    categoryName: 'Professional Audio',
    subCategory: 'Wireless Microphones',
    brand: 'Sennheiser',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    description: 'Dual-channel digital UHF wireless system with 134dB dynamic range, AES-256 encryption, 1.9ms ultra-low latency, and integrated Dante digital networking.',
    keySpecs: [
      { label: 'Dynamic Range', value: '134 dB Ultra-Wide Dynamic Input' },
      { label: 'Latency', value: '1.9 ms True Real-Time Latency' },
      { label: 'Encryption', value: 'AES-256 Military Grade' },
      { label: 'Battery Life', value: 'Up to 12 Hours Rechargeable Li-Ion' }
    ],
    applications: ['Corporate Presenters', 'Auditoriums', 'Broadcast Live Stage', 'University Lecturers']
  },
  {
    id: 'prod-genelec-smart-ip',
    name: 'Genelec 4430A Smart IP Active Installation Speaker',
    category: 'audio',
    categoryName: 'Professional Audio',
    subCategory: 'Speakers',
    brand: 'Genelec',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'Single-cable CAT6 PoE+ powered active architectural monitor delivering uncompressed Dante / AES67 audio, power, and acoustic calibration over one Ethernet cable.',
    keySpecs: [
      { label: 'Single Cable', value: 'Power (PoE+), Audio (Dante) & Control over RJ45' },
      { label: 'SPL Output', value: '104 dB Max SPL @ 1m' },
      { label: 'Frequency Response', value: '45 Hz – 39 kHz (-6 dB)' },
      { label: 'DSP Calibration', value: 'Internal Genelec Smart IP Manager' }
    ],
    applications: ['Executive Boardrooms', 'Art Galleries', 'Luxury Hotel Lounges', 'Museum Pavilions']
  },

  // ================= VIDEO CONFERENCING =================
  {
    id: 'prod-logitech-rally-plus',
    name: 'Logitech Rally Plus Modular Ultra-HD System',
    category: 'conferencing',
    categoryName: 'Video Conferencing',
    subCategory: 'Conference Room Systems',
    brand: 'Logitech',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: 'Premier modular conference camera system for medium to extra-large rooms, featuring RightSense AI automation, 15x HD zoom, and modular mic pods.',
    keySpecs: [
      { label: 'Camera Resolution', value: '4K Ultra-HD @ 30fps / 1080p @ 60fps' },
      { label: 'Optical Zoom', value: '15× HD Zoom (5× Optical + 3× Digital)' },
      { label: 'AI Framing', value: 'RightSight Auto-Framing & RightSound DSP' },
      { label: 'Expansion', value: 'Supports up to 7 Mic Pods (46 Participants)' }
    ],
    applications: ['Large Boardrooms', 'Conference Suites', 'Townhall Meeting Spaces', 'Training Rooms'],
    featured: true
  },
  {
    id: 'prod-poly-studio-x70',
    name: 'Poly Studio X70 Dual-Camera Video Bar',
    category: 'conferencing',
    categoryName: 'Video Conferencing',
    subCategory: 'Video Conferencing Cameras',
    brand: 'Poly (HP)',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
    description: 'All-in-one smart video bar featuring dual 4K sensors, Poly DirectorAI smart camera framing, 2-way stereo speakers, and native Microsoft Teams & Zoom Rooms engine.',
    keySpecs: [
      { label: 'Dual Camera', value: 'Dual 20 MP 4K Sensors (Wide + Narrow)' },
      { label: 'AI Director', value: 'People Framing / Group Framing / Speaker Tracking' },
      { label: 'Microphone Array', value: '2nd Order Gradient 4-Mic Array' },
      { label: 'Native Platform', value: 'Native MS Teams, Zoom & Google Meet' }
    ],
    applications: ['Medium to Large Boardrooms', 'Executive Conference Rooms', 'Government Telepresence Suites'],
    featured: true
  },
  {
    id: 'prod-barco-clickshare-cx50',
    name: 'Barco ClickShare CX-50 Gen 2 Wireless BYOM',
    category: 'conferencing',
    categoryName: 'Video Conferencing',
    subCategory: 'Wireless Presentation',
    brand: 'Barco',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Premium agnostic wireless conferencing and presentation system with dual-screen 4K output, dual USB-C buttons, touchback support, and ISO 27001 enterprise certification.',
    keySpecs: [
      { label: 'Dual Screen 4K', value: 'Dual 4K UHD (3840 × 2160) Output' },
      { label: 'BYOM Agnostic', value: 'Connects room camera & mic to laptop wirelessly' },
      { label: 'Security Standard', value: 'ISO 27001 Certified / WPA2-Enterprise' },
      { label: 'Casting Support', value: 'ClickShare App, AirPlay, Google Cast, Miracast' }
    ],
    applications: ['Executive Boardrooms', 'Hybrid Meeting Spaces', 'Multi-Display Rooms', 'Consulting Offices']
  },

  // ================= CONTROL & AUTOMATION =================
  {
    id: 'prod-crestron-cp4n',
    name: 'Crestron CP4N 4-Series Core Control Processor',
    category: 'control',
    categoryName: 'Control & Automation',
    subCategory: 'AV Control Systems',
    brand: 'Crestron',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'High-performance 4-Series control engine with dedicated isolated AV network subnet, high-speed multi-threaded execution, and native cloud XiO Cloud management.',
    keySpecs: [
      { label: 'Processing Arch', value: 'Quad-Core 64-Bit Enterprise CPU' },
      { label: 'Dedicated Subnet', value: 'Isolated LAN Subnet Port for AV Devices' },
      { label: 'Ports Available', value: '8 COM, 8 IR, 8 Relay, 8 I/O Ports' },
      { label: 'Security Suite', value: 'TLS 1.3 / 802.1X / Active Directory Integration' }
    ],
    applications: ['Enterprise Campus Systems', 'Boardrooms', 'Auditoriums', 'Smart Command Centers'],
    featured: true
  },
  {
    id: 'prod-crestron-tsw-1070',
    name: 'Crestron TSW-1070 10.1" Capacitive Touch Screen',
    category: 'control',
    categoryName: 'Control & Automation',
    subCategory: 'Touch Panels',
    brand: 'Crestron',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    description: 'Architectural tabletop or wall-mount capacitive glass touch screen with 1920x1200 resolution, custom HTML5 vector UI rendering, PoE power, and room booking integration.',
    keySpecs: [
      { label: 'Display Specs', value: '10.1" WUXGA (1920 × 1200) Capacitive Multi-touch' },
      { label: 'UI Engine', value: 'Crestron HTML5 User Interface (CH5)' },
      { label: 'Voice Control', value: 'Integrated Far-field Voice Recognition' },
      { label: 'Power Input', value: 'PoE (Power over Ethernet IEEE 802.3af)' }
    ],
    applications: ['Boardrooms', 'Conference Rooms', 'Room Scheduling Outside Doors', 'Home Cinema Automation']
  },
  {
    id: 'prod-lutron-quantum',
    name: 'Lutron Quantum / Athena Architectural Lighting Core',
    category: 'control',
    categoryName: 'Control & Automation',
    subCategory: 'Lighting Control',
    brand: 'Lutron',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description: 'Enterprise architectural lighting and automated window shade management system unifying DALI-2, 0-10V dimming, tunable white, and motorized roller shades.',
    keySpecs: [
      { label: 'Dimming Protocol', value: 'DALI-2 / 0-10V / EcoSystem / Phase' },
      { label: 'Daylight Harvesting', value: 'Continuous Algorithmic Photocell Dimming' },
      { label: 'Shade Precision', value: 'Sivoia QS Motorized Shades to 1/16" Alignment' },
      { label: 'Energy Analytics', value: 'Real-time Building kWh Consumption Dashboard' }
    ],
    applications: ['Commercial Towers', 'Executive Boardrooms', 'Hotels & Ballrooms', 'Luxury Residences']
  },

  // ================= NETWORKING & AV-OVER-IP =================
  {
    id: 'prod-sdvoe-10g',
    name: 'SDVoE 10G Zero-Latency AV-over-IP Transceiver',
    category: 'networking',
    categoryName: 'AV Networking',
    subCategory: 'AV-over-IP',
    brand: 'Netgear AV / Aurora / ZeeVee',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    description: 'Uncompressed 4K60 4:4:4 HDR video, multi-channel Dante audio, Gigabit Ethernet, and USB 2.0 routing over 10GbE copper or fiber with sub-0.1ms true zero latency.',
    keySpecs: [
      { label: 'Video Quality', value: 'Uncompressed 4K60 4:4:4 HDR10+' },
      { label: 'Glass-to-Glass Latency', value: '< 0.04 ms (Sub-Frame Transmission)' },
      { label: 'Network Medium', value: '10 Gbps Cat6A / Multi-Mode Fiber' },
      { label: 'Video Wall Processing', value: 'Built-in Hardware Scaling & Cropping Engine' }
    ],
    applications: ['Command & Control Rooms', 'Medical Operating Theatres', 'Enterprise Digital Matrix', 'Esports Arenas'],
    featured: true
  },
  {
    id: 'prod-netgear-m4250',
    name: 'Netgear M4250 AV Line Enterprise Managed Switch',
    category: 'networking',
    categoryName: 'AV Networking',
    subCategory: 'Network Switches',
    brand: 'Netgear AV',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    description: 'Specialized enterprise network switch engineered specifically for Pro AV, pre-configured with Dante, NDI, Q-SYS, and SDVoE network profiles for zero-configuration deployment.',
    keySpecs: [
      { label: 'AV Profiles', value: 'Pre-tuned for Dante, AES67, Q-SYS, NDI, SDVoE' },
      { label: 'PoE Power Budget', value: 'PoE+ / Ultra90 PoE++ up to 1,440W Total Budget' },
      { label: 'Uplink Ports', value: 'Dual 10G SFP+ Fiber Uplinks' },
      { label: 'Fan Acoustics', value: 'Ultra-Quiet / Fanless Silent Operating Modes' }
    ],
    applications: ['Pro AV Racks', 'Corporate Broadcast Hubs', 'Audio Distribution Backbones', 'Auditorium Signal Distribution']
  },

  // ================= HOME AV =================
  {
    id: 'prod-sony-xw7000',
    name: 'Sony VPL-XW7000ES Native 4K HDR Laser Projector',
    category: 'home-av',
    categoryName: 'Home AV',
    subCategory: 'Home Theatre Projectors',
    brand: 'Sony Residential',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    description: 'Flagship native 4K SXRD home cinema laser projector delivering 3,200 lumens of high brightness, X1 Ultimate for projector processor, and 95% DCI-P3 wide color gamut.',
    keySpecs: [
      { label: 'Native Panels', value: 'Native 4K SXRD (3840 × 2160) 0.61" Chips' },
      { label: 'Brightness', value: '3,200 ANSI Lumens Laser Light Source' },
      { label: 'HDR Processing', value: 'Dynamic HDR Enhancer with Object-based HDR Remaster' },
      { label: 'Gaming Latency', value: '4K 60Hz Input Lag < 21ms' }
    ],
    applications: ['Dedicated Home Theatres', 'Luxury Penthouse Screening Rooms', 'Private Gaming Lounges'],
    featured: true
  },
  {
    id: 'prod-trinnov-altitude16',
    name: 'Trinnov Altitude 16 Immersive Sound Audio Processor',
    category: 'home-av',
    categoryName: 'Home AV',
    subCategory: 'AV Receivers & Processors',
    brand: 'Trinnov Audio',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    description: 'The world reference in immersive spatial cinema sound processing, decoding Dolby Atmos, DTS:X Pro, and Auro-3D with patented 3D Speaker Remapping and acoustic room optimizer.',
    keySpecs: [
      { label: 'Processing Channels', value: '16 Discrete Channels Decoding & Optimization' },
      { label: 'Room Correction', value: 'Patented Trinnov 3D Acoustic Optimizer & 3D Microphone' },
      { label: 'Codecs Supported', value: 'Dolby Atmos, DTS:X Pro, Auro-3D, IMAX Enhanced' },
      { label: 'DAC Performance', value: '24-bit / 96kHz Native High-Resolution Clock' }
    ],
    applications: ['Ultra-High-End Private Theatres', 'Commercial Reference Studios', 'Luxury Residence Cinemas'],
    featured: true
  },
  {
    id: 'prod-kef-ci-extreme',
    name: 'KEF Ci-Reference In-Wall Architectural Speaker System',
    category: 'home-av',
    categoryName: 'Home AV',
    subCategory: 'Home Cinema Speakers',
    brand: 'KEF / Bowers & Wilkins',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    description: 'THX Ultra certified in-wall architectural home theatre speaker featuring KEF patented Uni-Q point-source driver array for true acoustic transparency behind woven screens.',
    keySpecs: [
      { label: 'Certification', value: 'THX Ultra Certified Reference Performance' },
      { label: 'Driver Tech', value: '125mm Uni-Q Array + 4 × 165mm Bass Drivers' },
      { label: 'Frequency Response', value: '40 Hz – 28 kHz (±3dB)' },
      { label: 'Sensitivity', value: '90 dB (2.83V / 1m)' }
    ],
    applications: ['Custom In-Wall Home Cinemas', 'Concealed Living Room Hi-Fi', 'Architectural Surround Sound']
  }
];
