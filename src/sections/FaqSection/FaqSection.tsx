import React, { useState } from 'react';
import { faqsData } from '../../data/faqs';
import { Plus, Minus, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FaqSection.css';

interface FaqSectionProps {
  onStartProject: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onStartProject }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleFaq = (id: string) => {
    soundFx.playClick(850);
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section 
      ref={ref}
      className={`editorial-faq-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="faq"
    >
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-left">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-line" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="section-grand-title">
            Answers to common <br />
            <span className="title-highlight">AV & integration questions.</span>
          </h2>
          <p className="section-lead-desc">
            Everything you need to know about our AV equipment supply, design methodology, site surveys in Chennai, and maintenance contracts.
          </p>
        </div>

        {/* 2-Column FAQ Layout */}
        <div className="faq-editorial-layout">
          {/* Left Column: Clean Accordion List */}
          <div className="faq-accordion-list stagger-container">
            {faqsData.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div key={faq.id} className={`faq-clean-card hover-card-lift ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq-question-button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-title">{faq.question}</span>
                    <span className="faq-icon-bubble">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-container">
                      <p className="faq-answer-paragraph">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Help Box */}
          <div className="faq-sidebar-sticky">
            <div className="faq-consultation-card hover-card-lift">
              <div className="consult-icon-box">
                <HelpCircle size={22} className="text-emerald" />
              </div>
              <h3 className="consult-card-title">Have a Complex Room Requirement?</h3>
              <p className="consult-card-desc">
                Our solutions architects are available to review your floor plans, calculate throw distances, and provide acoustic modeling.
              </p>

              <div className="consult-actions-col">
                <a href="tel:04424501688" className="consult-phone-link">
                  <PhoneCall size={15} className="text-emerald" />
                  <span>044 2450 1688</span>
                </a>

                <button
                  className="btn-primary consult-quote-btn"
                  onClick={() => {
                    soundFx.playPowerChime();
                    onStartProject();
                  }}
                >
                  <span>Request Custom BOQ</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <span className="consult-subtext">
                Complimentary on-site surveys available across Chennai & Tamil Nadu.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
