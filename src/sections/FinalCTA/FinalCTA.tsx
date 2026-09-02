import React, { useState } from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Clock,
  MessageSquare
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { companyDetails } from '../../data/company';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FinalCTA.css';

interface FinalCTAProps {
  onStartProject: () => void;
  onContact?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onContact }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeIntent, setActiveIntent] = useState<'quote' | 'survey' | 'expert'>('quote');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: 'Corporate',
    location: 'Chennai, TN',
    requiredSolution: 'Corporate AV & Boardrooms',
    projectTimeline: '1 to 3 Months',
    budgetRange: '₹10 Lakhs - ₹25 Lakhs',
    message: ''
  });

  const projectTypes = [
    'Corporate',
    'Education',
    'Healthcare',
    'Hospitality',
    'Residential',
    'Retail',
    'Government',
    'Other'
  ];

  const solutionsList = [
    'Corporate AV & Boardrooms',
    'Microsoft Teams / Zoom Rooms',
    'Professional Audio & PA Systems',
    'Direct-View MicroLED & Video Walls',
    'Smart Automation (Crestron/Extron)',
    'Luxury Private Home Cinema',
    'Digital Signage Networks',
    'Auditorium & Large Venue AV',
    'Acoustic Simulation & Treatment',
    'Complete Turnkey System Supply'
  ];

  const timelines = [
    'Immediate (< 1 Month)',
    '1 to 3 Months',
    '3 to 6 Months',
    'Planning Stage (6+ Months)'
  ];

  const budgetRanges = [
    '₹3 Lakhs - ₹5 Lakhs',
    '₹5 Lakhs - ₹15 Lakhs',
    '₹15 Lakhs - ₹30 Lakhs',
    '₹30 Lakhs - ₹75 Lakhs',
    '₹75 Lakhs+ Enterprise'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playPowerChime();
    setFormSubmitted(true);
  };

  return (
    <section 
      ref={ref}
      className={`enterprise-final-cta-section ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="quote"
    >
      <div className="container-wide">
        <div className="final-cta-charcoal-card hover-card-lift">
          {/* Section Header */}
          <div className="final-cta-header">
            <div className="final-cta-eyebrow">
              <span className="eyebrow-dot" />
              <span>START YOUR ARCHITECTURAL PROJECT</span>
            </div>
            <h2 className="final-cta-heading">
              Planning a <span className="cta-highlight">new space?</span>
            </h2>
            <p className="final-cta-description">
              Let's design the technology around the way your people work, meet and experience the space.
            </p>

            {/* Clean Intent Switcher Buttons */}
            <div className="cta-intent-switcher">
              <button
                className={`cta-intent-btn ${activeIntent === 'quote' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(900);
                  setActiveIntent('quote');
                }}
              >
                <span>Start a Project</span>
              </button>
              <button
                className={`cta-intent-btn ${activeIntent === 'survey' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(950);
                  setActiveIntent('survey');
                }}
              >
                <span>Book Site Survey</span>
              </button>
              <button
                className={`cta-intent-btn ${activeIntent === 'expert' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(1000);
                  if (onContact) onContact();
                  else setActiveIntent('expert');
                }}
              >
                <span>Talk to an Expert</span>
              </button>
            </div>
          </div>

          {/* Form & Facility Contact Grid */}
          <div className="final-cta-grid">
            {/* Left Column: Inquiry Form */}
            <div className="final-cta-form-col">
              {formSubmitted ? (
                <div className="cta-success-box">
                  <div className="success-icon-bubble">
                    <CheckCircle2 size={40} className="text-blue" />
                  </div>
                  <h3 className="success-heading">Project Inquiry Received</h3>
                  <p className="success-message">
                    Thank you, <strong>{formData.name}</strong>. Our senior solutions architects in Chennai are reviewing your <strong>{formData.requiredSolution}</strong> specifications and will reach out to <strong>{formData.phone}</strong> within 24 hours.
                  </p>
                  <button
                    className="btn-secondary success-btn"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        projectType: 'Corporate',
                        location: 'Chennai, TN',
                        requiredSolution: 'Corporate AV & Boardrooms',
                        projectTimeline: '1 to 3 Months',
                        budgetRange: '₹10 Lakhs - ₹25 Lakhs',
                        message: ''
                      });
                    }}
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="cta-actual-form">
                  <div className="form-grid-2col">
                    <div className="form-group">
                      <label className="cta-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="cta-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="cta-label">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="Apex Technologies"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="cta-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-group">
                      <label className="cta-label">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="cta-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="cta-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="cta-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-group">
                      <label className="cta-label">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="cta-select"
                      >
                        {projectTypes.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="cta-label">Space Location</label>
                      <input
                        type="text"
                        placeholder="OMR, Chennai"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="cta-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2col">
                    <div className="form-group">
                      <label className="cta-label">Required Solution</label>
                      <select
                        value={formData.requiredSolution}
                        onChange={(e) => setFormData({ ...formData, requiredSolution: e.target.value })}
                        className="cta-select"
                      >
                        {solutionsList.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="cta-label">Project Timeline</label>
                      <select
                        value={formData.projectTimeline}
                        onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                        className="cta-select"
                      >
                        {timelines.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="cta-label">Estimated Budget Range</label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="cta-select"
                    >
                      {budgetRanges.map(b => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="cta-label">Project Brief / Space Dimensions</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about seating capacity, display preferences, or architectural requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="cta-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-primary cta-submit-btn">
                    <Send size={15} />
                    <span>Submit Project Inquiry & Get BOQ</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Chennai Facility Hub */}
            <div className="final-cta-contact-col">
              <div className="contact-facility-card">
                <h3 className="facility-card-title">Chennai Experience Center</h3>
                <p className="facility-card-desc">
                  Visit our active direct-view MicroLED and Dolby Atmos integration lab in Sholinganallur.
                </p>

                <div className="facility-details-list">
                  <div className="fac-item">
                    <MapPin size={16} className="text-blue" />
                    <div>
                      <span className="fac-label">HEADQUARTERS</span>
                      <p className="fac-val">{companyDetails.address.line1}, {companyDetails.address.area}, {companyDetails.address.city} {companyDetails.address.pincode}</p>
                    </div>
                  </div>

                  <div className="fac-item">
                    <PhoneCall size={16} className="text-blue" />
                    <div>
                      <span className="fac-label">DIRECT DESK</span>
                      <a href="tel:04424501688" className="fac-link">{companyDetails.phone.display}</a>
                    </div>
                  </div>

                  <div className="fac-item">
                    <Clock size={16} className="text-blue" />
                    <div>
                      <span className="fac-label">HOURS</span>
                      <p className="fac-val">{companyDetails.businessHours.weekdays}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${companyDetails.whatsapp.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(companyDetails.whatsapp.prefillMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facility-whatsapp-link"
                >
                  <MessageSquare size={16} />
                  <span>Chat with an AV Expert on WhatsApp</span>
                  <ArrowRight size={14} />
                </a>

                <div className="facility-guarantee">
                  <ShieldCheck size={16} className="text-blue" />
                  <span>AVIXA CTS Certified • Genuine OEM Direct Supply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
