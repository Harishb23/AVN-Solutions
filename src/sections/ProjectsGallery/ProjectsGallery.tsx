import React, { useState } from 'react';
import { MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../types';
import { soundFx } from '../../utils/sound';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProjectsGallery.css';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onSelectProject,
  onViewAllProjects
}) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Corporate', 'Auditorium', 'Healthcare', 'Hospitality', 'Residential'];

  const filtered = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.industry === activeFilter);

  // Large primary featured project
  const featuredProject = filtered[0] || projectsData[0];
  const secondaryProjects = filtered.slice(1, 5);

  const handleSelect = (proj: ProjectItem) => {
    soundFx.playClick(850);
    onSelectProject(proj);
  };

  return (
    <section 
      ref={ref}
      className={`editorial-projects-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="projects"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="projects-header-row">
          <div className="section-head-left" style={{ marginBottom: 0 }}>
            <div className="section-eyebrow">
              <span className="eyebrow-accent-line" />
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h2 className="section-grand-title">
              Work we've <span className="title-highlight">delivered.</span>
            </h2>
            <p className="section-lead-desc">
              Explore turnkey boardrooms, auditoriums, video walls, and luxury private theatres delivered across Chennai & South India.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="projects-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`proj-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(900);
                  setActiveFilter(cat);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid: 1 Large Featured + 4 Grid Items */}
        <div className="projects-editorial-grid">
          {/* Primary Featured Project Card */}
          <div
            className="featured-project-box image-hover-zoom hover-card-lift"
            onClick={() => handleSelect(featuredProject)}
            data-cursor="project"
            data-cursor-text="VIEW PROJECT →"
            role="button"
            tabIndex={0}
          >
            <div className="featured-proj-img-wrap">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="featured-proj-img"
                loading="lazy"
              />
              <div className="featured-proj-overlay" />
            </div>

            <div className="featured-proj-content">
              <div className="featured-proj-meta">
                <span className="proj-category-badge">{featuredProject.industry.toUpperCase()}</span>
                <div className="proj-location-badge">
                  <MapPin size={13} />
                  <span>{featuredProject.location}</span>
                </div>
              </div>

              <h3 className="featured-proj-title">{featuredProject.title}</h3>
              <p className="featured-proj-summary">{featuredProject.summary}</p>

              <div className="featured-proj-techs">
                {featuredProject.technologiesUsed.slice(0, 3).join(' • ')}
              </div>

              <div className="featured-proj-action arrow-hover-glide">
                <span className="proj-action-text">View Case Study</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Secondary Projects Grid (2x2) */}
          <div className="secondary-projects-grid">
            {secondaryProjects.map((proj) => (
              <div
                key={proj.id}
                className="secondary-project-card image-hover-zoom hover-card-lift"
                onClick={() => handleSelect(proj)}
                data-cursor="project"
                data-cursor-text="VIEW PROJECT →"
                role="button"
                tabIndex={0}
              >
                <div className="sec-img-wrap">
                  <img src={proj.image} alt={proj.title} className="sec-proj-img" loading="lazy" />
                  <div className="sec-tag-row">
                    <span className="sec-category-tag">{proj.industry}</span>
                  </div>
                </div>

                <div className="sec-proj-body">
                  <div className="sec-loc-line">
                    <MapPin size={12} className="text-emerald" />
                    <span>{proj.location}</span>
                  </div>

                  <h4 className="sec-proj-title">{proj.title}</h4>
                  
                  <div className="sec-proj-footer arrow-hover-glide">
                    <span className="sec-tech-snippet">
                      {proj.technologiesUsed.slice(0, 2).join(' • ')}
                    </span>
                    <ArrowUpRight size={16} className="sec-arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Action */}
        <div className="projects-bottom-cta">
          <button className="btn-secondary view-all-projects-button" onClick={onViewAllProjects}>
            <span>View All Enterprise Case Studies →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
