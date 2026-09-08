import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  HeartPulse, 
  Utensils, 
  ShoppingBag, 
  Landmark, 
  Home, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Industries.css';

interface IndustriesProps {
  onStartProject: () => void;
  onNavigateIndustries?: () => void;
}

interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: any;
  spaces: string[];
  techHighlights: string[];
}

export const Industries: React.FC<IndustriesProps> = ({ onStartProject, onNavigateIndustries }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const industries: IndustryItem[] = [
    {
      id: 'corporate',
      name: 'Corporate',
      tagline: 'Technology for productive workplaces.',
      description: 'Executive boardrooms, hybrid Teams & Zoom rooms, and all-hands townhalls engineered for modern enterprises.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      icon: Building2,
      techHighlights: ['0.9mm MicroLED', 'Dante Ceiling Arrays', 'Crestron One-Touch'],
      spaces: ['Executive Boardrooms', 'Hybrid Meeting Spaces', 'Townhall Auditoriums']
    },
    {
      id: 'education',
      name: 'Education',
      tagline: 'Engaging systems for modern learning.',
      description: 'Active learning classrooms, tier-1 lecture halls, distance education capture, and campus digital signage.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85',
      icon: GraduationCap,
      techHighlights: ['HyFlex Lecture Capture', 'Tiered Column Audio', 'Wireless BYOD'],
      spaces: ['Smart Tiered Lecture Halls', 'HyFlex Classrooms', 'Campus-Wide PA']
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      tagline: 'Precision AV for clinical environments.',
      description: 'Medical training auditoriums, surgical telemedicine displays, patient room infotainment, and hospital command centers.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85',
      icon: HeartPulse,
      techHighlights: ['Zero-Latency Displays', 'Medical Telepresence', 'OR Control Glass'],
      spaces: ['Surgical Suites', 'Medical Auditoriums', 'Hospital NOCs']
    },
    {
      id: 'hospitality',
      name: 'Hospitality',
      tagline: 'Memorable guest & venue experiences.',
      description: 'Luxury hotel ballrooms, multi-zone background music distribution, architectural lighting, and banquet displays.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
      icon: Utensils,
      techHighlights: ['Multi-Zone Matrix BGM', 'Ballroom LED Walls', 'DALI Lighting'],
      spaces: ['Grand Ballrooms', 'Lounge Audio Zones', 'Guest Displays']
    },
    {
      id: 'retail',
      name: 'Retail',
      tagline: 'Dynamic visual impact for flagship stores.',
      description: 'High-brightness storefront MicroLED video walls, interactive selector kiosks, and zoned background audio.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85',
      icon: ShoppingBag,
      techHighlights: ['High-Lux Direct-View LED', 'Interactive Kiosks', 'Directional Sound'],
      spaces: ['Storefront Direct LED', 'Experience Kiosks', 'Zoned Commercial Sound']
    },
    {
      id: 'government',
      name: 'Government',
      tagline: 'Mission-critical command & council spaces.',
      description: 'Secure parliamentary discussion systems, emergency operations centers (NOC/EOC), and encrypted AV over IP.',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=85',
      icon: Landmark,
      techHighlights: ['Encrypted AV-Over-IP', 'NOC Video Processors', 'Council Voting Systems'],
      spaces: ['Council Chambers', '24/7 Command NOCs', 'Secure Teleconference']
    },
    {
      id: 'residential',
      name: 'Residential',
      tagline: 'Immersive entertainment for luxury homes.',
      description: 'Private THX-certified Dolby Atmos home cinemas, whole-home audio, and integrated architectural automation.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      icon: Home,
      techHighlights: ['Dolby Atmos 9.4.6', 'Trinnov 3D Tuning', 'Starlight Ceilings'],
      spaces: ['Dolby Atmos Theatres', 'Multiroom Audio', 'Architectural Lighting']
    }
  ];

  const [selectedId, setSelectedId] = useState<string>(industries[0].id);

  const activeIndustry = industries.find(i => i.id === selectedId) || industries[0];

  const handleSelectIndustry = (id: string) => {
    soundFx.playClick(900);
    setSelectedId(id);
  };

  return (
    <section 
      ref={ref}
      className={`editorial-industries-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="industries"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-head-left">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-line" />
            <span>VERTICAL SECTOR EXPERTISE</span>
          </div>
          <h2 className="section-grand-title">
            Solutions for <br />
            <span className="title-highlight">every environment.</span>
          </h2>
          <p className="section-lead-desc">
            Every space presents unique acoustic geometry, lighting conditions and operational workflows.
          </p>
        </div>

        {/* Clean Industry Selector Tabs */}
        <div className="industry-clean-tabs">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = selectedId === ind.id;
            return (
              <button
                key={ind.id}
                className={`industry-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleSelectIndustry(ind.id)}
              >
                <Icon size={16} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Large Image + Typography Layout with Smooth Crossfade */}
        <div className="industry-editorial-stage hover-card-lift">
          <div className="stage-image-side">
            {industries.map((ind) => (
              <img
                key={ind.id}
                src={ind.image}
                alt={ind.name}
                className={`industry-large-photo image-crossfade ${ind.id === selectedId ? 'active-image' : ''}`}
                loading="lazy"
              />
            ))}
            <div className="stage-photo-tag">
              <span>{activeIndustry.name.toUpperCase()} SECTOR</span>
            </div>

            {/* Floating Tech Highlights Bar */}
            <div className="industry-tech-pills-bar">
              {activeIndustry.techHighlights.map((tech, tIdx) => (
                <span key={tIdx} className="ind-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="stage-content-side">
            <div className="stage-eyebrow-line">
              <activeIndustry.icon size={18} className="text-emerald" />
              <span>{activeIndustry.name.toUpperCase()} ARCHITECTURE</span>
            </div>

            <h3 className="stage-headline">"{activeIndustry.tagline}"</h3>
            <p className="stage-narrative">{activeIndustry.description}</p>

            <div className="stage-spaces-box">
              <span className="spaces-label">TYPICAL SPACES ENGINEERED:</span>
              <div className="spaces-cards-grid">
                {activeIndustry.spaces.map((sp, idx) => (
                  <div key={idx} className="space-card-item">
                    <CheckCircle2 size={14} className="text-emerald" />
                    <span>{sp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stage-actions-row">
              <button
                className="btn-primary"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Design for {activeIndustry.name}</span>
                <ArrowRight size={15} />
              </button>

              {onNavigateIndustries && (
                <button className="btn-secondary" onClick={onNavigateIndustries}>
                  <span>View All Sectors →</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
