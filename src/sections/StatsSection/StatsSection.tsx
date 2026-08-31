import React from 'react';
import { quickStatsData, companyDetails } from '../../data/company';
import { AnimatedCounter } from '../../components/AnimatedCounter/AnimatedCounter';
import { Clock, CheckCircle2, Handshake, LayoutGrid, MapPin } from 'lucide-react';
import './StatsSection.css';

export const StatsSection: React.FC = () => {
  const statIcons = [Clock, CheckCircle2, Handshake, LayoutGrid];

  return (
    <section className="stats-strip-section" id="stats">
      <div className="container-wide">
        <div className="stats-strip-card">
          {/* Location & Status Tag */}
          <div className="stats-strip-header">
            <div className="stats-loc-pill">
              <MapPin size={13} className="text-cyan" />
              <span className="stats-loc-text">{companyDetails.trustStatement}</span>
            </div>
            <div className="stats-live-indicator">
              <span className="stats-live-dot" />
              <span>AVIXA CTS-D & CTS-I CERTIFIED ENGINEERING</span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="stats-strip-grid">
            {quickStatsData.map((stat, idx) => {
              const Icon = statIcons[idx] || CheckCircle2;
              return (
                <div key={idx} className="stats-item-cell">
                  <div className="stats-icon-row">
                    <div className="stats-icon-bubble">
                      <Icon size={18} className="text-cyan" />
                    </div>
                    <span className="stats-seq">0{idx + 1}</span>
                  </div>

                  <div className="stats-number-row">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="stats-label">{stat.label}</h3>
                  <p className="stats-desc">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
