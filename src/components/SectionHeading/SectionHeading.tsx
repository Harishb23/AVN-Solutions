import React from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  lightBadge?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  lightBadge = false
}) => {
  return (
    <div className={`section-heading-block align-${align}`}>
      {badge && (
        <div className={`heading-badge ${lightBadge ? 'badge-light' : ''}`}>
          <span className="badge-dot" />
          <span className="badge-text">{badge}</span>
        </div>
      )}
      <h2 className="heading-title">{title}</h2>
      {subtitle && <p className="heading-subtitle">{subtitle}</p>}
      <div className="heading-accent-line" />
    </div>
  );
};
