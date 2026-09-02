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
      desc: 'AutoCAD schematics, cable pull schedules, conduit planning and sightline calculations.',
      icon: PencilRuler
    },
    {
      title: 'Acoustic Engineering',
      desc: 'Scientific RT60 room impulse measurement, raytracing, and bespoke acoustic paneling.',
      icon: Waves
    },
    {
      title: 'Networked AV',
      desc: 'Dante, AES67, and 10G SDVoE uncompressed zero-latency IP media distribution.',
      icon: Network
    },
    {
      title: 'Room Automation',
      desc: 'Centralized Crestron and Extron processors unifying lighting, HVAC, shades and display presets.',
      icon: Cpu
    },
    {
      title: 'Lighting Control',
      desc: 'DALI-2 addressable fixtures, tunable white circadian curves and architectural scene control.',
      icon: SunMedium
    },
    {
      title: 'Digital Signage',
      desc: 'Enterprise CMS deployment, content scheduling and multi-screen corporate lobby video walls.',
      icon: Tv
    },
    {
      title: 'Video Conferencing',
      desc: 'Certified Microsoft Teams Rooms and Zoom Rooms with AI speaker tracking and BYOM support.',
      icon: Video
    },
    {
      title: 'System Programming',
      desc: 'Custom Crestron SIMPL/C#, Q-SYS Lua scripting and HTML5 touch glass user interfaces.',
      icon: Code2
    },
    {
      title: 'Installation & Commissioning',
      desc: 'AVIXA CTS-certified rack dressing, laser display calibration and gain-staging alignment.',
      icon: Wrench
    },
    {
      title: 'Maintenance & Support',
      desc: '24/7 remote device health telemetry, guaranteed 2-hour SLA response and local spare units.',
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
                <div className="tile-icon-box">
                  <Icon size={20} className="text-emerald" />
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
