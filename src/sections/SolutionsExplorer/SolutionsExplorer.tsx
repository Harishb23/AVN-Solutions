import React, { useState } from 'react';
import { solutionsData } from '../../data/solutions';
import { ArrowRight, CheckCircle2, Sliders, Sparkles, Building2, PackageCheck } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './SolutionsExplorer.css';

interface SolutionsExplorerProps {
  onSelectSolutionDetail?: (solutionId: string) => void;
  onStartProject: () => void;
  initialSelectedId?: string;
}

export const SolutionsExplorer: React.FC<SolutionsExplorerProps> = ({
  onSelectSolutionDetail,
  onStartProject,
  initialSelectedId
}) => {
  const [selectedId, setSelectedId] = useState<string>(initialSelectedId || solutionsData[0].id);

  const currentSolution = solutionsData.find(s => s.id === selectedId) || solutionsData[0];

  const handleSelectSolution = (id: string) => {
    soundFx.playClick(950);
    setSelectedId(id);
  };

  return (
    <section className="solutions-explorer-section" id="solutions-explorer">
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">AV CAPABILITIES & ARCHITECTURE</span>
          </div>
          <h2 className="section-grand-title">
            Technology Solutions{' '}
            <span className="title-highlight">Designed Around Your Space.</span>
          </h2>
          <p className="section-lead-desc">
            We combine AV engineering, automation, acoustics and intelligent technology to create spaces that work beautifully.
          </p>
        </div>

        {/* 2-Column Explorer Stage */}
        <div className="solutions-explorer-grid">
          {/* Left Column: 12 Interactive Cards / Selector Grid */}
          <div className="solutions-cards-list">
            {solutionsData.map((sol) => {
              const isSelected = sol.id === selectedId;
              return (
                <div
                  key={sol.id}
                  className={`solution-selector-card ${isSelected ? 'is-active' : ''}`}
                  onClick={() => handleSelectSolution(sol.id)}
                  data-cursor="explore"
                >
                  <div className="card-top-row">
                    <span className="card-num">{sol.number}</span>
                    {isSelected && <span className="card-active-tag">ACTIVE VIEW</span>}
                  </div>
                  <h3 className="card-title">{sol.title}</h3>
                  <p className="card-tagline">{sol.tagline}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Stage */}
          <div className="solution-stage-preview">
            <div className="stage-panel-card">
              {/* Dynamic Image Canvas */}
              <div className="stage-image-container">
                <img
                  src={currentSolution.heroImage}
                  alt={currentSolution.title}
                  className="stage-main-img"
                  key={currentSolution.id}
                />
                <div className="stage-img-overlay">
                  <div className="stage-num-badge">SOLUTION {currentSolution.number}</div>
                  <h3 className="stage-title-banner">{currentSolution.title}</h3>
                  <p className="stage-tagline-sub">{currentSolution.tagline}</p>
                </div>
              </div>

              {/* Dynamic Content Details */}
              <div className="stage-content-body">
                {/* Description */}
                <div className="stage-desc-block">
                  <span className="block-eyebrow">ENGINEERING OVERVIEW</span>
                  <p className="stage-desc-text">{currentSolution.description}</p>
                </div>

                {/* 2-Column Info: Typical Environments & Recommended Products */}
                <div className="stage-dual-grid">
                  {/* Typical Environments */}
                  <div className="stage-info-box">
                    <div className="info-box-header">
                      <Building2 size={15} className="text-cyan" />
                      <span className="box-title">Typical Environments</span>
                    </div>
                    <ul className="info-item-list">
                      {currentSolution.typicalEnvironments.map((env, i) => (
                        <li key={i} className="info-list-item">
                          <CheckCircle2 size={13} className="text-cyan" />
                          <span>{env}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Products */}
                  <div className="stage-info-box">
                    <div className="info-box-header">
                      <PackageCheck size={15} className="text-cyan" />
                      <span className="box-title">Recommended Equipment</span>
                    </div>
                    <ul className="info-item-list">
                      {currentSolution.recommendedProducts.map((prod, i) => (
                        <li key={i} className="info-list-item">
                          <Sliders size={13} className="text-cyan" />
                          <span>{prod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specs Pill Strip */}
                {currentSolution.specs && currentSolution.specs.length > 0 && (
                  <div className="stage-specs-strip">
                    {currentSolution.specs.map((sp, idx) => (
                      <div key={idx} className="stage-spec-pill">
                        <span className="sp-label">{sp.label}:</span>
                        <span className="sp-val">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stage CTA Action */}
                <div className="stage-action-bar">
                  <button
                    className="btn-primary stage-cta-btn"
                    onClick={() => {
                      soundFx.playPowerChime();
                      onStartProject();
                    }}
                  >
                    <span>{currentSolution.ctaText || 'Request System Design'}</span>
                    <ArrowRight size={16} />
                  </button>

                  {onSelectSolutionDetail && (
                    <button
                      className="btn-secondary stage-more-btn"
                      onClick={() => onSelectSolutionDetail(currentSolution.id)}
                    >
                      <Sparkles size={14} className="text-cyan" />
                      <span>View Full Specifications</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
