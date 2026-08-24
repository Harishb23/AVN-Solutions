import React, { useRef } from 'react';
import { ArrowUpRight, MapPin, ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { projectsData } from '../../data/projects';
import type { ProjectItem } from '../../types';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './ProjectsGallery.css';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewAllProjects: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onSelectProject,
  onViewAllProjects
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-spacing projects-gallery-section" id="projects">
      <div className="container-wide">
        <div className="gallery-header-row">
          <SectionHeading
            badge="WOW 5 — FEATURED DEPLOYMENTS"
            title="SPACES WE TRANSFORMED"
            subtitle="Explore high-impact boardrooms, auditoriums, innovation centers, and mission-critical NOC facilities engineered across India."
          />

          <div className="gallery-controls">
            <button
              className="gallery-nav-arrow"
              onClick={() => scroll('left')}
              aria-label="Scroll projects left"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="gallery-nav-arrow"
              onClick={() => scroll('right')}
              aria-label="Scroll projects right"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Horizontal Project Track */}
        <div className="projects-horizontal-track" ref={scrollRef}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-cinema-card glass-panel"
              onClick={() => onSelectProject(project)}
              data-cursor="view"
              data-cursor-text="INSPECT"
            >
              <div className="card-media-wrap">
                <img src={project.image} alt={project.title} className="card-image" />
                <div className="card-gradient-overlay" />

                <div className="card-top-badges">
                  <span className="card-num-badge">0{project.number}</span>
                  <span className="card-industry-badge">{project.industry}</span>
                </div>

                <div className="card-bottom-info">
                  <div className="card-loc-row">
                    <MapPin size={13} className="text-cyan" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="card-project-title">{project.title}</h3>

                  <div className="card-tech-chips">
                    {project.technologiesUsed.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="tech-chip">
                        <Cpu size={10} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-hover-prompt">
                  <span>INSPECT ENGINEERING METRICS</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Portfolio CTA */}
        <div className="gallery-bottom-cta">
          <button className="btn-secondary" onClick={onViewAllProjects} data-cursor="explore">
            <span>VIEW ALL ENTERPRISE DEPLOYMENTS →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
