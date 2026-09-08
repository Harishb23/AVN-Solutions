import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { companyDetails } from '../../data/company';
import { soundFx } from '../../utils/sound';
import logoImg from '../../assets/Logo_350x80-01.png';
import './Footer.css';

interface FooterProps {
  onNavigate: (page: string, targetId?: string) => void;
  onOpenProjectModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenProjectModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: string, targetId?: string) => {
    soundFx.playClick();
    onNavigate(page, targetId);
  };

  return (
    <footer className="enterprise-site-footer">
      <div className="container-wide">
        {/* Top Summary & Quote Trigger */}
        <div className="footer-top-row">
          <div className="footer-brand-meta">
            <a 
              href="/"
              className="footer-logo-btn"
              onClick={(e) => { e.preventDefault(); handleNav('home'); }}
              aria-label="AVN Solutions Homepage"
            >
              <img src={logoImg} alt="AVN Solutions" className="footer-logo-img" />
            </a>
            <p className="footer-descriptor">
              Professional audio, visual, and smart automation systems engineered for enterprise workplaces, institutions, and luxury residential environments.
            </p>
          </div>

          <div className="footer-cta-box">
            <button
              className="btn-primary footer-start-btn"
              onClick={() => {
                soundFx.playPowerChime();
                onOpenProjectModal();
              }}
            >
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* 4 Clean Columns */}
        <div className="footer-columns-grid">
          {/* Col 1: Solutions */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">SOLUTIONS</h4>
            <ul className="footer-links-list">
              <li><a href="/solutions/boardroom-av" onClick={(e) => { e.preventDefault(); handleNav('solutions', 'corporate-av'); }}>Boardroom &amp; Conference AV</a></li>
              <li><a href="/solutions/video-conferencing" onClick={(e) => { e.preventDefault(); handleNav('solutions', 'video-conferencing'); }}>Video Conferencing Solutions</a></li>
              <li><a href="/solutions/auditorium-av" onClick={(e) => { e.preventDefault(); handleNav('solutions', 'professional-audio'); }}>Auditorium AV &amp; Sound</a></li>
              <li><a href="/solutions" onClick={(e) => { e.preventDefault(); handleNav('solutions', 'display-visual'); }}>Visual Systems &amp; Video Walls</a></li>
              <li><a href="/solutions" onClick={(e) => { e.preventDefault(); handleNav('solutions', 'smart-automation'); }}>Smart Automation</a></li>
              <li><a href="/solutions" onClick={(e) => { e.preventDefault(); handleNav('solutions', 'home-cinema'); }}>Home Cinema &amp; Acoustics</a></li>
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">INDUSTRIES</h4>
            <ul className="footer-links-list">
              <li><a href="/industries" onClick={(e) => { e.preventDefault(); handleNav('industries'); }}>Corporate Enterprise</a></li>
              <li><a href="/solutions/smart-classroom-av" onClick={(e) => { e.preventDefault(); handleNav('solution-smart-classroom-av'); }}>Smart Classrooms &amp; Education</a></li>
              <li><a href="/industries" onClick={(e) => { e.preventDefault(); handleNav('industries'); }}>Healthcare &amp; Medical</a></li>
              <li><a href="/industries" onClick={(e) => { e.preventDefault(); handleNav('industries'); }}>Hospitality Venues</a></li>
              <li><a href="/industries" onClick={(e) => { e.preventDefault(); handleNav('industries'); }}>Retail &amp; Experience Centers</a></li>
              <li><a href="/industries" onClick={(e) => { e.preventDefault(); handleNav('industries'); }}>Luxury Residential</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links-list">
              <li><a href="/about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>About</a></li>
              <li><a href="/projects" onClick={(e) => { e.preventDefault(); handleNav('projects'); }}>Projects</a></li>
              <li><a href="/services" onClick={(e) => { e.preventDefault(); handleNav('services'); }}>Services</a></li>
              <li><a href="/insights" onClick={(e) => { e.preventDefault(); handleNav('insights'); }}>Insights</a></li>
              <li><a href="/contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="footer-nav-col footer-contact-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <div className="footer-contact-items">
              <div className="footer-c-item">
                <MapPin size={15} className="text-blue" />
                <span>{companyDetails.address.line1}, {companyDetails.address.area}, Chennai, TN {companyDetails.address.pincode}</span>
              </div>

              <div className="footer-c-item">
                <Phone size={15} className="text-blue" />
                <a href="tel:04424501688" className="footer-c-link">{companyDetails.phone.display}</a>
              </div>

              <div className="footer-c-item">
                <Mail size={15} className="text-blue" />
                <a href="mailto:contact@avnsolutions.in" className="footer-c-link">{companyDetails.email.general}</a>
              </div>

              <div className="footer-c-item">
                <MessageSquare size={15} className="text-blue" />
                <a 
                  href={`https://wa.me/${companyDetails.whatsapp.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(companyDetails.whatsapp.prefillMessage)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-c-link"
                >
                  WhatsApp: +91 98401 23890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Certification Strip */}
        <div className="footer-bottom-strip">
          <div className="footer-bottom-left">
            <span>© {currentYear} AVN Solutions. All rights reserved.</span>
            <span className="footer-sep">•</span>
            <button className="footer-legal-link" onClick={() => handleNav('about')}>Privacy Policy</button>
            <span className="footer-sep">•</span>
            <button className="footer-legal-link" onClick={() => handleNav('about')}>Terms</button>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-cert-tag">
              <ShieldCheck size={14} className="text-blue" />
              <span>AVIXA CTS-D & CTS-I Certified Integrator • Chennai</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
