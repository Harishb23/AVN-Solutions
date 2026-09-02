import React from 'react';
import { Hero } from '../sections/Hero/Hero';
import { StatsSection } from '../sections/StatsSection/StatsSection';
import { SolutionsExplorer } from '../sections/SolutionsExplorer/SolutionsExplorer';
import { FeaturedSolution } from '../sections/FeaturedSolution/FeaturedSolution';
import { SmartSpaceSim } from '../sections/SmartSpaceSim/SmartSpaceSim';
import { Industries } from '../sections/Industries/Industries';
import { Partners } from '../sections/Partners/Partners';
import { ProjectsGallery } from '../sections/ProjectsGallery/ProjectsGallery';
import { WhyChooseUs } from '../sections/WhyChooseUs/WhyChooseUs';
import { TechEngineeringFlow } from '../sections/TechEngineeringFlow/TechEngineeringFlow';
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
      {/* 1. Left-Aligned Two-Column Editorial Hero */}
      <Hero
        onExplore={scrollToSolutions}
        onStartProject={onOpenProjectModal}
      />

      {/* 2. Editorial Metrics Strip with Vertical Dividers */}
      <StatsSection />

      {/* 3. Solutions Section: Numbered Editorial List (01 to 10) */}
      <SolutionsExplorer
        onSelectSolutionDetail={(id) => onNavigate('solutions', id)}
        onStartProject={onOpenProjectModal}
      />

      {/* 4. Large Asymmetric Featured Solution: Corporate AV */}
      <FeaturedSolution
        onExploreSolution={(id) => onNavigate('solutions', id)}
        onStartProject={onOpenProjectModal}
      />

      {/* 5. Intelligent Automation Experience: "One command. Everything ready." */}
      <SmartSpaceSim
        onStartProject={onOpenProjectModal}
      />

      {/* 6. Industries Section: "Solutions for every environment." */}
      <Industries
        onStartProject={onOpenProjectModal}
        onNavigateIndustries={() => onNavigate('industries')}
      />

      {/* 7. Technology Partners: "Built with trusted technology." */}
      <Partners
        onNavigateBrands={() => onNavigate('brands')}
      />

      {/* 8. Projects Showcase: "Work we've delivered." */}
      <ProjectsGallery
        onSelectProject={onSelectProject}
        onViewAllProjects={() => onNavigate('projects')}
      />

      {/* 9. Methodology & Process: "From concept to installation." */}
      <WhyChooseUs
        onStartProject={onOpenProjectModal}
      />

      {/* 10. Engineering Capabilities: "Engineering behind every experience." */}
      <TechEngineeringFlow />

      {/* 11. Structured AV FAQ Accordion */}
      <FaqSection
        onStartProject={onOpenProjectModal}
      />

      {/* 12. Final Enterprise CTA: Large Dark Charcoal Section */}
      <FinalCTA
        onStartProject={onOpenProjectModal}
        onContact={() => onNavigate('contact')}
      />
    </main>
  );
};
