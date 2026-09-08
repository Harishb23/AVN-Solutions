import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import type { ProjectItem } from '../types';
import { MapPin, Cpu, ArrowUpRight, Filter, Sparkles } from 'lucide-react';
import './Pages.css';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onStartProject: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject, onStartProject }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Corporate', 'Education', 'Hospitality', 'Experience Centers', 'Government & NOCs'];

  const filtered = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.industry.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="page-view-container">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="container-wide">
          <div className="page-badge">
            <span className="badge-pulse-dot" />
            <Cpu size={14} className="text-cyan" />
            <span>CASE STUDIES & PORTFOLIO</span>
          </div>
          <h1 className="page-hero-title">
            Spaces Transformed By <span className="industries-title-cyan">AVN Engineering.</span>
          </h1>
          <p className="page-hero-subtitle">
            Explore verified audio, video wall, collaboration, and automation deployments engineered for India's leading organizations.
          </p>
        </div>
      </section>

      {/* Filter & Projects Grid */}
      <section className="section-spacing">
        <div className="container-wide">
          {/* Filter Bar */}
          <div className="projects-filter-bar">
            <div className="filter-label-group">
              <Filter size={16} className="text-cyan" />
              <span>FILTER BY SECTOR:</span>
            </div>
            <div className="filter-buttons">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                  data-cursor="explore"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="projects-portfolio-grid">
            {filtered.map(project => (
              <div
                key={project.id}
                className="portfolio-project-card glass-panel"
                onClick={() => onSelectProject(project)}
                data-cursor="view"
                data-cursor-text="INSPECT"
              >
                <div className="project-card-image-wrap">
                  <img src={project.image} alt={project.title} className="proj-image" />
                  <div className="proj-overlay" />
                  <div className="proj-top-badges">
                    <span className="proj-num">0{project.number}</span>
                    <span className="proj-ind">{project.industry}</span>
                  </div>
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="proj-metric-badge">
                      <Sparkles size={11} className="text-cyan" />
                      <span>{project.metrics[0].label}: {project.metrics[0].value}</span>
                    </div>
                  )}
                </div>

                <div className="proj-body">
                  <div className="proj-loc-row">
                    <MapPin size={13} className="text-cyan" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-summary">{project.summary}</p>

                  <div className="proj-tech-list">
                    {project.technologiesUsed.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="tech-badge-sm">
                        <Cpu size={10} />
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="proj-footer">
                    <span className="inspect-link">
                      <span>INSPECT SPECIFICATIONS</span>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <button className="btn-primary" onClick={onStartProject}>
              <span>START A SIMILAR CUSTOM PROJECT</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
