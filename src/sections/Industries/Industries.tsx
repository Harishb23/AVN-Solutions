import React, { useState } from 'react';
import { 
  Building, 
  GraduationCap, 
  HeartPulse, 
  Utensils, 
  ShoppingBag, 
  Landmark, 
  Home, 
  Theater, 
  Sparkles, 
  Building2,
  CheckCircle2, 
  ArrowRight,
  Sliders
} from 'lucide-react';
import { industriesData } from '../../data/industries';
import { soundFx } from '../../utils/sound';
import './Industries.css';

interface IndustriesProps {
  onStartProject: () => void;
  onNavigateIndustries?: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onStartProject, onNavigateIndustries }) => {
  const [selectedId, setSelectedId] = useState<string>(industriesData[0].id);

  const iconMap: Record<string, any> = {
    corporate: Building,
    education: GraduationCap,
    healthcare: HeartPulse,
    hospitality: Utensils,
    retail: ShoppingBag,
    government: Landmark,
    residential: Home,
    entertainment: Theater,
    worship: Sparkles,
    commercial: Building2
  };

  const current = industriesData.find(i => i.id === selectedId) || industriesData[0];
  const CurrentIcon = iconMap[current.id] || Building;

  const handleSelect = (id: string) => {
    soundFx.playClick(900);
    setSelectedId(id);
  };

  return (
    <section className="industries-explorer-section" id="industries">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">VERTICAL SECTOR EXPERTISE</span>
          </div>
          <h2 className="section-grand-title">
            AV Solutions For <span className="title-highlight">Every Environment.</span>
          </h2>
          <p className="section-lead-desc">
            Every physical space presents unique acoustic geometry, illumination conditions, and operational workflows. We engineer specialized technology solutions across corporate, institutional, commercial, and residential sectors.
          </p>
        </div>

        {/* 10-Industry Selector Tabs */}
        <div className="industry-pills-row">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.id] || Building;
            const isSelected = selectedId === ind.id;

            return (
              <button
                key={ind.id}
                className={`industry-selector-pill ${isSelected ? 'is-active' : ''}`}
                onClick={() => handleSelect(ind.id)}
                data-cursor="explore"
              >
                <Icon size={14} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Industry Showcase Stage */}
        <div className="industry-showcase-stage">
          <div className="stage-hero-image-wrap">
            <img src={current.image} alt={current.name} className="stage-hero-img" key={current.id} />
            <div className="stage-hero-gradient" />
            
            <div className="stage-hero-content">
              <div className="stage-sector-tag">
                <CurrentIcon size={14} className="text-cyan" />
                <span>INDUSTRY 0{current.number} // {current.name.toUpperCase()}</span>
              </div>
              <h3 className="stage-headline">"{current.tagline}"</h3>
              <p className="stage-body-text">{current.description}</p>
            </div>
          </div>

          <div className="stage-details-grid">
            {/* Typical Spaces */}
            <div className="industry-detail-card">
              <div className="detail-card-head">
                <Building2 size={16} className="text-cyan" />
                <span className="detail-card-title">Typical Spaces</span>
              </div>
              <div className="spaces-pills-wrap">
                {current.typicalSpaces.map((space, idx) => (
                  <span key={idx} className="space-pill">
                    {space}
                  </span>
                ))}
              </div>
            </div>

            {/* Recommended Solutions */}
            <div className="industry-detail-card">
              <div className="detail-card-head">
                <Sliders size={16} className="text-cyan" />
                <span className="detail-card-title">Recommended AV Solutions</span>
              </div>
              <ul className="solutions-rec-list">
                {current.recommendedSolutions.map((sol, idx) => (
                  <li key={idx} className="solution-rec-item">
                    <CheckCircle2 size={13} className="text-cyan" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metric & CTA Box */}
            <div className="industry-cta-card">
              <div className="metric-callout">
                <span className="metric-eyebrow">ENGINEERED IMPACT METRIC</span>
                <span className="metric-text">{current.impactMetric}</span>
              </div>

              <button
                className="btn-primary industry-action-btn"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>{current.ctaText || `Design for ${current.name}`}</span>
                <ArrowRight size={15} />
              </button>

              {onNavigateIndustries && (
                <button
                  className="btn-secondary industry-view-all-btn"
                  onClick={onNavigateIndustries}
                >
                  <span>Explore All 10 Industry Verticals</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
