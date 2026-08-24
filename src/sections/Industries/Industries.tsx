import React, { useState } from 'react';
import { Building, GraduationCap, Utensils, HeartPulse, Landmark, Theater, Sparkles, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
import { industriesData } from '../../data/industries';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './Industries.css';

interface IndustriesProps {
  onStartProject: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onStartProject }) => {
  const [selectedId, setSelectedId] = useState<string>(industriesData[0].id);

  const iconMap: Record<string, any> = {
    corporate: Building,
    education: GraduationCap,
    hospitality: Utensils,
    healthcare: HeartPulse,
    government: Landmark,
    auditoriums: Theater,
    worship: Sparkles,
    retail: ShoppingBag
  };

  const current = industriesData.find(i => i.id === selectedId) || industriesData[0];
  const CurrentIcon = iconMap[current.id] || Building;

  return (
    <section className="section-spacing industries-section light-zone" id="industries">
      <div className="container-wide">
        <SectionHeading
          badge="VERTICAL ARCHITECTURE"
          title="TECHNOLOGY FOR EVERY SPACE"
          subtitle="Every physical environment presents unique acoustic geometry, ambient illumination, and operational demands. We engineer tailored AV infrastructure for specialized sectors."
        />

        {/* Sector Tabs Bar */}
        <div className="industries-tabs-bar">
          {industriesData.map(ind => {
            const Icon = iconMap[ind.id] || Building;
            const isSelected = selectedId === ind.id;

            return (
              <button
                key={ind.id}
                className={`industry-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedId(ind.id)}
                data-cursor="explore"
                data-cursor-text="SECTOR"
              >
                <Icon size={16} className="tab-icon" />
                <span className="tab-name">{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Sector Experience Stage */}
        <div className="industry-showcase-stage glass-panel">
          <div className="stage-bg-wrapper">
            <img src={current.image} alt={current.name} className="stage-bg-image" />
            <div className="stage-overlay" />
          </div>

          <div className="stage-content-grid">
            <div className="stage-left-info">
              <div className="stage-sector-badge">
                <CurrentIcon size={16} className="text-cyan" />
                <span>{current.name.toUpperCase()} INFRASTRUCTURE</span>
              </div>

              <h3 className="stage-tagline text-gradient-white">"{current.tagline}"</h3>
              <p className="stage-description">{current.description}</p>

              <div className="stage-metric-box">
                <span className="metric-label">ENGINEERED IMPACT:</span>
                <span className="metric-value">{current.impactMetric}</span>
              </div>
            </div>

            <div className="stage-right-specs">
              <div className="specs-card-glass">
                <h4 className="specs-heading">DEPLOYED ARCHITECTURES</h4>
                <div className="solutions-checklist">
                  {current.solutions.map((sol, idx) => (
                    <div key={idx} className="checklist-item">
                      <CheckCircle size={16} className="text-cyan" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>

                <div className="environments-box">
                  <span className="env-label">TYPICAL ENVIRONMENTS:</span>
                  <div className="env-pills">
                    {current.keyEnvironments.map((env, idx) => (
                      <span key={idx} className="env-pill">{env}</span>
                    ))}
                  </div>
                </div>

                <button className="btn-primary stage-cta-btn" onClick={onStartProject} data-cursor="start">
                  <span>DESIGN FOR {current.name.toUpperCase()}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
