import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquareQuote } from 'lucide-react';
import { companyDetails } from '../../data/company';
import { soundFx } from '../../utils/sound';
import './FloatingActions.css';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuoteModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick(950);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${companyDetails.whatsapp.number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(companyDetails.whatsapp.prefillMessage)}`;

  return (
    <aside className="floating-actions-container" aria-label="Quick Actions">
      {/* Sticky Get Quote Button */}
      <button
        className="floating-quote-btn"
        onClick={() => {
          soundFx.playPowerChime();
          onOpenQuoteModal();
        }}
        title="Get Fast System Quote"
      >
        <MessageSquareQuote size={16} />
        <span className="quote-btn-text">Get Quote</span>
      </button>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat with AV Consultant on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z" />
        </svg>
        <span className="whatsapp-label">WhatsApp</span>
      </a>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          className="floating-top-btn"
          onClick={scrollToTop}
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </aside>
  );
};
