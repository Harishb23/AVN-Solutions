import React, { useState } from 'react';
import { brandsData } from '../data/brands';
import { Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/sound';
import './Pages.css';

interface BrandsPageProps {
  onStartProject: () => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onStartProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

  const filteredBrands = selectedCategory === 'All'
    ? brandsData
    : brandsData.filter(b => b.category === selectedCategory);

  return (
    <div className="page-view-container">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="container-wide">
          <div className="page-badge">
            <Award size={14} className="text-cyan" />
            <span>DIRECT OEM PARTNERSHIPS • AUTHORIZED SYSTEM INTEGRATOR</span>
          </div>
          <h1 className="page-hero-title">
            Global Technology Brands.{' '}
            <span className="page-title-gradient">Integrated with Precision.</span>
          </h1>
          <p className="page-hero-subtitle">
            We partner directly with the world's leading audio-visual manufacturers, ensuring our clients receive 100% authentic hardware, tier-1 technical support, and full factory warranties.
          </p>
        </div>
      </section>

      {/* Brands Content */}
      <section className="section-spacing">
        <div className="container-wide">
          {/* Category Tabs */}
          <div className="page-tab-nav">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`page-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(900);
                  setSelectedCategory(cat);
                }}
              >
                <span className="tab-text">{cat}</span>
              </button>
            ))}
          </div>

          {/* Brands Grid */}
          <div className="brands-page-grid">
            {filteredBrands.map((brand) => (
              <div key={brand.id} className="brand-eco-card glass-panel" data-cursor="explore">
                <div className="brand-card-top-row">
                  <span className="brand-cat-tag">{brand.category}</span>
                  {brand.tier && (
                    <span className="brand-tier-badge">
                      <Award size={11} className="text-cyan" />
                      <span>{brand.tier} Partner</span>
                    </span>
                  )}
                </div>

                <div className="brand-logo-display">
                  <span className="brand-logo-text">{brand.logoText}</span>
                </div>

                <h3 className="brand-full-name">{brand.name}</h3>
                <p className="brand-description">{brand.description}</p>

                {brand.popularGear && (
                  <div className="brand-gear-list">
                    <span className="gear-title">POPULAR HARDWARE:</span>
                    <div className="gear-pills">
                      {brand.popularGear.map((gear, i) => (
                        <span key={i} className="gear-pill">{gear}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct Warranty Note */}
          <div className="brand-warranty-card">
            <div className="warranty-icon-wrap">
              <ShieldCheck size={28} className="text-cyan" />
            </div>
            <div className="warranty-text-wrap">
              <h4 className="warranty-title">100% Genuine Hardware & Direct OEM Support Guarantee</h4>
              <p className="warranty-desc">
                Every unit supplied by AVN Solutions is sourced through official distributor channels with verified serial numbers, direct factory warranty coverage, and authorized engineering support in Chennai.
              </p>
            </div>
            <button
              className="btn-primary warranty-cta"
              onClick={() => {
                soundFx.playPowerChime();
                onStartProject();
              }}
            >
              <span>Inquire Equipment BOQ</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
