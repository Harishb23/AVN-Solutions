import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search, Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import logoImg from '../../assets/Logo_350x80-01.png';
import './Header.css';

export type ThemeMode = 'hybrid' | 'dark' | 'light';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onOpenProjectModal: () => void;
  onOpenCommandPalette: () => void;
  themeMode?: ThemeMode;
  onToggleTheme?: (mode: ThemeMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenProjectModal,
  onOpenCommandPalette
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundFx.getMuted());

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY || window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        setScrollProgress(progress);
        setScrolled(scrollTop > 20);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const navLinks = [
    { label: 'Solutions', page: 'solutions' },
    { label: 'Industries', page: 'industries' },
    { label: 'Projects', page: 'projects' },
    { label: 'Services', page: 'services' },
    { label: 'About', page: 'about' },
    { label: 'Insights', page: 'insights' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleLinkClick = (page: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      {/* 2px Subtle Scroll Progress Indicator */}
      <div 
        className="scroll-progress-line" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true" 
      />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container-wide header-inner">
          {/* Brand Logo */}
          <button 
            className="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            aria-label="AVN Solutions Homepage"
          >
            <img src={logoImg} alt="AVN Solutions" className="brand-logo-img" />
          </button>

          {/* Center Navigation Dock */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <button
                key={item.page}
                className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.page)}
              >
                <span>{item.label}</span>
                {currentPage === item.page && <span className="nav-active-pill" aria-hidden="true" />}
              </button>
            ))}
          </nav>

          {/* Right-Side Action Controls & CTA */}
          <div className="header-actions">
            {/* Search / Command Palette shortcut */}
            <button
              className="quick-search-btn hide-tablet"
              onClick={() => {
                soundFx.playClick();
                onOpenCommandPalette();
              }}
              title="Search & Quick Commands (Ctrl + K)"
              aria-label="Search and Quick Commands"
            >
              <Search size={15} className="search-icon-svg" />
              <span className="search-text">Search</span>
              <kbd className="search-kbd">⌘K</kbd>
            </button>

            {/* Audio Toggle */}
            <button
              className={`sound-toggle-btn ${!isMuted ? 'active' : ''}`}
              onClick={() => {
                const nextMuted = soundFx.toggleMute();
                setIsMuted(nextMuted);
              }}
              title={isMuted ? 'Enable Audio Interactions' : 'Mute Audio Interactions'}
              aria-label={isMuted ? 'Enable Audio Interactions' : 'Mute Audio Interactions'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Right-Side Primary CTA */}
            <button 
              className="btn-primary header-cta-btn"
              onClick={() => {
                soundFx.playPowerChime();
                onOpenProjectModal();
              }}
            >
              <span>Start a Project</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Clean Slide-out Mobile Navigation Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <button 
              className="brand-logo-btn"
              onClick={() => handleLinkClick('home')}
              aria-label="AVN Solutions Homepage"
            >
              <img src={logoImg} alt="AVN Solutions" className="brand-logo-img" />
            </button>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-list">
            <button
              className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleLinkClick('home')}
            >
              <span className="mobile-nav-num">00</span>
              <span className="mobile-nav-title">Home</span>
            </button>
            {navLinks.map((item, idx) => (
              <button
                key={item.page}
                className={`mobile-nav-link ${currentPage === item.page ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.page)}
              >
                <span className="mobile-nav-num">0{idx + 1}</span>
                <span className="mobile-nav-title">{item.label}</span>
                <ArrowRight size={16} className="mobile-nav-arrow" />
              </button>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <button
              className="btn-primary mobile-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
            >
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </button>

            <div className="mobile-contact-snippet">
              <p className="mobile-loc">Sholinganallur, Chennai, Tamil Nadu</p>
              <a href="tel:04424501688" className="mobile-phone">044 2450 1688</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
