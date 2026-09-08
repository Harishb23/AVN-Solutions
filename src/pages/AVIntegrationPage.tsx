import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Network, 
  Sliders, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Award, 
  Building2, 
  MapPin, 
  FileCode, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Zap,
  Server
} from 'lucide-react';
import { soundFx } from '../utils/sound';
import './LandingPages.css';

interface AVIntegrationPageProps {
  onStartProject: () => void;
  onNavigate?: (page: string, targetId?: string) => void;
}

export const AVIntegrationPage: React.FC<AVIntegrationPageProps> = ({ onStartProject, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const subsystems = [
    {
      id: 'sdvoe-nvx',
      title: '10G SDVoE & NVX Video Over IP',
      badge: 'ZERO-LATENCY 4K60 4:4:4',
      icon: Network,
      desc: 'Distributed video matrix architecture replacing bulky centralized chassis. Transmit uncompressed 4K60 HDR video across standard 10GbE enterprise network switches with sub-millisecond latency.',
      highlights: [
        'Sub-millisecond glass-to-glass latency',
        'Independent multi-stream audio breakaway',
        'AES-128 broadcast encryption compliance',
        'Dynamic multi-view canvas & video wall scaling'
      ],
      hardware: ['Crestron DM NVX', 'ZeeVee SDVoE', 'NETGEAR M4250/M4300 AV Line', 'Barco ClickShare CX-50']
    },
    {
      id: 'dante-dsp',
      title: 'Dante™ & AES67 Networked Audio DSP',
      badge: 'STUDIO CLARITY (STI > 0.68)',
      icon: Layers,
      desc: 'High-headroom acoustic DSP topology running Dante gigabit streams over Cat6A. Integrates ceiling beamforming microphone tiles with acoustic echo cancellation (AEC) and adaptive noise filtering.',
      highlights: [
        'Acoustic Echo Cancellation (AEC) per channel',
        'Real-time automated ceiling beam steering',
        'Smaart V8 transfer function acoustic tuning',
        'VoIP / SIP native teleconference integration'
      ],
      hardware: ['Q-SYS Core 110f/8-Flex', 'Biamp TesiraFORTÉ', 'Shure Microflex MXA920', 'Sennheiser TCC2']
    },
    {
      id: 'unified-control',
      title: 'Unified Crestron & Q-SYS Automation',
      badge: 'CUSTOM HTML5 INTERFACES',
      icon: Sliders,
      desc: 'Intuitive touch controls programmed with zero-learning-curve UX. Single-button macros coordinate displays, acoustic presets, motorized blinds, HVAC, and Teams/Zoom calls simultaneously.',
      highlights: [
        'Single-touch meeting startup macro sequence',
        'DALI-2 / KNX architectural lighting integration',
        'Bi-directional PoE occupancy sensor feedback',
        'Enterprise IT dashboard & cloud telemetry'
      ],
      hardware: ['Crestron 4-Series CP4-R', 'Extron IPCP Pro 360', 'Q-SYS Touch Panels', 'Lutron Athena / KNX']
    },
    {
      id: 'rack-architecture',
      title: 'Structured 10G Rack Architecture',
      badge: 'CFD THERMAL MODELING',
      icon: Server,
      desc: 'Pre-assembled, wired, and lab-tested AV racks engineered in our Sholinganallur facility. Every cable is laser-labeled, laced, and verified before site arrival to ensure zero on-site downtime.',
      highlights: [
        'Front-to-back chimney airflow thermal ventilation',
        'IP-monitored PDU with remote outlet rebooting',
        'Fluke DSX-8000 certified Cat6A & OM4 fiber links',
        'Standardized 19-inch seismic steel enclosures'
      ],
      hardware: ['Middle Atlantic BGR', 'APC Smart-UPS On-Line', 'Fluke Certified Cabling', 'Tripp Lite Monitored PDU']
    }
  ];

  const integrationStages = [
    {
      num: '01',
      title: 'Architectural Survey & Acoustic Audit',
      lead: 'Acoustic Engineer & CTS-D Designer',
      desc: 'On-site 3D laser measurement, ambient noise floor (NC) mapping, and RT60 reverberation analysis across your Chennai facility.'
    },
    {
      num: '02',
      title: 'AutoCAD Schematics & Cable Schedules',
      lead: 'AV CAD Specialist',
      desc: 'Full CAD single-line wiring diagrams, conduit conduit sizing, floor-box poke-through details, and exact power BTU dissipation specs.'
    },
    {
      num: '03',
      title: 'Off-Site Lab Staging & Firmware Hardening',
      lead: 'Systems Integrator (Sholinganallur Lab)',
      desc: 'Equipment racks are fully built, laced, powered, and burned-in for 72 hours in our Chennai integration lab prior to delivery.'
    },
    {
      num: '04',
      title: 'On-Site Integration & Network Configuration',
      lead: 'Senior Field Engineer (CTS-I)',
      desc: 'Precision physical deployment, IGMP Snooping multicast switch configuration, and VLAN QoS segregation for zero packet jitter.'
    },
    {
      num: '05',
      title: 'Smaart V8 Acoustic Tuning & Colorimetry',
      lead: 'Principal Audio/Visual Calibrator',
      desc: 'Calibrated microphone analysis ensuring Speech Transmission Index STI > 0.65, followed by ISF-calibrated video display colorimetry.'
    },
    {
      num: '06',
      title: 'User Training & 24/7 Monitored SLA Handover',
      lead: 'SLA Support Manager',
      desc: 'Hands-on executive admin training, complete as-built documentation delivery, and connection to our 2-hour Chennai dispatch desk.'
    }
  ];

  const chennaiHubs = [
    {
      name: 'OMR & Sholinganallur IT Corridor',
      landmarks: 'Tidel Park, ELCOT SEZ, Siruseri SIPCOT, Ascendas',
      sla: '30-45 Min Emergency Dispatch'
    },
    {
      name: 'Guindy & Mount Road Tech Corridor',
      landmarks: 'Olympia Tech Park, Ramanujan IT City, Guindy Industrial',
      sla: '45-60 Min On-Site Response'
    },
    {
      name: 'Ambattur & Porur Enterprise Zone',
      landmarks: 'DLF Cybercity, Ambattur IT Park, L&T Infotech Park',
      sla: '60 Min Emergency Dispatch'
    },
    {
      name: 'Central Chennai Commercial Districts',
      landmarks: 'Nungambakkam, T. Nagar, Alwarpet, MRC Nagar',
      sla: '45 Min Rapid Dispatch'
    }
  ];

  const faqs = [
    {
      q: 'What is the difference between AV integration and simple AV installation?',
      a: 'AV installation focuses on physically mounting displays and speakers. AV integration is the comprehensive engineering science that unifies disparate audio, video, IT networking, lighting, and control systems into one coherent, automated architecture. We write custom control code, tune acoustic DSP filters, configure 10GbE network switches, and provide turnkey engineering schematics.'
    },
    {
      q: 'Do you provide on-site AV integration services across Chennai tech parks?',
      a: 'Yes. Our headquarters and integration lab are located on OMR in Sholinganallur, Chennai. We actively serve corporate campuses, tech parks, universities, and hospitals across OMR, Guindy, Ambattur, Porur, Siruseri, and Central Chennai with guaranteed 2-hour emergency SLA response.'
    },
    {
      q: 'Can you integrate Crestron, Q-SYS, and Extron control systems?',
      a: 'Absolutely. AVN Solutions employs in-house certified programmers for Crestron (Crestron Certified Master Programmer), Q-SYS (Level 2 Certified), and Extron Control Professional. We design custom HTML5 user interfaces branded with your enterprise visual identity.'
    },
    {
      q: 'How do you prevent meeting downtime during the AV integration phase?',
      a: 'We eliminate on-site disruption through our off-site staging methodology. All server racks, video processors, DSPs, and network switches are 100% pre-built, wired, and tested in our Sholinganallur lab before arriving at your Chennai facility. On-site installation is completed rapidly during scheduled maintenance windows or weekends.'
    },
    {
      q: 'Do you provide turnkey BOQs, CAD drawings, and architectural coordination?',
      a: 'Yes. Every project includes comprehensive AutoCAD electrical schematics, elevation diagrams, rack elevations, heat dissipation calculations (BTU/hr), and Fluke Cat6A cable certification reports.'
    }
  ];

  return (
    <div className="landing-page-container">
      {/* 1. HERO BANNER */}
      <section className="landing-hero-banner">
        <div className="container-wide landing-hero-inner">
          <div className="landing-badge-pill">
            <Sparkles size={14} className="text-cyan" />
            <span>CHENNAI AV INTEGRATION LAB • AVIXA CTS-D RIGOR</span>
          </div>

          <h1 className="landing-hero-title">
            AV Integration Chennai | Turnkey <br />
            <span className="landing-title-gradient">Audio Visual System Integration.</span>
          </h1>

          <p className="landing-hero-subtitle">
            Enterprise audio visual integration engineered for Chennai workplaces. Custom AutoCAD schematics, Dante™ IP audio networking, DSP acoustic tuning, Crestron &amp; Q-SYS automation programming, and 10G zero-latency video over IP.
          </p>

          {/* Quick Metrics Strip */}
          <div className="landing-stats-strip">
            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Building2 size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">250+</span>
                <span className="landing-stat-lbl">Chennai Deployments</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Zap size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">10G SDVoE</span>
                <span className="landing-stat-lbl">Zero-Latency Video</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">99.98%</span>
                <span className="landing-stat-lbl">Meeting Room Uptime</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Award size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">CTS-D & CTS-I</span>
                <span className="landing-stat-lbl">AVIXA Certified Standards</span>
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
              <span>Consult an AV System Architect</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="btn-outline"
              onClick={() => {
                soundFx.playClick();
                if (onNavigate) onNavigate('projects');
              }}
            >
              <span>View Chennai Enterprise Portfolio</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SUBSYSTEM ARCHITECTURE EXPLORER */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="landing-section-head">
            <span className="landing-badge-mini">
              <Cpu size={14} />
              <span>CORE ARCHITECTURAL SUBSYSTEMS</span>
            </span>
            <h2 className="landing-grand-title">Engineering High-Availability AV Ecosystems</h2>
            <p className="landing-sub-desc">
              We design robust audio visual architectures where video over IP, acoustic DSP, and touch automation communicate over synchronized enterprise networks.
            </p>
          </div>

          <div className="subsystems-grid-4">
            {subsystems.map((sub) => {
              const Icon = sub.icon;
              return (
                <div key={sub.id} className="subsystem-card" data-cursor="explore">
                  <div className="subsystem-card-top">
                    <div className="subsystem-icon-box">
                      <Icon size={24} />
                    </div>
                    <span className="subsystem-tech-badge">{sub.badge}</span>
                  </div>

                  <h3 className="subsystem-title">{sub.title}</h3>
                  <p className="subsystem-desc">{sub.desc}</p>

                  <div className="subsystem-highlights">
                    {sub.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="subsystem-hl-item">
                        <CheckCircle2 size={15} />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Certified Hardware Partners:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {sub.hardware.map((hw, hwIdx) => (
                        <span key={hwIdx} style={{ fontSize: '0.75rem', background: 'var(--bg-muted)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-xs)', color: 'var(--text-secondary)' }}>
                          {hw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. 6-STAGE TURNKEY INTEGRATION LIFECYCLE */}
          <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <div className="landing-section-head">
              <span className="landing-badge-mini">
                <Clock size={14} />
                <span>STRUCTURED DELIVERY FRAMEWORK</span>
              </span>
              <h2 className="landing-grand-title">6-Stage Turnkey AV Integration Lifecycle</h2>
              <p className="landing-sub-desc">
                From initial acoustic site survey in Chennai to final Smaart V8 transfer function calibration and 24/7 SLA handover.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {integrationStages.map((stage, sIdx) => (
                <div 
                  key={sIdx} 
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'var(--font-mono)', color: 'var(--orange-primary)' }}>
                      {stage.num}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', background: 'var(--bg-muted)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', color: 'var(--text-tertiary)' }}>
                      {stage.lead}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                    {stage.title}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. LOCAL CHENNAI TRUST & SERVICE CORRIDORS */}
          <div className="chennai-corridors-banner">
            <span className="landing-badge-mini" style={{ background: 'rgba(255, 90, 31, 0.18)', color: '#FF6B35', border: '1px solid rgba(255, 90, 31, 0.3)' }}>
              <MapPin size={14} />
              <span>CHENNAI METROPOLITAN SERVICE CORRIDORS</span>
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Local Engineering Footprint Across Tamil Nadu
            </h3>
            <p style={{ color: '#CBD5E1', maxWidth: '700px', fontSize: '1rem', lineHeight: 1.6 }}>
              Headquartered at Sholinganallur on Old Mahabalipuram Road (OMR), our field engineering teams deliver same-day on-site support and turnkey integration across all major tech hubs.
            </p>

            <div className="chennai-corridors-grid">
              {chennaiHubs.map((hub, hIdx) => (
                <div key={hIdx} className="corridor-item">
                  <h4 className="corridor-title">{hub.name}</h4>
                  <p className="corridor-hubs">{hub.landmarks}</p>
                  <span className="corridor-sla-pill">
                    <Clock size={12} />
                    <span>{hub.sla}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. FREQUENTLY ASKED QUESTIONS */}
          <div className="landing-faq-section">
            <div className="landing-section-head">
              <span className="landing-badge-mini">
                <FileCode size={14} />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </span>
              <h2 className="landing-grand-title">AV Integration in Chennai: Expert Answers</h2>
              <p className="landing-sub-desc">
                Everything you need to know about turnkey AV integration, Crestron programming, and enterprise SLA contracts.
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
              Ready to Engineer Your Facility&apos;s AV Architecture?
            </h3>
            <p className="landing-cta-desc">
              Schedule a comprehensive on-site survey or visit our Sholinganallur experience center to experience live 10G SDVoE video over IP and beamforming audio.
            </p>
            <div className="landing-cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Request Detailed Integration BOQ</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href="tel:04424501688"
                className="btn-outline"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <span>Speak with Chennai Engineering Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
