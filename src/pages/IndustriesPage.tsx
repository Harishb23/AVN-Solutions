import React, { useState } from 'react';
import { industriesData } from '../data/industries';
import {
  Building2,
  GraduationCap,
  Utensils,
  HeartPulse,
  Landmark,
  Theater,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Volume2,
  Monitor,
  Activity,
  Filter
} from 'lucide-react';
import './IndustriesPage.css';

interface IndustriesPageProps {
  onStartProject: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onStartProject }) => {
  const [activeSectorId, setActiveSectorId] = useState<string>(industriesData[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const iconMap: Record<string, any> = {
    corporate: Building2,
    education: GraduationCap,
    hospitality: Utensils,
    healthcare: HeartPulse,
    government: Landmark,
    auditoriums: Theater,
    worship: Sparkles,
    retail: ShoppingBag
  };

  const categories = ['All', 'Corporate & Tech', 'Education & Research', 'Large Venues & Auditoriums', 'Mission-Critical & NOC'];

  const getFilteredIndustries = () => {
    if (filterCategory === 'All') return industriesData;
    if (filterCategory === 'Corporate & Tech') return industriesData.filter(i => ['corporate', 'retail'].includes(i.id));
    if (filterCategory === 'Education & Research') return industriesData.filter(i => ['education', 'healthcare'].includes(i.id));
    if (filterCategory === 'Large Venues & Auditoriums') return industriesData.filter(i => ['auditoriums', 'hospitality', 'worship'].includes(i.id));
    if (filterCategory === 'Mission-Critical & NOC') return industriesData.filter(i => ['government', 'healthcare'].includes(i.id));
    return industriesData;
  };

  const activeSector = industriesData.find(i => i.id === activeSectorId) || industriesData[0];
  const ActiveIcon = iconMap[activeSector.id] || Building2;
  const filteredList = getFilteredIndustries();

  return (
    <div className="industries-page-container">
      {/* High-Impact Hero Banner */}
      <section className="industries-hero-banner">
        <div className="container-wide">
          <div className="hero-badge-pill">
            <Layers size={14} className="text-cyan" />
            <span>VERTICAL SPATIAL ARCHITECTURE // PAN-INDIA</span>
          </div>

          <h1 className="industries-hero-title text-gradient-white">
            AV TECHNOLOGY FOR<br />
            <span className="text-gradient-cyan">EVERY ARCHITECTURAL SPACE</span>
          </h1>

          <p className="industries-hero-subtitle">
            Every physical space presents unique acoustic reverberation, ambient illumination, and workflow demands. Explore how AVN Solutions engineers tailored audio, visual, and automation ecosystems for specialized sectors.
          </p>

          {/* Filter Bar */}
          <div className="sector-filter-strip">
            <div className="filter-label-wrap">
              <Filter size={15} className="text-cyan" />
              <span>FILTER BY SECTOR:</span>
            </div>
            <div className="filter-pills-row">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`sector-filter-btn ${filterCategory === cat ? 'active' : ''}`}
                  onClick={() => setFilterCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Interactive Spatial Sector Inspector */}
      <section className="sector-inspector-section">
        <div className="container-wide">
          <div className="inspector-console glass-panel">
            {/* Top HUD Strip */}
            <div className="inspector-hud-top">
              <div className="hud-title-group">
                <span className="hud-badge">SPATIAL SECTOR INSPECTOR</span>
                <h3 className="hud-heading">{activeSector.name} Architecture</h3>
              </div>
              <div className="hud-metric-pill">
                <span className="hud-dot-pulse" />
                <span>IMPACT: {activeSector.impactMetric}</span>
              </div>
            </div>

            <div className="inspector-main-grid">
              {/* Left Column: Sector Navigation Tabs */}
              <div className="inspector-tabs-col">
                <span className="tabs-col-label">SELECT SECTOR ARCHITECTURE:</span>
                <div className="inspector-tabs-stack">
                  {industriesData.map((ind) => {
                    const Icon = iconMap[ind.id] || Building2;
                    const isActive = activeSectorId === ind.id;
                    return (
                      <button
                        key={ind.id}
                        className={`inspector-tab-item ${isActive ? 'active' : ''}`}
                        onClick={() => setActiveSectorId(ind.id)}
                      >
                        <div className="tab-icon-wrap">
                          <Icon size={18} />
                        </div>
                        <div className="tab-text-wrap">
                          <span className="tab-title">{ind.name}</span>
                          <span className="tab-sub">{ind.keyEnvironments[0]}</span>
                        </div>
                        <ArrowRight size={15} className="tab-arrow" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Deep Dynamic Sector Experience Stage */}
              <div className="inspector-stage-col">
                <div className="stage-media-wrap">
                  <img src={activeSector.image} alt={activeSector.name} className="stage-img" />
                  <div className="stage-gradient-overlay" />
                  <div className="stage-floating-tag">
                    <ActiveIcon size={16} className="text-cyan" />
                    <span>{activeSector.name.toUpperCase()} INFRASTRUCTURE</span>
                  </div>
                </div>

                <div className="stage-details-content">
                  <h3 className="stage-tagline text-gradient-white">"{activeSector.tagline}"</h3>
                  <p className="stage-desc">{activeSector.description}</p>

                  {/* Technical Specifications Grid */}
                  <div className="stage-specs-matrix">
                    <div className="spec-matrix-cell">
                      <div className="cell-top">
                        <Volume2 size={14} className="text-cyan" />
                        <span className="cell-key">ACOUSTIC TARGET</span>
                      </div>
                      <span className="cell-val">STI ≥ 0.75 / RT60 &lt; 0.6s</span>
                    </div>

                    <div className="spec-matrix-cell">
                      <div className="cell-top">
                        <Monitor size={14} className="text-cyan" />
                        <span className="cell-key">DISPLAY STANDARD</span>
                      </div>
                      <span className="cell-val">4K/8K Fine-Pitch MicroLED</span>
                    </div>

                    <div className="spec-matrix-cell">
                      <div className="cell-top">
                        <Cpu size={14} className="text-cyan" />
                        <span className="cell-key">AUTOMATION CORE</span>
                      </div>
                      <span className="cell-val">Crestron 4-Series / Q-SYS</span>
                    </div>

                    <div className="spec-matrix-cell">
                      <div className="cell-top">
                        <Activity size={14} className="text-cyan" />
                        <span className="cell-key">SLA BENCHMARK</span>
                      </div>
                      <span className="cell-val">99.98% High Availability</span>
                    </div>
                  </div>

                  {/* Deployed Systems Checklist */}
                  <div className="stage-deployments-box">
                    <span className="box-section-title">DEPLOYED ENGINEERING ARCHITECTURES:</span>
                    <div className="deployments-grid">
                      {activeSector.solutions.map((sol, idx) => (
                        <div key={idx} className="deployment-item">
                          <CheckCircle2 size={15} className="text-cyan" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typical Environments */}
                  <div className="stage-environments-box">
                    <span className="box-section-title">TYPICAL ENVIRONMENTS SPECIFIED:</span>
                    <div className="env-pills-row">
                      {activeSector.keyEnvironments.map((env, idx) => (
                        <span key={idx} className="environment-pill">{env}</span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="stage-actions-row">
                    <button
                      className="btn-primary stage-cta-btn"
                      onClick={onStartProject}
                      data-cursor="start"
                    >
                      <span>SPECIFY FOR {activeSector.name.toUpperCase()}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete All-Sectors Comprehensive Grid */}
      <section className="all-sectors-grid-section">
        <div className="container-wide">
          <div className="grid-header-row">
            <h2 className="grid-heading text-gradient-white">Explore All Sector Capabilities</h2>
            <span className="grid-sub-note">Turnkey engineering for commercial, institutional, and cultural spaces</span>
          </div>

          <div className="sectors-cards-grid">
            {filteredList.map((ind) => {
              const Icon = iconMap[ind.id] || Building2;
              return (
                <div
                  key={ind.id}
                  className="sector-showcase-card glass-panel"
                  onClick={() => {
                    setActiveSectorId(ind.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  data-cursor="explore"
                  data-cursor-text="INSPECT"
                >
                  <div className="card-thumb-wrap">
                    <img src={ind.image} alt={ind.name} className="card-thumb-img" />
                    <div className="card-thumb-overlay" />
                    <div className="card-top-tag">
                      <Icon size={14} className="text-cyan" />
                      <span>{ind.name}</span>
                    </div>
                  </div>

                  <div className="card-details-body">
                    <h3 className="card-sector-name">{ind.name}</h3>
                    <p className="card-tagline">"{ind.tagline}"</p>
                    <p className="card-description">{ind.description}</p>

                    <div className="card-solutions-list">
                      {ind.solutions.slice(0, 3).map((s, idx) => (
                        <span key={idx} className="card-solution-chip">
                          <CheckCircle2 size={12} className="text-cyan" />
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="card-footer-action">
                      <span className="card-inspect-link">
                        <span>INSPECT SPECIFICATIONS</span>
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Discipline Philosophy */}
      <section className="industries-philosophy-strip">
        <div className="container-wide">
          <div className="philosophy-triad-grid">
            <div className="philosophy-card glass-panel">
              <div className="ph-icon-box">
                <Volume2 size={24} className="text-cyan" />
              </div>
              <h4 className="ph-title">Physics-First Acoustic Modeling</h4>
              <p className="ph-desc">
                We analyze room cubic volume, wall absorption coefficients, and boundary reflections using EASE simulation software to eliminate echo and guarantee speech intelligibility.
              </p>
            </div>

            <div className="philosophy-card glass-panel">
              <div className="ph-icon-box">
                <Monitor size={24} className="text-cyan" />
              </div>
              <h4 className="ph-title">Optical & Lux-Level Calculation</h4>
              <p className="ph-desc">
                Display sizes and pixel pitches are engineered using DISCAS standards, calculating exact viewing angles, ambient daylight resistance, and content resolution.
              </p>
            </div>

            <div className="philosophy-card glass-panel">
              <div className="ph-icon-box">
                <Cpu size={24} className="text-cyan" />
              </div>
              <h4 className="ph-title">Ergonomic One-Touch Control</h4>
              <p className="ph-desc">
                We eliminate technological complexity for presenters. Meeting rooms, stages, and command centers activate through single-touch macro automation scripts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
