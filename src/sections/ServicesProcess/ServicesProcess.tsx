import React, { useState } from 'react';
import { servicesData, processStepsData } from '../../data/services';
import { 
  Compass, 
  Cpu, 
  Layers, 
  PackageCheck, 
  Wrench, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  Headphones, 
  Volume2, 
  Sparkles, 
  FolderKanban,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './ServicesProcess.css';

interface ServicesProcessProps {
  onStartProject: () => void;
  onNavigateServices?: () => void;
}

export const ServicesProcess: React.FC<ServicesProcessProps> = ({ onStartProject, onNavigateServices }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const iconMap: Record<string, any> = {
    Compass,
    Cpu,
    Layers,
    PackageCheck,
    Wrench,
    Code2,
    CheckCircle2,
    ShieldCheck,
    Headphones,
    Volume2,
    Sparkles,
    FolderKanban
  };

  const handleStepClick = (idx: number) => {
    soundFx.playClick(900);
    setActiveStep(idx);
  };

  return (
    <section className="services-process-section" id="services">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">LIFECYCLE ENGINEERING & DELIVERY</span>
          </div>
          <h2 className="section-grand-title">
            End-to-End AV Services.{' '}
            <span className="title-highlight">From Concept To Continuous SLA.</span>
          </h2>
          <p className="section-lead-desc">
            We provide full-spectrum engineering covering acoustic modeling, hardware supply, precision installation, custom Crestron programming, and local Chennai SLA maintenance.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="services-grid-12">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.iconName] || Layers;
            return (
              <div key={svc.id} className="service-card" data-cursor="explore">
                {/* Visual Image Banner */}
                <div className="service-card-media">
                  <img 
                    src={svc.image} 
                    alt={`${svc.title} - AVN Solutions Chennai`} 
                    loading="lazy" 
                    className="service-card-img" 
                  />
                  <div className="service-card-media-overlay" />
                  <div className="service-media-badges">
                    <span className="service-number-pill">{svc.number}</span>
                    {svc.badge && <span className="service-tech-pill">{svc.badge}</span>}
                  </div>
                  <div className="service-media-icon-float">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="service-card-body">
                  <span className="service-category-micro">{svc.categoryLabel}</span>
                  <h3 className="service-title">{svc.title}</h3>
                  <p className="service-desc">{svc.description}</p>

                  <div className="service-deliverables">
                    {svc.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="deliverable-item">
                        <CheckCircle2 size={12} className="text-cyan" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {onNavigateServices && (
                    <button 
                      className="service-card-view-btn"
                      onClick={() => {
                        soundFx.playClick(900);
                        onNavigateServices();
                      }}
                    >
                      <span>Explore Technical Specs</span>
                      <ChevronRight size={13} />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual 9-Step Process Timeline */}
        <div className="process-timeline-wrapper">
          <div className="process-header-box">
            <div className="process-badge">9-STAGE TURNKEY METHODOLOGY</div>
            <h3 className="process-grand-title">How We Deliver Precision AV Projects</h3>
            <p className="process-sub">A structured, engineering-first delivery model ensuring zero guesswork and zero project delays.</p>
          </div>

          {/* Interactive Process Stepper Strip */}
          <div className="process-steps-strip">
            {processStepsData.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  className={`process-step-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleStepClick(idx)}
                >
                  <span className="step-num">{step.number}</span>
                  <span className="step-phase">{step.phase}</span>
                  {idx < processStepsData.length - 1 && <ChevronRight size={13} className="step-arrow" />}
                </button>
              );
            })}
          </div>

          {/* Active Step Card With Visual Showcase Photo */}
          <div className="active-step-card">
            {/* Visual Photo Stage */}
            <div className="active-step-visual-col">
              <div className="active-step-img-wrap">
                <img 
                  src={processStepsData[activeStep].image} 
                  alt={processStepsData[activeStep].title} 
                  loading="lazy"
                  className="active-step-img" 
                />
                <div className="active-step-img-overlay" />
                <div className="active-step-img-tag">
                  {processStepsData[activeStep].tag || `STAGE ${processStepsData[activeStep].number}`}
                </div>
                <div className="active-step-duration-chip">
                  {processStepsData[activeStep].duration}
                </div>
              </div>
            </div>

            <div className="active-step-left">
              <span className="active-step-tag">STAGE {processStepsData[activeStep].number} OF 09</span>
              <h4 className="active-step-title">{processStepsData[activeStep].title}</h4>
              <p className="active-step-desc">{processStepsData[activeStep].description}</p>
              <div className="active-step-lead">
                <span>Phase Lead:</span> <strong>{processStepsData[activeStep].leadRole || 'AV Systems Engineer'}</strong>
              </div>
            </div>

            <div className="active-step-right">
              <span className="outputs-heading">VERIFIED STAGE DELIVERABLES</span>
              <div className="outputs-grid">
                {processStepsData[activeStep].outputs.map((out, i) => (
                  <div key={i} className="output-chip">
                    <CheckCircle2 size={14} className="text-cyan" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

              <div className="process-actions-flex">
                <button
                  className="btn-primary process-cta-btn"
                  onClick={() => {
                    soundFx.playPowerChime();
                    onStartProject();
                  }}
                >
                  <span>Initiate Stage 01 Scope Assessment</span>
                  <ArrowRight size={14} />
                </button>

                {onNavigateServices && (
                  <button
                    className="btn-secondary services-detail-cta"
                    onClick={onNavigateServices}
                  >
                    <span>View All 12 Services Breakdown →</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
