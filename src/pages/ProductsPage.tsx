import React, { useState } from 'react';
import { productsData } from '../data/products';
import type { ProductCategory, ProductItem } from '../types';
import { 
  PackageCheck, 
  Search, 
  Monitor, 
  Volume2, 
  Video, 
  Cpu, 
  Network, 
  Home, 
  ArrowRight, 
  Check, 
  Eye, 
  SlidersHorizontal,
  ShieldCheck
} from 'lucide-react';
import { soundFx } from '../../src/utils/sound';
import './ProductsPage.css';

interface ProductsPageProps {
  onStartProject: (productName?: string) => void;
  onSelectProduct?: (product: ProductItem) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onStartProject, onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const categories: { id: ProductCategory | 'all'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Equipment', icon: PackageCheck },
    { id: 'display', label: 'Displays & Projection', icon: Monitor },
    { id: 'audio', label: 'Professional Audio', icon: Volume2 },
    { id: 'conferencing', label: 'Video Conferencing', icon: Video },
    { id: 'control', label: 'Control & Automation', icon: Cpu },
    { id: 'networking', label: 'AV Networking', icon: Network },
    { id: 'home-av', label: 'Home Cinema', icon: Home }
  ];

  const brands = ['all', 'Samsung', 'LG', 'Shure', 'Sennheiser', 'Bose Professional', 'Q-SYS', 'Logitech', 'Poly', 'Crestron', 'Barco', 'Netgear AV', 'Sony Residential', 'Trinnov'];

  const filteredProducts = productsData.filter(prod => {
    const matchesCat = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || prod.brand.toLowerCase().includes(selectedBrand.toLowerCase());
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesBrand && matchesSearch;
  });

  return (
    <div className="products-page-container">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="container-wide">
          <div className="page-badge">
            <PackageCheck size={14} className="text-cyan" />
            <span>AUTHORIZED AV EQUIPMENT SUPPLIER • CHENNAI & SOUTH INDIA</span>
          </div>
          <h1 className="page-hero-title">
            Professional AV Equipment.{' '}
            <span className="page-title-gradient">Direct From OEM Brands.</span>
          </h1>
          <p className="page-hero-subtitle">
            We supply 100% genuine commercial displays, microLED video walls, digital signal processors, ceiling microphones, and AV-over-IP networking hardware with full manufacturer warranties and local Chennai support.
          </p>
        </div>
      </section>

      {/* Main Catalog View */}
      <section className="catalog-section">
        <div className="container-wide">
          {/* Filters and Search Strip */}
          <div className="catalog-filter-controls">
            {/* Category Filter Pills */}
            <div className="cat-filter-row">
              {categories.map(cat => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    className={`catalog-cat-pill ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      soundFx.playClick(900);
                      setSelectedCategory(cat.id);
                    }}
                  >
                    <Icon size={14} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search & Brand Bar */}
            <div className="search-brand-bar">
              <div className="catalog-search-input-wrap">
                <Search size={16} className="text-muted" />
                <input
                  type="text"
                  placeholder="Search model name, specs, or equipment type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cat-search-field"
                />
              </div>

              <div className="brand-select-wrap">
                <SlidersHorizontal size={14} className="text-cyan" />
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="brand-dropdown-select"
                >
                  <option value="all">All Brands ({brands.length - 1}+)</option>
                  {brands.filter(b => b !== 'all').map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="catalog-results-header">
            <span className="results-count-text">
              Showing <strong>{filteredProducts.length}</strong> verified equipment models
            </span>
            <div className="oem-tag">
              <ShieldCheck size={14} className="text-cyan" />
              <span>Direct Manufacturer Warranty Included</span>
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="catalog-products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="catalog-product-card">
                <div className="cat-img-frame">
                  <img src={product.image} alt={product.name} className="cat-img" loading="lazy" />
                  <div className="cat-badges-row">
                    <span className="cat-sub-badge">{product.subCategory}</span>
                    <span className="cat-brand-badge">{product.brand}</span>
                  </div>
                </div>

                <div className="cat-card-body">
                  <h3 className="cat-prod-title">{product.name}</h3>
                  <p className="cat-prod-desc">{product.description}</p>

                  <div className="cat-specs-box">
                    {product.keySpecs.map((spec, idx) => (
                      <div key={idx} className="cat-spec-line">
                        <span className="cat-spec-lbl">{spec.label}:</span>
                        <span className="cat-spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="cat-card-actions">
                    <button
                      className="btn-secondary cat-view-btn"
                      onClick={() => {
                        soundFx.playClick(850);
                        setActiveModalProduct(product);
                        if (onSelectProduct) onSelectProduct(product);
                      }}
                    >
                      <Eye size={13} className="text-cyan" />
                      <span>Specifications</span>
                    </button>

                    <button
                      className="btn-primary cat-quote-btn"
                      onClick={() => {
                        soundFx.playPowerChime();
                        onStartProject(product.name);
                      }}
                    >
                      <span>Request Quote</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Banner */}
          <div className="bulk-boq-banner">
            <div className="bulk-text">
              <h3>Need a Comprehensive Turnkey Equipment BOQ?</h3>
              <p>Send your project blueprints or architectural drawings to our Chennai team for a competitive quote.</p>
            </div>
            <button
              className="btn-primary bulk-cta-btn"
              onClick={() => {
                soundFx.playPowerChime();
                onStartProject();
              }}
            >
              <span>Submit BOQ for Commercial Pricing</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Modal View */}
      {activeModalProduct && (
        <div className="prod-modal-backdrop" onClick={() => setActiveModalProduct(null)}>
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <div>
                <span className="product-brand-badge">{activeModalProduct.brand}</span>
                <h3 className="modal-prod-title">{activeModalProduct.name}</h3>
              </div>
              <button className="modal-close-x" onClick={() => setActiveModalProduct(null)}>✕</button>
            </div>

            <div className="prod-modal-body">
              <div className="modal-img-col">
                <img src={activeModalProduct.image} alt={activeModalProduct.name} className="modal-prod-img" />
              </div>
              <div className="modal-info-col">
                <p className="modal-desc">{activeModalProduct.description}</p>

                <h4 className="modal-specs-title">VERIFIED TECHNICAL SPECIFICATIONS</h4>
                <div className="modal-specs-list">
                  {activeModalProduct.keySpecs.map((spec, i) => (
                    <div key={i} className="modal-spec-row">
                      <span className="m-spec-label">{spec.label}</span>
                      <span className="m-spec-val">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <h4 className="modal-specs-title" style={{ marginTop: '1rem' }}>RECOMMENDED APPLICATIONS</h4>
                <div className="modal-apps-pills">
                  {activeModalProduct.applications.map((app, i) => (
                    <span key={i} className="modal-app-pill">
                      <Check size={12} className="text-cyan" /> {app}
                    </span>
                  ))}
                </div>

                <button
                  className="btn-primary modal-quote-btn"
                  onClick={() => {
                    setActiveModalProduct(null);
                    onStartProject(activeModalProduct.name);
                  }}
                >
                  <span>Request BOQ Quotation for this Model</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
