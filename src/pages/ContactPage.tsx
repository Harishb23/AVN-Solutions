import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Radio, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react';
import { companyDetails } from '../data/company';
import { soundFx } from '../utils/sound';
import confetti from 'canvas-confetti';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: 'Chennai',
    subject: 'Corporate Boardroom AV',
    timeline: 'Within 3 Months',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const projectTypes = [
    'Corporate Boardroom AV',
    'Auditorium & Stage Acoustics',
    'Direct-View MicroLED Wall',
    'Smart Campus / Classroom',
    'Crestron / Q-SYS Automation',
    '24/7 SLA & Maintenance Contract'
  ];

  const timelines = [
    'Immediate (< 30 Days)',
    'Within 3 Months',
    'Planning Phase (3-6 Months)',
    'Design / Consultation Only'
  ];

  const faqs = [
    {
      q: 'Can I visit the AVN Solutions staging facility in Sholinganallur for a live demo?',
      a: 'Yes! Our Chennai facility features a fully integrated experience center with direct-view MicroLED video walls, steerable ceiling microphone arrays (Shure & Sennheiser), Dante digital audio matrixing, and custom Crestron touch glass controllers. Contact us to schedule a private executive demonstration.'
    },
    {
      q: 'How quickly can an AVN engineer conduct a site survey in Chennai or South India?',
      a: 'For commercial projects across the Greater Chennai area (OMR, Guindy, Ambattur, T. Nagar, Siruseri), our CTS-certified engineers can be on-site within 24 to 48 hours to take physical laser measurements, ambient lux readings, and baseline RT60 acoustic data.'
    },
    {
      q: 'Do you provide AutoCAD schematics and preliminary BOQ estimates?',
      a: 'Yes. Once we receive your spatial layout and architectural drawings (DWG/PDF), our design engineering team drafts single-line signal flow schematics, cable pathway conduit requirements, heat load calculations, and an itemized equipment BOQ.'
    },
    {
      q: 'What is your typical SLA response time for existing maintenance contracts?',
      a: 'Under our Gold Enterprise SLA, we guarantee a 2-hour on-site response time in Chennai with hot-standby replacement equipment stocked in our Sholinganallur inventory. Silver Priority covers a guaranteed 4-hour response window.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playPowerChime();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 65,
      origin: { y: 0.6 }
    });
  };

  const toggleFaq = (idx: number) => {
    soundFx.playClick();
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="contact-page-container">
      {/* 1. HERO BANNER */}
      <section className="contact-hero-banner">
        <div className="container-wide contact-hero-inner">
          <div className="contact-hero-badge">
            <Radio size={14} className="animate-pulse text-cyan" />
            <span>CHENNAI HEADQUARTERS & INTEGRATION LAB</span>
          </div>

          <h1 className="contact-hero-title">
            Connect with Our{' '}
            <span className="contact-title-gradient">Engineering Desk.</span>
          </h1>

          <p className="contact-hero-subtitle">
            Whether you need turnkey system architecture, Smaart V8 acoustic room modeling, direct OEM equipment distribution, or 24/7 priority SLA support, our senior systems engineers in Sholinganallur are ready to assist.
          </p>

          {/* Quick Trust Strip */}
          <div className="contact-trust-strip">
            <div className="trust-item">
              <Sparkles size={16} className="text-cyan" />
              <span>&lt; 4-Hour Response Guarantee</span>
            </div>
            <div className="trust-item">
              <MapPin size={16} className="text-cyan" />
              <span>Sholinganallur Showroom & Lab</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={16} className="text-cyan" />
              <span>AVIXA CTS-D & CTS-I Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN SECTION */}
      <section className="section-spacing contact-main-section">
        <div className="container-wide">
          <div className="contact-grid-2col">
            {/* LEFT COLUMN: Deep Contact & Staging Info */}
            <div className="contact-info-column">
              <div className="info-intro-box">
                <span className="info-eyebrow">DIRECT COMMUNICATION CHANNELS</span>
                <h2 className="info-main-title">Speak Directly with Systems Architects</h2>
                <p className="info-main-desc">
                  We don't use generic call centers. Your inquiry is reviewed by certified AV engineering professionals who understand spatial physics and IT networks.
                </p>
              </div>

              <div className="contact-cards-stack">
                {/* Physical Location Card */}
                <div className="contact-feature-card">
                  <div className="feature-card-icon">
                    <MapPin size={22} />
                  </div>
                  <div className="feature-card-body">
                    <span className="card-micro-tag">HEAD OFFICE & STAGING LAB</span>
                    <h3 className="card-heading">Chennai Integration Center</h3>
                    <p className="card-text">
                      No.10A, Ground Floor, Dr. MGR Street,<br />
                      Sholinganallur, Chennai - 600119,<br />
                      Tamil Nadu, India.
                    </p>
                    <a
                      href={companyDetails.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-action-link"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Direct Phone & SLA Desk */}
                <div className="contact-feature-card">
                  <div className="feature-card-icon">
                    <Phone size={22} />
                  </div>
                  <div className="feature-card-body">
                    <span className="card-micro-tag">TELEPHONE & HOTLINE</span>
                    <h3 className="card-heading">Engineering & Sales Desk</h3>
                    <a href="tel:04424501688" className="phone-highlight-number">
                      044-24501688
                    </a>
                    <p className="card-subtext">
                      Mon – Sat, 9:30 AM – 6:30 PM IST (Emergency 24/7 SLA Active)
                    </p>
                  </div>
                </div>

                {/* Email Channels */}
                <div className="contact-feature-card">
                  <div className="feature-card-icon">
                    <Mail size={22} />
                  </div>
                  <div className="feature-card-body">
                    <span className="card-micro-tag">OFFICIAL CORRESPONDENCE</span>
                    <h3 className="card-heading">Project Inquiries & BOQs</h3>
                    <div className="email-links-stack">
                      <a href="mailto:contact@avnsolutions.in" className="email-link-item">
                        <span>General / Desk:</span> contact@avnsolutions.in
                      </a>
                      <a href="mailto:projects@avnsolutions.in" className="email-link-item">
                        <span>Project Schematics:</span> projects@avnsolutions.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Quick Connect Card */}
                <div className="contact-feature-card whatsapp-special-card">
                  <div className="feature-card-icon whatsapp-icon-box">
                    <MessageSquare size={22} />
                  </div>
                  <div className="feature-card-body">
                    <span className="card-micro-tag">INSTANT MESSAGING</span>
                    <h3 className="card-heading">WhatsApp Business Desk</h3>
                    <p className="card-text">
                      Share site photos, floor plans, and get rapid engineering feedback.
                    </p>
                    <a
                      href="https://wa.me/919840000000?text=Hello%20AVN%20Solutions%2C%20I%20would%20like%20to%20discuss%20an%20Audio%20Visual%20project."
                      target="_blank"
                      rel="noreferrer"
                      className="whatsapp-btn-chip"
                    >
                      <MessageSquare size={14} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Advanced Engineering Consultation Form */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="form-success-state">
                    <div className="success-icon-bubble">
                      <CheckCircle2 size={54} />
                    </div>
                    <span className="success-tag">TRANSMISSION CONFIRMED</span>
                    <h3 className="success-title">Project Brief Received!</h3>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name}</strong>. A Senior Systems Engineer from our Sholinganallur office is reviewing your requirements and will reach out to <strong>{formData.email}</strong> within 4 business hours.
                    </p>

                    <div className="submitted-recap-box">
                      <div className="recap-item">
                        <span className="recap-lbl">Target Scope:</span>
                        <span className="recap-val">{formData.subject}</span>
                      </div>
                      <div className="recap-item">
                        <span className="recap-lbl">Timeline:</span>
                        <span className="recap-val">{formData.timeline}</span>
                      </div>
                      <div className="recap-item">
                        <span className="recap-lbl">Location:</span>
                        <span className="recap-val">{formData.location}</span>
                      </div>
                    </div>

                    <button
                      className="btn-primary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          location: 'Chennai',
                          subject: 'Corporate Boardroom AV',
                          timeline: 'Within 3 Months',
                          message: ''
                        });
                      }}
                    >
                      <span>Submit Another Request</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="advanced-contact-form">
                    <div className="form-head">
                      <span className="form-badge">TRANSMIT SPECIFICATIONS</span>
                      <h3 className="form-title">Request Engineering Consultation</h3>
                      <p className="form-sub">
                        Fill in your spatial details to receive tailored single-line schematics and preliminary BOQ estimates.
                      </p>
                    </div>

                    {/* Project Category Selector Pills */}
                    <div className="form-section-group">
                      <label className="form-group-label">Project / Space Type</label>
                      <div className="type-pills-grid">
                        {projectTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            className={`type-pill-btn ${formData.subject === type ? 'is-selected' : ''}`}
                            onClick={() => {
                              soundFx.playClick();
                              setFormData({ ...formData, subject: type });
                            }}
                          >
                            <span>{type}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 2-Column Name & Company */}
                    <div className="form-row-2col">
                      <div className="form-field-wrap">
                        <label>Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Raman"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="form-field-wrap">
                        <label>Organization / Company *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vertex Technologies Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* 2-Column Email & Phone */}
                    <div className="form-row-2col">
                      <div className="form-field-wrap">
                        <label>Official Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="rajesh@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="form-field-wrap">
                        <label>Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98400 XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Timeline & Location Row */}
                    <div className="form-row-2col">
                      <div className="form-field-wrap">
                        <label>Project Location</label>
                        <input
                          type="text"
                          placeholder="e.g. Sholinganallur, Chennai"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        />
                      </div>

                      <div className="form-field-wrap">
                        <label>Implementation Timeline</label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        >
                          {timelines.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Detailed Notes */}
                    <div className="form-field-wrap">
                      <label>Spatial Dimensions & Scope Requirements *</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about room capacity, existing acoustic drywall/glass, MicroLED display size, video conferencing platform (Teams / Zoom), or any specific architectural constraints..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-primary form-submit-cta">
                      <span>Transmit Project Brief to Engineering</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* 3. FREQUENTLY ASKED QUESTIONS ACCORDION */}
          <div className="contact-faq-wrapper">
            <div className="faq-section-head">
              <span className="faq-badge">
                <HelpCircle size={14} />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </span>
              <h2 className="faq-title">Everything You Need to Know Before Connecting</h2>
              <p className="faq-sub">Common questions regarding site surveys, BOQs, showroom visits, and SLA coverage.</p>
            </div>

            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-body">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
