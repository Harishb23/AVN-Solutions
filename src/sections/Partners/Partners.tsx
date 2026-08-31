import React, { useState } from 'react';
import { brandsData } from '../../data/brands';
import { soundFx } from '../../utils/sound';
import { ShieldCheck, Award } from 'lucide-react';
import './Partners.css';

interface PartnersProps {
  onNavigateBrands?: () => void;
}

export const Partners: React.FC<PartnersProps> = ({ onNavigateBrands }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Display',
    'Audio',
    'Microphones',
    'Video Conferencing',
    'Control',
    'Networking',
    'Projection',
    'Automation'
  ];

  const filteredBrands = activeCategory === 'All'
    ? brandsData
    : brandsData.filter(b => b.category === activeCategory);

  const handleFilter = (cat: string) => {
    soundFx.playClick(900);
    setActiveCategory(cat);
  };

  return (
    <section className="partners-logo-section" id="brands">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">OEM PARTNERSHIP NETWORK</span>
          </div>
          <h2 className="section-grand-title">
            Technology From <span className="title-highlight">Brands You Trust.</span>
          </h2>
          <p className="section-lead-desc">
            We partner with and supply certified hardware from the world's most reputable audio, video, control, and networking manufacturers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="brands-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`brand-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brands Logo Wall Grid */}
        <div className="brands-logo-wall">
          {filteredBrands.map((brand) => (
            <div key={brand.id} className="brand-logo-card" data-cursor="explore">
              <div className="brand-card-top">
                <span className="brand-category-pill">{brand.category}</span>
                {brand.tier && (
                  <span className="brand-tier-badge">
                    <Award size={10} className="text-cyan" />
                    <span>{brand.tier}</span>
                  </span>
                )}
              </div>

              {/* Monochrome to Vibrant Text Logo */}
              <div className="brand-monochrome-logo">
                <span className="brand-mono-text">{brand.logoText}</span>
              </div>

              <h4 className="brand-official-name">{brand.name}</h4>
              <p className="brand-summary-text">{brand.description}</p>

              {brand.popularGear && (
                <div className="brand-gear-chips">
                  {brand.popularGear.map((gear, i) => (
                    <span key={i} className="gear-chip">{gear}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Guarantee Note & CTA */}
        <div className="brands-trust-note">
          <ShieldCheck size={16} className="text-cyan" />
          <span>All products supplied by AVN Solutions are 100% genuine with direct OEM manufacturer warranty and authorized technical support in Chennai.</span>
          {onNavigateBrands && (
            <button className="btn-secondary view-brands-cta" onClick={onNavigateBrands}>
              <span>View Full Partner Ecosystem →</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
