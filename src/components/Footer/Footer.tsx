import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, Share2, Globe } from 'lucide-react';
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
    <footer className="site-footer">
      {/* Top Banner / Engineering Commitment */}
      <div className="footer-top-strip">
        <div className="container-wide top-strip-inner">
          <div className="strip-item">
            <span className="strip-dot" />
            <span>CHENNAI HQ & INTEGRATION LAB: SHOLINGANALLUR, OMR CORRIDOR</span>
          </div>
          <div className="strip-item">
            <ShieldCheck size={15} className="text-cyan" />
            <span>CERTIFIED AVIXA CTS-D & CTS-I SYSTEM INTEGRATOR</span>
          </div>
          <div className="strip-item">
            <span className="strip-dot active" />
            <span>DIRECT OEM EQUIPMENT DISTRIBUTOR • 24/7 SLA SUPPORT</span>
          </div>
        </div>
      </div>

      <div className="container-wide footer-main">
        {/* Brand & Descriptor Header Row */}
        <div className="footer-brand-section">
          <div className="footer-brand-left">
            <button 
              className="brand-logo-btn footer-logo-btn"
              onClick={() => handleNav('home')}
              data-cursor="explore"
              aria-label="AVN Solutions Homepage"
            >
              <img src={logoImg} alt="AVN Solutions" className="brand-logo-img footer-logo-img" />
            </button>
          </div>

          <p className="footer-short-desc">
            AVN Solutions designs, supplies, integrates, programs, and maintains turnkey audio-visual, acoustic, video conferencing, and smart automation systems for corporate, education, healthcare, hospitality, retail, government, and luxury residential clients across Tamil Nadu and India.
          </p>

          <button
            className="btn-primary footer-quote-btn"
            onClick={() => {
              soundFx.playPowerChime();
              onOpenProjectModal();
            }}
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* 6 Structured Columns Grid */}
        <div className="footer-columns-grid">
          {/* Col 1: Solutions */}
          <div className="footer-col">
            <h4 className="footer-col-title">SOLUTIONS</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNav('solutions', 'corporate-av')}>Corporate AV</button></li>
              <li><button onClick={() => handleNav('solutions', 'video-conferencing')}>Video Conferencing</button></li>
              <li><button onClick={() => handleNav('solutions', 'professional-audio')}>Professional Audio</button></li>
              <li><button onClick={() => handleNav('solutions', 'display-visual')}>LED & Video Walls</button></li>
              <li><button onClick={() => handleNav('solutions', 'smart-automation')}>Smart Automation</button></li>
              <li><button onClick={() => handleNav('solutions', 'home-cinema')}>Home Cinema</button></li>
              <li><button onClick={() => handleNav('solutions', 'acoustics')}>Acoustic Solutions</button></li>
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div className="footer-col">
            <h4 className="footer-col-title">INDUSTRIES</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNav('industries')}>Corporate Workplaces</button></li>
              <li><button onClick={() => handleNav('industries')}>Education & Universities</button></li>
              <li><button onClick={() => handleNav('industries')}>Healthcare & Hospitals</button></li>
              <li><button onClick={() => handleNav('industries')}>Hospitality & Hotels</button></li>
              <li><button onClick={() => handleNav('industries')}>Retail Showrooms</button></li>
              <li><button onClick={() => handleNav('industries')}>Government & Defense</button></li>
              <li><button onClick={() => handleNav('industries')}>Luxury Residential</button></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">PRODUCTS</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNav('products')}>Direct-View MicroLED</button></li>
              <li><button onClick={() => handleNav('products')}>4K Laser Projectors</button></li>
              <li><button onClick={() => handleNav('products')}>Beamforming Mic Arrays</button></li>
              <li><button onClick={() => handleNav('products')}>Dante DSP Processors</button></li>
              <li><button onClick={() => handleNav('products')}>Crestron 4-Series Core</button></li>
              <li><button onClick={() => handleNav('products')}>AV-over-IP 10G Switches</button></li>
              <li><button onClick={() => handleNav('brands')}>Partner Brand Catalog</button></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNav('services')}>AV Design & Consulting</button></li>
              <li><button onClick={() => handleNav('services')}>System Engineering</button></li>
              <li><button onClick={() => handleNav('services')}>Equipment Supply</button></li>
              <li><button onClick={() => handleNav('services')}>Installation & Commissioning</button></li>
              <li><button onClick={() => handleNav('services')}>Control Programming</button></li>
              <li><button onClick={() => handleNav('services')}>Annual Maintenance (AMC)</button></li>
              <li><button onClick={() => handleNav('services')}>Acoustic Surveys</button></li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div className="footer-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNav('about')}>About AVN Solutions</button></li>
              <li><button onClick={() => handleNav('projects')}>Enterprise Portfolio</button></li>
              <li><button onClick={() => handleNav('insights')}>Engineering Insights</button></li>
              <li><button onClick={() => handleNav('tools')}>Design Your Space (Tools)</button></li>
              <li><button onClick={() => handleNav('contact')}>Contact Facility</button></li>
            </ul>
          </div>

          {/* Col 6: Chennai Office Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">CHENNAI HQ</h4>
            <div className="footer-contact-details">
              <div className="f-contact-item">
                <MapPin size={15} className="text-cyan" />
                <span>{companyDetails.address.line1}, {companyDetails.address.area}, Chennai, TN {companyDetails.address.pincode}</span>
              </div>

              <div className="f-contact-item">
                <Phone size={15} className="text-cyan" />
                <div>
                  <a href="tel:04424501688" className="f-link">{companyDetails.phone.display}</a>
                  <small className="f-subtext">+91 98401 23890 (WhatsApp)</small>
                </div>
              </div>

              <div className="f-contact-item">
                <Mail size={15} className="text-cyan" />
                <a href="mailto:contact@avnsolutions.in" className="f-link">{companyDetails.email.general}</a>
              </div>

              <div className="f-contact-item">
                <Clock size={15} className="text-cyan" />
                <span>{companyDetails.businessHours.weekdays}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="footer-social-row">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Share2 size={15} />
              </a>
              <a href="https://avnsolutions.in" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Global Web Portal">
                <Globe size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span>© {currentYear} AVN Solutions. All Rights Reserved.</span>
            <span className="bullet-sep">•</span>
            <span className="tagline-text">Audio Visual • Automation • Integration</span>
          </div>

          <div className="bottom-right">
            <span>Audio Visual Equipment Supplier & AV Integrator in Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
