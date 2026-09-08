import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCountUp } from '../../hooks/useCountUp';
import { Award, Building2, Cpu, Layers, ShieldCheck } from 'lucide-react';
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
      sublabel: 'Dedicated enterprise systems engineering',
      icon: Award,
      badge: 'SINCE 2014'
    },
    {
      value: `${projectsCount}+`,
      label: 'Projects Delivered',
      sublabel: 'Workplaces, auditoriums & institutions',
      icon: Building2,
      badge: 'CHENNAI & SOUTH INDIA'
    },
    {
      value: `${partnersCount}+`,
      label: 'Technology Partners',
      sublabel: 'Direct OEM tier-1 authorized integration',
      icon: Cpu,
      badge: '100% GENUINE OEM'
    },
    {
      value: `${industriesCount}+`,
      label: 'Industries Served',
      sublabel: 'Corporate, healthcare, higher education',
      icon: Layers,
      badge: 'VERTICAL EXPERTISE'
    }
  ];

  return (
    <section 
      ref={ref} 
      className={`stats-metrics-section ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`}
    >
      <div className="container-wide">
        {/* Supporting Editorial Statement with Visual Pill */}
        <div className="stats-editorial-head">
          <div className="stats-top-badge">
            <ShieldCheck size={14} className="text-cyan" />
            <span>VERIFIED PERFORMANCE METRICS</span>
          </div>
          <h3 className="stats-supporting-statement">
            Engineering reliable technology systems for businesses, institutions and premium spaces.
          </h3>
        </div>

        {/* 4-Column Horizontal Grid with Visual Cards */}
        <div className="stats-horizontal-grid stagger-container">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="stat-column-item hover-card-lift">
                <div className="stat-card-top">
                  <div className="stat-icon-halo">
                    <Icon size={20} />
                  </div>
                  <span className="stat-card-badge">{stat.badge}</span>
                </div>

                <div className="stat-value-row">
                  <span className="stat-primary-number">{stat.value}</span>
                </div>
                <h4 className="stat-primary-label">{stat.label}</h4>
                <p className="stat-supporting-sublabel">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
