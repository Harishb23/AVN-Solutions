import React from 'react';
import { companyStats } from '../../data/company';
import { AnimatedCounter } from '../../components/AnimatedCounter/AnimatedCounter';
import { ShieldCheck, Activity, Users, Award, Radio } from 'lucide-react';
import './StatsSection.css';

export const StatsSection: React.FC = () => {
  const statIcons = [Activity, ShieldCheck, Users, Award];

  return (
    <section className="stats-telemetry-section" id="stats">
      <div className="container-wide">
        <div className="stats-hud-console glass-panel">
          {/* Top Telemetry Header Bar */}
          <div className="stats-console-top">
            <div className="top-telemetry-left">
              <div className="hud-status-node">
                <Radio size={14} className="radar-icon text-cyan" />
                <span className="telemetry-tag">VERIFIED TELEMETRY METRICS</span>
              </div>
              <span className="telemetry-code">SYS-VERIFIED // TAMIL NADU & PAN INDIA</span>
            </div>

            <div className="top-telemetry-right">
              <span className="live-telemetry-badge">
                <span className="pulse-circle" />
                ACTIVE DEPLOYMENTS MONITORED 24/7
              </span>
            </div>
          </div>

          {/* 4-Card Telemetry Grid */}
          <div className="stats-metrics-grid">
            {companyStats.map((stat, idx) => {
              const Icon = statIcons[idx] || Activity;
              return (
                <div key={idx} className="stat-metric-card" data-cursor="explore">
                  <div className="stat-card-header">
                    <span className="stat-index-num">0{idx + 1}</span>
                    <div className="stat-icon-wrap">
                      <Icon size={18} className="text-cyan" />
                    </div>
                  </div>

                  <div className="stat-number-display">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="stat-main-label">{stat.label}</h3>
                  <p className="stat-description-text">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
