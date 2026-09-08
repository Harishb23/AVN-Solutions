import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Send,
  Building2,
  Tv,
  Volume2,
  Video,
  Sliders,
  Home,
  Sparkles,
  Zap
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './Hero.css';

interface HeroProps {
  onExplore: () => void;
  onStartProject: () => void;
}

interface SolutionDetail {
  id: string;
  tag: string;
  title: string;
  oneLiner: string;
  image: string;
  liveBadge: string;
  techTags: string[];
  metrics: { value: string; label: string }[];
  pillars: { icon: any; name: string; sub: string }[];
  highlights: string[];
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onStartProject }) => {
  const [activeNavIndex, setActiveNavIndex] = useState<number>(0);
  const [quickPhone, setQuickPhone] = useState('');
  const [quickService, setQuickService] = useState('Corporate AV');
  const [submitted, setSubmitted] = useState(false);

  const leftNavItems = [
    { label: 'Corporate AV', icon: Building2, id: 'corporate-av' },
    { label: 'Video Collaboration', icon: Video, id: 'video-conferencing' },
    { label: 'Professional Audio', icon: Volume2, id: 'professional-audio' },
    { label: 'Visual Systems', icon: Tv, id: 'display-visual' },
    { label: 'Smart Automation', icon: Sliders, id: 'smart-automation' },
    { label: 'Home Cinema', icon: Home, id: 'home-cinema' }
  ];

  const solutionDetails: Record<string, SolutionDetail> = {
    'corporate-av': {
      id: 'corporate-av',
      tag: 'ENTERPRISE INTEGRATION OVERVIEW',
      title: 'Engineering intelligent environments for modern workplaces & premium spaces.',
      oneLiner: 'Turnkey audio-visual architectures designed for executive decision-making, high-impact boardrooms, and connected workplaces.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      liveBadge: 'BOARDROOM ARCHITECTURE ONLINE',
      highlights: ['0.9mm Bezel-less MicroLED', '360° Ceiling Mic Arrays', 'One-Touch Crestron Presets'],
      techTags: ['Crestron NVX', 'Shure Microflex', 'Biamp Tesira', 'Cisco Webex'],
      metrics: [
        { value: '99.98%', label: 'Meeting Room Uptime' },
        { value: '< 15ms', label: 'Audio Latency' },
        { value: '250+', label: 'Boardrooms Live' }
      ],
      pillars: [
        { icon: ShieldCheck, name: 'AVIXA CTS Certified', sub: 'CTS-D & CTS-I standard design' },
        { icon: Cpu, name: 'OEM Direct Supply', sub: '50+ authorized brand partners' },
        { icon: Clock, name: '24/7 SLA Telemetry', sub: 'Guaranteed 2-hour response' }
      ]
    },
    'video-conferencing': {
      id: 'video-conferencing',
      tag: 'HYBRID WORKPLACE • NATIVE ROOMS',
      title: 'Certified Microsoft Teams & Zoom Rooms engineered for frictionless collaboration.',
      oneLiner: 'Intelligent meeting spaces with 4K auto-framing AI cameras, smart acoustic fencing, and one-touch join consoles.',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      liveBadge: 'TEAMS & ZOOM ROOMS CERTIFIED',
      highlights: ['AI Speaker Auto-Framing', 'Dual-Display Hybrid Layout', 'BYOM Wireless Presentation'],
      techTags: ['Microsoft Teams MTR', 'Zoom Rooms', 'Poly Studio', 'Logitech Rally'],
      metrics: [
        { value: '1-Touch', label: 'Instant Meeting Join' },
        { value: '4K 60fps', label: 'Presentation Clarity' },
        { value: '180+', label: 'Rooms Deployed' }
      ],
      pillars: [
        { icon: ShieldCheck, name: 'Native Certified MTR', sub: 'Hardware partner certified' },
        { icon: Cpu, name: 'AI Auto-Framing', sub: 'Intelligent multi-speaker tracking' },
        { icon: Clock, name: 'Remote Fleet Portal', sub: 'Cloud health monitoring' }
      ]
    },
    'professional-audio': {
      id: 'professional-audio',
      tag: 'ACOUSTIC ARCHITECTURE • NETWORKED SOUND',
      title: 'Concert-grade acoustic engineering and networked Dante distribution.',
      oneLiner: 'Scientific RT60 room reverberation optimization, steerable line arrays, and zero-compromise DSP routing.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
      liveBadge: 'DANTE IP MATRIX ACTIVE',
      highlights: ['EASE 3D Acoustic Raytracing', 'Dante AES67 Gigabit Audio', 'AEC Noise Cancellation'],
      techTags: ['Dante IP Audio', 'Bose Professional', 'Q-SYS Ecosystem', 'Sennheiser TeamConnect'],
      metrics: [
        { value: '> 0.68', label: 'STI Speech Clarity' },
        { value: '0 Echo', label: 'AEC Echo Cancellation' },
        { value: '64x64', label: 'Dante IP Channels' }
      ],
      pillars: [
        { icon: ShieldCheck, name: 'EASE 3D Simulation', sub: 'RT60 scientific optimization' },
        { icon: Cpu, name: 'DSP Beamforming', sub: 'Ceiling array tracking' },
        { icon: Clock, name: 'AES67 / Dante IP', sub: 'Low-latency networked audio' }
      ]
    },
    'display-visual': {
      id: 'display-visual',
      tag: 'VISUAL CANVASES • FINE-PITCH LED',
      title: 'Seamless fine-pitch Direct-View MicroLED and high-lumen 4K projection.',
      oneLiner: 'Bezel-less direct-view MicroLED displays and multi-window processors delivering breathtaking contrast and 24/7 reliability.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      liveBadge: 'FINE-PITCH MICROLED NOC ACTIVE',
      highlights: ['0.9mm Ultra-Fine Pitch', 'HDR10+ Calibration', 'Multi-Window 4K Matrix'],
      techTags: ['0.9mm MicroLED', 'Christie 4K Laser', 'Barco ClickShare', 'Analog Way'],
      metrics: [
        { value: '0.9mm', label: 'Ultra-Fine Pixel Pitch' },
        { value: '100k hrs', label: 'LED Canvas MTBF' },
        { value: '24/7/365', label: 'Continuous NOC Rating' }
      ],
      pillars: [
        { icon: ShieldCheck, name: 'Bezel-Free Canvas', sub: 'Seamless visual uniformity' },
        { icon: Cpu, name: 'Multi-Window Video', sub: 'Real-time 4K routing' },
        { icon: Clock, name: 'ISF Calibrated', sub: 'Broadcast-accurate color' }
      ]
    },
    'smart-automation': {
      id: 'smart-automation',
      tag: 'CENTRALIZED CONTROL • IOT ARCHITECTURE',
      title: 'Unified touch management of lighting, climate, shades, and media matrices.',
      oneLiner: 'Custom touch glass interfaces that configure complex boardrooms, lighting curves, and HVAC with single-tap elegance.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
      liveBadge: 'UNIFIED CRESTRON BUS ONLINE',
      highlights: ['Custom HTML5 Touch Glass UI', 'DALI-2 Architectural Lighting', 'Occupancy Power Saving'],
      techTags: ['Crestron Home', 'Extron Control', 'Lutron Homeworks', 'KNX Protocol'],
      metrics: [
        { value: 'Single-Tap', label: 'Macro Preset Execution' },
        { value: '35% Less', label: 'Lighting Energy Usage' },
        { value: 'Custom GUI', label: 'Enterprise Branded' }
      ],
      pillars: [
        { icon: ShieldCheck, name: 'Custom Touch UI', sub: 'Zero-learning curve controls' },
        { icon: Cpu, name: 'DALI-2 / KNX Bus', sub: 'Architectural lighting synergy' },
        { icon: Clock, name: 'Occupancy Sensors', sub: 'Automated standby states' }
      ]
    },
    'home-cinema': {
      id: 'home-cinema',
      tag: 'BESPOKE RESIDENTIAL • IMMERSIVE CINEMA',
      title: 'Private residential screening rooms featuring Dolby Atmos 9.4.6 acoustic mastery.',
      oneLiner: 'Bespoke luxury private theatres engineered to DCI mastering standards with laser projection and concealed architectural speakers.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      liveBadge: 'DOLBY ATMOS 9.4.6 REFERENCE',
      highlights: ['Trinnov 3D Room Optimizer', 'Acoustic Woven 4K Screen', 'Fiber-Optic Starlight Ceiling'],
      techTags: ['Dolby Atmos 9.4.6', 'Trinnov Altitude', 'JBL Synthesis', 'Sony 4K HDR'],
      metrics: [
        { value: '9.4.6', label: 'Immersive Atmos Layout' },
        { value: 'NC-18', label: 'Whisper Noise Floor' },
        { value: 'DCI-P3', label: '99% Wide Color Gamut' }
      ],
      pillars: [
        { icon: ShieldCheck, name: 'THX Acoustic Standards', sub: 'Optimized RT60 reverberation' },
        { icon: Cpu, name: 'Trinnov Optimizer', sub: '3D Room calibration' },
        { icon: Clock, name: 'Anamorphic 4K', sub: 'CinemaScope 2.39:1 ratio' }
      ]
    }
  };

  const currentSolution = solutionDetails[leftNavItems[activeNavIndex].id] || solutionDetails['corporate-av'];

  const verticalEstimates: Record<string, string> = {
    'Corporate AV': '⚡ Typical turnaround: 24h Preliminary CAD & BOQ',
    'Video Conferencing': '⚡ Typical turnaround: Native MTR Spec & Acoustic Plan',
    'Professional Audio': '⚡ Typical turnaround: 3D EASE Acoustic Simulation',
    'Visual Systems': '⚡ Typical turnaround: Thermal & Pixel Pitch Plan',
    'Smart Automation': '⚡ Typical turnaround: Unified Control Architecture Map',
    'Home Cinema': '⚡ Typical turnaround: Dolby Atmos 9.4.6 Raytracing Spec'
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone) return;
    soundFx.playPowerChime();
    setSubmitted(true);
  };

  return (
    <section className="crescent-hero-section" id="hero">
      {/* 1. TOP PANORAMIC ARCHITECTURAL SHOWCASE WITH KEN BURNS & TELEMETRY */}
      <div className="panoramic-skyline-banner">
        <div className="skyline-image-container">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
            alt="Modern Architectural Enterprise Glass Towers"
            className="skyline-bg-photo kenburns-active"
            loading="eager"
          />
        </div>
        <div className="skyline-overlay-tint" />
        <div className="skyline-grid-pattern" aria-hidden="true" />

        <div className="container-wide skyline-headline-box">
          {/* Animated Telemetry Pill */}
          <div className="skyline-telemetry-badge">
            <span className="telemetry-dot-pulsing" />
            <span className="telemetry-text">CHENNAI HQ • AVIXA CTS™ CERTIFIED SYSTEMS INTEGRATION</span>
            <span className="telemetry-code">LAT: 12.9010° N</span>
          </div>

          <h1 className="skyline-main-heading">
            Technology that makes <br />
            <span className="skyline-gradient-shimmer">spaces work better.</span>
          </h1>

          {/* Architectural Quick Specs Ticker */}
          <div className="skyline-tags-ticker">
            <span className="ticker-pill"><Zap size={12} className="text-cyan" /> 4K/8K Video Over IP</span>
            <span className="ticker-pill"><Sparkles size={12} className="text-cyan" /> Dante™ Audio Distribution</span>
            <span className="ticker-pill"><Cpu size={12} className="text-cyan" /> Unified Crestron & Extron Control</span>
            <span className="ticker-pill"><ShieldCheck size={12} className="text-cyan" /> 24/7 SLA Uptime Guarantee</span>
          </div>
        </div>
      </div>

      {/* 2. SWEEPING CRESCENT ARCHITECTURAL PANEL */}
      <div className="crescent-body-wrapper">
        {/* The Iconic Sweeping White Crescent Arc with Luminous Architectural Glow */}
        <div className="crescent-white-arc" aria-hidden="true">
          <div className="crescent-arc-glow-sheen" />
        </div>

        <div className="container-wide crescent-inner-container">
          <div className="crescent-content-grid">
            {/* LEFT COLUMN: Vertical Navigation Dock with Interactive Feedback */}
            <div className="crescent-nav-dock">
              <div className="dock-header-bar">
                <div className="dock-header-left">
                  <span className="dock-live-beacon" />
                  <span>SOLUTIONS DOCK</span>
                </div>
                <span className="dock-count-badge">06 VERTICALS</span>
              </div>

              <div className="dock-nav-list" role="tablist" aria-label="AV Solutions">
                {leftNavItems.map((item, idx) => {
                  const isActive = activeNavIndex === idx;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      role="tab"
                      aria-selected={isActive}
                      className={`dock-nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        soundFx.playClick(900 + idx * 30);
                        setActiveNavIndex(idx);
                      }}
                    >
                      <div className="dock-nav-bullet">
                        <Play size={11} fill="currentColor" />
                      </div>
                      <Icon size={16} className="dock-nav-icon" />
                      <span className="dock-nav-title">{item.label}</span>
                      {isActive && <span className="dock-active-glow-bar" />}
                    </button>
                  );
                })}
              </div>

              <div className="dock-footer-trigger">
                <button
                  className="dock-explore-all-btn"
                  onClick={() => {
                    soundFx.playClick();
                    onExplore();
                  }}
                >
                  <span>Explore All 10 Solutions</span>
                  <ArrowRight size={14} className="dock-arrow-icon" />
                </button>
              </div>
            </div>

            {/* CENTER COLUMN: Interactive Dynamic Editorial Overview */}
            <div className="crescent-editorial-center" key={currentSolution.id}>
              <div className="center-eyebrow-line">
                <span className="eyebrow-accent-dot" />
                <span>{currentSolution.tag}</span>
              </div>

              <h2 className="center-editorial-title hero-content-swap">
                {currentSolution.title}
              </h2>

              {/* Visual-First Interactive Stage Card */}
              <div className="hero-visual-stage-card hero-content-swap">
                <div className="hero-visual-stage-img-wrap">
                  <img
                    src={currentSolution.image}
                    alt={currentSolution.title}
                    className="hero-visual-stage-img"
                    loading="lazy"
                  />
                  <div className="hero-visual-stage-overlay" />
                  
                  {/* Live Status Pill Overlay */}
                  <div className="hero-visual-status-pill">
                    <span className="telemetry-dot-pulsing" />
                    <span>{currentSolution.liveBadge}</span>
                  </div>

                  {/* Highlights Floating Bar */}
                  <div className="hero-visual-highlights-bar">
                    {currentSolution.highlights.map((item, hIdx) => (
                      <span key={hIdx} className="hero-visual-highlight-chip">
                        <Sparkles size={11} className="text-cyan" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hero-visual-stage-meta">
                  <p className="hero-visual-one-liner">{currentSolution.oneLiner}</p>
                </div>
              </div>

              {/* Dynamic Solution Micro-Metrics Bar */}
              <div className="solution-micro-metrics-bar hero-content-swap">
                {currentSolution.metrics.map((m, i) => (
                  <div key={i} className="micro-metric-item">
                    <span className="micro-metric-val">{m.value}</span>
                    <span className="micro-metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* 3 Architectural Capability Pillars */}
              <div className="crescent-pillars-strip hero-content-swap">
                {currentSolution.pillars.map((pillar, pIdx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={pIdx} className="pillar-item">
                      <div className="pillar-icon-box">
                        <Icon size={18} />
                      </div>
                      <div className="pillar-text">
                        <h4 className="pillar-name">{pillar.name}</h4>
                        <p className="pillar-sub">{pillar.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Technology Tags */}
              <div className="solution-tech-stack-row">
                <span className="tech-stack-label">Tier-1 Hardware:</span>
                <div className="tech-stack-tags">
                  {currentSolution.techTags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-stack-chip">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Quick Space Configurator / Instant BOQ Widget */}
            <div className="crescent-widget-column">
              <div className="crescent-quick-widget">
                <div className="widget-header">
                  <span className="widget-pill">FAST DESK</span>
                  <h3 className="widget-title">Quick BOQ Request</h3>
                  <p className="widget-subtitle">Instant engineering consultation in Chennai</p>
                </div>

                {submitted ? (
                  <div className="widget-success-view animated-success-pop">
                    <div className="success-icon-halo">
                      <ShieldCheck size={38} className="text-emerald" />
                    </div>
                    <h4>Request Received</h4>
                    <p>Our senior solution architect will review your project and contact you within 30 minutes.</p>
                    <button
                      type="button"
                      className="btn-secondary widget-reset-btn"
                      onClick={() => setSubmitted(false)}
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickSubmit} className="widget-form">
                    <div className="widget-field">
                      <label htmlFor="hero-service-select">Project Vertical</label>
                      <select
                        id="hero-service-select"
                        value={quickService}
                        onChange={(e) => {
                          soundFx.playClick(920);
                          setQuickService(e.target.value);
                        }}
                        className="widget-select"
                      >
                        <option value="Corporate AV">Corporate Boardroom</option>
                        <option value="Video Conferencing">Teams / Zoom Room</option>
                        <option value="Professional Audio">Auditorium Sound</option>
                        <option value="Visual Systems">MicroLED Video Wall</option>
                        <option value="Smart Automation">Whole-Facility Automation</option>
                        <option value="Home Cinema">Luxury Private Cinema</option>
                      </select>
                    </div>

                    {/* Dynamic SLA Turnaround Hint */}
                    <div className="widget-estimate-hint">
                      <span>{verticalEstimates[quickService] || verticalEstimates['Corporate AV']}</span>
                    </div>

                    <div className="widget-field">
                      <label htmlFor="hero-phone-input">Phone / WhatsApp</label>
                      <input
                        id="hero-phone-input"
                        type="tel"
                        required
                        placeholder="+91 98400 00000"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value)}
                        className="widget-input"
                      />
                    </div>

                    <button type="submit" className="btn-primary widget-submit-btn">
                      <Send size={15} className="submit-btn-icon" />
                      <span>Request Site Survey</span>
                    </button>

                    <button
                      type="button"
                      className="widget-full-project-btn"
                      onClick={() => {
                        soundFx.playPowerChime();
                        onStartProject();
                      }}
                    >
                      <span>Open Full Space Configurator →</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

