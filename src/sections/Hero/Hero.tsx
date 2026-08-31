import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Monitor, 
  Volume2, 
  Cpu, 
  Network, 
  Tv, 
  SunMedium, 
  Sliders, 
  Sparkles, 
  Award,
  Zap,
  Activity,
  Radio,
  ChevronDown
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './Hero.css';

interface HeroProps {
  onExplore: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onStartProject }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-performance, lightweight particle constellation & soundwave canvas (Zero lag, no shadow blur overhead)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Particle nodes for high-tech constellation
    const particleCount = Math.min(width > 768 ? 32 : 14, 36);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.6 + 0.8,
        baseAlpha: Math.random() * 0.3 + 0.15
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connecting constellation lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw clean particle dot (no heavy shadow blur for pure 120fps)
        const pulse = Math.sin(time * 2 + i) * 0.2 + 0.8;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p1.baseAlpha * pulse})`;
        ctx.fill();
      }

      // 2. High-Tech Multi-layer Soundwaves along bottom
      const waveCount = 3;
      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const baseAmp = 14 + w * 9;
        const speed = time * (0.8 + w * 0.25);
        ctx.strokeStyle = w === 0 
          ? 'rgba(0, 229, 255, 0.45)' 
          : w === 1 
            ? 'rgba(8, 119, 209, 0.32)' 
            : 'rgba(56, 189, 248, 0.18)';
        ctx.lineWidth = 2 - w * 0.4;

        for (let x = 0; x <= width; x += 14) {
          const y =
            height * 0.88 +
            Math.sin(x * 0.0032 + speed + w * 1.4) * baseAmp +
            Math.cos(x * 0.006 - speed * 0.5) * 8;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const capabilities = [
    { label: '4K / 8K MicroLED Video Walls', icon: Monitor },
    { label: 'Beamforming Audio & Dante DSP', icon: Volume2 },
    { label: 'Teams & Zoom Video Conferencing', icon: Network },
    { label: 'Crestron Smart Room Automation', icon: Cpu },
    { label: 'Enterprise Digital Signage', icon: Tv },
    { label: 'Circadian DALI Lighting & Shades', icon: SunMedium },
    { label: 'Acoustic RT60 Simulation', icon: Sliders }
  ];

  return (
    <section className="hero-section rich-cinematic-hero" id="hero">
      {/* Background Media & Cinematic Layering */}
      <div className="hero-bg-media">
        <img
          src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=2600&q=90"
          alt="Luxury Corporate Boardroom & Enterprise AV Architecture"
          className="hero-bg-image"
          loading="eager"
        />
        <div className="hero-bg-gradient-overlay" />
        
        {/* Animated Cybernetic HUD Rings */}
        <div className="hero-hud-rings-cluster">
          <div className="hero-hud-ring ring-outer" />
          <div className="hero-hud-ring ring-mid" />
          <div className="hero-hud-ring ring-inner" />
        </div>
        <div className="hero-hud-scanner-line" />

        {/* Ambient Optics */}
        <div className="hero-glass-lens-flare" />
        <div className="hero-perspective-grid" />
        <div className="hero-glow-orb orb-primary" />
        <div className="hero-glow-orb orb-secondary" />
      </div>

      {/* Dynamic Soundwave & Particle Canvas */}
      <canvas ref={canvasRef} className="hero-soundwave-canvas" />

      {/* Floating Holographic Telemetry Cards (Silky Smooth CSS Keyframes) */}
      <div className="hero-telemetry-badge badge-left hide-tablet">
        <div className="telemetry-icon-box cyan-glow">
          <Activity size={16} className="text-cyan animate-pulse" />
        </div>
        <div className="telemetry-content">
          <div className="telemetry-top">
            <span className="telemetry-label">Dante DSP Network</span>
            <span className="telemetry-live-dot" />
          </div>
          <span className="telemetry-value">98.4% STI Speech Clarity</span>
          <span className="telemetry-sub">Shure MXA920 Beamforming</span>
        </div>
      </div>

      <div className="hero-telemetry-badge badge-right hide-tablet">
        <div className="telemetry-icon-box blue-glow">
          <Zap size={16} className="text-cyan animate-pulse" />
        </div>
        <div className="telemetry-content">
          <div className="telemetry-top">
            <span className="telemetry-label">0.9mm MicroLED Canvas</span>
            <span className="telemetry-badge-pill">4K HDR</span>
          </div>
          <span className="telemetry-value">1,200 Nits Direct-View</span>
          <span className="telemetry-sub">&lt; 0.04ms Video Latency</span>
        </div>
      </div>

      {/* Main Hero Stage */}
      <div className="container-wide hero-content-center">
        {/* Trust Statement Eyebrow */}
        <div className="hero-trust-pill animate-fade-in-down">
          <span className="trust-pulse-dot" />
          <Radio size={13} className="text-cyan animate-spin-slow" />
          <span className="trust-location">Chennai • Tamil Nadu • Enterprise Commercial & Luxury AV</span>
          <span className="trust-pipe">|</span>
          <Award size={13} className="text-cyan" />
          <span className="trust-cert-text">AVIXA CTS CERTIFIED INTEGRATOR</span>
        </div>

        {/* Grand Headline with Glowing Holographic Reveal */}
        <h1 className="hero-grand-title animate-title-glow">
          Engineering Better Experiences{' '}
          <span className="hero-gradient-text animated-shimmer-text">Through Audio & Visual Technology.</span>
        </h1>

        {/* Supporting Tagline */}
        <p className="hero-lead-tagline animate-fade-in">
          Professional AV solutions designed, integrated and installed for spaces that need to perform.
        </p>

        {/* Comprehensive Description */}
        <p className="hero-main-description animate-fade-in">
          From executive boardrooms and university auditoriums to healthcare centers, digital signage networks, and luxury private cinemas, we engineer high-performance audio-visual ecosystems that connect people, spaces, and experiences.
        </p>

        {/* Mobile Telemetry Quick Highlights Strip */}
        <div className="hero-mobile-telemetry-row show-tablet-only">
          <div className="mobile-telem-pill">
            <span className="mobile-telem-dot green" />
            <span>98.4% Audio Clarity</span>
          </div>
          <div className="mobile-telem-pill">
            <span className="mobile-telem-dot cyan" />
            <span>0.9mm 4K MicroLED</span>
          </div>
          <div className="mobile-telem-pill">
            <span className="mobile-telem-dot blue" />
            <span>&lt;150ms Crestron</span>
          </div>
        </div>

        {/* Glowing Frosted Capability Chips Cloud */}
        <div className="hero-capabilities-cloud">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div 
                key={idx} 
                className="hero-tech-chip hover-glow-bounce" 
                data-cursor="explore"
                style={{ animationDelay: `${0.1 + idx * 0.04}s` }}
              >
                <Icon size={14} className="text-cyan chip-icon" />
                <span>{cap.label}</span>
                <span className="chip-shine" />
              </div>
            );
          })}
        </div>

        {/* Dual High-Impact Action CTAs */}
        <div className="hero-cta-row">
          <button
            className="btn-primary hero-btn-primary animated-pulse-glow"
            onClick={() => {
              soundFx.playClick();
              onExplore();
            }}
            data-cursor="explore"
            data-cursor-text="SOLUTIONS"
          >
            <span>Explore AV Solutions</span>
            <ArrowRight size={18} />
          </button>

          <button
            className="btn-secondary hero-btn-quote"
            onClick={() => {
              soundFx.playPowerChime();
              onStartProject();
            }}
            data-cursor="start"
            data-cursor-text="GET BOQ"
          >
            <Sparkles size={16} className="text-cyan" />
            <span>Request System Quote</span>
          </button>

          <a
            href="tel:04424501688"
            className="btn-secondary hero-btn-call"
            onClick={() => soundFx.playClick(900)}
            data-cursor="start"
            data-cursor-text="CALL"
          >
            <PhoneCall size={15} className="text-cyan" />
            <span>Talk to an AV Expert</span>
          </a>
        </div>

        {/* Bottom Frosted Telemetry Trust Bar */}
        <div className="hero-trust-bar">
          <div className="trust-bar-item">
            <CheckCircle2 size={15} className="text-cyan" />
            <span>Direct OEM Supply (50+ Brands)</span>
          </div>
          <div className="trust-bar-item">
            <CheckCircle2 size={15} className="text-cyan" />
            <span>Turnkey Installation & Crestron Logic</span>
          </div>
          <div className="trust-bar-item">
            <CheckCircle2 size={15} className="text-cyan" />
            <span>Chennai Local Demo Lab & 24/7 SLA</span>
          </div>
          <div className="trust-bar-item">
            <CheckCircle2 size={15} className="text-cyan" />
            <span>250+ Enterprise Deployments</span>
          </div>
        </div>
      </div>

      {/* Interactive Scroll Down Indicator */}
      <button 
        className="hero-scroll-down-btn"
        onClick={() => {
          soundFx.playClick(800);
          onExplore();
        }}
        aria-label="Scroll to explore solutions"
      >
        <div className="scroll-mouse-icon">
          <div className="scroll-mouse-wheel" />
        </div>
        <span className="scroll-hint-text">SCROLL TO DISCOVER</span>
        <ChevronDown size={14} className="scroll-chevron-arrow" />
      </button>
    </section>
  );
};
