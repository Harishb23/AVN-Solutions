import React from 'react';
import { 
  Tv, 
  Volume2, 
  Layers, 
  Sparkles, 
  Sliders, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './HomeCinemaSection.css';

interface HomeCinemaSectionProps {
  onStartProject: () => void;
}

export const HomeCinemaSection: React.FC<HomeCinemaSectionProps> = ({ onStartProject }) => {
  const cinemaFeatures = [
    {
      icon: Tv,
      title: 'Native 4K Laser Projection',
      desc: 'ISF-certified color accuracy with up to 3,500 lumens pure laser brightness and infinite contrast.'
    },
    {
      icon: Volume2,
      title: 'Dolby Atmos 9.4.6 Spatial Audio',
      desc: 'Discrete architectural in-wall speakers with Trinnov 3D acoustic room optimization and sub-bass arrays.'
    },
    {
      icon: Layers,
      title: 'Acoustic Room Isolation',
      desc: 'Decoupled room-within-a-room construction with fabric bass traps achieving RT60 0.28s decay.'
    },
    {
      icon: Sparkles,
      title: 'Architectural Starlight Ceilings',
      desc: 'Twinkling fiber-optic constellation ceilings with synchronized DMX perimeter step lighting.'
    },
    {
      icon: Sliders,
      title: 'One-Touch Cinema Automation',
      desc: 'Capacitive iPad & remote control dimming lights, dropping motorized 2.39:1 scope screens, and cueing films.'
    }
  ];

  return (
    <section className="home-cinema-section" id="home-cinema">
      <div className="container-wide">
        {/* Main 2-Column Luxury Showcase */}
        <div className="cinema-luxury-grid">
          {/* Left Column: Visual Canvas */}
          <div className="cinema-media-column">
            <div className="cinema-media-frame">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Private Home Cinema"
                className="cinema-showcase-img"
              />
              <div className="cinema-media-overlay">
                <div className="cinema-badge">THX & DOLBY ATMOS REFERENCE SUITE</div>
                <h3 className="cinema-image-title">Bespoke 12-Seat Private Residence Cinema</h3>
                <span className="cinema-loc">Boat Club Road, Chennai, Tamil Nadu</span>
              </div>
            </div>

            {/* Quick Cinema Specs */}
            <div className="cinema-specs-row">
              <div className="cinema-spec-cell">
                <span className="c-label">AUDIO STANDARD</span>
                <span className="c-value">Dolby Atmos 9.4.6</span>
              </div>
              <div className="cinema-spec-cell">
                <span className="c-label">SCREEN CANVAS</span>
                <span className="c-value">180" Woven Scope</span>
              </div>
              <div className="cinema-spec-cell">
                <span className="c-label">ACOUSTIC RT60</span>
                <span className="c-value">0.28s Master Decay</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Services */}
          <div className="cinema-content-column">
            <div className="section-eyebrow-pill" style={{ margin: 0 }}>
              <span className="eyebrow-dot" />
              <span className="eyebrow-title">RESIDENTIAL PRIVATE THEATRES</span>
            </div>

            <h2 className="cinema-headline">
              Your Private Cinema.{' '}
              <span className="cinema-gradient">Engineered at Home.</span>
            </h2>

            <p className="cinema-intro">
              We design and construct bespoke private home theatres for luxury residences, penthouses, and villas across Chennai. Every theatre combines reference 4K laser projection, immersive object-based surround sound, and acoustic isolation.
            </p>

            {/* Services Grid */}
            <div className="cinema-features-list">
              {cinemaFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="cinema-feat-item">
                    <div className="feat-icon-box">
                      <Icon size={16} className="text-cyan" />
                    </div>
                    <div className="feat-text-box">
                      <h4 className="feat-title">{feat.title}</h4>
                      <p className="feat-desc">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="cinema-cta-bar">
              <button
                className="btn-primary cinema-action-btn"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Design My Home Cinema</span>
                <ArrowRight size={16} />
              </button>

              <div className="cinema-trust-tag">
                <ShieldCheck size={14} className="text-cyan" />
                <span>ISF & THX Certified Calibration Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
