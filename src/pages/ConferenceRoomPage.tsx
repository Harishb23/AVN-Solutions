import React, { useState } from 'react';
import { 
  Building2, 
  Tv, 
  Volume2, 
  Sliders, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Zap,
  Users
} from 'lucide-react';
import { soundFx } from '../utils/sound';
import './LandingPages.css';

interface ConferenceRoomPageProps {
  onStartProject: () => void;
  onNavigate?: (page: string, targetId?: string) => void;
}

export const ConferenceRoomPage: React.FC<ConferenceRoomPageProps> = ({ onStartProject, onNavigate }) => {
  const [activeRoomIdx, setActiveRoomIdx] = useState<number>(1); // Default to Medium Conference Room
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const roomConfigurations = [
    {
      id: 'huddle-room',
      title: 'Huddle Room',
      capacity: '4 - 6 Seats',
      area: '120 - 180 sq.ft',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
      headline: 'Agile 4K Hybrid Collaboration for Quick Standups',
      desc: 'Compact, high-efficiency spaces equipped with an all-in-one smart video bar, auto-framing 4K camera, integrated beamforming mic array, and an 8" touch join console.',
      display: '55" - 65" 4K Commercial Grade Display (16/7 or 24/7 rating)',
      audio: 'Integrated 6-element beamforming microphone with acoustic echo cancellation',
      camera: '4K ePTZ wide-angle 120° FOV with AI group auto-framing',
      control: '8-inch table touch console with 1-touch meeting join',
      timeline: '3 - 5 Business Days',
      features: [
        'Single USB-C / HDMI cable plug-and-play BYOM connectivity',
        'Certified native Microsoft Teams Rooms or Zoom Rooms',
        'Ultrasonic wireless content sharing without dongles',
        'Automatic screen power-down when unoccupied'
      ],
      hardware: ['Poly Studio X30/X50', 'Logitech Rally Bar Mini', 'Samsung QB55C', 'Neat Bar']
    },
    {
      id: 'medium-room',
      title: 'Medium Conference Room',
      capacity: '8 - 14 Seats',
      area: '220 - 350 sq.ft',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      headline: 'Dual-Display Hybrid Workspace for Cross-Team Alignment',
      desc: 'The corporate workhorse room. Features dual 75" commercial displays for simultaneous remote video and content presentation, ceiling-mounted mic tiles, and wireless casting.',
      display: 'Dual 75" 4K Commercial Displays or 100" Ultra-Wide 21:9 Canvas',
      audio: 'Ceiling beamforming microphone array (Shure MXA920 / Sennheiser TCC2)',
      camera: 'Dual-camera optical PTZ system with voice-activated speaker tracking',
      control: '10.1-inch PoE tabletop touch panel with room scheduling indicator',
      timeline: '1 - 2 Weeks',
      features: [
        'Microsoft Teams Rooms Front Row layout with 21:9 ratio',
        'Full acoustic coverage: every seat heard with studio-grade clarity',
        'Barco ClickShare Conference wireless USB peripheral bridging',
        'Motorized table cable retractors (HDMI, USB-C 100W PD)'
      ],
      hardware: ['Shure MXA920', 'Q-SYS Core 8-Flex', 'Dual Samsung QM75C', 'Barco ClickShare CX-30']
    },
    {
      id: 'executive-boardroom',
      title: 'Executive Boardroom',
      capacity: '16 - 28 Seats',
      area: '400 - 800 sq.ft',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
      headline: 'Zero-Compromise Luxury MicroLED & Unified Automation',
      desc: 'Engineered for executive leadership and investor board meetings. Features a seamless 135" Direct-View MicroLED video wall, multi-tile acoustic DSP, custom Crestron touch glass UI, and architectural lighting macros.',
      display: '135" or 162" 4K Seamless Bezel-less MicroLED Video Wall (0.9mm - 1.2mm)',
      audio: 'Multi-zone ceiling Dante array with calibrated AEC and subwoofers',
      camera: 'Multi-camera Director AI system with active speaker switching',
      control: 'Custom enterprise-branded Crestron / Q-SYS HTML5 touch glass UI',
      timeline: '2 - 3 Weeks',
      features: [
        'One-touch meeting preset dims lights, drops blinds, powers displays',
        'Speech Transmission Index STI > 0.68 concert-grade clarity',
        'Redundant 10G SDVoE video over IP architecture',
        'Executive table pop-up motorized architectural connectivity'
      ],
      hardware: ['Samsung The Wall / Leyard MicroLED', 'Crestron 4-Series', 'Biamp Tesira', 'Lutron Homeworks']
    },
    {
      id: 'townhall-multipurpose',
      title: 'All-Hands & Townhall Space',
      capacity: '30 - 100+ Seats',
      area: '1,000+ sq.ft',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=80',
      headline: 'Broadcast-Grade Scalable Audio & Steerable Line Arrays',
      desc: 'Versatile corporate auditorium and multi-purpose townhall space engineered with steerable column line arrays, wireless lavalier/handheld microphones, broadcast streaming encoders, and stage lighting.',
      display: 'High-Lumen 4K Laser Projection (15,000+ Lumens) or 200" Fine-Pitch LED',
      audio: 'Dante-networked steerable column line arrays with DSP feedback suppression',
      camera: 'Triple PTZ cameras with auto-tracking presenter AI and SDI production switcher',
      control: 'Dual 15-inch touch panels (podium + AV control booth) with iPad control',
      timeline: '3 - 4 Weeks',
      features: [
        'Live streaming to YouTube, Workplace, Teams Live, and Zoom Events',
        'Zero acoustic feedback with multi-channel DSP notch filters',
        'Wireless presentation for multiple simultaneous guest laptops',
        'Reconfigurable room partitioning (audio zone combine/divide)'
      ],
      hardware: ['Bose Professional / Q-SYS Columns', 'Christie 4K Laser', 'Blackmagic ATEM Mini Extreme', 'Sennheiser SpeechLine Digital']
    }
  ];

  const currentRoom = roomConfigurations[activeRoomIdx];

  const coreSubsystems = [
    {
      title: 'Visual Canvases & Fine-Pitch MicroLED',
      badge: '4K60 ULTRA-HD',
      icon: Tv,
      desc: 'Commercial displays rated for continuous 24/7 operation with anti-glare coatings, wide viewing angles, and bezel-less Direct-View MicroLED walls delivering deep blacks.'
    },
    {
      title: 'Acoustic Beamforming & AEC DSP',
      badge: 'STI > 0.68 CLARITY',
      icon: Volume2,
      desc: 'Ceiling microphone tiles with dynamic steerable lobes tracking speakers as they walk around the room, coupled with acoustic echo cancellation to prevent annoying echo.'
    },
    {
      title: 'Unified Touch Screen Automation',
      badge: 'SINGLE-TOUCH STARTUP',
      icon: Sliders,
      desc: 'Intuitive table touch panels programmed to automate displays, camera presets, audio levels, motorized blinds, and room lighting with zero technical friction.'
    },
    {
      title: 'Wireless Presentation & BYOM',
      badge: 'ZERO CABLE CLUTTER',
      icon: Share2,
      desc: 'Instant screen casting from Windows, Mac, iOS, or Android devices without installing third-party drivers, plus seamless USB camera and mic bridging.'
    }
  ];

  const faqs = [
    {
      q: 'What is included in a turnkey conference room AV solution?',
      a: 'Our turnkey conference room solutions include complete acoustic site survey, architectural AutoCAD wiring schematics, commercial 4K displays or MicroLED walls, beamforming ceiling microphone tiles, digital signal processors (DSP), video conferencing cameras, table touch automation panels, structural laser-aligned mounting, Fluke-certified cabling, user training, and 24/7 SLA maintenance.'
    },
    {
      q: 'Can our meeting rooms support both Microsoft Teams and Zoom calls?',
      a: 'Yes! We configure systems with native Microsoft Teams Rooms (MTR) or Zoom Rooms with Direct Guest Join enabled, allowing you to join Zoom meetings from a Teams Room and vice-versa with a single tap. We also engineer BYOM (Bring Your Own Meeting) architectures so any laptop can use the room cameras and microphones for Google Meet, Webex, or any calling software.'
    },
    {
      q: 'How do you ensure speech is clear in conference rooms with glass walls?',
      a: 'Conference rooms with large glass walls and hardwood tables frequently suffer from severe acoustic reverberation (RT60 > 1.0 second). We solve this through scientific Smaart V8 acoustic measurement, strategic installation of fabric-wrapped acoustic panels, and DSP beamforming microphones with adaptive noise suppression and acoustic echo cancellation.'
    },
    {
      q: 'How long does it take to deploy a conference room AV system in Chennai?',
      a: 'Standard huddle and medium conference rooms are typically deployed in 3 to 7 business days. Executive boardrooms with custom MicroLED walls and automation take 1 to 2 weeks. All equipment is pre-staged and tested in our Sholinganallur lab to minimize on-site downtime.'
    },
    {
      q: 'Do you provide local AMC and warranty support in Chennai?',
      a: 'Yes. AVN Solutions provides guaranteed 2-hour on-site emergency SLA support across Chennai with standby hardware inventory kept in our local warehouse.'
    }
  ];

  return (
    <div className="landing-page-container">
      {/* 1. HERO BANNER */}
      <section className="landing-hero-banner">
        <div className="container-wide landing-hero-inner">
          <div className="landing-badge-pill">
            <Building2 size={14} className="text-cyan" />
            <span>HIGH-IMPACT BOARDROOMS & MEETING ROOMS • TURNKEY SYSTEMS</span>
          </div>

          <h1 className="landing-hero-title">
            Conference Room AV Solutions | Modern <br />
            <span className="landing-title-gradient">Meeting Space Engineering.</span>
          </h1>

          <p className="landing-hero-subtitle">
            Turnkey audio visual systems designed for executive decision making, client presentations, and seamless hybrid meetings. 4K displays, beamforming ceiling audio, and intuitive one-touch automation.
          </p>

          {/* Quick Metrics Strip */}
          <div className="landing-stats-strip">
            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Zap size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">1-Touch</span>
                <span className="landing-stat-lbl">Instant Meeting Join</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Volume2 size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">&lt; 15ms</span>
                <span className="landing-stat-lbl">Audio DSP Latency</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">99.98%</span>
                <span className="landing-stat-lbl">Room Reliability</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Award size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">100+</span>
                <span className="landing-stat-lbl">Boardrooms Live</span>
              </div>
            </div>
          </div>

          <div className="landing-hero-actions">
            <button 
              className="btn-primary" 
              onClick={() => {
                soundFx.playPowerChime();
                onStartProject();
              }}
            >
              <span>Configure Your Conference Room</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="btn-outline"
              onClick={() => {
                soundFx.playClick();
                if (onNavigate) onNavigate('tools');
              }}
            >
              <span>Use Interactive AV Budget Estimator</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE ROOM SIZE CONFIGURATOR */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="landing-section-head">
            <span className="landing-badge-mini">
              <Users size={14} />
              <span>SPACE ARCHITECTURE CONFIGURATOR</span>
            </span>
            <h2 className="landing-grand-title">Explore Conference Room Configurations</h2>
            <p className="landing-sub-desc">
              Select your room capacity below to explore recommended display dimensions, audio architecture, control options, and turnaround timelines.
            </p>
          </div>

          <div className="room-configurator-card">
            {/* Tabs Selector */}
            <div className="configurator-tabs-nav">
              {roomConfigurations.map((room, rIdx) => (
                <button
                  key={room.id}
                  className={`config-tab-btn ${activeRoomIdx === rIdx ? 'is-active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(900 + rIdx * 30);
                    setActiveRoomIdx(rIdx);
                  }}
                >
                  <span className="config-tab-title">{room.title}</span>
                  <span className="config-tab-capacity">{room.capacity}</span>
                </button>
              ))}
            </div>

            {/* Configurator Content Body */}
            <div className="configurator-content-grid">
              {/* Photo Column */}
              <div className="config-photo-col">
                <img 
                  src={currentRoom.image} 
                  alt={currentRoom.title} 
                  className="config-photo-img" 
                />
                <div className="config-photo-overlay" />
                <span className="config-photo-tag">{currentRoom.capacity.toUpperCase()}</span>
                <div className="config-photo-info">
                  <h3 className="config-photo-headline">{currentRoom.title}</h3>
                  <p className="config-photo-sub">{currentRoom.headline}</p>
                </div>
              </div>

              {/* Details Column */}
              <div className="config-details-col">
                <h3 className="config-room-name">{currentRoom.title} Architecture</h3>
                <p className="config-room-desc">{currentRoom.desc}</p>

                <div className="config-specs-grid">
                  <div className="config-spec-chip">
                    <span className="config-spec-label">Room Dimensions</span>
                    <span className="config-spec-val">{currentRoom.area}</span>
                  </div>
                  <div className="config-spec-chip">
                    <span className="config-spec-label">Typical Turnaround</span>
                    <span className="config-spec-val">{currentRoom.timeline}</span>
                  </div>
                  <div className="config-spec-chip">
                    <span className="config-spec-label">Recommended Visuals</span>
                    <span className="config-spec-val">{currentRoom.display}</span>
                  </div>
                  <div className="config-spec-chip">
                    <span className="config-spec-label">Acoustic Audio Stack</span>
                    <span className="config-spec-val">{currentRoom.audio}</span>
                  </div>
                </div>

                <div className="config-features-list">
                  {currentRoom.features.map((feat, fIdx) => (
                    <div key={fIdx} className="config-feat-item">
                      <CheckCircle2 size={16} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    className="btn-primary" 
                    style={{ flex: 1, justifyContent: 'center' }}
                    onClick={() => {
                      soundFx.playPowerChime();
                      onStartProject();
                    }}
                  >
                    <span>Request BOQ for {currentRoom.title}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. 4 CORE SUBSYSTEMS OF MODERN CONFERENCE ROOMS */}
          <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <div className="landing-section-head">
              <span className="landing-badge-mini">
                <Sparkles size={14} />
                <span>INTEGRATED SUBSYSTEMS</span>
              </span>
              <h2 className="landing-grand-title">4 Pillars of Modern Conference Room AV</h2>
              <p className="landing-sub-desc">
                Harmonized audio, video, automation, and wireless sharing working together to make every meeting effortlessly productive.
              </p>
            </div>

            <div className="subsystems-grid-4">
              {coreSubsystems.map((sub, idx) => {
                const Icon = sub.icon;
                return (
                  <div key={idx} className="subsystem-card" data-cursor="explore">
                    <div className="subsystem-card-top">
                      <div className="subsystem-icon-box">
                        <Icon size={24} />
                      </div>
                      <span className="subsystem-tech-badge">{sub.badge}</span>
                    </div>
                    <h3 className="subsystem-title">{sub.title}</h3>
                    <p className="subsystem-desc">{sub.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. CHENNAI CORPORATE INSTALLATIONS */}
          <div className="chennai-corridors-banner">
            <span className="landing-badge-mini" style={{ background: 'rgba(255, 90, 31, 0.18)', color: '#FF6B35', border: '1px solid rgba(255, 90, 31, 0.3)' }}>
              <Building2 size={14} />
              <span>CHENNAI ENTERPRISE TRUST</span>
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Trusted by Top Corporate Boardrooms Across Tamil Nadu
            </h3>
            <p style={{ color: '#CBD5E1', maxWidth: '700px', fontSize: '1rem', lineHeight: 1.6 }}>
              From executive boardroom suites on OMR to multi-purpose townhalls in Guindy, AVN Solutions has delivered over 100 mission-critical conference spaces with 99.98% verified uptime.
            </p>

            <div className="chennai-corridors-grid">
              <div className="corridor-item">
                <h4 className="corridor-title">Executive MicroLED Boardrooms</h4>
                <p className="corridor-hubs">0.9mm bezel-less fine-pitch video walls with Shure MXA920 ceiling mics in Sholinganallur & Guindy.</p>
                <span className="corridor-sla-pill">99.98% Uptime SLA</span>
              </div>
              <div className="corridor-item">
                <h4 className="corridor-title">Hybrid Teams & Zoom Rooms</h4>
                <p className="corridor-hubs">Front Row dual-display meeting suites deployed across IT campuses in Siruseri & Ambattur.</p>
                <span className="corridor-sla-pill">1-Touch Instant Join</span>
              </div>
              <div className="corridor-item">
                <h4 className="corridor-title">Corporate Townhall Auditoriums</h4>
                <p className="corridor-hubs">15,000-lumen laser projection and steerable line arrays for all-hands meetings up to 500 attendees.</p>
                <span className="corridor-sla-pill">Broadcast 4K Streaming</span>
              </div>
              <div className="corridor-item">
                <h4 className="corridor-title">Rapid Hardware RMA Support</h4>
                <p className="corridor-hubs">Dedicated local spare units in Sholinganallur warehouse guaranteeing prompt hardware swaps.</p>
                <span className="corridor-sla-pill">2-Hour Emergency SLA</span>
              </div>
            </div>
          </div>

          {/* 5. FREQUENTLY ASKED QUESTIONS */}
          <div className="landing-faq-section">
            <div className="landing-section-head">
              <span className="landing-badge-mini">
                <Award size={14} />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </span>
              <h2 className="landing-grand-title">Conference Room AV Solutions: FAQs</h2>
              <p className="landing-sub-desc">
                Common questions about room sizing, Teams/Zoom platform compatibility, acoustic treatments, and BOQ estimates.
              </p>
            </div>

            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div key={fIdx} className={`landing-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button 
                    className="landing-faq-question"
                    onClick={() => {
                      soundFx.playClick(850 + fIdx * 20);
                      setOpenFaq(isOpen ? null : fIdx);
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-cyan" /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div className="landing-faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 6. CONVERSION CTA BANNER */}
          <div className="landing-cta-banner">
            <h3 className="landing-cta-headline">
              Upgrade Your Conference Rooms Today
            </h3>
            <p className="landing-cta-desc">
              Request a free room acoustic audit and 3D concept drawing. Our senior solution architects in Chennai will evaluate your space and generate a tailored BOQ within 24 hours.
            </p>
            <div className="landing-cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Request Custom Room Proposal</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href="tel:04424501688"
                className="btn-outline"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <span>Call Chennai Experience Center</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
