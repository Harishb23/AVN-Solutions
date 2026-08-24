import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';
import './FinalCTA.css';

interface FinalCTAProps {
  onStartProject: () => void;
  onContact?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartProject, onContact }) => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-card glass-panel" data-cursor="start">
          <div className="cta-ambient-glow" />

          <div className="cta-content-center">
            <div className="cta-badge">
              <Sparkles size={14} className="text-cyan" />
              <span>SPATIAL TRANSFORMATION LAB</span>
            </div>

            <h2 className="cta-main-title text-gradient-white">
              HAVE A SPACE?<br />
              <span className="text-gradient-cyan">LET'S TRANSFORM IT.</span>
            </h2>

            <p className="cta-subtitle">
              Tell us what you're building. We'll engineer the experience — from acoustic simulations to turnkey commissioning.
            </p>

            <div className="cta-buttons-row">
              <button
                className="btn-primary cta-btn-large"
                onClick={onStartProject}
                data-cursor="start"
                data-cursor-text="START"
              >
                <span>START A PROJECT</span>
                <ArrowRight size={18} />
              </button>

              {onContact ? (
                <button
                  className="btn-secondary cta-btn-large"
                  onClick={onContact}
                  data-cursor="explore"
                  data-cursor-text="VISIT"
                >
                  <PhoneCall size={18} className="text-cyan" />
                  <span>TALK TO AN AV EXPERT</span>
                </button>
              ) : (
                <a
                  href="tel:04424501688"
                  className="btn-secondary cta-btn-large"
                  data-cursor="listen"
                  data-cursor-text="CALL"
                >
                  <PhoneCall size={18} className="text-cyan" />
                  <span>044 2450 1688</span>
                </a>
              )}
            </div>

            <div className="cta-footer-trust">
              <div className="trust-node">
                <ShieldCheck size={14} className="text-cyan" />
                <span>Enterprise SLA Protection</span>
              </div>
              <span className="trust-sep">•</span>
              <div className="trust-node">
                <span>Sholinganallur, Chennai Integration Facility</span>
              </div>
              <span className="trust-sep">•</span>
              <div className="trust-node">
                <span>Direct OEM Factory Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
