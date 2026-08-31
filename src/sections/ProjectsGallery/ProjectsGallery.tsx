import React, { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../types';
import { soundFx } from '../../utils/sound';
import './ProjectsGallery.css';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onSelectProject,
  onViewAllProjects
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Corporate',
    'Auditorium',
    'Healthcare',
    'Hospitality',
    'Residential',
    'Retail'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.industry === activeCategory);

  const handleFilter = (cat: string) => {
    soundFx.playClick(900);
    setActiveCategory(cat);
  };

  return (
    <section className="projects-gallery-section" id="projects">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">VERIFIED CASE STUDIES</span>
          </div>
          <h2 className="section-grand-title">
            Spaces We've Helped <span className="title-highlight">Perform Better.</span>
          </h2>
          <p className="section-lead-desc">
            Explore turnkey boardrooms, auditoriums, video walls, and luxury private theatres delivered across Chennai, Tamil Nadu, and South India.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter-row">
          <div className="filter-icon-label">
            <SlidersHorizontal size={14} className="text-cyan" />
            <span>Filter by Sector:</span>
          </div>
          <div className="filter-buttons-list">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`proj-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-container">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-display-card"
              onClick={() => {
                soundFx.playClick(850);
                onSelectProject(project);
              }}
              data-cursor="view"
              data-cursor-text="CASE STUDY"
            >
              {/* Media Wrap */}
              <div className="project-card-image-wrap">
                <img src={project.image} alt={project.title} className="project-card-img" loading="lazy" />
                <div className="project-card-overlay" />

                <div className="project-card-top-tags">
                  <span className="project-num-tag">0{project.number}</span>
                  <span className="project-ind-tag">{project.industry}</span>
                </div>

                <div className="project-card-quick-meta">
                  <div className="project-loc-tag">
                    <MapPin size={12} className="text-cyan" />
                    <span>{project.location}</span>
                  </div>
                  <span className="project-client-name">{project.clientType}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-summary-text">{project.summary}</p>

                {/* Solutions Delivered */}
                <div className="project-solutions-delivered">
                  <span className="sol-label">SOLUTIONS DELIVERED:</span>
                  <div className="sol-chips-row">
                    {project.technologiesUsed.slice(0, 3).map((tech, i) => (
                      <span key={i} className="sol-tech-chip">
                        <CheckCircle2 size={11} className="text-cyan" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="project-card-footer">
                  <span className="view-case-study-text">
                    <span>View Case Study</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="projects-bottom-action">
          <button className="btn-secondary view-all-projects-btn" onClick={onViewAllProjects}>
            <span>View All Enterprise Case Studies</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
