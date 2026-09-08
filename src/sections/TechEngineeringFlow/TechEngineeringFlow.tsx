import React from 'react';
import { 
  PencilRuler, 
  Waves, 
  Network, 
  Cpu, 
  SunMedium, 
  Tv, 
  Video, 
  Code2, 
  Wrench, 
  ShieldCheck 
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './TechEngineeringFlow.css';

export const TechEngineeringFlow: React.FC = () => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const capabilities = [
    {
      title: 'AV System Design',
      desc: 'AutoCAD single-line schematics and sightline engineering.',
      techBadge: 'AutoCAD .DWG',
      icon: PencilRuler
    },
    {
      title: 'Acoustic Engineering',
      desc: 'Scientific RT60 room impulse measurement and acoustic modeling.',
      techBadge: 'EASE 3D Raytracing',
      icon: Waves
    },
    {
      title: 'Networked AV',
      desc: 'Dante, AES67, and 10G SDVoE zero-latency IP media distribution.',
      techBadge: 'Dante IP / AES67',
      icon: Network
    },
    {
      title: 'Room Automation',
      desc: 'Centralized processors unifying lighting, HVAC, and display presets.',
      techBadge: 'Crestron & Extron',
      icon: Cpu
    },
    {
      title: 'Lighting Control',
      desc: 'DALI-2 addressable fixtures and circadian rhythm curves.',
      techBadge: 'DALI-2 / KNX Bus',
      icon: SunMedium
    },
    {
      title: 'Digital Signage',
      desc: 'Enterprise CMS scheduling and lobby multi-screen canvases.',
      techBadge: '24/7 Cloud CMS',
      icon: Tv
    },
    {
      title: 'Video Conferencing',
      desc: 'Native Microsoft Teams & Zoom Rooms with AI speaker tracking.',
      techBadge: 'Teams MTR / Zoom',
      icon: Video
    },
    {
      title: 'System Programming',
      desc: 'Custom Crestron SIMPL/C# and Q-SYS Lua touch interfaces.',
      techBadge: 'SIMPL# & Lua GUI',
      icon: Code2
    },
    {
      title: 'Turnkey Commissioning',
      desc: 'AVIXA CTS-certified rack dressing and gain-staging calibration.',
      techBadge: 'AVIXA CTS-D / CTS-I',
      icon: Wrench
    },
    {
      title: 'Maintenance & Support',
      desc: '24/7 remote device health monitoring and 2-hour SLA response.',
      techBadge: '24/7 SLA Telemetry',
      icon: ShieldCheck
    }
  ];

  return (
    <section 
      ref={ref}
      className={`editorial-expertise-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="engineering"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-head-left">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-line" />
            <span>TECHNICAL CAPABILITY</span>
          </div>
          <h2 className="section-grand-title">
            Engineering behind <br />
            <span className="title-highlight">every experience.</span>
          </h2>
          <p className="section-lead-desc">
            End-to-end multi-disciplinary expertise bridging architectural design, acoustic physics, and enterprise IT infrastructure.
          </p>
        </div>

        {/* 10 Capabilities Grid */}
        <div className="expertise-clean-grid stagger-container">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="expertise-tile hover-card-lift">
                <div className="tile-top-row">
                  <div className="tile-icon-box">
                    <Icon size={18} className="text-emerald" />
                  </div>
                  <span className="tile-tech-badge">{cap.techBadge}</span>
                </div>
                <h3 className="tile-title">{cap.title}</h3>
                <p className="tile-desc">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
