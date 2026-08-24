import React, { useState } from 'react';
import { partnersData } from '../../data/partners';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './Partners.css';

export const Partners: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Audio', 'Visual', 'Control & Automation', 'Conferencing'];

  const filtered = filter === 'All' 
    ? partnersData 
    : partnersData.filter(p => p.category === filter);

  return (
    <section className="section-spacing partners-section light-zone" id="partners">
      <div className="container-wide">
        <SectionHeading
          badge="TIER-1 OEM ECOSYSTEM"
          title="POWERED BY THE BEST"
          subtitle="We partner directly with the world's leading pro-AV manufacturers, guaranteeing authentic hardware, direct factory warranties, and certified engineering integration."
        />

        {/* Filter Pills */}
        <div className="partners-filter-row">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              data-cursor="explore"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Ecosystem Grid */}
        <div className="partners-brand-grid">
          {filtered.map((brand, idx) => (
            <div key={idx} className="brand-eco-card glass-panel" data-cursor="explore">
              <div className="brand-category-tag">{brand.category}</div>
              <div className="brand-logo-text">{brand.logoText}</div>
              <div className="brand-full-name">{brand.name}</div>
              <p className="brand-description">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
