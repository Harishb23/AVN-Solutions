import React, { useState } from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { companyDetails } from '../../data/company';
import './FinalCTA.css';

interface FinalCTAProps {
  onStartProject: () => void;
  onContact?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onContact }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeIntent, setActiveIntent] = useState<'quote' | 'survey' | 'consultant'>('quote');
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
    <section className="lead-gen-cta-section dark-navy-lead-zone" id="quote">
      <div className="container-wide">
        {/* Section Header */}
        <div className="lead-gen-header-center">
          <div className="lead-badge-pill">
            <Sparkles size={13} className="text-cyan" />
            <span>CHENNAI FACILITY • TURNKEY PROJECT SPECIFICATION</span>
          </div>
          <h2 className="lead-grand-title">
            Planning an <span className="lead-cyan-text">AV Project?</span>
          </h2>
          <p className="lead-grand-subtitle">
            Tell us about your space. We'll help you design the right technology.
          </p>

          {/* 3 Intent Selection Buttons */}
          <div className="lead-intent-buttons-row">
            <button
              className={`intent-btn ${activeIntent === 'quote' ? 'active' : ''}`}
              onClick={() => {
                soundFx.playClick(900);
                setActiveIntent('quote');
              }}
            >
              <span>Request a Quote →</span>
            </button>
            <button
              className={`intent-btn ${activeIntent === 'survey' ? 'active' : ''}`}
              onClick={() => {
                soundFx.playClick(950);
                setActiveIntent('survey');
              }}
            >
              <span>Book a Site Survey →</span>
            </button>
            <button
              className={`intent-btn ${activeIntent === 'consultant' ? 'active' : ''}`}
              onClick={() => {
                soundFx.playClick(1000);
                if (onContact) onContact();
                else setActiveIntent('consultant');
              }}
            >
              <span>Talk to an AV Consultant →</span>
            </button>
          </div>
        </div>

        {/* Lead Form & Direct Contact Grid */}
        <div className="lead-form-grid">
          {/* Left Column: Interactive Form */}
          <div className="lead-form-container">
            {formSubmitted ? (
              <div className="lead-success-card">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="text-cyan" />
                </div>
                <h3 className="success-title">Project Inquiry Received!</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Our senior solutions architects in Chennai are reviewing your <strong>{formData.requiredSolution}</strong> specifications and will reach out to <strong>{formData.phone}</strong> within 24 hours.
                </p>
                <div className="success-summary-box">
                  <div><strong>Location:</strong> {formData.location}</div>
                  <div><strong>Timeline:</strong> {formData.projectTimeline}</div>
                  <div><strong>Budget:</strong> {formData.budgetRange}</div>
                </div>
                <button
                  className="btn-secondary success-reset-btn"
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
              <form onSubmit={handleSubmit} className="lead-actual-form">
                <div className="form-row-2col">
                  <div className="form-field-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-field-group">
                    <label className="form-label">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Tech Solutions"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-field-group">
                    <label className="form-label">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-field-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-field-group">
                    <label className="form-label">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="form-select"
                    >
                      {projectTypes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field-group">
                    <label className="form-label">Space Location / City</label>
                    <input
                      type="text"
                      placeholder="e.g. OMR / Guindy, Chennai"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-field-group">
                    <label className="form-label">Required Solution</label>
                    <select
                      value={formData.requiredSolution}
                      onChange={(e) => setFormData({ ...formData, requiredSolution: e.target.value })}
                      className="form-select"
                    >
                      {solutionsList.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field-group">
                    <label className="form-label">Project Timeline</label>
                    <select
                      value={formData.projectTimeline}
                      onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                      className="form-select"
                    >
                      {timelines.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="form-label">Estimated Budget Range</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="form-select"
                  >
                    {budgetRanges.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field-group">
                  <label className="form-label">Space Details / Specific Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about room dimensions, seating capacity, display preferences, or current challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={16} />
                  <span>Submit Project Inquiry & Get BOQ</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Chennai Contact & Facility Hub */}
          <div className="lead-contact-hub">
            <div className="contact-hub-card">
              <h3 className="hub-title">Let's Design Your Space</h3>
              <p className="hub-desc">
                Visit our experience center or speak directly with our certified AV engineers in Chennai.
              </p>

              <div className="hub-details-list">
                <div className="hub-detail-item">
                  <div className="hub-icon-wrap">
                    <MapPin size={16} className="text-cyan" />
                  </div>
                  <div className="hub-text-wrap">
                    <span className="hub-label">HEADQUARTERS & DEMO LAB</span>
                    <span className="hub-value">{companyDetails.address.line1}, {companyDetails.address.area}, {companyDetails.address.city}, Tamil Nadu {companyDetails.address.pincode}</span>
                  </div>
                </div>

                <div className="hub-detail-item">
                  <div className="hub-icon-wrap">
                    <PhoneCall size={16} className="text-cyan" />
                  </div>
                  <div className="hub-text-wrap">
                    <span className="hub-label">DIRECT ENGINEERING DESK</span>
                    <a href="tel:04424501688" className="hub-link">{companyDetails.phone.display}</a>
                    <a href="tel:+919840123890" className="hub-sub-link">+91 98401 23890 (Direct Mobile)</a>
                  </div>
                </div>

                <div className="hub-detail-item">
                  <div className="hub-icon-wrap">
                    <Clock size={16} className="text-cyan" />
                  </div>
                  <div className="hub-text-wrap">
                    <span className="hub-label">OPERATING HOURS</span>
                    <span className="hub-value">{companyDetails.businessHours.weekdays}</span>
                    <span className="hub-sub-note">24/7 Remote Telemetry & Priority AMC Support</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={`https://wa.me/${companyDetails.whatsapp.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(companyDetails.whatsapp.prefillMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hub-whatsapp-btn"
              >
                <span>Chat on WhatsApp with AV Specialist</span>
                <ArrowRight size={15} />
              </a>

              <div className="hub-guarantee-strip">
                <ShieldCheck size={14} className="text-cyan" />
                <span>100% Genuine OEM Hardware • ISO & AVIXA Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
