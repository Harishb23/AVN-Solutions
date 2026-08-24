import React, { useState } from 'react';
import { solutionsData } from '../data/solutions';
import { Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import './Pages.css';

interface SolutionsPageProps {
  onStartProject: () => void;
  initialSolutionId?: string;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onStartProject, initialSolutionId }) => {
  const [selectedId, setSelectedId] = useState<string>(initialSolutionId || solutionsData[0].id);

  const activeSolution = solutionsData.find(s => s.id === selectedId) || solutionsData[0];

  return (
    <div className="page-view-container">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="container-wide">
          <div className="page-badge">
            <Cpu size={14} className="text-cyan" />
            <span>ENGINEERING DISCIPLINES</span>
          </div>
          <h1 className="page-hero-title text-gradient-white">
            AUDIO, VISUAL &<br />
            <span className="text-gradient-cyan">INTELLIGENT INTEGRATION</span>
          </h1>
          <p className="page-hero-subtitle">
            Explore our turnkey technical capabilities. We design, program, calibrate, and support mission-critical AV systems across India.
          </p>
        </div>
      </section>

      {/* Solutions Detail Explorer */}
      <section className="section-spacing">
        <div className="container-wide">
          {/* Solution Tabs */}
          <div className="page-tab-nav">
            {solutionsData.map(s => (
              <button
                key={s.id}
                className={`page-tab-btn ${selectedId === s.id ? 'active' : ''}`}
                onClick={() => setSelectedId(s.id)}
                data-cursor="explore"
              >
                <span className="tab-num">{s.number}</span>
                <span className="tab-text">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Active Solution Deep Breakdown */}
          <div className="solution-deep-block glass-panel">
            <div className="solution-main-grid">
              <div className="solution-info-col">
                <span className="solution-pill-tag">DISCIPLINE {activeSolution.number}</span>
                <h2 className="solution-headline text-gradient-white">{activeSolution.title}</h2>
                <h3 className="solution-quote">"{activeSolution.tagline}"</h3>
                <p className="solution-long-desc">{activeSolution.description}</p>

                {/* Technical Features */}
                <div className="solution-features-list">
                  {activeSolution.features.map((feat, idx) => (
                    <div key={idx} className="feat-row">
                      <div className="feat-icon-box">
                        <CheckCircle2 size={16} className="text-cyan" />
                      </div>
                      <div className="feat-text">
                        <h4 className="feat-title">{feat.title}</h4>
                        <p className="feat-desc">{feat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="solution-cta-row">
                  <button className="btn-primary" onClick={onStartProject} data-cursor="start">
                    <span>SPECIFY {activeSolution.title.toUpperCase()}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Media & Scope Services */}
              <div className="solution-scope-col">
                <div className="solution-media-frame">
                  <img src={activeSolution.heroImage} alt={activeSolution.title} className="solution-img" />
                  <div className="solution-img-overlay" />
                </div>

                <div className="services-box-card">
                  <h4 className="services-box-title">SERVICES INCLUDED IN THIS DISCIPLINE:</h4>
                  <ul className="services-bullet-list">
                    {activeSolution.services.map((serv, idx) => (
                      <li key={idx} className="bullet-li">
                        <span className="bullet-dot" />
                        <span>{serv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {activeSolution.specs && (
                  <div className="specs-telemetry-box">
                    {activeSolution.specs.map((sp, idx) => (
                      <div key={idx} className="telemetry-item">
                        <span className="telem-label">{sp.label}</span>
                        <span className="telem-val">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
