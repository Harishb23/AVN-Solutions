import React, { useState } from 'react';
import { faqsData } from '../../data/faqs';
import { Plus, Minus, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './FaqSection.css';

interface FaqSectionProps {
  onStartProject: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onStartProject }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    soundFx.playClick(850);
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="section-grand-title">
            Answers To Common <span className="title-highlight">AV Questions.</span>
          </h2>
          <p className="section-lead-desc">
            Everything you need to know about our AV equipment supply, design methodology, site surveys in Chennai, and annual maintenance contracts.
          </p>
        </div>

        {/* 2-Column FAQ Layout */}
        <div className="faq-main-layout">
          {/* Left Column: Accordion List */}
          <div className="faq-accordion-list">
            {faqsData.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div key={faq.id} className={`faq-item-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Direct Help Box */}
          <div className="faq-sidebar-box">
            <div className="faq-help-card">
              <div className="help-icon-circle">
                <HelpCircle size={24} className="text-cyan" />
              </div>
              <h3 className="help-card-title">Have a Complex Room Requirement?</h3>
              <p className="help-card-desc">
                Our solutions architects are available to review your floor plans, calculate throw distances, and provide acoustic advice.
              </p>

              <div className="help-contact-options">
                <a href="tel:04424501688" className="help-call-btn">
                  <PhoneCall size={15} className="text-cyan" />
                  <span>044 2450 1688</span>
                </a>

                <button
                  className="btn-primary help-quote-btn"
                  onClick={() => {
                    soundFx.playPowerChime();
                    onStartProject();
                  }}
                >
                  <span>Request Custom BOQ Quote</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <span className="help-sub-note">
                Complimentary on-site surveys available across Chennai & Tamil Nadu.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
