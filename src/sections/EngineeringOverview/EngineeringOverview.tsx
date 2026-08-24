import React, { useState } from 'react';
import { Volume2, Monitor, Users, Sliders, Sparkles, ArrowUpRight } from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './EngineeringOverview.css';

interface EngineeringOverviewProps {
  onSelectSolution: (solutionId: string) => void;
  onStartProject: () => void;
}

export const EngineeringOverview: React.FC<EngineeringOverviewProps> = ({
  onSelectSolution,
  onStartProject
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const icons = [Volume2, Monitor, Users, Sliders, Sparkles];

  return (
    <section className="section-spacing engineering-overview-section light-zone" id="engineering">
      <div className="container-wide">
        <SectionHeading
          badge="OUR CORE DISCIPLINES"
          title="WHAT WE ENGINEER"
          subtitle="We don't merely supply hardware. We engineer integrated acoustic, visual, and control ecosystems that elevate physical architecture."
        />

        {/* Interactive Accordion / Fullscreen Panels */}
        <div className="engineering-panels-container">
          {solutionsData.map((sol, idx) => {
            const Icon = icons[idx] || Volume2;
            const isActive = activeIdx === idx;

            return (
              <div
                key={sol.id}
                className={`engineering-panel ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                data-cursor="explore"
                data-cursor-text="ENGINEER"
              >
                {/* Background Media with Depth Overlay */}
                <div className="panel-bg-image-wrap">
                  <img src={sol.heroImage} alt={sol.title} className="panel-bg-img" />
                  <div className="panel-overlay" />
                  <div className="panel-scanline" />
                </div>

                {/* Collapsed State Header / Number */}
                <div className="panel-collapsed-view">
                  <div className="panel-num-tag">{sol.number}</div>
                  <div className="panel-vertical-title">
                    <Icon size={18} className="panel-icon" />
                    <span>{sol.title.toUpperCase()}</span>
                  </div>
                </div>

                {/* Expanded State Rich Content */}
                <div className="panel-expanded-content">
                  <div className="panel-top-meta">
                    <span className="panel-num-large">{sol.number}</span>
                    <div className="panel-badge">
                      <Icon size={16} className="text-cyan" />
                      <span>{sol.title}</span>
                    </div>
                  </div>

                  <h3 className="panel-tagline">"{sol.tagline}"</h3>
                  <p className="panel-desc">{sol.description}</p>

                  {/* Bullet Services */}
                  <div className="panel-services-grid">
                    {sol.services.slice(0, 4).map((serv, sIdx) => (
                      <div key={sIdx} className="panel-service-item">
                        <span className="service-bullet" />
                        <span>{serv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Panel Actions */}
                  <div className="panel-footer-actions">
                    <button
                      className="btn-primary panel-cta"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSolution(sol.id);
                      }}
                      data-cursor="explore"
                    >
                      <span>EXPLORE {sol.title.toUpperCase()}</span>
                      <ArrowUpRight size={16} />
                    </button>

                    <button
                      className="btn-ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        onStartProject();
                      }}
                      data-cursor="start"
                    >
                      <span>START THIS SPEC →</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
