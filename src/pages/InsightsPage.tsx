import React from 'react';
import { insightsData } from '../data/insights';
import type { InsightArticle } from '../types';
import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import './Pages.css';

interface InsightsPageProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onSelectArticle }) => {
  return (
    <div className="page-view-container">
      {/* Page Hero */}
      <section className="page-hero-banner">
        <div className="container-wide">
          <div className="page-badge">
            <BookOpen size={14} className="text-cyan" />
            <span>RESEARCH & ENGINEERING WHITEPAPERS</span>
          </div>
          <h1 className="page-hero-title text-gradient-white">
            THE FUTURE OF<br />
            <span className="text-gradient-cyan">AUDIO VISUAL TECHNOLOGY</span>
          </h1>
          <p className="page-hero-subtitle">
            Technical analysis, architectural guidelines, and emerging trends in enterprise collaboration, spatial acoustics, and direct-view MicroLED displays.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="insights-editorial-grid">
            {insightsData.map((article) => (
              <article
                key={article.id}
                className="insight-large-card glass-panel"
                onClick={() => onSelectArticle(article)}
                data-cursor="explore"
                data-cursor-text="READ"
              >
                <div className="article-large-thumb-wrap">
                  <img src={article.image} alt={article.title} className="art-thumb-img" />
                  <div className="art-thumb-overlay" />
                  <span className="art-category-pill">{article.category}</span>
                </div>

                <div className="art-large-body">
                  <div className="art-meta-row">
                    <span className="art-meta-item">
                      <Calendar size={13} className="text-cyan" />
                      {article.date}
                    </span>
                    <span className="art-meta-item">
                      <Clock size={13} className="text-cyan" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="art-large-title text-gradient-white">{article.title}</h3>
                  <p className="art-large-excerpt">{article.excerpt}</p>

                  <div className="art-author-row">
                    <span className="art-author-name">By {article.author.name}</span>
                    <span className="art-read-btn">
                      <span>READ ARTICLE</span>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
