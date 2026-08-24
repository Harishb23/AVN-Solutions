import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, ExternalLink, Globe, Share2 } from 'lucide-react';
import { companyDetails } from '../../data/company';
import './Footer.css';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenProjectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProjectModal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Top Banner / Engineering Commitment */}
      <div className="footer-top-strip">
        <div className="container-wide top-strip-inner">
          <div className="strip-item">
            <span className="strip-dot" />
            <span>HEADQUARTERED IN CHENNAI, INDIA</span>
          </div>
          <div className="strip-item">
            <ShieldCheck size={16} className="text-cyan" />
            <span>CERTIFIED CTS-D & CTS-I SYSTEM INTEGRATION</span>
          </div>
          <div className="strip-item">
            <span className="strip-dot active" />
            <span>24/7 MISSION-CRITICAL SLA SUPPORT</span>
          </div>
        </div>
      </div>

      <div className="container-wide footer-main">
        <div className="footer-grid">
          {/* Brand Identity & Mission */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <div className="brand-monogram">
                <svg viewBox="0 0 40 40" className="brand-svg">
                  <polygon points="6,34 20,6 34,34 26,34 20,22 14,34" fill="url(#footer-gradient)" />
                  <circle cx="20" cy="15" r="2.5" fill="#00F0FF" />
                  <defs>
                    <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="100%" stopColor="#0070F3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-name">AVN<span className="brand-highlight">.</span></span>
                <span className="brand-sub">SOLUTIONS</span>
              </div>
            </div>

            <p className="footer-mission-text">
              Engineering experiences that people can see, hear and feel. We architect precision acoustic spaces, bezel-less fine-pitch video walls, certified hybrid meeting rooms, and intelligent automation for enterprise, education, and entertainment venues.
            </p>

            <div className="footer-cta-action">
              <button
                className="btn-primary"
                onClick={onOpenProjectModal}
                data-cursor="start"
              >
                <span>REQUEST SYSTEM DESIGN</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="footer-col">
            <h4 className="footer-heading">SOLUTIONS</h4>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate('solutions')}>Audio Architecture & DSP</button></li>
              <li><button onClick={() => onNavigate('solutions')}>Direct-View MicroLED Walls</button></li>
              <li><button onClick={() => onNavigate('solutions')}>MS Teams & Zoom Rooms</button></li>
              <li><button onClick={() => onNavigate('solutions')}>Smart Touch Automation</button></li>
              <li><button onClick={() => onNavigate('solutions')}>Auditorium Stage Acoustic</button></li>
              <li><button onClick={() => onNavigate('solutions')}>AV-over-IP 10G Infrastructure</button></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate('about')}>About AVN Heritage</button></li>
              <li><button onClick={() => onNavigate('industries')}>Industries & Sectors</button></li>
              <li><button onClick={() => onNavigate('projects')}>Featured Deployments</button></li>
              <li><button onClick={() => onNavigate('insights')}>AV Technology Insights</button></li>
              <li><button onClick={() => onNavigate('contact')}>Contact & Inquiry</button></li>
              <li><button onClick={onOpenProjectModal}>Project Configurator</button></li>
            </ul>
          </div>

          {/* Verified Contact & Location Column */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">CHENNAI HEADQUARTERS</h4>
            <div className="contact-details-list">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <div>
                  <p className="contact-text-primary">10, MGR Rd, Ezhil Nagar, Ganesh Nagar,</p>
                  <p className="contact-text-secondary">Sholinganallur, Chennai, Tamil Nadu 600119</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div>
                  <a href="tel:04424501688" className="contact-link">
                    044 2450 1688
                  </a>
                  <span className="contact-sub-badge">Direct Line</span>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <div>
                  <a href="mailto:contact@avnsolutions.in" className="contact-link">
                    contact@avnsolutions.in
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <Clock size={18} className="contact-icon" />
                <div>
                  <p className="contact-text-primary">Mon – Sat: 9:30 AM – 6:30 PM</p>
                  <p className="contact-text-secondary">Emergency SLA: 24/7 Dispatch</p>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <Share2 size={16} />
              </a>
              <a href="https://avnsolutions.in" target="_blank" rel="noreferrer" className="social-btn" aria-label="Global Web Portal">
                <Globe size={16} />
              </a>
              <a href={companyDetails.mapUrl} target="_blank" rel="noreferrer" className="social-btn" aria-label="Google Maps Location">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span>© {currentYear} AVN Solutions. All Rights Reserved.</span>
            <span className="bullet-sep">•</span>
            <span className="tagline-text">From Sound → Vision → Intelligence</span>
          </div>

          <div className="bottom-right">
            <span>Audio Visual Equipment Supplier & AV System Integrator</span>
            <span className="location-pill">Chennai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
