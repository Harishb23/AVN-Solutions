import React from 'react';
import { Hero } from '../sections/Hero/Hero';
import { StatsSection } from '../sections/StatsSection/StatsSection';
import { SolutionsExplorer } from '../sections/SolutionsExplorer/SolutionsExplorer';
import { FeaturedSolution } from '../sections/FeaturedSolution/FeaturedSolution';
import { VisualExperience } from '../sections/VisualExperience/VisualExperience';
import { SmartSpaceSim } from '../sections/SmartSpaceSim/SmartSpaceSim';
import { Industries } from '../sections/Industries/Industries';
import { Partners } from '../sections/Partners/Partners';
import { ProjectsGallery } from '../sections/ProjectsGallery/ProjectsGallery';
import { FeaturedCaseStudy } from '../sections/FeaturedCaseStudy/FeaturedCaseStudy';
import { WhyChooseUs } from '../sections/WhyChooseUs/WhyChooseUs';
import { TechEngineeringFlow } from '../sections/TechEngineeringFlow/TechEngineeringFlow';
import { TestimonialsSection } from '../sections/TestimonialsSection/TestimonialsSection';
import { FaqSection } from '../sections/FaqSection/FaqSection';
import { FinalCTA } from '../sections/FinalCTA/FinalCTA';
import type { ProjectItem, InsightArticle } from '../types';

interface HomePageProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onOpenProjectModal: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectArticle: (article: InsightArticle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProjectModal,
  onSelectProject
}) => {
  const scrollToSolutions = () => {
    const el = document.getElementById('solutions-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else onNavigate('solutions');
  };

  return (
    <main className="homepage-main">
      {/* 1. Interactive Visual Hero */}
      <Hero
        onExplore={scrollToSolutions}
        onStartProject={onOpenProjectModal}
      />

      {/* 2. Visual Metric Cards with Accent Indicators */}
      <StatsSection />

      {/* 3. Solutions Bento & Numbered Interactive Showcase */}
      <SolutionsExplorer
        onSelectSolutionDetail={(id) => onNavigate('solutions', id)}
        onStartProject={onOpenProjectModal}
      />

      {/* 4. Flagship Visual Architecture with Interactive Hotspots */}
      <FeaturedSolution
        onExploreSolution={(id) => onNavigate('solutions', id)}
        onStartProject={onOpenProjectModal}
      />

      {/* 5. Interactive Display Immersion Engine (55" to 280"+) */}
      <VisualExperience
        onStartProject={onOpenProjectModal}
      />

      {/* 6. Intelligent Automation Subsystem Sequencer */}
      <SmartSpaceSim
        onStartProject={onOpenProjectModal}
      />

      {/* 7. Visual Sector Gallery */}
      <Industries
        onStartProject={onOpenProjectModal}
        onNavigateIndustries={() => onNavigate('industries')}
      />

      {/* 8. Projects Showcase */}
      <ProjectsGallery
        onSelectProject={onSelectProject}
        onViewAllProjects={() => onNavigate('projects')}
      />

      {/* 9. Before/After Visual Transformation Case Study */}
      <FeaturedCaseStudy
        onStartProject={onOpenProjectModal}
      />

      {/* 10. Methodology & Process: Step-by-Step Engineering Roadmap */}
      <WhyChooseUs
        onStartProject={onOpenProjectModal}
      />

      {/* 11. Engineering Capability & Technology Matrix */}
      <TechEngineeringFlow />

      {/* 12. Technology Partners Brand Ecosystem */}
      <Partners
        onNavigateBrands={() => onNavigate('brands')}
      />

      {/* 13. Verified Client Proof & Testimonials */}
      <TestimonialsSection />

      {/* 14. Structured AV FAQ Accordion */}
      <FaqSection
        onStartProject={onOpenProjectModal}
      />

      {/* 15. Final Enterprise CTA: Integration Lab & BOQ Configurator */}
      <FinalCTA
        onStartProject={onOpenProjectModal}
        onContact={() => onNavigate('contact')}
      />
    </main>
  );
};
