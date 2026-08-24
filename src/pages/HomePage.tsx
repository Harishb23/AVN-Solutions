import React from 'react';
import { Hero } from '../sections/Hero/Hero';
import { EngineeringOverview } from '../sections/EngineeringOverview/EngineeringOverview';
import { AudioExperience } from '../sections/AudioExperience/AudioExperience';
import { VisualExperience } from '../sections/VisualExperience/VisualExperience';
import { Collaboration } from '../sections/Collaboration/Collaboration';
import { AutomationSim } from '../sections/AutomationSim/AutomationSim';
import { Industries } from '../sections/Industries/Industries';
import { Process } from '../sections/Process/Process';
import { ProjectsGallery } from '../sections/ProjectsGallery/ProjectsGallery';
import { StatsSection } from '../sections/StatsSection/StatsSection';
import { Partners } from '../sections/Partners/Partners';
import { AboutSection } from '../sections/AboutSection/AboutSection';
import { InsightsSection } from '../sections/InsightsSection/InsightsSection';
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
  onSelectProject,
  onSelectArticle
}) => {
  const scrollToEngineering = () => {
    const el = document.getElementById('engineering');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else onNavigate('solutions');
  };

  return (
    <main className="homepage-main">
      <Hero onExplore={scrollToEngineering} onStartProject={onOpenProjectModal} />
      <EngineeringOverview
        onSelectSolution={(solId) => onNavigate('solutions', solId)}
        onStartProject={onOpenProjectModal}
      />
      <AudioExperience onStartProject={onOpenProjectModal} />
      <VisualExperience onStartProject={onOpenProjectModal} />
      <Collaboration onStartProject={onOpenProjectModal} />
      <AutomationSim onStartProject={onOpenProjectModal} />
      <Industries onStartProject={onOpenProjectModal} />
      <Process onStartProject={onOpenProjectModal} />
      <ProjectsGallery
        onSelectProject={onSelectProject}
        onViewAllProjects={() => onNavigate('projects')}
      />
      <StatsSection />
      <Partners />
      <AboutSection
        onStartProject={onOpenProjectModal}
        onContact={() => onNavigate('contact')}
      />
      <InsightsSection
        onSelectArticle={onSelectArticle}
        onViewAllInsights={() => onNavigate('insights')}
      />
      <FinalCTA
        onStartProject={onOpenProjectModal}
        onContact={() => onNavigate('contact')}
      />
    </main>
  );
};
