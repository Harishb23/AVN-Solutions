import React from 'react';
import { Hero } from '../sections/Hero/Hero';
import { StatsSection } from '../sections/StatsSection/StatsSection';
import { SolutionsExplorer } from '../sections/SolutionsExplorer/SolutionsExplorer';
import { SmartSpaceSim } from '../sections/SmartSpaceSim/SmartSpaceSim';
import { WhyChooseUs } from '../sections/WhyChooseUs/WhyChooseUs';
import { FeaturedCaseStudy } from '../sections/FeaturedCaseStudy/FeaturedCaseStudy';
import { FaqSection } from '../sections/FaqSection/FaqSection';
import { ArrowRight, PhoneCall, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/sound';
import type { ProjectItem, InsightArticle, ProductItem } from '../types';

interface HomePageProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onOpenProjectModal: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectArticle: (article: InsightArticle) => void;
  onSelectProduct?: (product: ProductItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProjectModal
}) => {
  const scrollToSolutions = () => {
    const el = document.getElementById('solutions-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else onNavigate('solutions');
  };

  return (
    <main className="homepage-main">
      {/* 1. Rich Animated Cinematic Hero */}
      <Hero
        onExplore={scrollToSolutions}
        onStartProject={onOpenProjectModal}
      />

      {/* 2. Trust / Quick Stats Strip */}
      <StatsSection />

      {/* 3. Core Solutions Explorer Teaser */}
      <SolutionsExplorer
        onSelectSolutionDetail={(id) => onNavigate('solutions', id)}
        onStartProject={onOpenProjectModal}
      />

      {/* 4. Interactive Smart Space Automation Simulator */}
      <SmartSpaceSim
        onStartProject={onOpenProjectModal}
      />

      {/* 5. Why Choose AVN Engineering */}
      <WhyChooseUs
        onStartProject={onOpenProjectModal}
      />

      {/* 6. Featured Boardroom Transformation Case Study */}
      <FeaturedCaseStudy
        onStartProject={onOpenProjectModal}
      />

      {/* 7. Structured AV FAQs Accordion */}
      <FaqSection
        onStartProject={onOpenProjectModal}
      />

      {/* 9. Sleek Consultation Routing Banner (Routes cleanly to Contact Page) */}
      <section className="home-consultation-banner section-spacing">
        <div className="container-wide">
          <div className="home-consultation-card glass-panel">
            <div className="home-consult-glow" />
            <div className="home-consult-content">
              <div className="home-consult-badge">
                <Sparkles size={13} className="text-cyan" />
                <span>READY TO TRANSFORM YOUR SPACE?</span>
              </div>
              <h2 className="home-consult-title">
                Let's Engineer Your Next <span className="title-highlight">Audio-Visual Experience.</span>
              </h2>
              <p className="home-consult-desc">
                From turnkey corporate boardrooms to large-scale auditoriums and private home cinemas in Chennai & across South India, our certified systems engineers are ready to design your ideal solution.
              </p>
              
              <div className="home-consult-highlights">
                <div className="consult-pill">
                  <CheckCircle2 size={14} className="text-cyan" />
                  <span>Free Initial Space Assessment</span>
                </div>
                <div className="consult-pill">
                  <CheckCircle2 size={14} className="text-cyan" />
                  <span>Detailed 3D CAD & BOQ Estimates</span>
                </div>
                <div className="consult-pill">
                  <MapPin size={14} className="text-cyan" />
                  <span>Live Experience Lab in Sholinganallur</span>
                </div>
              </div>

              <div className="home-consult-actions">
                <button 
                  className="btn-primary"
                  onClick={() => {
                    soundFx.playPowerChime();
                    onNavigate('contact');
                  }}
                >
                  <span>Go to Contact Page</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  className="btn-secondary"
                  onClick={() => {
                    soundFx.playClick();
                    onOpenProjectModal();
                  }}
                >
                  <Sparkles size={15} className="text-cyan" />
                  <span>Request Instant System Quote</span>
                </button>

                <a 
                  href="tel:04424501688" 
                  className="btn-secondary consult-call-btn"
                  onClick={() => soundFx.playClick(900)}
                >
                  <PhoneCall size={15} className="text-cyan" />
                  <span>044 2450 1688</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
