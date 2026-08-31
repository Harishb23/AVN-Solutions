import React from 'react';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { ShieldCheck, MapPin, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { timelineMilestones, companyDetails } from '../../data/company';
import './AboutSection.css';

interface AboutSectionProps {
  onStartProject: () => void;
  onContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject, onContact }) => {
  const values = [
    { title: 'Physics-Based Acoustics', desc: 'Every space modeled in 3D for optimal STIPA speech intelligibility and RT60 decay.' },
    { title: 'Bezel-Free Visual Standards', desc: 'Direct-view fine-pitch MicroLED canvas engineering calibrated for high ambient lux environments.' },
    { title: 'Zero-Latency AV-over-IP', desc: '10G uncompressed video and multi-channel Dante audio transport over enterprise fiber backbones.' },
    { title: 'One-Touch Intelligent Automation', desc: 'Custom Crestron and Extron logic consolidating lighting, HVAC, shades, and video switching.' }
  ];

  return (
    <section className="section-spacing about-section" id="about">
      <div className="container-wide">
        <SectionHeading
          badge="COMPANY HERITAGE & CAPABILITY"
          title="ENGINEERING TRUST ACROSS INDIA"
          subtitle="AVN Solutions bridges spatial architecture, acoustic physics, and enterprise IT networks to deliver mission-critical AV infrastructure."
        />

        <div className="about-content-grid">
          {/* Left Column: Purpose & Value Cards */}
          <div className="about-values-col">
            <div className="about-purpose-card glass-panel">
              <div className="purpose-header-row">
                <ShieldCheck size={24} className="text-cyan" />
                <span className="purpose-badge">AVIXA CTS CERTIFIED INTEGRATOR</span>
              </div>
              <h3 className="purpose-title text-gradient-white">
                We Build Spaces That Sound Intelligible, Look Impactful, and Work Reliably.
              </h3>
              <p className="purpose-text">
                With a primary engineering and staging facility in Sholinganallur, Chennai, AVN Solutions delivers turnkey commercial audio-visual, unified communications, and intelligent automation systems.
              </p>
            </div>

            <div className="values-2x2-grid">
              {values.map((v, idx) => (
                <div key={idx} className="value-mini-card glass-panel">
                  <div className="val-top">
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span className="val-num">0{idx + 1}</span>
                  </div>
                  <h4 className="val-title">{v.title}</h4>
                  <p className="val-desc">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <button className="btn-primary" onClick={onStartProject} data-cursor="start">
                <span>REQUEST SYSTEM AUDIT</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" onClick={onContact} data-cursor="explore">
                <span>CONNECT WITH CHENNAI DESK</span>
              </button>
            </div>
          </div>

          {/* Right Column: Milestones & Verified Location */}
          <div className="about-milestones-col">
            <div className="milestones-timeline-card glass-panel">
              <div className="milestone-card-head">
                <Award size={20} className="text-cyan" />
                <span className="milestone-label">ENGINEERING TIMELINE</span>
              </div>

              <div className="timeline-items-list">
                {timelineMilestones.map((m: { year: string; title: string; description: string }, idx: number) => (
                  <div key={idx} className="timeline-node">
                    <div className="node-marker">
                      <span className="marker-dot" />
                      {idx < timelineMilestones.length - 1 && <span className="marker-line" />}
                    </div>
                    <div className="node-content">
                      <span className="node-year">{m.year}</span>
                      <h4 className="node-title">{m.title}</h4>
                      <p className="node-desc">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hq-verify-box">
                <MapPin size={18} className="text-cyan" />
                <div>
                  <span className="hq-label">INTEGRATION FACILITY & SHOWROOM</span>
                  <p className="hq-address">
                    {companyDetails.address.line1}, {companyDetails.address.area}, Chennai, TN {companyDetails.address.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
