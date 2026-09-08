import React from 'react';
import { ArrowRight, Compass, PencilRuler, Wrench, Headphones } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhyChooseUs.css';

interface WhyChooseUsProps {
  onStartProject: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onStartProject }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const processStages = [
    {
      num: '01',
      title: 'DISCOVER',
      tagline: 'Spatial & Workflow Audit',
      description: 'Comprehensive acoustic and sightline audits on-site in Chennai.',
      icon: Compass,
      deliverables: ['RT60 Acoustic Survey', 'Sightline Modeling', 'Workflow Blueprint']
    },
    {
      num: '02',
      title: 'DESIGN',
      tagline: 'Engineering & Schematics',
      description: 'AutoCAD line schematics, EASE 3D raytracing and transparent BOQs.',
      icon: PencilRuler,
      deliverables: ['AutoCAD Single-Line DWG', 'EASE 3D Raytracing', 'Equipment BOQ']
    },
    {
      num: '03',
      title: 'INTEGRATE',
      tagline: 'Turnkey Commissioning',
      description: 'Installed and programmed by AVIXA CTS-certified engineers.',
      icon: Wrench,
      deliverables: ['CTS-D Rack Dressing', 'Crestron C# Programming', 'DSP Gain-Staging']
    },
    {
      num: '04',
      title: 'SUPPORT',
      tagline: 'Lifecycle Performance',
      description: 'Guaranteed 24/7 SLA telemetry, remote health diagnostics, and local spares.',
      icon: Headphones,
      deliverables: ['24/7 Cloud Telemetry', '2-Hour SLA Response', 'On-Site Spares Pool']
    }
  ];

  return (
    <section 
      ref={ref}
      className={`editorial-process-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="why-us"
    >
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-left">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-line" />
            <span>OUR METHODOLOGY</span>
          </div>
          <h2 className="section-grand-title">
            From concept <br />
            <span className="title-highlight">to installation.</span>
          </h2>
          <p className="section-lead-desc">
            A disciplined engineering process ensuring predictable delivery, seamless integration, and long-term system reliability.
          </p>
        </div>

        {/* 4-Stage Horizontal Process Grid */}
        <div className="process-horizontal-grid stagger-container">
          {processStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div key={idx} className="process-stage-card hover-card-lift">
                <div className="stage-top-meta">
                  <span className="stage-num-label number-reveal">{stage.num}</span>
                  <div className="stage-icon-circle">
                    <Icon size={18} className="text-emerald" />
                  </div>
                </div>

                <h3 className="stage-heading">{stage.title}</h3>
                <h4 className="stage-tagline">{stage.tagline}</h4>
                <p className="stage-detail">{stage.description}</p>

                {/* Visual Deliverables Pills */}
                <div className="stage-deliverables-strip">
                  <span className="stage-deliv-header">ENGINEERING DELIVERABLES:</span>
                  <div className="stage-deliv-pills">
                    {stage.deliverables.map((deliv, dIdx) => (
                      <span key={dIdx} className="deliv-chip">
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="process-bottom-banner hover-card-lift">
          <div className="banner-text-side">
            <h4 className="banner-title">Planning a new facility in Chennai or South India?</h4>
            <p className="banner-desc">Book an initial space consultation and architectural review with our senior engineering team.</p>
          </div>
          <button
            className="btn-primary banner-action-btn"
            onClick={() => {
              soundFx.playPowerChime();
              onStartProject();
            }}
          >
            <span>Book a Site Survey</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
