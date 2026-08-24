import React, { useEffect, useRef, useState } from 'react';
import { Play, Sparkles, ChevronDown, Award, Volume2, Monitor, Wifi, Activity, Radio, Layers } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  onExplore: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onStartProject }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeVisualMode, setActiveVisualMode] = useState<'8k' | 'dante' | 'ai'>('8k');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive physics
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic particles
    const particleCount = Math.min(45, Math.floor(width / 35));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1.2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle audio soundwave ribbons across the lower section
      const waveCount = 2;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseAmp = 22 + w * 16;
        const speed = time * (1 + w * 0.35);

        ctx.strokeStyle = `rgba(0, 240, 255, ${0.4 - w * 0.15})`;
        ctx.lineWidth = 2.2 - w * 0.4;

        for (let x = 0; x <= width; x += 10) {
          const mouseDist = Math.abs(x - mouse.x);
          const mouseFactor = Math.max(0, 1 - mouseDist / 400);
          const y =
            height * 0.72 +
            Math.sin(x * 0.003 + speed + w) * (baseAmp + mouseFactor * 45) +
            Math.cos(x * 0.006 - speed * 0.4) * 10;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Draw particles & interconnecting mesh
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interactivity
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.x -= (dx / dist) * force * 2;
          p.y -= (dy / dist) * force * 2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00f0ff';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.22 * (1 - dist2 / 110)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* High-Resolution Architectural AV Experience Center Background */}
      <div className="hero-backdrop-layer">
        <img
          src="/hero-bg.jpg"
          alt="AVN Solutions Architectural Audio Visual Experience Center"
          className="hero-showroom-img"
        />
        <div className="hero-glass-veil" />
        <div className="hero-radial-glow" />
      </div>

      {/* Interactive Soundwave & Particle Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Main Content Layout */}
      <div className="container-wide hero-content-grid">
        {/* Left Column: Core Value Proposition */}
        <div className="hero-left-block">
          <div className="hero-tag-badge">
            <Sparkles size={14} className="hero-tag-icon" />
            <span>AV SYSTEM INTEGRATOR & OEM SUPPLIER // CHENNAI</span>
          </div>

          <h1 className="hero-main-title text-gradient-white">
            ENGINEERING<br />
            <span className="text-gradient-cyan">EXPERIENCES</span>
          </h1>

          <div className="hero-concept-flow">
            <span className="flow-step">FROM SOUND</span>
            <span className="flow-sep">→</span>
            <span className="flow-step">VISION</span>
            <span className="flow-sep">→</span>
            <span className="flow-step active-step">INTELLIGENCE</span>
          </div>

          <p className="hero-lead-paragraph">
            AVN Solutions engineers high-performance acoustic environments, seamless direct-view MicroLED video walls, certified Microsoft Teams/Zoom rooms, and intelligent touch automation for enterprise, education, and entertainment venues.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <button
              className="btn-primary hero-main-btn"
              onClick={onStartProject}
              data-cursor="start"
              data-cursor-text="START"
            >
              <span>ENGINEER YOUR SPACE</span>
              <Award size={18} />
            </button>

            <button
              className="btn-secondary hero-demo-btn"
              onClick={onExplore}
              data-cursor="explore"
              data-cursor-text="EXPLORE"
            >
              <Play size={16} className="play-icon text-cyan" />
              <span>EXPLORE DISCIPLINES</span>
            </button>
          </div>

          {/* Trust Specs Strip */}
          <div className="hero-specs-strip">
            <div className="spec-badge">
              <span className="spec-dot" />
              <span>Sholinganallur, Chennai Integration Facility</span>
            </div>
            <div className="spec-badge">
              <span className="spec-dot" />
              <span>Direct Line: 044 2450 1688</span>
            </div>
            <div className="spec-badge">
              <span className="spec-dot" />
              <span>Certified CTS-D & CTS-I Engineering</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Room Telemetry & Experience Switcher */}
        <div className="hero-right-block">
          <div className="hero-glass-control-card glass-panel" data-cursor="view">
            {/* HUD Top Bar */}
            <div className="control-hud-top">
              <div className="hud-label-group">
                <span className="hud-sub-label">ROOM TELEMETRY SYSTEM</span>
                <h4 className="hud-main-heading">Flagship Experience Hub</h4>
              </div>
              <div className="hud-live-pill">
                <span className="live-pulse-dot" />
                <span>ONLINE 24/7</span>
              </div>
            </div>

            {/* Interactive Mode Tabs */}
            <div className="hero-mode-tabs">
              <button
                className={`mode-tab ${activeVisualMode === '8k' ? 'active' : ''}`}
                onClick={() => setActiveVisualMode('8k')}
              >
                <Monitor size={13} />
                <span>8K MICROLED</span>
              </button>
              <button
                className={`mode-tab ${activeVisualMode === 'dante' ? 'active' : ''}`}
                onClick={() => setActiveVisualMode('dante')}
              >
                <Radio size={13} />
                <span>DANTE AUDIO</span>
              </button>
              <button
                className={`mode-tab ${activeVisualMode === 'ai' ? 'active' : ''}`}
                onClick={() => setActiveVisualMode('ai')}
              >
                <Layers size={13} />
                <span>AI DIRECTOR</span>
              </button>
            </div>

            {/* Telemetry Matrix Grid */}
            <div className="hud-metrics-grid">
              <div className="metric-box">
                <div className="metric-box-top">
                  <Volume2 size={13} className="text-cyan" />
                  <span className="metric-box-key">ACOUSTIC STI SCORE</span>
                </div>
                <span className="metric-box-val text-cyan">0.84 // OPTIMAL</span>
                <span className="metric-box-sub">Speech Intelligibility Index</span>
              </div>

              <div className="metric-box">
                <div className="metric-box-top">
                  <Monitor size={13} className="text-cyan" />
                  <span className="metric-box-key">DISPLAY MATRIX</span>
                </div>
                <span className="metric-box-val">0.9mm FINE PITCH</span>
                <span className="metric-box-sub">Direct-View Curved LED</span>
              </div>

              <div className="metric-box">
                <div className="metric-box-top">
                  <Wifi size={13} className="text-cyan" />
                  <span className="metric-box-key">NETWORK PROTOCOL</span>
                </div>
                <span className="metric-box-val">SDVoE 10G IP</span>
                <span className="metric-box-sub">Zero-Latency Uncompressed</span>
              </div>

              <div className="metric-box">
                <div className="metric-box-top">
                  <Activity size={13} className="text-cyan" />
                  <span className="metric-box-key">AUTOMATION CORE</span>
                </div>
                <span className="metric-box-val text-cyan">CRESTRON 4-SERIES</span>
                <span className="metric-box-sub">One-Touch Macro Engine</span>
              </div>
            </div>

            {/* Bottom Action Strip */}
            <div className="control-hud-footer">
              <div className="footer-status-text">
                <span className="status-text-lead">Custom Schematics & Acoustic Bills:</span>
                <span className="status-text-sub">Available for Architects & Consultants</span>
              </div>
              <button className="btn-primary hud-cta-btn" onClick={onStartProject}>
                <span>SPECIFY SYSTEM</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="hero-scroll-cue"
        onClick={onExplore}
        aria-label="Scroll down to explore disciplines"
      >
        <span className="cue-text">EXPLORE DISCIPLINES</span>
        <ChevronDown size={18} className="cue-icon" />
      </button>
    </section>
  );
};
