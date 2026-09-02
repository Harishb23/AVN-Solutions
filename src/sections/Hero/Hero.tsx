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
  p1: string;
  p2: string;
  techTags: string[];
  metrics: { value: string; label: string }[];
  pillars: { icon: any; name: string; sub: string }[];
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
      p1: 'AVN Solutions designs, engineers and deploys high-performance audio-visual systems, acoustic architectures, and automated smart spaces across Chennai and South India.',
      p2: 'From executive boardrooms to 1,000-seat auditoriums, we combine AVIXA CTS-certified engineering, direct tier-1 OEM hardware, and 24/7 SLA telemetry for uncompromising reliability.',
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
      p1: 'Deploy intelligent meeting spaces with 4K auto-framing AI cameras, smart speaker acoustic fencing, and one-touch join consoles for effortless hybrid meetings.',
      p2: 'Native room compute integrations ensure enterprise encryption, remote cloud telemetry management, and seamless interoperability across SIP and H.323 standards.',
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
      p1: 'High-intelligibility audio reinforcement for auditoriums, seminar complexes, and enterprise campuses with EASE 3D electro-acoustic raytracing.',
      p2: 'Zero-compromise beamforming microphone arrays, digital signal processors (DSP), and redundant IP-based Dante audio routing ensure studio-quality clarity.',
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
      p1: 'Transform enterprise lobbies, command & control rooms, and executive auditoriums with bezel-less MicroLED canvases delivering breathtaking dynamic contrast.',
      p2: 'Hardware video wall processors provide multi-window 4K windowing, HDR10+ calibration, and redundant power supplies for 24/7 mission-critical operation.',
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
      p1: 'Orchestrate whole-facility environments with intuitive custom-branded touch panels that configure entire boardrooms or auditoriums with a single button tap.',
      p2: 'Integrate DALI-2 architectural lighting, motorized shading schedules, occupancy sensors, and HVAC to drastically reduce corporate power consumption.',
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
      p1: 'We craft bespoke luxury home cinemas engineered to DCI theater mastering standards, featuring laser anamorphic projection and concealed architectural speakers.',
      p2: 'Multi-tiered acoustic room conditioning, calibrated subwoofer arrays, and starlight acoustic ceilings deliver an unmatched private cinema experience.',
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

              <div className="center-paragraphs-grid hero-content-swap">
                <p className="center-p">{currentSolution.p1}</p>
                <p className="center-p">{currentSolution.p2}</p>
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

