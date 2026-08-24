import React, { useState } from 'react';
import { Search, Compass, Cpu, Wrench, GitMerge, Award, Headphones } from 'lucide-react';
import { processSteps } from '../../data/company';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './Process.css';

interface ProcessProps {
  onStartProject?: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepIcons = [Search, Compass, Cpu, Wrench, GitMerge, Award, Headphones];
  const currentStep = processSteps[activeStep];
  const CurrentIcon = stepIcons[activeStep] || Search;

  return (
    <section className="section-spacing process-section" id="process">
      <div className="container-wide">
        <SectionHeading
          badge="7-STAGE ENGINEERING LIFECYCLE"
          title="FROM BLUEPRINT TO EXPERIENCE"
          subtitle="Precision engineering requires structured discipline. Our 7-stage delivery lifecycle transforms spatial concepts into operational, high-performance environments."
        />

        {/* Continuous Animated Pipeline Bar */}
        <div className="pipeline-continuous-track">
          <div className="pipeline-line" />
          <div
            className="pipeline-line-progress"
            style={{ width: `${((activeStep + 0.5) / processSteps.length) * 100}%` }}
          />

          <div className="pipeline-nodes-row">
            {processSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || Search;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.step}
                  className={`pipeline-node-btn ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  data-cursor="explore"
                  data-cursor-text={step.name}
                >
                  <div className="node-icon-circle">
                    <Icon size={18} />
                  </div>
                  <span className="node-step-tag">{step.step}</span>
                  <span className="node-step-title">{step.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Blueprint Stage */}
        <div className="blueprint-stage-viewer glass-panel">
          <div className="blueprint-header">
            <div className="blueprint-id">
              <span className="cad-symbol">📐 SPECIFICATION CAD //</span>
              <span className="cad-phase">PHASE {currentStep.step} OF 07</span>
            </div>

            <div className="blueprint-tagline">
              <CurrentIcon size={18} className="text-cyan" />
              <span>{currentStep.subtitle}</span>
            </div>
          </div>

          <div className="blueprint-body-grid">
            <div className="blueprint-body-left">
              <span className="stage-huge-num">{currentStep.step}</span>
              <h3 className="stage-title text-gradient-white">{currentStep.name}</h3>
              <p className="stage-desc">{currentStep.description}</p>

              <div className="stage-nav-row">
                <button
                  className="btn-secondary stage-prev-btn"
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                >
                  ← PREV PHASE
                </button>

                <button
                  className="btn-primary stage-next-btn"
                  onClick={() => {
                    if (activeStep === processSteps.length - 1 && onStartProject) {
                      onStartProject();
                    } else {
                      setActiveStep(Math.min(processSteps.length - 1, activeStep + 1));
                    }
                  }}
                >
                  <span>{activeStep === processSteps.length - 1 ? 'INITIATE PROJECT' : 'NEXT PHASE →'}</span>
                </button>
              </div>
            </div>

            <div className="blueprint-body-right">
              <div className="blueprint-cad-schematic">
                <div className="cad-grid-pattern" />
                <div className="cad-rings">
                  <div className="cad-ring ring-1" />
                  <div className="cad-ring ring-2" />
                  <div className="cad-ring ring-3" />
                </div>
                <div className="cad-center-hud">
                  <CurrentIcon size={36} className="text-cyan" />
                  <span className="cad-hud-step">PHASE {currentStep.step}</span>
                  <span className="cad-hud-name">{currentStep.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
