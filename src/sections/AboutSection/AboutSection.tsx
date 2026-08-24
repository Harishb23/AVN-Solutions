import React from 'react';
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { timelineMilestones } from '../../data/company';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './AboutSection.css';

interface AboutSectionProps {
  onStartProject: () => void;
  onContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject, onContact }) => {
  const engineeringDisciplines = [
    'Acoustic Consultation & RT60 Modeling',
    'Full-Scope System CAD Schematic Design',
    'Tier-1 OEM Direct Equipment Supply',
    'Architectural Rigging & Physical Installation',
    'DSP Gain Structure & Video EDID Integration',
    'End-User Executive & Operator Training',
    '24/7 Remote Telemetry & Preventative Maintenance'
  ];

  return (
    <section className="section-spacing about-section" id="about">
      <div className="container-wide">
        <SectionHeading
          badge="OUR ENGINEERING HERITAGE"
          title="MORE THAN AV. WE ENGINEER POSSIBILITIES."
          subtitle="AVN Solutions is Chennai's dedicated Audio Visual technology engineering firm. We bridge the critical gap between architectural design and complex electronic hardware."
        />

        <div className="about-main-grid">
          {/* Left Column: Mission & Core Competency */}
          <div className="about-narrative-card glass-panel">
            <div className="card-top-tag">
              <ShieldCheck size={16} className="text-cyan" />
              <span>THE AVN PHILOSOPHY</span>
            </div>

            <h3 className="narrative-heading text-gradient-white">
              We Don't Sell Boxes. We Engineer Complete Spatial Experiences.
            </h3>

            <p className="narrative-p">
              In commercial AV, the common failure point is treating audio-visual equipment as standalone appliances. A great microphone will sound terrible in a reverberant glass box, and a 4K display will look washed out under unmanaged daylight.
            </p>

            <p className="narrative-p">
              At AVN Solutions, our engineers calculate physics first. We balance acoustic absorption coefficients, calibrate lux levels, script responsive room automation, and ensure that every attendee — remote or in-room — enjoys total equality of experience.
            </p>

            <div className="disciplines-checklist">
              <span className="checklist-heading">FULL-LIFECYCLE INTEGRATION SCOPE:</span>
              <div className="checklist-grid">
                {engineeringDisciplines.map((item, idx) => (
                  <div key={idx} className="discipline-check-item">
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-actions-row">
              <button className="btn-primary" onClick={onStartProject} data-cursor="start">
                <span>START A PROJECT</span>
                <ArrowRight size={16} />
              </button>

              <button className="btn-secondary" onClick={onContact} data-cursor="explore">
                <span>VISIT CHENNAI SHOWROOM</span>
              </button>
            </div>
          </div>

          {/* Right Column: Verified Milestone Timeline */}
          <div className="about-timeline-card glass-panel">
            <h4 className="timeline-card-heading">EVOLUTION & ARCHITECTURAL HERITAGE</h4>

            <div className="timeline-nodes-track">
              {timelineMilestones.map((m, idx) => (
                <div key={idx} className="timeline-entry">
                  <div className="timeline-marker">
                    <div className="marker-dot" />
                    <div className="marker-line" />
                  </div>
                  <div className="timeline-content">
                    <span className="timeline-year-tag">{m.year}</span>
                    <h5 className="timeline-title">{m.title}</h5>
                    <p className="timeline-description">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chennai Verified Location Badge */}
            <div className="chennai-hq-badge">
              <MapPin size={18} className="text-cyan" />
              <div className="hq-text">
                <span className="hq-title">SHOLINGANALLUR, CHENNAI</span>
                <span className="hq-desc">10, MGR Rd, Ezhil Nagar, Ganesh Nagar, Tamil Nadu 600119</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
