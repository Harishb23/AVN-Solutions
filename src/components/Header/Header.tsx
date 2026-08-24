import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, Sun, Moon, Sparkles } from 'lucide-react';
import './Header.css';

export type ThemeMode = 'hybrid' | 'dark' | 'light';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onOpenProjectModal: () => void;
  themeMode?: ThemeMode;
  onToggleTheme?: (mode: ThemeMode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenProjectModal,
  themeMode = 'hybrid',
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', page: 'home' },
    { label: 'SOLUTIONS', page: 'solutions' },
    { label: 'INDUSTRIES', page: 'industries' },
    { label: 'PROJECTS', page: 'projects' },
    { label: 'ABOUT', page: 'about' },
    { label: 'INSIGHTS', page: 'insights' },
    { label: 'CONTACT', page: 'contact' }
  ];

  const handleLinkClick = (page: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  const cycleTheme = () => {
    if (!onToggleTheme) return;
    if (themeMode === 'hybrid') onToggleTheme('dark');
    else if (themeMode === 'dark') onToggleTheme('light');
    else onToggleTheme('hybrid');
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container-wide header-inner">
          {/* Brand Identity / Monogram */}
          <button 
            className="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            data-cursor="explore"
            data-cursor-text="HOME"
            aria-label="AVN Solutions Homepage"
          >
            <div className="brand-monogram">
              <svg viewBox="0 0 40 40" className="brand-svg">
                <polygon points="6,34 20,6 34,34 26,34 20,22 14,34" fill="url(#header-gradient)" />
                <circle cx="20" cy="15" r="2.5" fill="#00F0FF" />
                <defs>
                  <linearGradient id="header-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F0FF" />
                    <stop offset="100%" stopColor="#0070F3" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="brand-glow" />
            </div>
            <div className="brand-text">
              <span className="brand-name">AVN<span className="brand-highlight">.</span></span>
              <span className="brand-sub">SOLUTIONS</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <button
                key={item.page}
                className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.page)}
                data-cursor="explore"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="header-actions">
            {/* Theme Toggle Pill */}
            {onToggleTheme && (
              <button
                className="theme-toggle-btn"
                onClick={cycleTheme}
                title={`Current Theme: ${themeMode.toUpperCase()} (Click to toggle)`}
                data-cursor="explore"
                data-cursor-text="THEME"
              >
                {themeMode === 'hybrid' && <Sparkles size={14} className="text-cyan" />}
                {themeMode === 'dark' && <Moon size={14} className="text-cyan" />}
                {themeMode === 'light' && <Sun size={14} style={{ color: '#f59e0b' }} />}
                <span className="theme-toggle-label">
                  {themeMode === 'hybrid' ? 'HYBRID' : themeMode === 'dark' ? 'DARK' : 'LIGHT'}
                </span>
              </button>
            )}

            <a 
              href="tel:04424501688" 
              className="quick-call-btn"
              title="Call AVN Solutions Chennai"
              data-cursor="listen"
              data-cursor-text="CALL"
            >
              <PhoneCall size={16} />
              <span className="quick-call-text">044 2450 1688</span>
            </a>

            <button
              className="btn-primary start-project-btn"
              onClick={onOpenProjectModal}
              data-cursor="start"
              data-cursor-text="START"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="brand-text">
              <span className="brand-name">AVN</span>
              <span className="brand-sub">SOLUTIONS</span>
            </div>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <div className="mobile-nav-list">
            {navLinks.map((item, idx) => (
              <button
                key={item.page}
                className={`mobile-nav-link ${currentPage === item.page ? 'active' : ''}`}
                style={{ animationDelay: `${0.05 * (idx + 1)}s` }}
                onClick={() => handleLinkClick(item.page)}
              >
                <span className="mobile-nav-num">0{idx + 1}</span>
                <span className="mobile-nav-title">{item.label}</span>
                <ArrowUpRight size={20} className="mobile-nav-arrow" />
              </button>
            ))}
          </div>

          <div className="mobile-menu-footer">
            {onToggleTheme && (
              <button className="btn-secondary mobile-theme-btn" onClick={cycleTheme}>
                <Sparkles size={16} className="text-cyan" />
                <span>THEME MODE: {themeMode.toUpperCase()}</span>
              </button>
            )}

            <button
              className="btn-primary mobile-start-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={18} />
            </button>

            <div className="mobile-contact-info">
              <p className="mobile-loc">📍 Sholinganallur, Chennai, Tamil Nadu</p>
              <a href="tel:04424501688" className="mobile-phone">📞 044 2450 1688</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
