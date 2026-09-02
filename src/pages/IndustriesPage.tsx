import React, { useState } from 'react';
import { industriesData } from '../data/industries';
import { Layers, ArrowRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { soundFx } from '../utils/sound';
import './Pages.css';

interface IndustriesPageProps {
  onStartProject: () => void;
  initialIndustryId?: string;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onStartProject, initialIndustryId }) => {
  const [selectedId, setSelectedId] = useState<string>(initialIndustryId || industriesData[0].id);

  const activeIndustry = industriesData.find(i => i.id === selectedId) || industriesData[0];

  return (
    <div className="page-view-container">
      {/* Page Hero - Exactly matching Solutions Page */}
      <section className="page-hero-banner">
        <div className="container-wide">
          <div className="page-badge">
            <Layers size={14} className="text-cyan" />
            <span>VERTICAL SPATIAL ARCHITECTURE</span>
          </div>
          <h1 className="page-hero-title">
            AV Technology For <span className="industries-title-cyan">Every Architectural Space.</span>
          </h1>
          <p className="page-hero-subtitle">
            Every physical space presents unique acoustic reverberation, ambient illumination, and workflow demands. Explore how AVN Solutions engineers tailored audio, visual, and automation ecosystems for specialized sectors across Chennai & South India.
          </p>
        </div>
      </section>

      {/* Industries Detail Explorer */}
      <section className="section-spacing">
        <div className="container-wide">
          {/* Industry Horizontal Tabs (Matching SolutionsPage page-tab-nav) */}
          <div className="page-tab-nav" role="tablist" aria-label="Industry Sectors">
            {industriesData.map(ind => {
              const isActive = selectedId === ind.id;
              return (
                <button
                  key={ind.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`page-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(900);
                    setSelectedId(ind.id);
                  }}
                  data-cursor="explore"
                >
                  <span className="tab-num">{ind.number}</span>
                  <span className="tab-text">{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Deep Breakdown (Matching SolutionsPage solution-deep-block) */}
          <div className="solution-deep-block glass-panel" key={activeIndustry.id}>
            <div className="solution-main-grid">
              {/* Left Column: Sector Info, Tagline, Recommendations & CTA */}
              <div className="solution-info-col">
                <span className="solution-pill-tag">SECTOR {activeIndustry.number}</span>
                <h2 className="solution-headline text-gradient-white">{activeIndustry.name}</h2>
                <h3 className="solution-quote">"{activeIndustry.tagline}"</h3>
                <p className="solution-long-desc">{activeIndustry.description}</p>

                {/* Recommended Engineering Solutions Checklist */}
                <div className="solution-features-list">
                  <h4 className="services-box-title" style={{ marginBottom: '0.25rem' }}>
                    RECOMMENDED ENGINEERING ARCHITECTURES:
                  </h4>
                  {activeIndustry.recommendedSolutions.map((sol, idx) => (
                    <div key={idx} className="feat-row">
                      <div className="feat-icon-box">
                        <CheckCircle2 size={16} className="text-cyan" />
                      </div>
                      <div className="feat-text">
                        <h4 className="feat-title">{sol}</h4>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="solution-cta-row">
                  <button 
                    className="btn-primary" 
                    onClick={() => {
                      soundFx.playPowerChime();
                      onStartProject();
                    }} 
                    data-cursor="start"
                  >
                    <span>SPECIFY FOR {activeIndustry.name.toUpperCase()}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Column: Media, Typical Environments & Impact Telemetry */}
              <div className="solution-scope-col">
                <div className="solution-media-frame">
                  <img src={activeIndustry.image} alt={activeIndustry.name} className="solution-img" />
                  <div className="solution-img-overlay" />
                </div>

                <div className="services-box-card">
                  <h4 className="services-box-title">TYPICAL ENVIRONMENTS SPECIFIED:</h4>
                  <ul className="services-bullet-list">
                    {activeIndustry.typicalSpaces.map((space, idx) => (
                      <li key={idx} className="bullet-li">
                        <span className="bullet-dot" />
                        <span>{space}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact Metric & Telemetry Benchmarks */}
                <div className="specs-telemetry-box">
                  <div className="telemetry-item">
                    <span className="telem-label">
                      <Activity size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      IMPACT BENCHMARK
                    </span>
                    <span className="telem-val" style={{ fontSize: '0.82rem', lineHeight: '1.45', fontWeight: '600' }}>
                      {activeIndustry.impactMetric}
                    </span>
                  </div>
                  <div className="telemetry-item">
                    <span className="telem-label">
                      <ShieldCheck size={12} style={{ display: 'inline', marginRight: '4px' }} />
                      SLA STANDARD
                    </span>
                    <span className="telem-val">99.98% Uptime SLA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
