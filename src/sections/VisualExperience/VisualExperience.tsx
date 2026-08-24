import React, { useState } from 'react';
import { Maximize2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './VisualExperience.css';

interface VisualExperienceProps {
  onStartProject: () => void;
}

export const VisualExperience: React.FC<VisualExperienceProps> = ({ onStartProject }) => {
  const [scaleLevel, setScaleLevel] = useState<number>(2); // 0 to 3

  const displayScales = [
    {
      level: 0,
      title: '55" Professional Display',
      category: 'Huddle & Small Executive Suites',
      diagonal: '55 Inch (1.4m)',
      tech: '4K Commercial LCD / Anti-Glare',
      aspect: '16:9 Standard',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      scaleFactor: '45%'
    },
    {
      level: 1,
      title: '85" Interactive Touch Canvas',
      category: 'Medium Conference & Collaborative Labs',
      diagonal: '85 Inch (2.15m)',
      tech: 'Capacitive Multi-Touch 4K Panel',
      aspect: '16:9 Interactive',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      scaleFactor: '65%'
    },
    {
      level: 2,
      title: '165" Fine-Pitch MicroLED Wall',
      category: 'Flagship Executive Boardrooms & Townhalls',
      diagonal: '165 Inch (4.2m Seamless)',
      tech: '0.9mm Pixel Pitch Direct-View LED',
      aspect: '21:9 Ultra-Wide Cinema',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
      scaleFactor: '85%'
    },
    {
      level: 3,
      title: '280"+ Immersive Architecture LED',
      category: 'Auditoriums, Command NOCs & Experience Pavilions',
      diagonal: '280+ Inch (7m+ Custom Dimension)',
      tech: 'MicroLED Curved Matrix + SDVoE 10G IP',
      aspect: 'Custom Architectural Canvas',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      scaleFactor: '100%'
    }
  ];

  const activeScale = displayScales[scaleLevel];

  return (
    <section className="section-spacing visual-experience-section light-zone" id="visual">
      <div className="container-wide">
        <SectionHeading
          badge="WOW 3 — VISUAL IMMERSION"
          title="SEE MORE. FEEL MORE."
          subtitle="From precision 55-inch touch panels to architectural 280-inch MicroLED canvases, we engineer displays that command complete executive focus."
        />

        {/* Visual Scale Controller */}
        <div className="scale-controller-bar glass-panel">
          <div className="controller-info">
            <Maximize2 size={18} className="text-cyan" />
            <span className="controller-label">INTERACTIVE DISPLAY EXPANSION ENGINE</span>
          </div>

          <div className="scale-buttons-group">
            {displayScales.map((ds, idx) => (
              <button
                key={ds.level}
                className={`scale-step-btn ${scaleLevel === idx ? 'active' : ''}`}
                onClick={() => setScaleLevel(idx)}
                data-cursor="explore"
                data-cursor-text="EXPAND"
              >
                <span className="btn-level-num">0{idx + 1}</span>
                <span className="btn-level-title">{ds.diagonal}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Canvas Preview */}
        <div className="display-stage-container">
          <div
            className="dynamic-screen-frame glass-panel"
            style={{ width: activeScale.scaleFactor }}
          >
            {/* Screen Bezel & HUD */}
            <div className="screen-bezel-border">
              <img
                src={activeScale.image}
                alt={activeScale.title}
                className="screen-display-content"
              />
              <div className="screen-hud-overlay">
                <div className="hud-top-tag">
                  <span className="live-dot status-dot-active" />
                  <span>{activeScale.tech}</span>
                </div>

                <div className="hud-bottom-info">
                  <h3 className="hud-screen-title">{activeScale.title}</h3>
                  <span className="hud-screen-cat">{activeScale.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scale Telemetry & Specs */}
        <div className="scale-specs-grid">
          <div className="spec-card">
            <span className="spec-key">ACTIVE DIMENSION</span>
            <span className="spec-val text-cyan">{activeScale.diagonal}</span>
          </div>
          <div className="spec-card">
            <span className="spec-key">PANEL ARCHITECTURE</span>
            <span className="spec-val">{activeScale.tech}</span>
          </div>
          <div className="spec-card">
            <span className="spec-key">ASPECT RATIO</span>
            <span className="spec-val">{activeScale.aspect}</span>
          </div>
          <div className="spec-card cta-card">
            <button className="btn-primary" onClick={onStartProject} data-cursor="start">
              <span>SPECIFY THIS DISPLAY</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
