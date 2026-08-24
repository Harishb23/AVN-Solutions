import { useState, useEffect } from 'react';
import { Header, type ThemeMode } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { ContactModal } from './components/ContactModal/ContactModal';
import { ProjectModal } from './components/ProjectModal/ProjectModal';
import { ArticleModal } from './components/ArticleModal/ArticleModal';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

import type { ProjectItem, InsightArticle } from './types';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './App.css';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [initialSolutionId, setInitialSolutionId] = useState<string | undefined>(undefined);
  const [themeMode, setThemeMode] = useState<ThemeMode>('hybrid');

  // Modals state
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string, sectionId?: string) => {
    if (page === 'solutions' && sectionId) {
      setInitialSolutionId(sectionId);
    }
    setCurrentPage(page);

    if (sectionId && page === 'home') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className={`app-root theme-${themeMode}-active`}>
      {/* Intelligent Magnetic Glowing Cursor */}
      <CustomCursor />

      {/* Header Navigation with Theme Toggle */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenProjectModal={() => setIsContactModalOpen(true)}
        themeMode={themeMode}
        onToggleTheme={(mode) => setThemeMode(mode)}
      />

      {/* Page Routing */}
      {currentPage === 'home' && (
        <HomePage
          onNavigate={handleNavigate}
          onOpenProjectModal={() => setIsContactModalOpen(true)}
          onSelectProject={(p) => setSelectedProject(p)}
          onSelectArticle={(a) => setSelectedArticle(a)}
        />
      )}

      {currentPage === 'solutions' && (
        <SolutionsPage
          onStartProject={() => setIsContactModalOpen(true)}
          initialSolutionId={initialSolutionId}
        />
      )}

      {currentPage === 'industries' && (
        <IndustriesPage onStartProject={() => setIsContactModalOpen(true)} />
      )}

      {currentPage === 'projects' && (
        <ProjectsPage
          onSelectProject={(p) => setSelectedProject(p)}
          onStartProject={() => setIsContactModalOpen(true)}
        />
      )}

      {currentPage === 'about' && (
        <AboutPage
          onStartProject={() => setIsContactModalOpen(true)}
          onContact={() => handleNavigate('contact')}
        />
      )}

      {currentPage === 'insights' && (
        <InsightsPage onSelectArticle={(a) => setSelectedArticle(a)} />
      )}

      {currentPage === 'contact' && <ContactPage />}

      {/* Enterprise Footer with Verified Chennai Details */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProjectModal={() => setIsContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => setIsContactModalOpen(true)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onStartProject={() => setIsContactModalOpen(true)}
      />
    </div>
  );
}

export default App;
