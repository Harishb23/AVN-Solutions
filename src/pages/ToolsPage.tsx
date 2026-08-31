import React, { useState } from 'react';
import { Sparkles, Volume2, Monitor, TrendingUp, Cpu } from 'lucide-react';
import { SpaceDesigner } from '../components/SpaceDesigner/SpaceDesigner';
import { RoomConfigurator } from '../components/RoomConfigurator/RoomConfigurator';
import { AcousticSimulator } from '../components/AcousticSimulator/AcousticSimulator';
import { PixelPitchCalculator } from '../components/PixelPitchCalculator/PixelPitchCalculator';
import { RoiCalculator } from '../components/RoiCalculator/RoiCalculator';
import { soundFx } from '../utils/sound';
import './Pages.css';

interface ToolsPageProps {
  onStartProject: (initialData?: { subject: string; message: string; scope: string }) => void;
  initialTab?: string;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onStartProject, initialTab = 'designer' }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  const tabs = [
    { id: 'designer', label: 'DESIGN YOUR SPACE (STUDIO)', icon: <Sparkles size={15} /> },
    { id: 'configurator', label: 'ROOM SPECIFICATION & BOM', icon: <Cpu size={15} /> },
    { id: 'acoustic-sim', label: 'RT60 ACOUSTIC SIMULATOR', icon: <Volume2 size={15} /> },
    { id: 'pixel-pitch', label: 'MICROLED DISTANCE & PITCH', icon: <Monitor size={15} /> },
    { id: 'roi-model', label: 'MEETING EFFICIENCY & ROI', icon: <TrendingUp size={15} /> }
  ];

  return (
    <div className="page-view-container" id="design-space-page">
      {/* Page Hero Banner */}
      <section className="page-hero-banner">
        <div className="container-wide">
          <div className="page-badge">
            <Sparkles size={14} className="text-cyan" />
            <span>INTERACTIVE AV DESIGN STUDIO // CHENNAI</span>
          </div>
          <h1 className="page-hero-title">
            Design Your Space. <span className="industries-title-cyan">Build Your Specification.</span>
          </h1>
          <p className="page-hero-subtitle">
            Model your architectural environment, configure direct-view MicroLED displays, ceiling beamforming microphones, and Crestron automation, and generate immediate engineering BOM proposals.
          </p>
        </div>
      </section>

      {/* Tools Navigation Tabs */}
      <section className="section-spacing" style={{ paddingTop: '1.5rem' }}>
        <div className="container-wide">
          <div className="page-tab-nav">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`page-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(900);
                  setActiveTab(tab.id);
                }}
                data-cursor="explore"
              >
                {tab.icon}
                <span className="tab-text">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tool Renderer */}
          <div className="tool-render-area">
            {activeTab === 'designer' && <SpaceDesigner onStartProject={onStartProject} />}
            {activeTab === 'configurator' && <RoomConfigurator onStartProject={onStartProject} />}
            {activeTab === 'acoustic-sim' && <AcousticSimulator />}
            {activeTab === 'pixel-pitch' && <PixelPitchCalculator />}
            {activeTab === 'roi-model' && <RoiCalculator onStartProject={() => onStartProject()} />}
          </div>
        </div>
      </section>
    </div>
  );
};
