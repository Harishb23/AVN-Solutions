import React, { useState } from 'react';
import { brandsData } from '../../data/brands';
import { soundFx } from '../../utils/sound';
import { ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Partners.css';

interface PartnersProps {
  onNavigateBrands?: () => void;
}

export const Partners: React.FC<PartnersProps> = ({ onNavigateBrands }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Display',
    'Audio',
    'Microphones',
    'Video Conferencing',
    'Control',
    'Networking'
  ];

  const filteredBrands = activeCategory === 'All'
    ? brandsData.slice(0, 16)
    : brandsData.filter(b => b.category === activeCategory).slice(0, 16);

  const handleFilter = (cat: string) => {
    soundFx.playClick(900);
    setActiveCategory(cat);
  };

  return (
    <section 
      ref={ref}
      className={`editorial-partners-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="brands"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-line" />
            <span>TECHNOLOGY PARTNERS</span>
          </div>
          <h2 className="section-grand-title">
            Built with <span className="title-highlight">trusted technology.</span>
          </h2>
          <p className="section-lead-desc">
            We work with leading technology manufacturers to deliver reliable, scalable and serviceable systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="partners-filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`partner-pill-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Grayscale Logo Wall Grid */}
        <div className="partners-clean-grid stagger-container">
          {filteredBrands.map((brand) => (
            <div key={brand.id} className="partner-brand-tile hover-card-lift">
              <div className="brand-logo-area">
                <span className="brand-logo-text">{brand.logoText}</span>
              </div>
              <div className="brand-tile-info">
                <div className="brand-title-tier-row">
                  <span className="brand-name-sub">{brand.name}</span>
                  {brand.tier && <span className="brand-partner-tier">{brand.tier}</span>}
                </div>
                <span className="brand-cat-tag">{brand.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Guarantee Note & View Ecosystem */}
        <div className="partners-footer-trust hover-card-lift">
          <div className="trust-note-left">
            <ShieldCheck size={18} className="text-emerald" />
            <span>100% genuine hardware with authorized OEM warranties and Chennai-based local SLA support.</span>
          </div>

          {onNavigateBrands && (
            <button className="btn-secondary view-ecosystem-btn" onClick={onNavigateBrands}>
              <span>Explore All 50+ Partner Brands →</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
