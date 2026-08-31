import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, Sparkles, Search, Volume2, VolumeX, Sliders } from 'lucide-react';
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
  onOpenCommandPalette,
  themeMode = 'dark',
  onToggleTheme
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundFx.getMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Solutions', page: 'solutions' },
    { label: 'Industries', page: 'industries' },
    { label: 'Products', page: 'products' },
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

  const cycleTheme = () => {
    if (!onToggleTheme) return;
    soundFx.playPulse();
    if (themeMode === 'hybrid') onToggleTheme('dark');
    else if (themeMode === 'dark') onToggleTheme('light');
    else onToggleTheme('hybrid');
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container-wide header-inner">
          {/* Brand Identity / Official Logo */}
          <button 
            className="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            data-cursor="explore"
            data-cursor-text="HOME"
            aria-label="AVN Solutions Homepage"
          >
            <img src={logoImg} alt="AVN Solutions" className="brand-logo-img" />
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

          {/* Header Action CTAs */}
          <div className="header-actions">
            {/* Quick Command / Search Button */}
            <button
              className="quick-search-header-btn hide-tablet"
              onClick={() => {
                soundFx.playClick();
                onOpenCommandPalette();
              }}
              title="Search & Commands (Ctrl + K)"
              aria-label="Search and Commands"
            >
              <Search size={15} />
              <span className="search-hint">Search / Cmd</span>
              <kbd className="search-kbd">⌘K</kbd>
            </button>

            {/* Audio Feedback Toggle */}
            <button
              className={`audio-toggle-btn ${!isMuted ? 'is-active' : ''}`}
              onClick={() => {
                const nextMuted = soundFx.toggleMute();
                setIsMuted(nextMuted);
              }}
              title={isMuted ? 'Enable Sound Effects' : 'Mute Sound Effects'}
              aria-label={isMuted ? 'Enable Sound Effects' : 'Mute Sound Effects'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Theme Toggle Button */}
            {onToggleTheme && (
              <button
                className={`theme-toggle-btn mode-${themeMode}`}
                onClick={cycleTheme}
                title={`Theme: ${themeMode.toUpperCase()} (Click to cycle)`}
                aria-label={`Current Theme: ${themeMode}. Click to switch theme.`}
              >
                <div className="theme-toggle-icon">
                  {themeMode === 'hybrid' && <Sparkles size={16} />}
                  {themeMode === 'dark' && <Moon size={16} />}
                  {themeMode === 'light' && <Sun size={16} />}
                </div>
                <span className="theme-toggle-label">{themeMode}</span>
              </button>
            )}

            {/* Space Configurator Quick Launch */}
            <button 
              className="btn-configure-header hide-mobile"
              onClick={() => {
                soundFx.playPulse();
                onNavigate('solutions', 'configurator');
              }}
              title="Interactive Room Configurator"
            >
              <Sliders size={14} className="text-cyan animate-pulse-gentle" />
              <span>Configurator</span>
            </button>

            {/* Get Quote Action */}
            <button 
              className="btn-primary header-quote-btn"
              onClick={() => {
                soundFx.playPowerChime();
                onOpenProjectModal();
              }}
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={15} />
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
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <button 
              className="brand-logo-btn mobile-logo-btn"
              onClick={() => handleLinkClick('home')}
              aria-label="AVN Solutions Homepage"
            >
              <img src={logoImg} alt="AVN Solutions" className="brand-logo-img mobile-brand-logo-img" />
            </button>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          <div className="mobile-nav-list">
            {navLinks.map((item, idx) => (
              <button
                key={item.page}
                className={`mobile-nav-link ${currentPage === item.page ? 'active' : ''}`}
                style={{ animationDelay: `${0.03 * (idx + 1)}s` }}
                onClick={() => handleLinkClick(item.page)}
              >
                <span className="mobile-nav-num">0{idx + 1}</span>
                <span className="mobile-nav-title">{item.label}</span>
                <ArrowUpRight size={18} className="mobile-nav-arrow" />
              </button>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <button
              className="btn-secondary mobile-calc-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('tools');
              }}
            >
              <Sliders size={16} className="text-cyan" />
              <span>Design Your Space (AV Calculators)</span>
            </button>

            <button
              className="btn-primary mobile-start-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
            >
              <span>Get a Quote</span>
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
