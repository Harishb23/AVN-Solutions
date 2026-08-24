import React from 'react';
import { X, Clock, Calendar, Tag, ArrowRight } from 'lucide-react';
import type { InsightArticle } from '../../types';
import './ArticleModal.css';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onStartProject }) => {
  if (!article) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="article-modal-dialog glass-panel" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="article-modal-header">
          <span className="article-category-badge">{article.category}</span>
          <button className="modal-close-icon" onClick={onClose} aria-label="Close article">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="article-modal-body">
          <div className="article-hero-media">
            <img src={article.image} alt={article.title} className="article-main-image" />
            <div className="article-overlay-gradient" />
          </div>

          <div className="article-text-container">
            <div className="article-meta-row">
              <span className="meta-item">
                <Calendar size={14} className="text-cyan" />
                {article.date}
              </span>
              <span className="meta-item">
                <Clock size={14} className="text-cyan" />
                {article.readTime}
              </span>
            </div>

            <h3 className="article-title">{article.title}</h3>

            <div className="author-badge">
              <div className="author-avatar">AVN</div>
              <div className="author-info">
                <span className="author-name">{article.author.name}</span>
                <span className="author-role">{article.author.role}</span>
              </div>
            </div>

            <div className="article-body-content">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="article-p">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="article-tags-row">
              {article.tags.map((t, idx) => (
                <span key={idx} className="article-tag">
                  <Tag size={12} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="article-modal-footer">
          <span className="footer-note">Looking to implement this architecture in your facility?</span>
          <button
            className="btn-primary"
            onClick={() => {
              onClose();
              onStartProject();
            }}
          >
            <span>CONSULT AN AV ENGINEER</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
