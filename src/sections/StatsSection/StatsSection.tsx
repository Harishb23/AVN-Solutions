import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCountUp } from '../../hooks/useCountUp';
import './StatsSection.css';

export const StatsSection: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  const yearsCount = useCountUp({ end: 10, duration: 1200, start: isRevealed });
  const projectsCount = useCountUp({ end: 250, duration: 1500, start: isRevealed });
  const partnersCount = useCountUp({ end: 50, duration: 1300, start: isRevealed });
  const industriesCount = useCountUp({ end: 7, duration: 1100, start: isRevealed });

  const stats = [
    {
      value: `${yearsCount}+`,
      label: 'Years in AV',
      sublabel: 'Dedicated enterprise systems engineering'
    },
    {
      value: `${projectsCount}+`,
      label: 'Projects delivered',
      sublabel: 'Workplaces, auditoriums & institutions'
    },
    {
      value: `${partnersCount}+`,
      label: 'Technology partners',
      sublabel: 'Direct OEM tier-1 authorized integration'
    },
    {
      value: `${industriesCount}+`,
      label: 'Industries served',
      sublabel: 'Corporate, healthcare, higher education'
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`stats-metrics-section ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`}
    >
      <div className="container-wide">
        {/* Supporting Editorial Statement */}
        <div className="stats-editorial-head">
          <p className="stats-supporting-statement">
            Engineering reliable technology systems for businesses, institutions and premium spaces.
          </p>
        </div>

        {/* 4-Column Horizontal Grid with Vertical Dividers */}
        <div className="stats-horizontal-grid stagger-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-column-item">
              <div className="stat-value-row">
                <span className="stat-primary-number">{stat.value}</span>
              </div>
              <h3 className="stat-primary-label">{stat.label}</h3>
              <p className="stat-supporting-sublabel">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
