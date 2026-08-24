import type { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'audio',
    number: '01',
    title: 'Audio Architecture',
    tagline: 'Sound engineered around the space.',
    description: 'We calculate RT60 reverberation times, room acoustic geometry, and direct-to-reverberant ratios to design pristine speech intelligibility and high-impact acoustic environments.',
    heroImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Professional Line Array & Point Source PA Systems',
      'Ceiling Beamforming Microphone Arrays',
      'Multi-Zone Audio Distribution (Dante / AES67)',
      'Digital Signal Processing (DSP) & Acoustic Echo Cancellation',
      'Auditorium & House of Worship High-SPL Audio',
      'Background Music & Paging Systems',
      'Acoustic Room Modeling & Calibration',
      'Assistive Listening & Multi-Language Interpretation'
    ],
    features: [
      {
        title: 'Precision Acoustic Modeling',
        description: 'EASE simulations map exact sound wave reflections to eliminate flutter echoes and guarantee STI > 0.65 across every seat.'
      },
      {
        title: 'Networked Audio Infrastructure',
        description: 'Ultra-low latency Dante/AES67 digital audio transport over standard gigabit network backbones.'
      },
      {
        title: 'Adaptive DSP Noise Filtering',
        description: 'Continuous AI noise suppression and multi-channel AEC ensuring pristine clarity in hybrid calls.'
      }
    ],
    specs: [
      { label: 'AEC Latency', value: '< 2.5ms' },
      { label: 'Intelligibility Rating', value: 'STI ≥ 0.70' },
      { label: 'Signal Bandwidth', value: '24-bit / 96kHz Dante' },
      { label: 'Coverage Uniformity', value: '±2dB SPL Across Room' }
    ]
  },
  {
    id: 'visual',
    number: '02',
    title: 'Visual & Display Engines',
    tagline: 'Technology designed to command attention.',
    description: 'From bezel-less direct-view MicroLED video walls to 4K laser projection mapping, we engineer visual displays with zero color degradation and HDR contrast.',
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Direct-View MicroLED & Fine-Pitch Video Walls (0.9mm - 1.5mm)',
      'High-Lumen 4K Laser Projection Mapping',
      'Interactive Touch & Collaboration Displays (65" - 110")',
      'Command & Control Room 24/7 Mission-Critical Video Walls',
      'Enterprise Digital Signage CMS Networks',
      'Hardware Windowing Video Processors & Multi-viewers',
      'AV-over-IP (SDVoE / 10G zero-latency uncompressed video)'
    ],
    features: [
      {
        title: 'Fine Pixel Pitch Clarity',
        description: 'MicroLED arrays with high contrast black levels and wide 178° viewing angles for boardrooms and experience centers.'
      },
      {
        title: 'Mission Critical 24/7 Reliability',
        description: 'Redundant power supplies and hot-swappable receiving cards for uninterrupted operations.'
      },
      {
        title: 'Zero Latency AV-over-IP',
        description: '10GbE fiber/copper routing of uncompressed 4K60 4:4:4 HDR video feeds instantly to any display endpoint.'
      }
    ],
    specs: [
      { label: 'Pixel Pitch Available', value: '0.7mm to 2.5mm' },
      { label: 'Display Refresh Rate', value: '3,840 Hz' },
      { label: 'Color Gamut', value: '110% NTSC / DCI-P3' },
      { label: 'MTBF Lifespan', value: '100,000+ Hours' }
    ]
  },
  {
    id: 'collaboration',
    number: '03',
    title: 'Unified Collaboration',
    tagline: 'Connect people. Connect ideas.',
    description: 'Transform spaces into certified Microsoft Teams Rooms, Zoom Rooms, and Cisco Webex environments with intelligent camera tracking, one-touch join, and wireless content sharing.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Certified Microsoft Teams Rooms (MTR) & Zoom Rooms',
      'AI-Powered Speaker Tracking & Group Framing PTZ Cameras',
      'Wireless Presentation & Screen Sharing (ClickShare, AirPlay, Miracast)',
      'Interactive Whiteboarding & Annotation Workflows',
      'All-in-One Collaboration Video Bars with Beamforming Audio',
      'BYOM (Bring Your Own Meeting) Multi-Platform Flexibility'
    ],
    features: [
      {
        title: 'Intelligent AI Director Cameras',
        description: 'Automatic multi-camera switching dynamically frames active speakers while maintaining panoramic room context.'
      },
      {
        title: 'One-Touch Join Experience',
        description: 'Start scheduled calendar meetings instantly from tabletop touch controllers with zero connection delays.'
      },
      {
        title: 'Seamless BYOM Switching',
        description: 'Single USB-C cable supplies 4K display output, room camera, room microphone array, and 65W laptop charging.'
      }
    ],
    specs: [
      { label: 'Native Certification', value: 'MS Teams & Zoom' },
      { label: 'Camera Resolution', value: '4K Ultra HD @ 60fps' },
      { label: 'Wireless Latency', value: '< 30ms' },
      { label: 'Single Cable Hub', value: 'USB-C DP Alt Mode + 100W PD' }
    ]
  },
  {
    id: 'automation',
    number: '04',
    title: 'Intelligent Automation & IoT',
    tagline: 'One touch. Complete control.',
    description: 'Custom programming unifying lighting scenes, motorized shades, climate controls, video matrices, and projection screens into intuitive touch glass interfaces.',
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Crestron, Extron & AMX Custom Automation Programming',
      'Motorized Acoustic Shades & Tensioned Screen Controls',
      'DALI & 0-10V Architectural Lighting Control Integration',
      'HVAC & Climate Environmental Management',
      'Occupancy Sensor-Based Automatic Power Cycling',
      'Cloud-Based Remote Monitoring & Telemetry (IoT)'
    ],
    features: [
      {
        title: 'Custom Branded UI Profiles',
        description: 'Tailored tablet UI interfaces designed specifically for executive ergonomics and zero training required.'
      },
      {
        title: 'Automated Macro Sequencing',
        description: 'A single tap dims room lighting, drops motorized acoustic screens, turns on projection, and un-mutes mics.'
      },
      {
        title: 'Centralized Device Health Diagnostics',
        description: 'Live alerts before lamp failures, IP drops, or thermal spikes impact operational meetings.'
      }
    ],
    specs: [
      { label: 'Control Protocol', value: 'IP, RS-232, RS-485, Relay, IR' },
      { label: 'Macro Execution Time', value: '< 400ms' },
      { label: 'Sensor Polling', value: 'Real-time MQTT / WebSocket' },
      { label: 'Redundancy', value: 'Dual Failover Processors' }
    ]
  },
  {
    id: 'experience',
    number: '05',
    title: 'Immersive Experience Centers',
    tagline: 'Technology that disappears into the experience.',
    description: 'We construct architectural digital environments, corporate innovation labs, simulation domes, and interactive storytelling pavilions combining spatial audio, gesture sensors, and 3D projection.',
    heroImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80',
    services: [
      'Spatial 3D & Ambisonic Multi-Channel Audio',
      '360-Degree Cave Automatic Virtual Environments (CAVE)',
      'Architectural Projection Mapping onto Physical Facades',
      'LiDAR & Optical Motion Interactive Floor / Wall Sensors',
      'Corporate Briefing Centers & Tech Showcase Pavilions'
    ],
    features: [
      {
        title: 'Spatialized Object Audio',
        description: 'Sound elements move smoothly across 3D room coordinates matching visual holographic paths.'
      },
      {
        title: 'Interactive LiDAR Tracking',
        description: 'Real-time multi-user gesture and body interaction triggering responsive digital canvas graphics.'
      },
      {
        title: 'Synchronized Sensory Immersion',
        description: 'DMX controlled lighting and ambient environmental triggers aligned down to millisecond timecode.'
      }
    ],
    specs: [
      { label: 'Timecode Sync', value: 'SMPTE / Art-Net (< 1ms)' },
      { label: 'Interactive Latency', value: '< 15ms LiDAR response' },
      { label: 'Spatial Audio Nodes', value: 'Up to 64 discrete channels' },
      { label: 'Dynamic Warping', value: 'Sub-pixel geometry alignment' }
    ]
  }
];
