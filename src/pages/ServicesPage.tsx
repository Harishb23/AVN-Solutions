import React, { useState, useMemo } from 'react';
import { servicesData, processStepsData, slaTiersData } from '../data/services';
import type { ServiceItem } from '../types';
import { 
  Compass, 
  Cpu, 
  Layers, 
  PackageCheck, 
  Wrench, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  Headphones, 
  Volume2, 
  Sparkles, 
  FolderKanban,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Search,
  X,
  Clock,
  Award,
  Zap,
  Check,
  Activity,
  Radio,
  FileCheck
} from 'lucide-react';
import { soundFx } from '../utils/sound';
import './ServicesPage.css';

interface ServicesPageProps {
  onStartProject: () => void;
  onNavigate?: (page: string, targetId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onStartProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, any> = {
    Compass,
    Cpu,
    Layers,
    PackageCheck,
    Wrench,
    Code2,
    CheckCircle2,
    ShieldCheck,
    Headphones,
    Volume2,
    Sparkles,
    FolderKanban
  };

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'design', label: 'Design & Engineering' },
    { id: 'supply', label: 'Supply & Logistics' },
    { id: 'commissioning', label: 'Control & Tuning' },
    { id: 'maintenance', label: 'AMC & 24/7 SLA' }
  ];

  // Filtered services
  const filteredServices = useMemo(() => {
    return servicesData.filter((svc) => {
      const matchesCat = selectedCategory === 'all' || svc.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;
      const matchesSearch = 
        svc.title.toLowerCase().includes(q) ||
        svc.description.toLowerCase().includes(q) ||
        svc.deliverables.some(d => d.toLowerCase().includes(q)) ||
        (svc.toolsUsed && svc.toolsUsed.some(t => t.toLowerCase().includes(q)));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSelectCategory = (catId: string) => {
    soundFx.playPulse();
    setSelectedCategory(catId);
  };

  const handleStepChange = (newIdx: number) => {
    if (newIdx < 0 || newIdx >= processStepsData.length) return;
    soundFx.playClick(850 + newIdx * 30);
    setActiveStep(newIdx);
  };

  const openServiceModal = (svc: ServiceItem) => {
    soundFx.playModalOpen();
    setSelectedServiceModal(svc);
  };

  const closeServiceModal = () => {
    soundFx.playClick(600);
    setSelectedServiceModal(null);
  };

  return (
    <div className="services-page-container">
      {/* 1. HIGH-IMPACT HERO BANNER */}
      <section className="services-hero-banner">
        <div className="container-wide services-hero-inner">
          <div className="services-badge-pill">
            <Radio size={14} className="animate-pulse text-cyan" />
            <span>FULL-LIFECYCLE AV SERVICES • CHENNAI INTEGRATION LAB</span>
          </div>

          <h1 className="services-hero-title">
            End-to-End AV Engineering.{' '}
            <span className="services-title-gradient">Design, Supply & 24/7 SLA.</span>
          </h1>

          <p className="services-hero-subtitle">
            From acoustic RT60 decay simulations and AutoCAD single-line schematics to authorized OEM hardware distribution, CTS-certified physical deployment, Crestron/Q-SYS programming, and guaranteed 2-hour Chennai on-site SLA response.
          </p>

          {/* Quick Stats Grid */}
          <div className="services-stats-strip">
            <div className="service-stat-card">
              <div className="stat-icon-wrap">
                <Layers size={22} />
              </div>
              <div className="stat-info">
                <span className="stat-val">12 Disciplines</span>
                <span className="stat-lbl">Full Lifecycle Delivery</span>
              </div>
            </div>

            <div className="service-stat-card">
              <div className="stat-icon-wrap">
                <PackageCheck size={22} />
              </div>
              <div className="stat-info">
                <span className="stat-val">100% Genuine</span>
                <span className="stat-lbl">Direct OEM Distribution</span>
              </div>
            </div>

            <div className="service-stat-card">
              <div className="stat-icon-wrap">
                <Zap size={22} />
              </div>
              <div className="stat-info">
                <span className="stat-val">2-Hour SLA</span>
                <span className="stat-lbl">Chennai Emergency Response</span>
              </div>
            </div>

            <div className="service-stat-card">
              <div className="stat-icon-wrap">
                <Award size={22} />
              </div>
              <div className="stat-info">
                <span className="stat-val">CTS-D & CTS-I</span>
                <span className="stat-lbl">AVIXA Certified Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES FILTER & 12 DISCIPLINES SHOWCASE */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="services-section-head">
            <span className="services-badge-mini">
              <Sparkles size={14} />
              <span>SYSTEMATIC CAPABILITY CATALOG</span>
            </span>
            <h2 className="services-grand-title">Our 12 Core AV Engineering Disciplines</h2>
            <p className="services-sub-desc">
              Every system we engineer is backed by rigorous physics calculations, standardized structured cabling, and direct manufacturer warranties.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="services-control-bar">
            <div className="category-tabs-wrap">
              {categories.map((cat) => {
                const count = cat.id === 'all' 
                  ? servicesData.length 
                  : servicesData.filter(s => s.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    className={`category-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => handleSelectCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className="tab-count">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Field */}
            <div className="services-search-box">
              <Search size={16} className="search-icon-left" />
              <input
                type="text"
                placeholder="Search deliverables, tools, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
              {searchQuery && (
                <button 
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  title="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* 12 Disciplines Grid */}
          {filteredServices.length > 0 ? (
            <div className="services-grid-12">
              {filteredServices.map((svc) => {
                const Icon = iconMap[svc.iconName] || Layers;
                return (
                  <div key={svc.id} className="service-card" data-cursor="explore">
                    <div className="service-card-top">
                      <div className="service-icon-box">
                        <Icon size={22} />
                      </div>
                      <span className="service-number-badge">{svc.number}</span>
                    </div>

                    <span className="service-category-tag">{svc.categoryLabel}</span>
                    <h3 className="service-title">{svc.title}</h3>
                    <p className="service-desc">{svc.description}</p>

                    {/* Deliverables Checklist */}
                    <div className="service-deliverables">
                      <span className="deliverables-header">Key Engineering Deliverables:</span>
                      {svc.deliverables.map((item, i) => (
                        <div key={i} className="deliverable-item">
                          <CheckCircle2 size={13} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Footer */}
                    <div className="service-card-footer">
                      <div className="service-timeline-wrap">
                        <Clock size={13} className="text-cyan" />
                        <span>{svc.timeline || '1 - 2 Weeks'}</span>
                      </div>

                      <button
                        className="service-action-btn"
                        onClick={() => openServiceModal(svc)}
                      >
                        <span>Scope Details</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', margin: '2rem 0' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                No disciplines matching "{searchQuery}" in this category.
              </p>
              <button 
                className="btn-outline"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* 3. INTERACTIVE 9-STAGE TURNKEY METHODOLOGY */}
          <div className="methodology-section-box" id="process">
            <div className="process-header-box">
              <div className="process-badge">
                <Activity size={14} className="text-cyan" />
                <span>9-STAGE TURNKEY DELIVERY METHODOLOGY</span>
              </div>
              <h3 className="process-grand-title">How We Deliver Precision AV Projects</h3>
              <p className="process-sub">
                A structured, engineering-first delivery model ensuring zero guesswork, strict architectural coordination, and zero project delays.
              </p>
            </div>

            {/* Horizontal Step Selector */}
            <div className="process-steps-strip">
              {processStepsData.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    className={`process-step-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => handleStepChange(idx)}
                    title={step.title}
                  >
                    <span className="step-num">{step.number}</span>
                    <span className="step-phase">{step.phase}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Card */}
            <div className="active-step-card">
              <div className="active-step-left">
                <div>
                  <div className="active-step-badge-row">
                    <span className="active-step-tag">STAGE {processStepsData[activeStep].number} OF 09</span>
                    <span className="active-step-duration">
                      <Clock size={12} className="text-cyan" />
                      <span>{processStepsData[activeStep].duration || '1 - 2 Weeks'}</span>
                    </span>
                  </div>

                  <h4 className="active-step-title">{processStepsData[activeStep].title}</h4>
                  <p className="active-step-desc">{processStepsData[activeStep].description}</p>
                </div>

                <div className="active-step-lead">
                  <span>Lead Role:</span> {processStepsData[activeStep].leadRole || 'AV Systems Engineer'}
                </div>
              </div>

              <div className="active-step-right">
                <span className="outputs-heading">
                  <FileCheck size={15} />
                  <span>VERIFIED STAGE DELIVERABLES</span>
                </span>

                <div className="outputs-grid">
                  {processStepsData[activeStep].outputs.map((out, i) => (
                    <div key={i} className="output-chip">
                      <CheckCircle2 size={16} />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>

                {/* Step Navigation Row */}
                <div className="process-nav-row">
                  <button
                    className="process-step-nav-btn"
                    onClick={() => handleStepChange(activeStep - 1)}
                    disabled={activeStep === 0}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>

                  <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
                    {activeStep + 1} / {processStepsData.length}
                  </span>

                  <button
                    className="process-step-nav-btn"
                    onClick={() => handleStepChange(activeStep + 1)}
                    disabled={activeStep === processStepsData.length - 1}
                  >
                    <span>Next Stage</span>
                    <ChevronRight size={16} />
                  </button>
                </div>

                <button
                  className="btn-primary process-cta-btn"
                  onClick={() => {
                    soundFx.playPowerChime();
                    onStartProject();
                  }}
                >
                  <span>Initiate Stage 01 Scope Assessment</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* 4. CHENNAI AMC & 24/7 SLA CONTRACTS */}
          <div className="sla-section-wrap" id="sla">
            <div className="services-section-head">
              <span className="services-badge-mini">
                <ShieldCheck size={14} />
                <span>LOCAL CHENNAI SUPPORT CONTRACTS</span>
              </span>
              <h2 className="services-grand-title">Annual Maintenance & Priority SLA Contracts</h2>
              <p className="services-sub-desc">
                Guaranteed uptime for mission-critical boardrooms and enterprise campuses with certified local engineers and standby hardware inventory in Sholinganallur.
              </p>
            </div>

            <div className="sla-grid-3">
              {slaTiersData.map((tier) => (
                <div key={tier.id} className={`sla-tier-card ${tier.popular ? 'is-popular' : ''}`}>
                  {tier.popular && <div className="popular-badge">MOST POPULAR</div>}
                  
                  <span className="sla-tag-pill">{tier.tierTag}</span>
                  <h3 className="sla-name">{tier.name}</h3>

                  <div className="sla-response-badge">
                    <Zap size={14} />
                    <span>{tier.responseTime}</span>
                  </div>

                  <p className="sla-summary">{tier.summary}</p>

                  <div className="sla-features-list">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="sla-feature-item">
                        <Check size={15} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="sla-best-for-box">
                    <strong>Best Suited For:</strong>
                    <span>{tier.bestFor}</span>
                  </div>

                  <button
                    className={`btn-${tier.popular ? 'primary' : 'outline'} sla-cta-btn`}
                    onClick={() => {
                      soundFx.playPowerChime();
                      onStartProject();
                    }}
                  >
                    <span>Request {tier.name} Proposal</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 5. ENGINEERING STANDARDS & CERTIFICATIONS BANNER */}
          <div className="standards-banner">
            <div className="standards-left">
              <span className="services-badge-mini">
                <Award size={14} />
                <span>ENGINEERING RIGOR</span>
              </span>
              <h3>Certified AVIXA & OEM Engineering Standards</h3>
              <p>
                Every deployment adheres to strict AVIXA international audio-visual standards, calibrated acoustic modeling, and direct factory-backed warranty certifications.
              </p>
            </div>

            <div className="standards-grid">
              <div className="standard-card">
                <Award size={24} className="text-cyan" />
                <div>
                  <h4>AVIXA CTS-D & CTS-I</h4>
                  <p>Certified in system design topology, laser plane alignment, and low-voltage standards.</p>
                </div>
              </div>

              <div className="standard-card">
                <Volume2 size={24} className="text-cyan" />
                <div>
                  <h4>Smaart V8 Acoustic Tuning</h4>
                  <p>Real-time transfer function analysis ensuring Speech Transmission Index (STI &gt; 0.65).</p>
                </div>
              </div>

              <div className="standard-card">
                <Code2 size={24} className="text-cyan" />
                <div>
                  <h4>Crestron & Q-SYS Certified</h4>
                  <p>Master programmers developing secure, responsive HTML5 vector user interfaces.</p>
                </div>
              </div>

              <div className="standard-card">
                <ShieldCheck size={24} className="text-cyan" />
                <div>
                  <h4>100% Genuine OEM Warranty</h4>
                  <p>Direct manufacturer warranty coverage with official RMA channel support in Chennai.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE DETAIL MODAL */}
      {selectedServiceModal && (
        <div className="service-detail-modal-overlay" onClick={closeServiceModal}>
          <div 
            className="service-detail-modal-card" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="service-modal-close-btn" onClick={closeServiceModal}>
              <X size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <span className="service-category-tag">{selectedServiceModal.categoryLabel}</span>
              <span className="service-number-badge">DISCIPLINE {selectedServiceModal.number}</span>
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
              {selectedServiceModal.title}
            </h3>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              {selectedServiceModal.description}
            </p>

            {/* Scope Deliverables */}
            <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--cyan-bright)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                Included Engineering Deliverables
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedServiceModal.deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} className="text-cyan" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Environments */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              {selectedServiceModal.toolsUsed && (
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Engineering Tools
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {selectedServiceModal.toolsUsed.map((t, idx) => (
                      <span key={idx} style={{ fontSize: '0.78rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-xs)', color: 'var(--text-primary)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedServiceModal.suitableFor && (
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                  <span style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Primary Applications
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {selectedServiceModal.suitableFor.map((app, idx) => (
                      <span key={idx} style={{ fontSize: '0.78rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-xs)', color: 'var(--text-primary)' }}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  closeServiceModal();
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Request Scope BOQ Quote</span>
                <ArrowRight size={15} />
              </button>

              <button
                className="btn-outline"
                onClick={closeServiceModal}
              >
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
