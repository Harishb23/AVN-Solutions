import React from 'react';
import { Home, ArrowRight, Phone, Wrench, Layers } from 'lucide-react';
import './Pages.css';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="page-view-container" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <section className="page-hero-banner" style={{ width: '100%', padding: '6rem 0' }}>
        <div className="container-wide" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="page-badge" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
            <span style={{ color: '#FF5A1F', fontWeight: 700 }}>404 ERROR</span>
            <span style={{ margin: '0 0.5rem', opacity: 0.4 }}>•</span>
            <span>PAGE NOT FOUND</span>
          </div>

          <h1 className="page-hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.2rem' }}>
            Looking for <span className="industries-title-cyan">AV Solutions?</span>
          </h1>

          <p className="page-hero-subtitle" style={{ maxWidth: '620px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.75)' }}>
            The requested page does not exist or has been moved. Explore our core audio-visual integration disciplines, hardware products, or contact our Chennai engineering team.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1.75rem', borderRadius: '100px', textDecoration: 'none' }}
            >
              <Home size={18} />
              <span>Return Home</span>
            </a>

            <a
              href="/solutions"
              onClick={(e) => { e.preventDefault(); onNavigate('solutions'); }}
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1.75rem', borderRadius: '100px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}
            >
              <Layers size={18} />
              <span>AV Solutions</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="/services"
              onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1.75rem', borderRadius: '100px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}
            >
              <Wrench size={18} />
              <span>Services</span>
            </a>

            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1.75rem', borderRadius: '100px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}
            >
              <Phone size={18} />
              <span>Contact Showroom</span>
            </a>
          </div>

          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              Need immediate project support in Chennai? Call our technical desk at{' '}
              <a href="tel:+914424501688" style={{ color: '#00d2ff', textDecoration: 'none', fontWeight: 600 }}>+91 44 2450 1688</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
