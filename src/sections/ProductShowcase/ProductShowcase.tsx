import React, { useState } from 'react';
import { productsData } from '../../data/products';
import type { ProductCategory, ProductItem } from '../../types';
import { Monitor, Volume2, Video, Cpu, Network, Home, Search, ArrowRight, Check, Eye } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './ProductShowcase.css';

interface ProductShowcaseProps {
  onSelectProduct?: (product: ProductItem) => void;
  onRequestQuoteForProduct?: (productName: string) => void;
  onNavigateProducts?: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectProduct,
  onRequestQuoteForProduct,
  onNavigateProducts
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalProduct, setSelectedModalProduct] = useState<ProductItem | null>(null);

  const categories: { id: ProductCategory | 'all'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Equipment', icon: Monitor },
    { id: 'display', label: 'Display & Video', icon: Monitor },
    { id: 'audio', label: 'Professional Audio', icon: Volume2 },
    { id: 'conferencing', label: 'Video Conferencing', icon: Video },
    { id: 'control', label: 'Control & Automation', icon: Cpu },
    { id: 'networking', label: 'AV Networking', icon: Network },
    { id: 'home-av', label: 'Home Cinema & AV', icon: Home }
  ];

  const filteredProducts = productsData.filter(prod => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat: ProductCategory | 'all') => {
    soundFx.playClick(900);
    setActiveCategory(cat);
  };

  const handleOpenQuote = (productName: string) => {
    soundFx.playPowerChime();
    if (onRequestQuoteForProduct) {
      onRequestQuoteForProduct(productName);
    }
  };

  return (
    <section className="products-showcase-section" id="products-showcase">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">AUTHORIZED AV EQUIPMENT SUPPLIER</span>
          </div>
          <h2 className="section-grand-title">
            Professional AV Equipment.{' '}
            <span className="title-highlight">From Trusted Technology Brands.</span>
          </h2>
          <p className="section-lead-desc">
            As an authorized supplier in Chennai, we source and distribute enterprise-grade audio-visual systems, commercial LED walls, DSP processors, and automation hardware backed by direct OEM warranties.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="product-filter-bar">
          <div className="product-category-pills">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`prod-cat-pill ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="product-search-box">
            <Search size={15} className="text-muted" />
            <input
              type="text"
              placeholder="Search gear, brand, or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="product-search-input"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.slice(0, 6).map((prod) => (
            <div key={prod.id} className="product-card" data-cursor="explore">
              {/* Product Image Stage */}
              <div className="product-img-wrap">
                <img src={prod.image} alt={prod.name} className="product-img" loading="lazy" />
                <div className="product-badge-row">
                  <span className="product-cat-badge">{prod.subCategory}</span>
                  <span className="product-brand-badge">{prod.brand}</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="product-info-body">
                <h3 className="product-title">{prod.name}</h3>
                <p className="product-desc">{prod.description}</p>

                {/* Key Verified Specs Grid */}
                <div className="product-specs-grid">
                  {prod.keySpecs.map((spec, i) => (
                    <div key={i} className="spec-tile">
                      <span className="spec-tile-label">{spec.label}</span>
                      <span className="spec-tile-value">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="product-actions-row">
                  <button
                    className="btn-secondary prod-view-btn"
                    onClick={() => {
                      soundFx.playClick(850);
                      setSelectedModalProduct(prod);
                      if (onSelectProduct) onSelectProduct(prod);
                    }}
                  >
                    <Eye size={13} className="text-cyan" />
                    <span>View Specs</span>
                  </button>

                  <button
                    className="btn-primary prod-quote-btn"
                    onClick={() => handleOpenQuote(prod.name)}
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Banner */}
        {onNavigateProducts && (
          <div className="products-view-all-box">
            <div className="view-all-text">
              <h4 className="view-all-title">Looking for Complete System BOQ & Commercial Sourcing?</h4>
              <p className="view-all-desc">Explore our complete catalog of over 200+ direct-distributed Pro AV equipment models.</p>
            </div>
            <button className="btn-primary view-all-btn" onClick={onNavigateProducts}>
              <span>Explore Complete Product Catalog</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Quick Product Detail Modal */}
        {selectedModalProduct && (
          <div className="prod-modal-backdrop" onClick={() => setSelectedModalProduct(null)}>
            <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="prod-modal-header">
                <div>
                  <span className="product-brand-badge">{selectedModalProduct.brand}</span>
                  <h3 className="modal-prod-title">{selectedModalProduct.name}</h3>
                </div>
                <button className="modal-close-x" onClick={() => setSelectedModalProduct(null)}>✕</button>
              </div>

              <div className="prod-modal-body">
                <div className="modal-img-col">
                  <img src={selectedModalProduct.image} alt={selectedModalProduct.name} className="modal-prod-img" />
                </div>
                <div className="modal-info-col">
                  <p className="modal-desc">{selectedModalProduct.description}</p>

                  <h4 className="modal-specs-title">VERIFIED TECHNICAL SPECIFICATIONS</h4>
                  <div className="modal-specs-list">
                    {selectedModalProduct.keySpecs.map((spec, i) => (
                      <div key={i} className="modal-spec-row">
                        <span className="m-spec-label">{spec.label}</span>
                        <span className="m-spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="modal-specs-title" style={{ marginTop: '1rem' }}>RECOMMENDED APPLICATIONS</h4>
                  <div className="modal-apps-pills">
                    {selectedModalProduct.applications.map((app, i) => (
                      <span key={i} className="modal-app-pill">
                        <Check size={12} className="text-cyan" /> {app}
                      </span>
                    ))}
                  </div>

                  <button
                    className="btn-primary modal-quote-btn"
                    onClick={() => {
                      setSelectedModalProduct(null);
                      handleOpenQuote(selectedModalProduct.name);
                    }}
                  >
                    <span>Request BOQ Quote for this Item</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
