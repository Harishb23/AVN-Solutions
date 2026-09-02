import { useState, useEffect } from 'react';
import { Header, type ThemeMode } from './components/Header/Header';
import { CommandPalette } from './components/CommandPalette/CommandPalette';
import { Footer } from './components/Footer/Footer';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { FloatingActions } from './components/FloatingActions/FloatingActions';
import { ContactModal } from './components/ContactModal/ContactModal';
import { ProjectModal } from './components/ProjectModal/ProjectModal';
import { ArticleModal } from './components/ArticleModal/ArticleModal';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProductsPage } from './pages/ProductsPage';
import { BrandsPage } from './pages/BrandsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { ToolsPage } from './pages/ToolsPage';

import type { ProjectItem, InsightArticle } from './types';
import './styles/variables.css';
import './styles/global.css';
import './styles/animations.css';
import './App.css';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [initialSolutionId, setInitialSolutionId] = useState<string | undefined>(undefined);
  const [initialToolTab, setInitialToolTab] = useState<string | undefined>(undefined);
  
  // Theme state with local persistence (default dark)
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('avn_theme_mode');
    return (saved as ThemeMode) || 'dark';
  });

  // Modals state
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const [contactInitialData, setContactInitialData] = useState<{ subject?: string; message?: string; scope?: string } | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    localStorage.setItem('avn_theme_mode', mode);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string, targetId?: string) => {
    if (page === 'solutions' && targetId) {
      setInitialSolutionId(targetId);
    } else if (page === 'tools' && targetId) {
      setInitialToolTab(targetId);
    }
    setCurrentPage(page);

    if (targetId && page === 'home') {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleStartProjectWithData = (data?: { subject?: string; message?: string; scope?: string }) => {
    setContactInitialData(data || null);
    setIsContactModalOpen(true);
  };

  return (
    <div className={`app-root theme-${themeMode}-active`}>
      {/* Intelligent Magnetic Glowing Cursor */}
      <CustomCursor />

      {/* Header Navigation with Theme Toggle & Search */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenProjectModal={() => handleStartProjectWithData()}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        themeMode={themeMode}
        onToggleTheme={handleThemeChange}
      />

      {/* Global Command Palette / Spotlight (⌘K / Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onStartProject={() => handleStartProjectWithData()}
        onToggleTheme={() => {
          const next = themeMode === 'hybrid' ? 'dark' : themeMode === 'dark' ? 'light' : 'hybrid';
          handleThemeChange(next);
        }}
      />

      {/* Page Routing with Smooth Architectural Page Transition */}
      <div key={currentPage} className="page-transition-enter">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProjectModal={() => handleStartProjectWithData()}
            onSelectProject={(p) => setSelectedProject(p)}
            onSelectArticle={(a) => setSelectedArticle(a)}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            onStartProject={() => handleStartProjectWithData()}
            initialSolutionId={initialSolutionId}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage onStartProject={() => handleStartProjectWithData()} />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onStartProject={(prodName) => handleStartProjectWithData(prodName ? { subject: `Quote Request: ${prodName}`, message: `Inquiry for ${prodName}` } : undefined)}
          />
        )}

        {currentPage === 'brands' && (
          <BrandsPage
            onStartProject={() => handleStartProjectWithData()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onStartProject={() => handleStartProjectWithData()}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={(p) => setSelectedProject(p)}
            onStartProject={() => handleStartProjectWithData()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onStartProject={() => handleStartProjectWithData()}
            onContact={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsPage onSelectArticle={(a) => setSelectedArticle(a)} />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'tools' && (
          <ToolsPage
            onStartProject={handleStartProjectWithData}
            initialTab={initialToolTab}
          />
        )}
      </div>

      {/* Enterprise Footer with Verified Chennai Details */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProjectModal={() => handleStartProjectWithData()}
      />

      {/* Floating Actions: WhatsApp, Quick Quote, Back to Top */}
      <FloatingActions
        onOpenQuoteModal={() => handleStartProjectWithData()}
      />

      {/* Interactive Modals */}
      <ContactModal
        key={isContactModalOpen ? (contactInitialData ? contactInitialData.scope || 'custom' : 'fresh') : 'closed'}
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setContactInitialData(null);
        }}
        initialData={contactInitialData}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => handleStartProjectWithData()}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onStartProject={() => handleStartProjectWithData()}
      />
    </div>
  );
}

export default App;
