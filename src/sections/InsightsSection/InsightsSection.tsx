import React from 'react';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { insightsData } from '../../data/insights';
import type { InsightArticle } from '../../types';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './InsightsSection.css';

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
  onViewAllInsights: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onSelectArticle,
  onViewAllInsights
}) => {
  return (
    <section className="section-spacing insights-section light-zone" id="insights">
      <div className="container-wide">
        <div className="insights-header-row">
          <SectionHeading
            badge="EDITORIAL & WHITE PAPERS"
            title="THE FUTURE OF AV"
            subtitle="Deep dives into AI room director algorithms, direct-view MicroLED engineering, acoustic simulations, and software-defined 10G video backbones."
          />

          <button className="btn-secondary view-all-insights-btn" onClick={onViewAllInsights} data-cursor="explore">
            <span>READ ALL ARTICLES →</span>
          </button>
        </div>

        <div className="insights-articles-grid">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="insight-article-card glass-panel"
              onClick={() => onSelectArticle(article)}
              data-cursor="explore"
              data-cursor-text="READ"
            >
              <div className="article-thumb-wrap">
                <img src={article.image} alt={article.title} className="article-thumb" />
                <div className="article-thumb-overlay" />
                <span className="article-card-cat">{article.category}</span>
              </div>

              <div className="article-card-body">
                <div className="article-time-row">
                  <span className="meta-time">
                    <Calendar size={13} className="text-cyan" />
                    {article.date}
                  </span>
                  <span className="meta-time">
                    <Clock size={13} className="text-cyan" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="article-card-title text-gradient-white">{article.title}</h3>
                <p className="article-card-excerpt">{article.excerpt}</p>

                <div className="article-card-footer">
                  <span className="read-more-link">
                    <span>READ FULL ANALYSIS</span>
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
