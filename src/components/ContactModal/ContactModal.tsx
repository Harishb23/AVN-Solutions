import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Building2, Layers, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    spaceType: 'Corporate Boardroom / HQ',
    services: ['Audio Architecture', 'Video Conferencing'],
    roomSize: 'Medium Space (15-30 People)',
    timeline: 'Within 3 Months',
    name: '',
    company: '',
    email: '',
    phone: '',
    location: 'Chennai',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const spaceTypes = [
    'Corporate Boardroom / HQ',
    'Auditorium / Performing Arts',
    'Smart University / Classroom',
    'Hospitality & Grand Ballroom',
    'Mission-Critical Command NOC',
    'Experience Center / Retail',
    'Place of Worship Sanctuary',
    'Luxury Smart Residence'
  ];

  const serviceOptions = [
    'Audio Architecture & Line Arrays',
    'Direct-View MicroLED & Video Walls',
    'Microsoft Teams / Zoom Conferencing',
    'Smart Automation & Touch Control',
    'Acoustic Simulation & Modeling',
    'Complete Turnkey AV Integration'
  ];

  const roomSizes = [
    'Huddle Room (Up to 8 People)',
    'Medium Space (15-30 People)',
    'Large Executive Boardroom (30-60 People)',
    'Auditorium / Hall (100-1500+ Seats)',
    'Campus-Wide Multi-Building Network'
  ];

  const timelines = [
    'Immediate / Urgent (< 30 Days)',
    'Within 3 Months',
    'Planning Phase (3-6 Months)',
    'Consultation & Design Only'
  ];

  const toggleService = (service: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Trigger submission
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="contact-modal-dialog glass-panel" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-top-bar">
          <div className="modal-header-info">
            <span className="modal-tag">AV PROJECT CONFIGURATOR</span>
            <h3 className="modal-title">
              {submitted ? 'PROJECT BRIEF TRANSMITTED' : 'Engineer Your AV Experience'}
            </h3>
          </div>
          <button className="modal-close-icon" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/* Step Progress Bar */}
        {!submitted && (
          <div className="stepper-track">
            {[1, 2, 3, 4].map(s => (
              <div
                key={s}
                className={`step-node ${step === s ? 'active' : ''} ${step > s ? 'completed' : ''}`}
              >
                <div className="step-number">{step > s ? '✓' : s}</div>
                <span className="step-label">
                  {s === 1 && 'Space'}
                  {s === 2 && 'Solutions'}
                  {s === 3 && 'Scale'}
                  {s === 4 && 'Contact'}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="modal-scroll-body">
          {submitted ? (
            <div className="success-screen">
              <div className="success-pulse-icon">
                <CheckCircle2 size={56} className="text-cyan" />
              </div>
              <h4 className="success-heading">We have received your project parameters!</h4>
              <p className="success-desc">
                An AVN Solutions Principal Systems Engineer from our Chennai office will review your acoustic, visual, and automation scope and reach out within 4 business hours.
              </p>

              <div className="project-recap-box">
                <div className="recap-row">
                  <span className="recap-key">Target Space:</span>
                  <span className="recap-val">{formData.spaceType}</span>
                </div>
                <div className="recap-row">
                  <span className="recap-key">Scale:</span>
                  <span className="recap-val">{formData.roomSize}</span>
                </div>
                <div className="recap-row">
                  <span className="recap-key">Timeline:</span>
                  <span className="recap-val">{formData.timeline}</span>
                </div>
                <div className="recap-row">
                  <span className="recap-key">Solutions:</span>
                  <span className="recap-val">{formData.services.join(', ')}</span>
                </div>
              </div>

              <div className="success-actions">
                <button className="btn-primary" onClick={handleReset}>
                  RETURN TO SHOWROOM
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); handleNext(); }}>
              {/* STEP 1: Space Type */}
              {step === 1 && (
                <div className="step-pane">
                  <div className="pane-header">
                    <span className="pane-step-num">STEP 01 OF 04</span>
                    <h4 className="pane-title">What type of space are we transforming?</h4>
                    <p className="pane-sub">Select the architectural category that best describes your project.</p>
                  </div>

                  <div className="options-grid">
                    {spaceTypes.map(type => (
                      <button
                        type="button"
                        key={type}
                        className={`selection-card ${formData.spaceType === type ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, spaceType: type })}
                      >
                        <Building2 size={20} className="card-icon" />
                        <span className="card-title">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Solutions */}
              {step === 2 && (
                <div className="step-pane">
                  <div className="pane-header">
                    <span className="pane-step-num">STEP 02 OF 04</span>
                    <h4 className="pane-title">What AV technologies do you require?</h4>
                    <p className="pane-sub">Choose all components relevant to your space.</p>
                  </div>

                  <div className="options-grid">
                    {serviceOptions.map(serv => {
                      const isSel = formData.services.includes(serv);
                      return (
                        <button
                          type="button"
                          key={serv}
                          className={`selection-card ${isSel ? 'selected' : ''}`}
                          onClick={() => toggleService(serv)}
                        >
                          <Layers size={20} className="card-icon" />
                          <span className="card-title">{serv}</span>
                          <span className="card-check">{isSel ? '✓' : '+'}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Scale & Timeline */}
              {step === 3 && (
                <div className="step-pane">
                  <div className="pane-header">
                    <span className="pane-step-num">STEP 03 OF 04</span>
                    <h4 className="pane-title">Scale and delivery timeline</h4>
                    <p className="pane-sub">Help us tailor the system design and acoustic calculation.</p>
                  </div>

                  <div className="field-group">
                    <label className="field-label">Estimated Space Capacity / Scale</label>
                    <div className="pill-selector">
                      {roomSizes.map(size => (
                        <button
                          type="button"
                          key={size}
                          className={`pill-option ${formData.roomSize === size ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, roomSize: size })}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="field-group" style={{ marginTop: '1.5rem' }}>
                    <label className="field-label">Target Implementation Timeline</label>
                    <div className="pill-selector">
                      {timelines.map(t => (
                        <button
                          type="button"
                          key={t}
                          className={`pill-option ${formData.timeline === t ? 'active' : ''}`}
                          onClick={() => setFormData({ ...formData, timeline: t })}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Information */}
              {step === 4 && (
                <div className="step-pane">
                  <div className="pane-header">
                    <span className="pane-step-num">STEP 04 OF 04</span>
                    <h4 className="pane-title">Where should we transmit the technical proposal?</h4>
                    <p className="pane-sub">We will prepare custom single-line schematics and preliminary equipment bills.</p>
                  </div>

                  <div className="form-grid">
                    <div className="form-field">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Raman"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Organization / Company *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vertex Technologies Ltd"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Official Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98400 XXXXX"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-field full-span">
                      <label>Project Location (City / Region)</label>
                      <input
                        type="text"
                        placeholder="e.g. Sholinganallur, Chennai"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>

                    <div className="form-field full-span">
                      <label>Specific Architectural / Acoustic Notes</label>
                      <textarea
                        rows={3}
                        placeholder="e.g. 15-meter glass wall, requires certified Microsoft Teams integration and ceiling mics."
                        value={formData.notes}
                        onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Modal Bottom Controls */}
        {!submitted && (
          <div className="modal-footer-nav">
            {step > 1 ? (
              <button type="button" className="btn-secondary" onClick={handleBack}>
                <ArrowLeft size={16} />
                <span>BACK</span>
              </button>
            ) : (
              <div />
            )}

            <button type="button" className="btn-primary" onClick={handleNext}>
              <span>{step === 4 ? 'TRANSMIT PROJECT BRIEF' : 'CONTINUE'}</span>
              {step === 4 ? <Send size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
