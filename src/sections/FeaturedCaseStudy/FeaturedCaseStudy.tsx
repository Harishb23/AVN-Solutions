import React, { useState } from 'react';
import { featuredCaseStudy } from '../../data/projects';
import { 
  CheckCircle2, 
  Layers, 
  Cpu, 
  MapPin, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './FeaturedCaseStudy.css';

interface FeaturedCaseStudyProps {
  onStartProject: () => void;
}

export const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ onStartProject }) => {
  const [viewMode, setViewMode] = useState<'after' | 'before'>('after');
  const study = featuredCaseStudy;

  const toggleViewMode = (mode: 'after' | 'before') => {
    soundFx.playClick(950);
    setViewMode(mode);
  };

  return (
    <section className="featured-case-section" id="featured-case">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">FEATURED DEPLOYMENT CASE STUDY</span>
          </div>
          <h2 className="section-grand-title">
            Transforming a Boardroom Into a{' '}
            <span className="title-highlight">Connected Collaboration Space.</span>
          </h2>
          <p className="section-lead-desc">
            A comprehensive look at how AVN Solutions replaced legacy washed-out projection and cable clutter with an architectural direct-view MicroLED canvas and steerable ceiling acoustics.
          </p>
        </div>

        {/* Grand Banner Box */}
        <div className="case-study-grand-box">
          {/* Top Bar Meta */}
          <div className="case-top-meta-bar">
            <div className="case-client-info">
              <span className="case-client-type">{study.client}</span>
              <span className="case-dot">•</span>
              <div className="case-loc-flex">
                <MapPin size={13} className="text-cyan" />
                <span>{study.location}</span>
              </div>
            </div>

            {/* Before / After Toggle Switch */}
            <div className="before-after-switch">
              <button
                className={`ba-toggle-btn ${viewMode === 'before' ? 'active' : ''}`}
                onClick={() => toggleViewMode('before')}
              >
                Before Transformation
              </button>
              <button
                className={`ba-toggle-btn ${viewMode === 'after' ? 'active' : ''}`}
                onClick={() => toggleViewMode('after')}
              >
                After Engineering (Turnkey)
              </button>
            </div>
          </div>

          {/* 2-Column Visual & Architecture Grid */}
          <div className="case-main-body-grid">
            {/* Visual Column */}
            <div className="case-visual-column">
              <div className="case-image-viewport">
                <img
                  src={viewMode === 'after' ? study.afterImage : study.beforeImage}
                  alt={study.title}
                  className="case-viewport-img"
                  key={viewMode}
                />
                <div className="case-state-badge">
                  {viewMode === 'after' ? (
                    <span className="badge-after">
                      <Sparkles size={12} /> AFTER: 8K DIRECT-VIEW MICROLED & BEAMFORMING MICS
                    </span>
                  ) : (
                    <span className="badge-before">BEFORE: LEGACY WASHED-OUT PROJECTION & TABLETOP WIRES</span>
                  )}
                </div>
              </div>

              {/* 4 Metric Tiles */}
              <div className="case-metrics-grid">
                {study.metrics.map((m, idx) => (
                  <div key={idx} className="case-metric-tile">
                    <span className="cm-label">{m.label}</span>
                    <span className="cm-val">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content & Specs Column */}
            <div className="case-info-column">
              {/* Requirements & Technologies */}
              <div className="case-section-box">
                <div className="case-box-head">
                  <Layers size={15} className="text-cyan" />
                  <span className="case-box-title">Project Requirements</span>
                </div>
                <ul className="case-check-list">
                  {study.requirements.map((req, i) => (
                    <li key={i} className="case-check-item">
                      <CheckCircle2 size={13} className="text-cyan" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-section-box">
                <div className="case-box-head">
                  <Cpu size={15} className="text-cyan" />
                  <span className="case-box-title">Technology Implemented</span>
                </div>
                <div className="case-tech-tags">
                  {study.technologies.map((tech, i) => (
                    <span key={i} className="case-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="case-narrative-box">
                <div className="narrative-segment">
                  <span className="narrative-heading">THE ENGINEERING CHALLENGE:</span>
                  <p className="narrative-text">{study.challenges}</p>
                </div>

                <div className="narrative-segment" style={{ marginTop: '0.75rem' }}>
                  <span className="narrative-heading" style={{ color: 'var(--blue-primary)' }}>OUR INTEGRATED SOLUTION & RESULT:</span>
                  <p className="narrative-text">{study.solution}</p>
                </div>
              </div>

              {/* CTA Action */}
              <div className="case-action-row">
                <button
                  className="btn-primary case-quote-btn"
                  onClick={() => {
                    soundFx.playPowerChime();
                    onStartProject();
                  }}
                >
                  <span>Request Boardroom AV Proposal</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
