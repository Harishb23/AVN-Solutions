import React, { useState } from 'react';
import { 
  Wrench, 
  Tv, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Award, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Zap,
  Server,
  Cable,
  Volume2,
  AlertCircle
} from 'lucide-react';
import { soundFx } from '../utils/sound';
import './LandingPages.css';

interface AVInstallationPageProps {
  onStartProject: () => void;
  onNavigate?: (page: string, targetId?: string) => void;
}

export const AVInstallationPage: React.FC<AVInstallationPageProps> = ({ onStartProject, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const installationDisciplines = [
    {
      id: 'laser-display',
      title: 'Laser-Calibrated Display & Video Wall Rigging',
      badge: 'OPTICAL PLANE LEVELING (0.2MM TOLERANCE)',
      icon: Tv,
      desc: 'Precision wall mounting for 65" to 110" single displays and multi-panel MicroLED / LCD video walls using optical crosshair laser levels. Every mount is anchored with seismic-rated hardware calculated to 4x working load.',
      checklist: [
        'Sub-millimeter seamless videowall panel alignment',
        'Structural unistrut framing & heavy stud anchoring',
        'Micro-adjustable scissor service brackets for easy rear maintenance',
        'Direct thermal gap verification for LED heat dissipation'
      ]
    },
    {
      id: 'ceiling-audio',
      title: 'Acoustic Ceiling Microphone & Speaker Suspension',
      badge: 'PLENUM RATED & SEISMIC RIGGED',
      icon: Volume2,
      desc: 'Clean integration of beamforming ceiling microphone tiles (Shure MXA920, Sennheiser TCC2) and coaxial in-ceiling speakers into acoustic 2x2 ceiling grids or open architectural ceilings.',
      checklist: [
        'Independent aircraft wire safety rigging to true concrete slab',
        'Plenum-rated CMP fire-resistant shielded cabling',
        'Phase and electro-acoustic impedance verification',
        'Zero ceiling tile vibration or mechanical rattling'
      ]
    },
    {
      id: 'rack-dressing',
      title: 'High-Density Server Rack Dressing & Lacing',
      badge: 'STANDARDIZED EIA-310 19-INCH RACKS',
      icon: Server,
      desc: 'Meticulously laced and cable-managed AV equipment racks. Power cords, analog audio, low-voltage control, and 10GbE network cables are physically segregated into separate vertical channels to eliminate electromagnetic interference (EMI).',
      checklist: [
        'Color-coded Cat6A / OM4 fiber optic patch cords',
        'Custom laser-printed heat-shrink cable labels at both terminations',
        'Horizontal & vertical velcro lacing bars with zero zip-tie pinching',
        'Dual-circuit monitored PDU power distribution & clean earthing'
      ]
    },
    {
      id: 'architectural-cabling',
      title: 'Concealed Architectural Cabling & Table Retractors',
      badge: '100% VISUAL CLUTTER ELIMINATION',
      icon: Cable,
      desc: 'Routing low-voltage cabling through wall chases, raised access floors, core-drilled floor boxes, and conference table grommets. Complete with motorized cable retractors for HDMI, USB-C 100W PD, and DisplayPort.',
      checklist: [
        'Clean core-drilled floor poke-through installations',
        'High-cycle motorized table cable retractors (10,000+ pull cycles)',
        'Fluke DSX-8000 Cat6A channel certification reports',
        'Acoustically caulked wall penetrations preserving room STC rating'
      ]
    }
  ];

  const qaChecklist = [
    {
      title: 'Structural Integrity & Pull Testing',
      desc: 'Anchors into reinforced concrete or heavy-gauge steel framing tested to 4x total hardware load factor.'
    },
    {
      title: 'Fluke DSX-8000 Certification',
      desc: 'Every copper Cat6A and multi-mode OM4 fiber drop is 100% certified with printed OTDR / near-end crosstalk (NEXT) graphs.'
    },
    {
      title: 'Ground Loop & Earthing Verification',
      desc: 'Ground resistance strictly measured below 2.0 Ohms to eliminate 50Hz audio hum, video hum bars, and static shocks.'
    },
    {
      title: 'Laser Planarity & Viewing Angles',
      desc: 'Dual-axis optical laser verification ensures flat-plane display orientation according to AVIXA DISCAS viewing standards.'
    },
    {
      title: 'Thermal Ventilation & Airflow Audit',
      desc: 'Front-to-back rack chimney airflow measured to guarantee all processors and amplifiers operate below 32°C ambient.'
    },
    {
      title: 'Cable Schedule As-Built Handover',
      desc: 'Complete laminated cable schedule placed inside every equipment rack detailing port-to-port wire mapping.'
    }
  ];

  const chennaiServiceZones = [
    {
      name: 'OMR & ECR Coastal Corridor',
      coverage: 'Sholinganallur, Karapakkam, Thoraipakkam, Perungudi, Navalur, Siruseri',
      dispatch: 'Immediate 30-Minute Dispatch'
    },
    {
      name: 'Guindy & Mount-Poonamallee Road',
      coverage: 'Guindy, Ekkatuthangal, Porur, Manapakkam, Ramapuram, DLF Cybercity',
      dispatch: 'Under 45 Minutes'
    },
    {
      name: 'Ambattur & Western Chennai',
      coverage: 'Ambattur Industrial Estate, Mogappair, Anna Nagar, Padi',
      dispatch: 'Under 60 Minutes'
    },
    {
      name: 'Central Chennai & CBD',
      coverage: 'Nungambakkam, Mount Road, T. Nagar, Alwarpet, Mylapore, Egmore',
      dispatch: 'Under 45 Minutes'
    }
  ];

  const faqs = [
    {
      q: 'Can you install AV systems in an already furnished or running office in Chennai?',
      a: 'Yes. A large portion of our installations are conducted in operational corporate workplaces. We offer flexible scheduling including after-hours, overnight shifts, and weekend installations to ensure zero disruption to your daily operations. Our teams use HEPA-filtered vacuum drilling and protective dust tarps.'
    },
    {
      q: 'What wall backing is required for mounting large 85" to 98" commercial displays?',
      a: 'For heavy displays (over 45 kg) on drywall or gypsum partitions, 18mm commercial marine-grade plywood backing installed inside the wall cavity or direct anchor bolting into structural brick/concrete columns is required. Our CTS-I engineers inspect wall construction and provide exact backing elevation diagrams.'
    },
    {
      q: 'Do you provide cable testing reports after installation?',
      a: 'Yes. Every structured Cat6A and fiber optic cable line pulled by AVN Solutions is tested and certified using Fluke DSX-8000 CableAnalyzers. You receive comprehensive PDF certification reports verifying return loss, delay skew, and wiremap.'
    },
    {
      q: 'Do you offer emergency AV repair and re-installation in Chennai?',
      a: 'Yes. If you have an existing conference room or auditorium in Chennai with failing cabling, loose mounts, or disorganized server racks, our field engineers provide rapid rehabilitation and rack re-dressing.'
    },
    {
      q: 'Are your field installation engineers AVIXA certified?',
      a: 'Yes. Our lead installation engineers hold AVIXA CTS-I (Certified Technology Specialist - Installation) credentials, guaranteeing compliance with international low-voltage wiring, mechanical rigging, and safety standards.'
    }
  ];

  return (
    <div className="landing-page-container">
      {/* 1. HERO BANNER */}
      <section className="landing-hero-banner">
        <div className="container-wide landing-hero-inner">
          <div className="landing-badge-pill">
            <Wrench size={14} className="text-cyan" />
            <span>CERTIFIED AV INSTALLATION CHENNAI • CTS-I RIGOR</span>
          </div>

          <h1 className="landing-hero-title">
            AV Installation Chennai | Precision <br />
            <span className="landing-title-gradient">Commercial Audio Visual Installation.</span>
          </h1>

          <p className="landing-hero-subtitle">
            Laser-aligned commercial display mounting, 100% concealed plenum-rated cabling, acoustic ceiling microphone suspension, and high-density rack dressing executed by AVIXA CTS-I certified field engineers across Chennai.
          </p>

          {/* Quick Metrics Strip */}
          <div className="landing-stats-strip">
            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Clock size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">2-Hour</span>
                <span className="landing-stat-lbl">Emergency Dispatch</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <ShieldCheck size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">4x Load</span>
                <span className="landing-stat-lbl">Seismic Safety Factor</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Zap size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">Fluke Certified</span>
                <span className="landing-stat-lbl">100% Cat6A & Fiber</span>
              </div>
            </div>

            <div className="landing-stat-card">
              <div className="landing-stat-icon-wrap">
                <Award size={22} />
              </div>
              <div className="landing-stat-info">
                <span className="landing-stat-val">CTS-I</span>
                <span className="landing-stat-lbl">Certified Riggers</span>
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
              <span>Schedule On-Site Installation Survey</span>
              <ArrowRight size={16} />
            </button>

            <button 
              className="btn-outline"
              onClick={() => {
                soundFx.playClick();
                if (onNavigate) onNavigate('services');
              }}
            >
              <span>Explore All 12 AV Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. PHYSICAL INSTALLATION DISCIPLINES */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="landing-section-head">
            <span className="landing-badge-mini">
              <Sparkles size={14} />
              <span>MECHANICAL & ELECTRICAL EXCELLENCE</span>
            </span>
            <h2 className="landing-grand-title">4 Core Physical Installation Disciplines</h2>
            <p className="landing-sub-desc">
              Every display bracket, ceiling suspension wire, and cable bundle is installed with aerospace-grade precision and verified against strict structural tolerances.
            </p>
          </div>

          <div className="subsystems-grid-4">
            {installationDisciplines.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="subsystem-card" data-cursor="explore">
                  <div className="subsystem-card-top">
                    <div className="subsystem-icon-box">
                      <Icon size={24} />
                    </div>
                    <span className="subsystem-tech-badge">{item.badge}</span>
                  </div>

                  <h3 className="subsystem-title">{item.title}</h3>
                  <p className="subsystem-desc">{item.desc}</p>

                  <div className="subsystem-highlights">
                    {item.checklist.map((chk, cIdx) => (
                      <div key={cIdx} className="subsystem-hl-item">
                        <CheckCircle2 size={15} />
                        <span>{chk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. QUALITY ASSURANCE CHECKLIST */}
          <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
            <div className="landing-section-head">
              <span className="landing-badge-mini">
                <ShieldCheck size={14} />
                <span>AVIXA CTS-I RIGOR</span>
              </span>
              <h2 className="landing-grand-title">Rigorous 6-Point Installation QA Checklist</h2>
              <p className="landing-sub-desc">
                We leave zero room for error. Every installation is signed off only after passing our comprehensive electro-mechanical verification protocol.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {qaChecklist.map((qa, qIdx) => (
                <div 
                  key={qIdx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-md)', background: 'var(--orange-soft)', color: 'var(--orange-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                      0{qIdx + 1}
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {qa.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {qa.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. CHENNAI SERVICE FOOTPRINT */}
          <div className="chennai-corridors-banner">
            <span className="landing-badge-mini" style={{ background: 'rgba(255, 90, 31, 0.18)', color: '#FF6B35', border: '1px solid rgba(255, 90, 31, 0.3)' }}>
              <MapPin size={14} />
              <span>ON-SITE INSTALLATION COVERAGE</span>
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Rapid On-Site Installation Field Crews in Chennai
            </h3>
            <p style={{ color: '#CBD5E1', maxWidth: '700px', fontSize: '1rem', lineHeight: 1.6 }}>
              Our fully equipped installation vans carry specialized unistrut cutting tools, optical laser levels, Fluke DSX testers, and certified rigging hardware directly to your site.
            </p>

            <div className="chennai-corridors-grid">
              {chennaiServiceZones.map((zone, zIdx) => (
                <div key={zIdx} className="corridor-item">
                  <h4 className="corridor-title">{zone.name}</h4>
                  <p className="corridor-hubs">{zone.coverage}</p>
                  <span className="corridor-sla-pill">
                    <Clock size={12} />
                    <span>{zone.dispatch}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. FREQUENTLY ASKED QUESTIONS */}
          <div className="landing-faq-section">
            <div className="landing-section-head">
              <span className="landing-badge-mini">
                <AlertCircle size={14} />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </span>
              <h2 className="landing-grand-title">AV Installation in Chennai: Common Questions</h2>
              <p className="landing-sub-desc">
                Everything you need to know about physical mounting, wall backing requirements, after-hours shifts, and cable certification.
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
              Need Professional AV Installation in Chennai?
            </h3>
            <p className="landing-cta-desc">
              Book a free on-site physical inspection. Our CTS-I installation engineers will review wall backing, conduit paths, ceiling structures, and power availability.
            </p>
            <div className="landing-cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Book On-Site Installation Survey</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href="tel:04424501688"
                className="btn-outline"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <span>Call Installation Dispatch Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
