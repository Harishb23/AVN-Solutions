import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { companyDetails } from '../data/company';
import confetti from 'canvas-confetti';
import './ContactPage.css';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Consultation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="simple-contact-page">
      {/* Simple Page Header */}
      <section className="simple-contact-header">
        <div className="container">
          <span className="simple-contact-badge">GET IN TOUCH</span>
          <h1 className="simple-contact-title">Contact AVN Solutions</h1>
          <p className="simple-contact-subtitle">
            Have a project in mind or need an AV consultation? Send us a message or visit our Chennai office.
          </p>
        </div>
      </section>

      {/* Main 2-Column Contact Section */}
      <section className="simple-contact-body">
        <div className="container">
          <div className="simple-contact-grid">
            {/* Left: Contact Info */}
            <div className="simple-info-panel">
              <h2 className="info-section-title">Contact Information</h2>
              <p className="info-section-desc">
                Feel free to reach out to us directly via phone, email, or by visiting our Chennai showroom facility.
              </p>

              <div className="simple-info-list">
                <div className="simple-info-item">
                  <div className="info-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="info-item-label">Our Office Address</h3>
                    <p className="info-item-value">
                      10, MGR Rd, Ezhil Nagar, Ganesh Nagar,<br />
                      Sholinganallur, Chennai, Tamil Nadu 600119
                    </p>
                    <a
                      href={companyDetails.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="simple-map-link"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                <div className="simple-info-item">
                  <div className="info-icon-box">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="info-item-label">Phone Number</h3>
                    <a href="tel:04424501688" className="info-link-highlight">
                      044 2450 1688
                    </a>
                    <p className="info-item-sub">Mon – Sat, 9:30 AM – 6:30 PM</p>
                  </div>
                </div>

                <div className="simple-info-item">
                  <div className="info-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="info-item-label">Email Address</h3>
                    <a href="mailto:contact@avnsolutions.in" className="info-link-highlight">
                      contact@avnsolutions.in
                    </a>
                    <p className="info-item-sub">We usually respond within 4 hours</p>
                  </div>
                </div>

                <div className="simple-info-item">
                  <div className="info-icon-box">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="info-item-label">Working Hours</h3>
                    <p className="info-item-value">Monday – Saturday: 9:30 AM – 6:30 PM</p>
                    <p className="info-item-sub">Sunday: Closed (Emergency 24/7 SLA available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Clean Standard Contact Form */}
            <div className="simple-form-panel">
              {submitted ? (
                <div className="simple-success-card">
                  <CheckCircle2 size={56} className="simple-success-icon" />
                  <h3 className="simple-success-title">Message Sent Successfully!</h3>
                  <p className="simple-success-text">
                    Thank you, <strong>{formData.name}</strong>. We have received your message and will get back to you shortly at <strong>{formData.email}</strong>.
                  </p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry / Consultation',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="simple-form">
                  <h3 className="form-card-title">Send Us a Message</h3>

                  <div className="simple-form-row">
                    <div className="simple-field">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="simple-field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="simple-form-row">
                    <div className="simple-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 XXXXX"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="simple-field">
                      <label>Subject / Space Type</label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="General Inquiry / Consultation">General Inquiry / Consultation</option>
                        <option value="Corporate Boardroom AV">Corporate Boardroom AV</option>
                        <option value="Auditorium & Stage Acoustics">Auditorium & Stage Acoustics</option>
                        <option value="Smart Classroom / Education">Smart Classroom / Education</option>
                        <option value="Direct-View MicroLED Wall">Direct-View MicroLED Wall</option>
                        <option value="Crestron / Q-SYS Automation">Crestron / Q-SYS Automation</option>
                        <option value="Support & Maintenance SLA">Support & Maintenance SLA</option>
                      </select>
                    </div>
                  </div>

                  <div className="simple-field">
                    <label>Your Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your requirements, space type, or any questions..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary simple-submit-btn">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
