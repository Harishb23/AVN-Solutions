import React from 'react';
import { ArrowRight, Monitor, Cpu, Volume2, ShieldCheck } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FeaturedSolution.css';

interface FeaturedSolutionProps {
  onExploreSolution: (solutionId: string) => void;
  onStartProject: () => void;
}

export const FeaturedSolution: React.FC<FeaturedSolutionProps> = ({
  onExploreSolution,
  onStartProject
}) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const capabilities = [
    {
      icon: Monitor,
      title: 'Architectural Visual Displays',
      desc: 'Seamless 4K/8K MicroLED video walls and anti-glare interactive touch screens.'
    },
    {
      icon: Volume2,
      title: 'Ceiling Array Audio & DSP',
      desc: 'Steerable beamforming microphones paired with Dante AEC digital signal processors.'
    },
    {
      icon: Cpu,
      title: 'Unified Smart Automation',
      desc: 'One-touch Crestron & DALI presets for lighting, shading, cameras, and display routing.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise MTR & Zoom Security',
      desc: 'Certified native Microsoft Teams Rooms and Zoom Rooms with encrypted IP infrastructure.'
    }
  ];

  return (
    <section 
      ref={ref}
      className={`featured-solution-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`}
    >
      <div className="container-wide">
        <div className="featured-solution-card hover-card-lift">
          <div className="featured-solution-grid">
            {/* Left Side: Large Architectural Imagery */}
            <div className="featured-solution-image-col image-hover-zoom">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85"
                alt="Executive Corporate Boardroom by AVN Solutions"
                className="featured-solution-img"
                loading="lazy"
              />
              <div className="featured-img-badge">
                <span className="featured-badge-dot" />
                <span>FLAGSHIP CAPABILITY</span>
              </div>
            </div>

            {/* Right Side: Editorial Content & Capabilities */}
            <div className="featured-solution-content-col">
              <div className="featured-eyebrow">
                <span className="eyebrow-accent-line" />
                <span>CORPORATE AV</span>
              </div>

              <h2 className="featured-heading">
                Spaces designed for <br />
                <span className="title-highlight">better collaboration.</span>
              </h2>

              <p className="featured-description">
                We combine AV engineering, video conferencing, professional audio and intelligent automation to create seamless executive and collaboration environments.
              </p>

              <div className="featured-capabilities-grid stagger-container">
                {capabilities.map((cap, idx) => {
                  const Icon = cap.icon;
                  return (
                    <div key={idx} className="feat-cap-item">
                      <div className="feat-cap-icon-box">
                        <Icon size={18} className="text-emerald" />
                      </div>
                      <div className="feat-cap-text">
                        <h4 className="feat-cap-title">{cap.title}</h4>
                        <p className="feat-cap-desc">{cap.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="featured-cta-group">
                <button
                  className="btn-primary featured-btn-primary"
                  onClick={() => {
                    soundFx.playPowerChime();
                    onStartProject();
                  }}
                >
                  <span>Start Boardroom Project</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  className="btn-secondary featured-btn-secondary"
                  onClick={() => {
                    soundFx.playClick();
                    onExploreSolution('corporate-av');
                  }}
                >
                  <span>Explore Corporate AV →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
