import React from 'react';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processSteps } from '../../data/company';
import './Process.css';

interface ProcessProps {
  onStartProject: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  return (
    <section className="section-spacing process-section" id="process">
      <div className="container-wide">
        <SectionHeading
          badge="TURNKEY EXECUTION FRAMEWORK"
          title="FROM CONCEPT TO COMMISSIONING"
          subtitle="A structured 5-stage engineering lifecycle eliminating project delays, component mismatches, and operational downtime."
        />

        <div className="process-pipeline-grid">
          {processSteps.map((step: { number: string; title: string; description: string }, idx: number) => (
            <div key={idx} className="process-stage-card glass-panel" data-cursor="explore">
              <div className="stage-top-bar">
                <span className="stage-num">{step.number}</span>
                <CheckCircle2 size={16} className="text-cyan" />
              </div>

              <h3 className="stage-title">{step.title}</h3>
              <p className="stage-desc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="process-footer-row">
          <button className="btn-primary" onClick={onStartProject} data-cursor="start">
            <span>INITIATE STAGE 01 (SITE SURVEY)</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
