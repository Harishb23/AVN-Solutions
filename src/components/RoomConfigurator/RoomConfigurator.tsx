import React, { useState } from 'react';
import { 
  Monitor, 
  Volume2, 
  Cpu, 
  Sun, 
  ShieldCheck, 
  ArrowRight,
  Server,
  Layers
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './RoomConfigurator.css';

interface RoomConfiguratorProps {
  onStartProject: (initialData?: { subject: string; message: string; scope: string }) => void;
}

interface RoomType {
  id: string;
  name: string;
  capacity: string;
  sqft: string;
  description: string;
}

const roomTypes: RoomType[] = [
  {
    id: 'boardroom',
    name: 'Executive Boardroom',
    capacity: '14 - 24 Seats',
    sqft: '450 - 800 sq.ft',
    description: 'High-profile enterprise boardroom with invisible ceiling beamforming microphones and fine-pitch video wall.'
  },
  {
    id: 'auditorium',
    name: 'Tier-1 Auditorium / Townhall',
    capacity: '150 - 500 Seats',
    sqft: '2,500 - 6,000 sq.ft',
    description: 'Acoustically tuned pro-sound auditorium with laser projection / mammoth LED backdrop and broadcast PTZ cameras.'
  },
  {
    id: 'experience-center',
    name: 'Immersion Experience Center',
    capacity: '30 - 60 Visitors',
    sqft: '1,200 - 2,500 sq.ft',
    description: 'Interactive curved MicroLED touch wall, 3D spatial audio zones, and automated architectural lighting scenes.'
  },
  {
    id: 'noc-command',
    name: 'NOC & Security Command Center',
    capacity: '12 - 20 Operators',
    sqft: '800 - 1,800 sq.ft',
    description: '24/7 mission-critical multi-window video wall with zero-latency KVM over IP switching and ultra-high reliability.'
  }
];

export const RoomConfigurator: React.FC<RoomConfiguratorProps> = ({ onStartProject }) => {
  const [selectedRoom, setSelectedRoom] = useState<string>('boardroom');
  const [displayTech, setDisplayTech] = useState<'microled' | 'dual4k' | 'laser'>('microled');
  const [audioCore, setAudioCore] = useState<'beamforming' | 'dante' | 'linearray'>('beamforming');
  const [automationCore, setAutomationCore] = useState<'crestron' | 'qsys' | 'extron'>('crestron');
  const [includeLighting, setIncludeLighting] = useState<boolean>(true);
  const [includeAcousticPanels, setIncludeAcousticPanels] = useState<boolean>(true);

  const activeRoomObj = roomTypes.find(r => r.id === selectedRoom) || roomTypes[0];

  // Dynamic specs calculation
  const getBandwidth = () => {
    if (displayTech === 'microled') return '10 Gbps SDVoE Uncompressed';
    if (displayTech === 'dual4k') return '1 Gbps Dante AV Ultra';
    return '1 Gbps HDBaseT 3.0';
  };

  const getAcousticScore = () => {
    if (includeAcousticPanels && audioCore === 'beamforming') return '0.88 STI // Excellent Intelligibility';
    if (includeAcousticPanels) return '0.82 STI // Optimal';
    return '0.64 STI // Moderate Reverberation';
  };

  const getEstimatedTurnaround = () => {
    if (selectedRoom === 'auditorium') return '14 - 21 Engineering Days';
    if (selectedRoom === 'experience-center') return '10 - 16 Engineering Days';
    return '5 - 8 Engineering Days';
  };

  const handleGenerateQuote = () => {
    soundFx.playPowerChime();
    const summary = `System Specification Request:\n• Space: ${activeRoomObj.name} (${activeRoomObj.capacity})\n• Display: ${displayTech.toUpperCase()}\n• Audio Core: ${audioCore.toUpperCase()} (${audioCore === 'beamforming' ? 'Shure MXA920' : 'Dante DSP'})\n• Automation: ${automationCore.toUpperCase()}\n• DALI Lighting: ${includeLighting ? 'Yes' : 'No'}\n• Acoustic Engineering: ${includeAcousticPanels ? 'Included' : 'None'}`;
    
    onStartProject({
      subject: `System Quotation Request - ${activeRoomObj.name}`,
      message: `Hello AVN Solutions Team,\n\nI have configured the following room specification on your platform:\n\n${summary}\n\nPlease provide an official BOQ and technical proposal.`,
      scope: activeRoomObj.name
    });
  };

  return (
    <div className="room-configurator-container glass-panel">
      {/* Header Banner */}
      <div className="configurator-top-hud">
        <div className="config-hud-left">
          <div className="glass-pill">
            <Cpu size={14} />
            <span>INTERACTIVE SYSTEM ARCHITECT</span>
          </div>
          <h2 className="config-title">AV Room Specification & BOQ Architect</h2>
          <p className="config-sub">
            Customize room dimensions, display tier, acoustic beamforming, and Crestron automation to generate immediate technical telemetry and custom BOM proposals.
          </p>
        </div>

        <div className="config-hud-right">
          <div className="telemetry-live-badge">
            <span className="live-pulse-dot" />
            <span>CALIBRATOR ACTIVE</span>
          </div>
          <span className="config-rev-tag">AVN SPEC ENGINE // REV 4.2</span>
        </div>
      </div>

      <div className="configurator-body-grid">
        {/* Left Column: Interactive Controls & Subsystem Pickers */}
        <div className="config-controls-col">
          {/* Step 1: Room Archetype */}
          <div className="config-step-group">
            <div className="step-label-row">
              <span className="step-num">01</span>
              <h3 className="step-title">Select Room Archetype & Scale</h3>
            </div>

            <div className="room-archetype-grid">
              {roomTypes.map(room => (
                <button
                  key={room.id}
                  className={`room-type-card ${selectedRoom === room.id ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(700);
                    setSelectedRoom(room.id);
                  }}
                  data-cursor="explore"
                >
                  <div className="room-card-top">
                    <span className="room-card-name">{room.name}</span>
                    <span className="room-card-cap">{room.capacity}</span>
                  </div>
                  <span className="room-card-sqft">{room.sqft}</span>
                  <p className="room-card-desc">{room.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Display Technology Matrix */}
          <div className="config-step-group">
            <div className="step-label-row">
              <span className="step-num">02</span>
              <h3 className="step-title">Display Subsystem Matrix</h3>
            </div>

            <div className="tech-toggle-grid">
              <button
                className={`tech-toggle-btn ${displayTech === 'microled' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(750);
                  setDisplayTech('microled');
                }}
                data-cursor="explore"
              >
                <Monitor size={16} className="text-cyan" />
                <div className="tech-toggle-info">
                  <span className="tech-name">0.9mm Direct-View MicroLED Wall</span>
                  <span className="tech-sub">Seamless HDR • 100,000 Hrs Life • Bezel-Free</span>
                </div>
              </button>

              <button
                className={`tech-toggle-btn ${displayTech === 'dual4k' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(750);
                  setDisplayTech('dual4k');
                }}
                data-cursor="explore"
              >
                <Monitor size={16} className="text-cyan" />
                <div className="tech-toggle-info">
                  <span className="tech-name">Dual 85" 4K Interactive UHD Panels</span>
                  <span className="tech-sub">Optical Touch • Anti-Glare Coating • Direct MS Teams</span>
                </div>
              </button>

              <button
                className={`tech-toggle-btn ${displayTech === 'laser' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(750);
                  setDisplayTech('laser');
                }}
                data-cursor="explore"
              >
                <Monitor size={16} className="text-cyan" />
                <div className="tech-toggle-info">
                  <span className="tech-name">20,000 Lumens 4K Solid-State Laser</span>
                  <span className="tech-sub">Motorized Tensioned ALR Screen • High-Ambient</span>
                </div>
              </button>
            </div>
          </div>

          {/* Step 3: Acoustic & Microphone Array Core */}
          <div className="config-step-group">
            <div className="step-label-row">
              <span className="step-num">03</span>
              <h3 className="step-title">Audio & Beamtracking Core</h3>
            </div>

            <div className="tech-toggle-grid">
              <button
                className={`tech-toggle-btn ${audioCore === 'beamforming' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(800);
                  setAudioCore('beamforming');
                }}
                data-cursor="explore"
              >
                <Volume2 size={16} className="text-cyan" />
                <div className="tech-toggle-info">
                  <span className="tech-name">Shure MXA920 Ceiling Array + AEC DSP</span>
                  <span className="tech-sub">8 Steerable Lobes • Auto-Voice Lift • Clean Tables</span>
                </div>
              </button>

              <button
                className={`tech-toggle-btn ${audioCore === 'dante' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(800);
                  setAudioCore('dante');
                }}
                data-cursor="explore"
              >
                <Volume2 size={16} className="text-cyan" />
                <div className="tech-toggle-info">
                  <span className="tech-name">Q-SYS Core 110f Dante Network Audio</span>
                  <span className="tech-sub">IP Amplification • Zone Level Routing • 64x64 Dante</span>
                </div>
              </button>

              <button
                className={`tech-toggle-btn ${audioCore === 'linearray' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(800);
                  setAudioCore('linearray');
                }}
                data-cursor="explore"
              >
                <Volume2 size={16} className="text-cyan" />
                <div className="tech-toggle-info">
                  <span className="tech-name">Columnar Pro Line Array System</span>
                  <span className="tech-sub">Auditorium Throw • Uniform Sound Dispersion</span>
                </div>
              </button>
            </div>
          </div>

          {/* Step 3b: Automation Core */}
          <div className="config-step-group">
            <div className="step-label-row">
              <span className="step-num">04</span>
              <h3 className="step-title">Master Control & Automation Engine</h3>
            </div>

            <div className="tech-toggle-grid">
              <button
                className={`tech-toggle-btn ${automationCore === 'crestron' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(850);
                  setAutomationCore('crestron');
                }}
                data-cursor="explore"
              >
                <Cpu size={16} className="text-cyan" />
                <div className="tech-toggle-info">
                  <span className="tech-name">Crestron 4-Series Core Control Processor</span>
                  <span className="tech-sub">Dual Redundancy • BACnet IP • Native Teams Macro OS</span>
                </div>
              </button>

              <button
                className={`tech-toggle-btn ${automationCore === 'qsys' ? 'active' : ''}`}
                onClick={() => {
                  soundFx.playClick(850);
                  setAutomationCore('qsys');
                }}
                data-cursor="explore"
              >
                <Cpu size={16} className="text-cyan" />
                <div className="tech-toggle-info">
                  <span className="tech-name">Q-SYS Unified AV&C Core Platform</span>
                  <span className="tech-sub">Software-Based DSP • Video Routing • Scripting Engine</span>
                </div>
              </button>
            </div>
          </div>

          {/* Step 5: Addon Modules */}
          <div className="config-step-group">
            <div className="step-label-row">
              <span className="step-num">05</span>
              <h3 className="step-title">Environmental & Acoustic Modules</h3>
            </div>

            <div className="addons-row">
              <label className="addon-check-card" onClick={() => soundFx.playClick()}>
                <input
                  type="checkbox"
                  checked={includeLighting}
                  onChange={e => setIncludeLighting(e.target.checked)}
                />
                <Sun size={18} className="text-cyan" />
                <div className="addon-text">
                  <span className="addon-title">DALI Intelligent Lighting & Motorized Shades</span>
                  <span className="addon-sub">Auto-dim on video call & circadian daylight harvesting</span>
                </div>
              </label>

              <label className="addon-check-card" onClick={() => soundFx.playClick()}>
                <input
                  type="checkbox"
                  checked={includeAcousticPanels}
                  onChange={e => setIncludeAcousticPanels(e.target.checked)}
                />
                <Layers size={18} className="text-cyan" />
                <div className="addon-text">
                  <span className="addon-title">Engineered NRC 0.85 Acoustic Wall Panels</span>
                  <span className="addon-sub">Eliminates flutter echo & complies with NC-25 room rating</span>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Live Technical Telemetry & Topology Summary */}
        <div className="config-telemetry-col">
          <div className="telemetry-live-panel glass-panel">
            <div className="telem-header">
              <div className="telem-badge">
                <Server size={14} className="text-cyan" />
                <span>ARCHITECTURAL TOPOLOGY SCHEMATIC</span>
              </div>
              <span className="telem-status-dot text-emerald">● READY TO SPECIFY</span>
            </div>

            <div className="telem-room-target">
              <span className="target-label">CONFIGURED SPACE</span>
              <h3 className="target-name">{activeRoomObj.name}</h3>
              <span className="target-specs">{activeRoomObj.capacity} • {activeRoomObj.sqft}</span>
            </div>

            {/* Bill of Materials Highlights */}
            <div className="bom-breakdown-list">
              <div className="bom-item">
                <span className="bom-cat">DISPLAY SYSTEM</span>
                <span className="bom-val">
                  {displayTech === 'microled' ? '0.9mm Fine Pitch MicroLED (4K UHD Matrix)' :
                   displayTech === 'dual4k' ? 'Dual 85" Ultra-HD Interactive Touch Displays' :
                   '20,000 ANSI Lumens Laser + Tensioned ALR Matrix'}
                </span>
              </div>

              <div className="bom-item">
                <span className="bom-cat">AUDIO INFRASTRUCTURE</span>
                <span className="bom-val">
                  {audioCore === 'beamforming' ? 'Shure MXA920 Ceiling Array with Autofocus Beamtracking' :
                   audioCore === 'dante' ? 'Q-SYS Core 110f DSP + Dante IP Ceiling Speakers' :
                   'Pro Columnar Line Array with Phase Alignment'}
                </span>
              </div>

              <div className="bom-item">
                <span className="bom-cat">CONTROL & SWITCHING</span>
                <span className="bom-val">Crestron 4-Series Core + 10G SDVoE Zero-Latency AVoIP</span>
              </div>

              <div className="bom-item">
                <span className="bom-cat">ENVIRONMENTAL</span>
                <span className="bom-val">
                  {includeLighting ? 'DALI Dimming & Motorized Presets' : 'Standard Manual Controls'} /
                  {includeAcousticPanels ? ' NRC 0.85 Engineered Panels' : ' Standard Drywall'}
                </span>
              </div>
            </div>

            {/* Live Telemetry Metrics */}
            <div className="live-metrics-box">
              <div className="metric-chip">
                <span className="metric-chip-label">NETWORK BANDWIDTH</span>
                <span className="metric-chip-value text-cyan">{getBandwidth()}</span>
              </div>
              <div className="metric-chip">
                <span className="metric-chip-label">ACOUSTIC STI RATING</span>
                <span className="metric-chip-value text-emerald">{getAcousticScore()}</span>
              </div>
              <div className="metric-chip">
                <span className="metric-chip-label">ESTIMATED TURNAROUND</span>
                <span className="metric-chip-value">{getEstimatedTurnaround()}</span>
              </div>
              <div className="metric-chip">
                <span className="metric-chip-label">ENGINEERING COMPLIANCE</span>
                <span className="metric-chip-value text-cyan">AVIXA CTS-D & IEEE 802.3bt</span>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="config-cta-box">
              <button
                className="btn-primary config-submit-btn"
                onClick={handleGenerateQuote}
                data-cursor="start"
                data-cursor-text="SPECIFY"
              >
                <span>GENERATE FORMAL SPEC & PROPOSAL</span>
                <ArrowRight size={18} />
              </button>

              <div className="cta-trust-strip">
                <ShieldCheck size={14} className="text-emerald" />
                <span>Includes on-site Chennai engineering survey and acoustic heatmapping.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
