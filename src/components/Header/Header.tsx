import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search, Volume2, VolumeX, Home, ChevronDown, ArrowUpRight } from 'lucide-react';
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
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

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

  // Home Page interactive visual section highlights
  const homeSections = [
    {
      id: 'hero',
      title: 'Experience Center',
      subtitle: 'Chennai Demo Lab & Showroom',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      badge: 'SHOLINGANALLUR HQ',
      action: () => {
        onNavigate('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setHomeDropdownOpen(false);
      }
    },
    {
      id: 'solutions-explorer',
      title: 'Solutions Architecture',
      subtitle: 'Boardrooms, Video Walls & Townhalls',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      badge: '4K MICROLED & BYOM',
      action: () => {
        onNavigate('home', 'solutions-explorer');
        setHomeDropdownOpen(false);
      }
    },
    {
      id: 'services',
      title: '12 Engineering Disciplines',
      subtitle: 'AutoCAD Schematics & Staging',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      badge: '10G SDVoE RACKS',
      action: () => {
        onNavigate('home', 'services');
        setHomeDropdownOpen(false);
      }
    },
    {
      id: 'acoustic',
      title: 'Acoustic RT60 Simulation',
      subtitle: 'Smaart V8 Reverberation Tuning',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80',
      badge: 'EASE 4.4 & SMAART',
      action: () => {
        onNavigate('home', 'engineering');
        setHomeDropdownOpen(false);
      }
    }
  ];

  const navLinks = [
    { 
      label: 'Home', 
      page: 'home', 
      hasDropdown: true,
      thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=200&q=80'
    },
    { 
      label: 'Solutions', 
      page: 'solutions', 
      hasDropdown: false,
      thumb: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&q=80'
    },
    { 
      label: 'Industries', 
      page: 'industries', 
      hasDropdown: false,
      thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80'
    },
    { 
      label: 'Projects', 
      page: 'projects', 
      hasDropdown: false,
      thumb: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=200&q=80'
    },
    { 
      label: 'Services', 
      page: 'services', 
      hasDropdown: false,
      thumb: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80'
    },
    { 
      label: 'About', 
      page: 'about', 
      hasDropdown: false,
      thumb: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80'
    },
    { 
      label: 'Insights', 
      page: 'insights', 
      hasDropdown: false,
      thumb: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=200&q=80'
    },
    { 
      label: 'Contact', 
      page: 'contact', 
      hasDropdown: false,
      thumb: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const handleLinkClick = (page: string) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);
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
          <a 
            href="/"
            className="brand-logo-btn"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            aria-label="AVN Solutions Homepage"
          >
            <img src={logoImg} alt="AVN Solutions" className="brand-logo-img" />
          </a>

          {/* Center Navigation Dock with Dynamic Animations & Visual Flyouts */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page || (item.page === 'solutions' && currentPage.startsWith('solution-'));

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.page}
                    className="nav-item-dropdown-wrapper"
                    onMouseEnter={() => {
                      soundFx.playHover();
                      setHomeDropdownOpen(true);
                    }}
                    onMouseLeave={() => setHomeDropdownOpen(false)}
                  >
                    <a
                      href="/"
                      className={`nav-link nav-link-has-dropdown ${isActive ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick('home');
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                    >
                      <Home size={13} className="nav-home-icon" />
                      <span>{item.label}</span>
                      <ChevronDown size={13} className={`nav-chevron-icon ${homeDropdownOpen ? 'open' : ''}`} />
                      {isActive && <span className="nav-active-pill" aria-hidden="true" />}
                    </a>

                    {/* Animated Visual Home Section Mega Flyout */}
                    <div className={`home-visual-mega-dropdown ${homeDropdownOpen ? 'is-visible' : ''}`}>
                      <div className="home-mega-header">
                        <div className="mega-header-badge">
                          <span className="live-radar-dot" />
                          <span>EXPLORE HOME ECOSYSTEM • CHENNAI</span>
                        </div>
                        <span className="mega-header-tip">Click to jump directly to section</span>
                      </div>

                      <div className="home-mega-grid">
                        {homeSections.map((sec) => (
                          <div
                            key={sec.id}
                            className="home-mega-card"
                            onClick={() => {
                              soundFx.playClick(900);
                              sec.action();
                            }}
                          >
                            <div className="home-mega-card-media">
                              <img src={sec.image} alt={sec.title} className="home-mega-card-img" />
                              <div className="home-mega-card-overlay" />
                              <span className="home-mega-badge">{sec.badge}</span>
                            </div>
                            <div className="home-mega-card-info">
                              <div className="home-mega-card-title-row">
                                <span className="home-mega-card-title">{sec.title}</span>
                                <ArrowUpRight size={13} className="home-mega-arrow" />
                              </div>
                              <span className="home-mega-card-sub">{sec.subtitle}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.page}
                  href={`/${item.page}`}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.page);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="nav-active-pill" aria-hidden="true" />}
                </a>
              );
            })}
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
            <a 
              href="/"
              className="brand-logo-btn"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              aria-label="AVN Solutions Homepage"
            >
              <img src={logoImg} alt="AVN Solutions" className="brand-logo-img" />
            </a>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-list">
            {navLinks.map((item, idx) => {
              const isActive = currentPage === item.page || (item.page === 'solutions' && currentPage.startsWith('solution-'));
              return (
                <a
                  key={item.page}
                  href={item.page === 'home' ? '/' : `/${item.page}`}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.page);
                  }}
                >
                  <div className="mobile-nav-thumb-wrap">
                    <img src={item.thumb} alt={item.label} className="mobile-nav-thumb" />
                    <div className="mobile-nav-thumb-overlay" />
                  </div>
                  <div className="mobile-nav-text-col">
                    <span className="mobile-nav-num">0{idx}</span>
                    <span className="mobile-nav-title">{item.label}</span>
                  </div>
                  <ArrowRight size={16} className="mobile-nav-arrow" />
                </a>
              );
            })}
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
