import React, { useState } from 'react';
import { 
  Video, 
  Tv, 
  Mic, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Zap,
  MonitorCheck,
  Server
} from 'lucide-react';
import { soundFx } from '../utils/sound';
import './LandingPages.css';

interface VideoConferencingPageProps {
  onStartProject: () => void;
  onNavigate?: (page: string, targetId?: string) => void;
}

export const VideoConferencingPage: React.FC<VideoConferencingPageProps> = ({ onStartProject, onNavigate }) => {
  const [activeEcosystem, setActiveEcosystem] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const ecosystems = [
    {
      id: 'teams-rooms',
      name: 'Microsoft Teams Rooms (MTR)',
      tag: 'NATIVE TEAMS ON WINDOWS & ANDROID',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
      headline: 'Certified Microsoft Teams Rooms with Front Row Layout',
      desc: 'Purpose-built meeting room systems engineered for Microsoft Teams. Includes 1-touch meeting join, Front Row 21:9 visual layout placing remote attendees at eye-level, and Copilot AI meeting transcription.',
      features: [
        'Front Row layout with dedicated chat & hand-raise panels',
        'Direct Guest Join: one-tap join for Zoom and Webex meetings',
        'Intelligent speaker attribution with Microsoft Cloud AI',
        'Enterprise management via Teams Admin Center (TAC)'
      ],
      hardware: ['Poly Studio X52 / X70', 'Logitech Rally Bar + Tap IP', 'Yealink MVC860', 'Neat Bar Pro'],
      idealFor: 'Enterprise organizations standardized on Microsoft 365 and Teams.'
    },
    {
      id: 'zoom-rooms',
      name: 'Zoom Rooms & Intelligent Director',
      tag: 'AI MULTI-CAMERA STREAMING',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
      headline: 'Multi-Camera Auto-Framing & Zoom Rooms Appliances',
      desc: 'Zoom Rooms certified hardware delivering frictionless video collaboration with Zoom Intelligent Director. Uses multiple cameras to capture individual video streams of in-room participants for equitable hybrid meetings.',
      features: [
        'Zoom Intelligent Director: individual square video feeds for every person',
        'Interactive whiteboard annotation with 4K touch displays',
        'Direct AirPlay, HDMI, and ultrasonic wireless screen sharing',
        'Digital room scheduling displays outside the door with LED status'
      ],
      hardware: ['Neat Board 65', 'Logitech Rally Bar + Tap Scheduler', 'Poly Studio E70', 'DTEN D7X'],
      idealFor: 'Tech companies, universities, and distributed remote-first teams.'
    },
    {
      id: 'byom-agnostic',
      name: 'BYOM (Bring Your Own Meeting)',
      tag: 'UNIVERSAL PLATFORM AGNOSTIC',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      headline: 'Wireless USB Peripheral Bridging for Any Calling App',
      desc: 'Connect any laptop via a single USB-C cable or wireless Barco ClickShare button to utilize the room’s high-end 4K cameras, ceiling microphones, and commercial displays with Google Meet, Webex, Zoom, or Teams.',
      features: [
        'Zero driver installation: works seamlessly with Windows, Mac, Linux',
        'Full wireless camera and audio peripheral bridging in 4K',
        'Simultaneous 100W USB-C Power Delivery laptop fast-charging',
        'Universal compatibility with Webex, Google Meet, BlueJeans, and Zoom'
      ],
      hardware: ['Barco ClickShare CX-30 / CX-50', 'Airtame Hub', 'Lightware Taurus UCX', 'Biamp Modena'],
      idealFor: 'Co-working spaces, consultancy firms, and multi-tenant offices.'
    }
  ];

  const currentEco = ecosystems[activeEcosystem];

  const nextGenTech = [
    {
      title: 'AI Multi-Camera Speaker Tracking',
      badge: 'POLY DIRECTOR AI / LOGI SIGHT',
      icon: Video,
      desc: 'Intelligent dual-camera systems that dynamically transition between wide room shots and close-ups of active speakers with cinema-like panning, eliminating flat, boring meeting views.'
    },
    {
      title: 'Acoustic Fence & NoiseBlock AI',
      badge: 'ZERO AMBIENT DISTRACTIONS',
      icon: Mic,
      desc: 'Machine learning audio filtering that defines an acoustic boundary around your conference table, completely blocking keyboard clicks, paper shuffling, air conditioning hiss, and hallway chatter.'
    },
    {
      title: 'Dual-Display & Front Row 21:9',
      badge: 'HYBRID WORKPLACE EQUITY',
      icon: Tv,
      desc: 'Ultra-wide displays and dual-screen configurations ensuring remote video participants are shown life-sized at natural eye level alongside presentation slides, meeting chat, and raised hands.'
    },
    {
      title: 'Centralized Cloud Fleet Monitoring',
      badge: 'REMOTE SLA TELEMETRY',
      icon: Server,
      desc: 'Proactive 24/7 cloud health telemetry tracking room connectivity, peripheral status, firmware security updates, and automated diagnostic alerts before meetings begin.'
    }
  ];

  const faqs = [
    {
      q: 'What makes video conferencing solutions in Chennai from AVN Solutions unique?',
      a: 'We provide certified end-to-end integration rather than just shipping hardware boxes. Our CTS-certified team performs acoustic RT60 simulations, optimizes lighting angles, conceals all cabling, configures 10GbE network QoS, and provides guaranteed 2-hour on-site emergency SLA support from our Sholinganallur hub.'
    },
    {
      q: 'Can we try video conferencing hardware before purchasing?',
      a: 'Yes! We welcome your IT and facilities teams to visit our Sholinganallur Experience Center on OMR, Chennai. Experience live comparisons between Microsoft Teams Rooms and Zoom Rooms, test AI auto-framing cameras, and listen to acoustic beamforming ceiling mics in real time.'
    },
    {
      q: 'Can we join Zoom and Webex meetings from a Microsoft Teams Room?',
      a: 'Yes. With Direct Guest Join (DGJ) enabled on our certified Microsoft Teams Rooms, meeting invites from Zoom or Cisco Webex appear directly on the tabletop touch controller with a single "Join" button.'
    },
    {
      q: 'Do you offer annual maintenance contracts (AMC) for video conferencing systems in Chennai?',
      a: 'Yes. We offer Tier-1 to Tier-3 SLA contracts that include quarterly preventive health checks, firmware upgrades, rapid 2-hour emergency dispatch across Chennai, and standby hardware replacement units stored locally.'
    },
    {
      q: 'What internet bandwidth is required for 4K video conferencing?',
      a: 'For single 1080p video streams, 4 to 6 Mbps dedicated symmetric bandwidth is recommended. For dual-display 4K Teams Rooms with Front Row, we recommend 15 to 25 Mbps dedicated low-jitter bandwidth with configured Quality of Service (QoS) on your enterprise firewall.'
    }
  ];

  return (
    <div className="landing-page-container">
      {/* 1. HERO BANNER */}
      <section className="landing-hero-banner">
        <div className="container-wide landing-hero-inner">
          <div className="landing-badge-pill">
            <Video size={14} className="text-cyan" />
            <span>CERTIFIED TEAMS & ZOOM ROOMS INTEGRATOR • CHENNAI</span>
          </div>

          <h1 className="landing-hero-title">
            Video Conferencing Solutions Chennai | Enterprise <br />
            <span className="landing-title-gradient">Hybrid Meeting Space Systems.</span>
          </h1>

          <p className="landing-hero-subtitle">
            Certified Microsoft Teams Rooms (MTR) and Zoom Rooms designed and installed in Chennai. Intelligent AI multi-camera speaker framing, acoustic fence audio, and wireless BYOM meeting integration.
          </p>

          {/* Quick Metrics Strip */}
          <div className="landing-stats-strip">
            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Zap size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">1-Touch</span>
                <span className="landing-stat-lbl">Instant Join Consoles</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Tv size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">4K 60fps</span>
                <span className="landing-stat-lbl">Presentation Clarity</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Mic size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">0 Echo</span>
                <span className="landing-stat-lbl">AEC Noise Suppression</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Award size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">180+</span>
                <span className="landing-stat-lbl">VC Rooms in Chennai</span>
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
              <span>Book an Experience Center Demo</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="btn-outline"
              onClick={() => {
                soundFx.playClick();
                if (onNavigate) onNavigate('contact');
              }}
            >
              <span>Visit Sholinganallur Showroom</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE PLATFORM & HARDWARE ECOSYSTEM MATCH */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="landing-section-head">
            <span className="landing-badge-mini">
              <MonitorCheck size={14} />
              <span>PLATFORM ECOSYSTEM MATCHER</span>
            </span>
            <h2 className="landing-grand-title">Certified for Your Collaboration Platform</h2>
            <p className="landing-sub-desc">
              Whether your enterprise is standardizing on Microsoft Teams, Zoom Rooms, or needs universal BYOM flexibility, we engineer native room appliances with certified hardware.
            </p>
          </div>

          <div className="ecosystem-selector-box">
            {/* Tabs */}
            <div className="ecosystem-nav-tabs">
              {ecosystems.map((eco, idx) => (
                <button
                  key={eco.id}
                  className={`ecosystem-tab-btn ${activeEcosystem === idx ? 'is-active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(920 + idx * 30);
                    setActiveEcosystem(idx);
                  }}
                >
                  <Video size={18} />
                  <span>{eco.name}</span>
                </button>
              ))}
            </div>

            {/* Ecosystem Body */}
            <div className="ecosystem-body-grid">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="landing-badge-mini" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                  {currentEco.tag}
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  {currentEco.headline}
                </h3>
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {currentEco.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  {currentEco.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} className="text-cyan" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: 'var(--bg-muted)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.5rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Ideal Organization Profile:
                  </strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>{currentEco.idealFor}</span>
                </div>

                <button
                  className="btn-primary"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={() => {
                    soundFx.playPowerChime();
                    onStartProject();
                  }}
                >
                  <span>Specify {currentEco.name} Solution</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Photo & Hardware Col */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '280px', border: '1px solid var(--border-color)' }}>
                  <img 
                    src={currentEco.image} 
                    alt={currentEco.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,18,28,0.1) 0%, rgba(11,18,28,0.7) 100%)' }} />
                  <span style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: '#FFFFFF', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 700, background: 'rgba(17,28,42,0.85)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                    {currentEco.name} LIVE DEPLOYMENT
                  </span>
                </div>

                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    Certified Hardware Appliances:
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                    {currentEco.hardware.map((hw, hIdx) => (
                      <div key={hIdx} style={{ background: 'var(--bg-muted)', border: '1px solid var(--border-color)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {hw}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. NEXT-GEN VIDEO COLLABORATION TECHNOLOGIES */}
          <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <div className="landing-section-head">
              <span className="landing-badge-mini">
                <Sparkles size={14} />
                <span>INTELLIGENT MEETING CAPABILITIES</span>
              </span>
              <h2 className="landing-grand-title">Next-Gen Video Conferencing Technologies</h2>
              <p className="landing-sub-desc">
                Move beyond static webcams. Deliver meeting equity where in-room participants and remote colleagues interact as if sharing the same physical table.
              </p>
            </div>

            <div className="subsystems-grid-4">
              {nextGenTech.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div key={idx} className="subsystem-card" data-cursor="explore">
                    <div className="subsystem-card-top">
                      <div className="subsystem-icon-box">
                        <Icon size={24} />
                      </div>
                      <span className="subsystem-tech-badge">{tech.badge}</span>
                    </div>
                    <h3 className="subsystem-title">{tech.title}</h3>
                    <p className="subsystem-desc">{tech.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. LOCAL CHENNAI SUPPORT & SPARES DEPOT */}
          <div className="chennai-corridors-banner">
            <span className="landing-badge-mini" style={{ background: 'rgba(255, 90, 31, 0.18)', color: '#FF6B35', border: '1px solid rgba(255, 90, 31, 0.3)' }}>
              <ShieldCheck size={14} />
              <span>LOCAL HARDWARE REPLACEMENT DEPOT</span>
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Guaranteed Zero Video Conferencing Downtime in Chennai
            </h3>
            <p style={{ color: '#CBD5E1', maxWidth: '700px', fontSize: '1rem', lineHeight: 1.6 }}>
              We warehouse genuine replacement video bars, touch consoles, microphones, and compute units at our Sholinganallur depot to provide same-day hot-swap replacements under our AMC contracts.
            </p>

            <div className="chennai-corridors-grid">
              <div className="corridor-item">
                <h4 className="corridor-title">Standby Spare Inventory</h4>
                <p className="corridor-hubs">Immediate hot-swap video bars and touch consoles kept ready in Sholinganallur.</p>
                <span className="corridor-sla-pill">Same-Day Swap</span>
              </div>
              <div className="corridor-item">
                <h4 className="corridor-title">2-Hour Chennai SLA</h4>
                <p className="corridor-hubs">Field service engineers dispatched across OMR, Guindy, and Ambattur within 120 minutes.</p>
                <span className="corridor-sla-pill">Guaranteed Response</span>
              </div>
              <div className="corridor-item">
                <h4 className="corridor-title">Quarterly Preventive Audits</h4>
                <p className="corridor-hubs">Scheduled firmware updates, acoustic re-calibration, and lens cleaning visits.</p>
                <span className="corridor-sla-pill">Scheduled Maintenance</span>
              </div>
              <div className="corridor-item">
                <h4 className="corridor-title">Executive Meeting Concierge</h4>
                <p className="corridor-hubs">On-site stand-by engineering assistance for high-stakes investor or board calls.</p>
                <span className="corridor-sla-pill">VIP Standby Support</span>
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
              <h2 className="landing-grand-title">Video Conferencing Solutions: FAQs</h2>
              <p className="landing-sub-desc">
                Common questions about Teams Rooms vs Zoom Rooms, bandwidth requirements, demo center visits, and AMC contracts.
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
              Transform Your Hybrid Meeting Experience
            </h3>
            <p className="landing-cta-desc">
              Book a live demonstration at our Sholinganallur Experience Center or request an on-site survey of your Chennai meeting rooms.
            </p>
            <div className="landing-cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Request Video Conferencing Quote</span>
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
