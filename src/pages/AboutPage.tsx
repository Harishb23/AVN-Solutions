import React from 'react';
import { ShieldCheck, MapPin, Award } from 'lucide-react';
import { timelineMilestones, companyStats, companyDetails } from '../data/company';
import './Pages.css';

interface AboutPageProps {
  onStartProject: () => void;
  onContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartProject, onContact }) => {
  const credentials = [
    { title: 'CTS-D & CTS-I Certified', desc: 'Certified Technology Specialists in AV Design and Installation.' },
    { title: 'QSC Q-SYS Level 2 Certified', desc: 'Enterprise DSP audio, video, and control platform engineers.' },
    { title: 'Crestron Master Programmers', desc: 'Enterprise automation and customized touch glass UI engineers.' },
    { title: 'Audinate Dante Level 3', desc: 'Advanced gigabit networked digital audio infrastructure specialists.' }
  ];

  return (
    <div className="page-view-container">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="container-wide">
          <div className="page-badge">
            <ShieldCheck size={14} className="text-cyan" />
            <span>ENGINEERING HERITAGE & CAPABILITIES</span>
          </div>
          <h1 className="page-hero-title text-gradient-white">
            ARCHITECTING THE FUTURE OF<br />
            <span className="text-gradient-cyan">AUDIO VISUAL INTEGRATION</span>
          </h1>
          <p className="page-hero-subtitle">
            AVN Solutions is Chennai's premier pro-AV engineering firm. We turn complex acoustic geometry and display matrices into seamless executive environments.
          </p>
        </div>
      </section>

      {/* Stats Counter Row */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div className="about-stats-strip glass-panel">
            {companyStats.map((st: { label: string; value: string }, idx: number) => (
              <div key={idx} className="about-stat-col">
                <div className="about-stat-val">{st.value}</div>
                <h4 className="about-stat-label">{st.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div className="about-story-grid">
            <div className="story-left glass-panel">
              <span className="story-badge">OUR PURPOSE</span>
              <h2 className="story-heading text-gradient-white">Engineering Environments That Inspire</h2>
              
              {/* Visual Facility Showcase Card */}
              <div className="about-visual-facility-card">
                <div className="about-facility-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                    alt="AVN Solutions Chennai Experience Center"
                    className="about-facility-img"
                  />
                  <div className="about-facility-overlay" />
                  <div className="about-facility-badge">
                    <MapPin size={12} className="text-cyan" />
                    <span>CHENNAI INTEGRATION LAB & EXPERIENCE CENTER</span>
                  </div>
                </div>
                <div className="about-facility-info">
                  <p className="about-one-liner">
                    Headquartered in Sholinganallur, Chennai — bridging acoustic physics, optical calculation, and ergonomic automation design for enterprise workplaces.
                  </p>
                  <div className="about-capability-pills">
                    <span className="about-pill">AVIXA CTS-D & CTS-I</span>
                    <span className="about-pill">50+ OEM Partners</span>
                    <span className="about-pill">24/7 SLA Support</span>
                  </div>
                </div>
              </div>

              <div className="story-credentials-grid">
                {credentials.map((c, idx) => (
                  <div key={idx} className="cred-card">
                    <Award size={18} className="text-cyan" />
                    <div>
                      <h4 className="cred-title">{c.title}</h4>
                      <p className="cred-desc">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn-primary" onClick={onStartProject}>
                  <span>START A PROJECT</span>
                </button>
                <button className="btn-secondary" onClick={onContact}>
                  <span>CONTACT CHENNAI SHOWROOM</span>
                </button>
              </div>
            </div>

            <div className="story-right glass-panel">
              <span className="story-badge">MILESTONES & GROWTH</span>
              <h3 className="story-subheading">Our Journey of Precision</h3>

              <div className="milestones-vertical-list">
                {timelineMilestones.map((m: { year: string; title: string; description: string }, idx: number) => (
                  <div key={idx} className="m-step">
                    <div className="m-dot" />
                    <div className="m-body">
                      <span className="m-year">{m.year}</span>
                      <h4 className="m-title">{m.title}</h4>
                      <p className="m-desc">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Location Box */}
              <div className="verified-location-card">
                <MapPin size={20} className="text-cyan" />
                <div>
                  <h4 className="loc-title">AVN SOLUTIONS CHENNAI</h4>
                  <p className="loc-address">
                    {companyDetails.address.line1}, {companyDetails.address.area}, {companyDetails.address.city}, Tamil Nadu {companyDetails.address.pincode}
                  </p>
                  <p className="loc-phone">📞 {companyDetails.phone.display}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
