import React from 'react';
import { Cpu, Volume2, Monitor, TrendingUp, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { soundFx } from '../../utils/sound';
import './ToolsShowcase.css';

interface ToolsShowcaseProps {
  onNavigateToTools: (toolTab?: string) => void;
}

export const ToolsShowcase: React.FC<ToolsShowcaseProps> = ({ onNavigateToTools }) => {
  const tools = [
    {
      id: 'configurator',
      badge: 'ARCHITECTURAL BOM',
      title: 'Room Configurator & Specifier',
      desc: 'Model boardroom scale, fine-pitch MicroLED, Shure beamtracking ceiling mics, and Crestron automation to output instant system bills.',
      icon: <Cpu size={24} className="text-cyan" />
    },
    {
      id: 'acoustic-sim',
      badge: 'RT60 ACOUSTIC ENGINE',
      title: 'Reverberation & STI Simulator',
      desc: 'Simulate speech intelligibility improvements between untreated drywall and NRC 0.85 acoustic treatment with live waveform analysis.',
      icon: <Volume2 size={24} className="text-cyan" />
    },
    {
      id: 'pixel-pitch',
      badge: 'DISCAS COMPLIANCE',
      title: 'MicroLED Pixel Pitch Calculator',
      desc: 'Calculate optimal pixel pitch (0.9mm to 2.5mm) and viewing distance to ensure zero pixelation from the nearest boardroom seat.',
      icon: <Monitor size={24} className="text-cyan" />
    },
    {
      id: 'roi-model',
      badge: 'EFFICIENCY ROI',
      title: 'Enterprise Meeting ROI Model',
      desc: 'Quantify annual executive hours saved by eliminating meeting room setup friction and deploying proactive IoT AV monitoring.',
      icon: <TrendingUp size={24} className="text-cyan" />
    }
  ];

  return (
    <section className="section-spacing tools-showcase-section" id="tools-suite">
      <div className="container-wide">
        <SectionHeading
          badge="INTERACTIVE ENGINEERING SUITE"
          title="PRECISION CALCULATION ENGINES"
          subtitle="Enterprise-grade modeling and specification tools designed for AV consultants, architects, IT leadership, and facility directors."
        />

        <div className="tools-showcase-grid">
          {tools.map(tool => (
            <div
              key={tool.id}
              className="tool-showcase-card glass-panel"
              onClick={() => {
                soundFx.playClick(800);
                onNavigateToTools(tool.id);
              }}
              data-cursor="explore"
              data-cursor-text="LAUNCH"
            >
              <div className="tool-card-top">
                <div className="tool-icon-box">{tool.icon}</div>
                <span className="tool-card-badge">{tool.badge}</span>
              </div>

              <h3 className="tool-card-title text-gradient-white">{tool.title}</h3>
              <p className="tool-card-desc">{tool.desc}</p>

              <div className="tool-card-action">
                <span className="launch-text">LAUNCH ENGINE</span>
                <ArrowRight size={16} className="launch-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
