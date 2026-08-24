import React from 'react';
import { X, MapPin, Cpu, CheckCircle, Calendar, ArrowUpRight, ShieldAlert } from 'lucide-react';
import type { ProjectItem } from '../../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartProject }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="project-modal-dialog glass-panel" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="project-modal-header">
          <div className="header-meta">
            <span className="project-num-badge">PROJECT {project.number}</span>
            <span className="project-industry-badge">{project.industry}</span>
          </div>
          <button className="modal-close-icon" onClick={onClose} aria-label="Close project view">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="project-modal-body">
          <div className="project-hero-media">
            <img src={project.image} alt={project.title} className="project-main-image" />
            <div className="media-overlay-gradient" />
            <div className="media-caption">
              <h3 className="project-hero-title">{project.title}</h3>
              <div className="project-meta-row">
                <span className="meta-item">
                  <MapPin size={14} className="meta-icon" />
                  {project.location}
                </span>
                <span className="meta-item">
                  <Calendar size={14} className="meta-icon" />
                  Commissioned {project.completionYear}
                </span>
              </div>
            </div>
          </div>

          <div className="project-deep-content">
            <div className="content-section">
              <h4 className="section-label">EXECUTIVE SUMMARY</h4>
              <p className="summary-text">{project.summary}</p>
            </div>

            <div className="two-col-grid">
              <div className="info-card challenge-card">
                <div className="card-header">
                  <ShieldAlert size={18} className="text-amber" />
                  <h5>THE ENGINEERING CHALLENGE</h5>
                </div>
                <p>{project.challenge}</p>
              </div>

              <div className="info-card solution-card">
                <div className="card-header">
                  <Cpu size={18} className="text-cyan" />
                  <h5>THE AVN SOLUTION</h5>
                </div>
                <p>{project.solution}</p>
              </div>
            </div>

            {/* Technologies Deployed */}
            <div className="content-section">
              <h4 className="section-label">TECHNOLOGIES DEPLOYED</h4>
              <div className="tech-tags-list">
                {project.technologiesUsed.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    <Cpu size={12} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Measurable Results */}
            <div className="content-section">
              <h4 className="section-label">ENGINEERED IMPACT & METRICS</h4>
              <div className="results-list">
                {project.results.map((res, idx) => (
                  <div key={idx} className="result-item">
                    <CheckCircle size={16} className="result-icon text-cyan" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="project-modal-footer">
          <div className="footer-left">
            <span className="footer-lead">Require a similar AV deployment?</span>
            <span className="footer-sub">Consult with our systems engineering team</span>
          </div>
          <button
            className="btn-primary"
            onClick={() => {
              onClose();
              onStartProject();
            }}
          >
            <span>START SIMILAR PROJECT</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
