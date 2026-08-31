import React, { useState } from 'react';
import { 
  Building2, 
  Monitor, 
  Volume2, 
  Camera, 
  Sliders, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Theater,
  GraduationCap,
  HeartPulse,
  Landmark,
  Home,
  Check
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './SpaceDesigner.css';

interface SpaceDesignerProps {
  onStartProject: (initialData?: { subject: string; message: string; scope: string }) => void;
}

interface SpaceArchetype {
  id: string;
  name: string;
  category: string;
  icon: any;
  image: string;
  capacity: string;
  dimensions: string;
  description: string;
  defaultDisplay: string;
  defaultAudio: string;
  defaultCamera: string;
  defaultControl: string;
  defaultLighting: string;
  defaultAcoustics: string;
  basePriceRange: string;
}

const SPACE_ARCHETYPES: SpaceArchetype[] = [
  {
    id: 'boardroom',
    name: 'Executive Boardroom',
    category: 'Corporate',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    capacity: '16 – 24 Seats',
    dimensions: '30ft × 18ft (540 sq.ft)',
    description: 'High-impact enterprise boardroom with invisible ceiling beamforming microphones and fine-pitch MicroLED canvas.',
    defaultDisplay: '136" 4K Direct-View MicroLED (0.9mm)',
    defaultAudio: 'Shure MXA920 Ceiling Array + IntelliMix DSP',
    defaultCamera: 'Dual 4K AI Optical Tracking PTZ Cameras',
    defaultControl: 'Crestron 10.1" Tabletop Touch Screen + 4-Series Core',
    defaultLighting: 'DALI-2 Tunable Circadian Lighting + Motorized Shades',
    defaultAcoustics: 'Custom Acoustic Wall Panels (NRC 0.85)',
    basePriceRange: '₹18 Lakhs - ₹35 Lakhs'
  },
  {
    id: 'auditorium',
    name: 'Townhall & Auditorium',
    category: 'Large Venue',
    icon: Theater,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    capacity: '150 – 500 Seats',
    dimensions: '75ft × 45ft (3,375 sq.ft)',
    description: 'Acoustically modeled large venue with mammoth LED backdrop, line-array sound reinforcement, and broadcast PTZ switching.',
    defaultDisplay: '220" 4K Laser Projection mapping + 1.2mm LED Wing Displays',
    defaultAudio: 'Bose / Q-SYS Point Source Line Array + Digital Mixer',
    defaultCamera: '3-Camera Auto-Tracking PTZ Broadcast System',
    defaultControl: 'Crestron Master iPad + Rackmount Control Engine',
    defaultLighting: 'DMX Theatrical Stage Lighting + Architectural Downlights',
    defaultAcoustics: 'Engineered 3D Fabric Diffusers & Bass Absorbers',
    basePriceRange: '₹35 Lakhs - ₹75 Lakhs'
  },
  {
    id: 'classroom',
    name: 'Hybrid Smart Classroom',
    category: 'Education',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    capacity: '40 – 80 Students',
    dimensions: '35ft × 25ft (875 sq.ft)',
    description: 'Active learning space with dual interactive touch displays, voice lift ceiling microphones, and automated lecture recording.',
    defaultDisplay: 'Dual 86" 4K Interactive Touch Displays (40-Point Touch)',
    defaultAudio: 'Sennheiser TeamConnect Ceiling 2 Voice-Lift System',
    defaultCamera: 'Instructor Auto-Tracking 4K PTZ + Student Cam',
    defaultControl: 'Extron 7" Wall Touch Controller + Automation',
    defaultLighting: 'Daylight Harvesting DALI Linear Fixtures',
    defaultAcoustics: 'Eco Acoustic Ceiling Baffles',
    basePriceRange: '₹12 Lakhs - ₹22 Lakhs'
  },
  {
    id: 'home-cinema',
    name: 'Luxury Private Cinema',
    category: 'Residential',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    capacity: '8 – 14 Recliners',
    dimensions: '26ft × 18ft (468 sq.ft)',
    description: 'Bespoke residential theatre featuring Dolby Atmos 9.4.6 spatial surround sound, native 4K laser projection, and starlight ceiling.',
    defaultDisplay: '180" 2.39:1 Acoustically Transparent Woven Scope Screen',
    defaultAudio: 'Dolby Atmos 9.4.6 Discrete In-Wall Speakers + Trinnov DSP',
    defaultCamera: 'N/A (Cinema Experience)',
    defaultControl: 'Crestron Home iPad UI + Handheld Touch Remote',
    defaultLighting: 'Fiber-Optic Constellation Starlight Ceiling + Step LED',
    defaultAcoustics: 'Decoupled Room-Within-A-Room Acoustic Shell (RT60 0.28s)',
    basePriceRange: '₹25 Lakhs - ₹60 Lakhs'
  },
  {
    id: 'noc',
    name: 'Mission-Critical NOC & Control Room',
    category: 'Government / Enterprise',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    capacity: '12 – 24 Operators',
    dimensions: '40ft × 30ft (1,200 sq.ft)',
    description: '24/7 continuous operation video wall matrix with multi-window hardware processing and zero-latency IP KVM extension.',
    defaultDisplay: '3×3 55" Bezel-Less Video Wall / 0.9mm MicroLED Canvas',
    defaultAudio: 'Zone-Controlled Operator Public Address & Intercom',
    defaultCamera: '360° Facility Surveillance PTZ Integration',
    defaultControl: 'Extron Quantum Ultra 4K Video Wall Processor',
    defaultLighting: 'Anti-Glare Ergonomic 24/7 Circadian Light Automation',
    defaultAcoustics: 'High-Density Acoustic Absorbers for Low Noise Floor',
    basePriceRange: '₹30 Lakhs - ₹65 Lakhs'
  },
  {
    id: 'healthcare',
    name: 'Medical Simulation & Tele-Health Suite',
    category: 'Healthcare',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    capacity: '10 – 20 Doctors / Students',
    dimensions: '28ft × 20ft (560 sq.ft)',
    description: 'Medical-grade 4K endoscopic visual routing, zero-latency surgical video distribution, and sterile ceiling beamforming capture.',
    defaultDisplay: 'DICOM Part 14 Calibrated 4K Surgical Monitors',
    defaultAudio: 'Sterile Hands-Free Ceiling Voice Ingestion (AEC)',
    defaultCamera: 'Overhead Surgical Light Camera + Room PTZ',
    defaultControl: 'Sterile Touch Glass Medical Control Gateway',
    defaultLighting: 'High CRI 95+ Cleanroom Surgical LED Luminaires',
    defaultAcoustics: 'Antimicrobial Washable Acoustic Surface Panels',
    basePriceRange: '₹20 Lakhs - ₹40 Lakhs'
  }
];

export const SpaceDesigner: React.FC<SpaceDesignerProps> = ({ onStartProject }) => {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>('boardroom');
  const [activePresetMode, setActivePresetMode] = useState<'meeting' | 'presentation' | 'cinema' | 'all-off'>('meeting');

  // Interactive hardware customization options
  const [displayTier, setDisplayTier] = useState<'microled' | 'dual-screen' | 'laser-proj'>('microled');
  const [audioTier, setAudioTier] = useState<'beamforming' | 'table-mics' | 'line-array'>('beamforming');
  const [vcPlatform, setVcPlatform] = useState<'teams' | 'zoom' | 'byom'>('teams');
  const [controlTier, setControlTier] = useState<'crestron' | 'extron' | 'ipad'>('crestron');
  const [acousticsTier, setAcousticsTier] = useState<'premium' | 'standard' | 'reference'>('premium');

  const currentSpace = SPACE_ARCHETYPES.find(s => s.id === selectedSpaceId) || SPACE_ARCHETYPES[0];

  const handleSpaceChange = (id: string) => {
    soundFx.playClick(900);
    setSelectedSpaceId(id);
  };

  const handlePresetChange = (mode: 'meeting' | 'presentation' | 'cinema' | 'all-off') => {
    soundFx.playPowerChime();
    setActivePresetMode(mode);
  };

  const handleExportProposal = () => {
    soundFx.playPowerChime();
    const summary = `
SPACE ARCHETYPE: ${currentSpace.name} (${currentSpace.category})
DIMENSIONS & CAPACITY: ${currentSpace.dimensions} | ${currentSpace.capacity}
SPECIFIED DISPLAY: ${displayTier === 'microled' ? 'Direct-View 8K MicroLED' : displayTier === 'dual-screen' ? 'Dual 85" 4K Commercial Displays' : '4K Laser Projection + ALR Screen'}
SPECIFIED AUDIO: ${audioTier === 'beamforming' ? 'Shure Ceiling Beamforming Array + Q-SYS DSP' : audioTier === 'table-mics' ? 'Wireless Table Mics + DSP' : 'Line Array Loudspeakers'}
CONFERENCING: ${vcPlatform === 'teams' ? 'Microsoft Teams Rooms (MTR Certified)' : vcPlatform === 'zoom' ? 'Zoom Rooms Certified Suite' : 'Wireless BYOM ClickShare'}
CONTROL & AUTOMATION: ${controlTier === 'crestron' ? 'Crestron 4-Series Core + 10.1" Glass Panel' : controlTier === 'extron' ? 'Extron TouchLink Pro' : 'Capacitive iPad Ecosystem'}
ACOUSTIC TREATMENT: ${acousticsTier === 'premium' ? 'Fabric Acoustic Wall Paneling (NRC 0.85)' : acousticsTier === 'reference' ? 'THX/ISF Decoupled Room Shell (RT60 0.28s)' : 'Standard Wall Panels'}
ESTIMATED BUDGET: ${currentSpace.basePriceRange}
    `.trim();

    onStartProject({
      subject: `Custom Space Design Proposal - ${currentSpace.name}`,
      message: `Hello AVN Solutions Team,\n\nI have designed a custom space on your interactive platform:\n\n${summary}\n\nPlease generate an engineering AutoCAD schematic and detailed BOQ quote for my Chennai facility.`,
      scope: currentSpace.name
    });
  };

  return (
    <div className="space-designer-root" id="space-studio">
      {/* Top Banner Header */}
      <div className="designer-top-banner">
        <div className="designer-badge-pill">
          <Sparkles size={13} className="text-cyan" />
          <span>INTERACTIVE SPATIAL ARCHITECTURE STUDIO</span>
        </div>
        <h2 className="designer-grand-title">
          Design Your Space. <span className="designer-cyan-gradient">Visualize The Technology.</span>
        </h2>
        <p className="designer-lead-desc">
          Select your architectural room type, customize display canvas, acoustic beamforming, video conferencing, and smart automation, and preview your turnkey specification in real-time.
        </p>
      </div>

      {/* Step 1: Horizontal Space Archetype Carousel */}
      <div className="designer-archetypes-row">
        <span className="step-tag-label">STEP 01: SELECT YOUR ARCHITECTURAL SPACE</span>
        <div className="archetypes-cards-scroll">
          {SPACE_ARCHETYPES.map((space) => {
            const Icon = space.icon;
            const isSelected = selectedSpaceId === space.id;
            return (
              <button
                key={space.id}
                className={`archetype-select-card ${isSelected ? 'active' : ''}`}
                onClick={() => handleSpaceChange(space.id)}
                data-cursor="explore"
              >
                <div className="card-thumb-image-wrap">
                  <img src={space.image} alt={space.name} className="arch-thumb-img" />
                  <div className="arch-thumb-overlay" />
                  <div className="arch-category-tag">{space.category}</div>
                </div>
                <div className="arch-card-info">
                  <div className="arch-title-row">
                    <Icon size={16} className="text-cyan" />
                    <h4 className="arch-name">{space.name}</h4>
                  </div>
                  <div className="arch-meta-line">
                    <span>{space.capacity}</span>
                    <span>•</span>
                    <span>{space.dimensions}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2 & 3: Interactive Studio Workspace Grid */}
      <div className="designer-workspace-grid">
        {/* Left Column: Visual Architectural Room Stage & Hotspots */}
        <div className="designer-visual-stage-card">
          <div className="stage-hud-bar">
            <div className="hud-space-title-box">
              <span className="hud-label">ACTIVE ROOM ARCHETYPE</span>
              <h3 className="hud-name">{currentSpace.name}</h3>
            </div>

            {/* Room Preset Scene Switcher */}
            <div className="preset-scenes-selector">
              <span className="scenes-label">SIMULATE SCENE:</span>
              <div className="scenes-buttons-group">
                <button
                  className={`scene-btn ${activePresetMode === 'meeting' ? 'active' : ''}`}
                  onClick={() => handlePresetChange('meeting')}
                >
                  Video Call Mode
                </button>
                <button
                  className={`scene-btn ${activePresetMode === 'presentation' ? 'active' : ''}`}
                  onClick={() => handlePresetChange('presentation')}
                >
                  Presentation
                </button>
                <button
                  className={`scene-btn ${activePresetMode === 'cinema' ? 'active' : ''}`}
                  onClick={() => handlePresetChange('cinema')}
                >
                  Cinema / Ambient
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Visual Canvas Container */}
          <div className="interactive-room-canvas">
            <img
              src={currentSpace.image}
              alt={currentSpace.name}
              className={`room-canvas-photo ${activePresetMode}`}
            />
            <div className="room-canvas-lighting-overlay" />

            {/* Interactive Device Hotspot Callouts */}
            <div className="hotspot-callout spot-display">
              <div className="hotspot-pulse-dot" />
              <div className="hotspot-card">
                <Monitor size={14} className="text-cyan" />
                <div>
                  <span className="spot-title">DISPLAY SYSTEM</span>
                  <span className="spot-val">
                    {displayTier === 'microled' ? '8K Fine-Pitch MicroLED' : displayTier === 'dual-screen' ? 'Dual 85" 4K Commercial' : '4K Laser Projection ALR'}
                  </span>
                </div>
              </div>
            </div>

            <div className="hotspot-callout spot-audio">
              <div className="hotspot-pulse-dot" />
              <div className="hotspot-card">
                <Volume2 size={14} className="text-cyan" />
                <div>
                  <span className="spot-title">ACOUSTIC INGESTION</span>
                  <span className="spot-val">
                    {audioTier === 'beamforming' ? 'Shure MXA920 Beamforming (Ceiling)' : audioTier === 'table-mics' ? 'Wireless Dante Boundary Mics' : 'Line Array Loudspeakers'}
                  </span>
                </div>
              </div>
            </div>

            <div className="hotspot-callout spot-camera">
              <div className="hotspot-pulse-dot" />
              <div className="hotspot-card">
                <Camera size={14} className="text-cyan" />
                <div>
                  <span className="spot-title">AI CONFERENCING</span>
                  <span className="spot-val">Dual 4K Auto-Framing PTZ</span>
                </div>
              </div>
            </div>

            <div className="hotspot-callout spot-control">
              <div className="hotspot-pulse-dot" />
              <div className="hotspot-card">
                <Cpu size={14} className="text-cyan" />
                <div>
                  <span className="spot-title">ORCHESTRATION</span>
                  <span className="spot-val">Crestron 4-Series Core + 10" Touch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Engineering Telemetry Bar */}
          <div className="stage-telemetry-metrics">
            <div className="metric-pill-cell">
              <span className="m-cell-label">SPEECH INTELLIGIBILITY</span>
              <span className="m-cell-val text-cyan">STI ≥ 0.78 (Optimal)</span>
            </div>
            <div className="metric-pill-cell">
              <span className="m-cell-label">DISPLAY ACUITY</span>
              <span className="m-cell-val">Snellen 20/20 at 2.5m</span>
            </div>
            <div className="metric-pill-cell">
              <span className="m-cell-label">MACRO SPEED</span>
              <span className="m-cell-val">&lt; 150ms Instant</span>
            </div>
            <div className="metric-pill-cell">
              <span className="m-cell-label">BUDGET ESTIMATE</span>
              <span className="m-cell-val text-cyan">{currentSpace.basePriceRange}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Subsystem Configurator & BOQ Builder */}
        <div className="designer-config-sidebar">
          <div className="config-box-header">
            <Sliders size={16} className="text-cyan" />
            <h3 className="config-box-title">Custom Technology Specification</h3>
          </div>

          <div className="config-options-stack">
            {/* 1. Display Canvas Option */}
            <div className="config-group-block">
              <label className="group-label">1. DISPLAY & VISUAL CANVAS</label>
              <div className="group-pills-row">
                <button
                  className={`spec-choice-btn ${displayTier === 'microled' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(850);
                    setDisplayTier('microled');
                  }}
                >
                  <span className="choice-name">8K Direct-View MicroLED</span>
                  <span className="choice-badge">0.9mm Ultra-Fine</span>
                </button>
                <button
                  className={`spec-choice-btn ${displayTier === 'dual-screen' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(850);
                    setDisplayTier('dual-screen');
                  }}
                >
                  <span className="choice-name">Dual 85" 4K Commercial Displays</span>
                  <span className="choice-badge">Samsung / LG</span>
                </button>
                <button
                  className={`spec-choice-btn ${displayTier === 'laser-proj' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(850);
                    setDisplayTier('laser-proj');
                  }}
                >
                  <span className="choice-name">4K Laser Projection + ALR Canvas</span>
                  <span className="choice-badge">Barco / Panasonic</span>
                </button>
              </div>
            </div>

            {/* 2. Audio & Microphone Option */}
            <div className="config-group-block">
              <label className="group-label">2. MICROPHONES & DSP ACOUSTICS</label>
              <div className="group-pills-row">
                <button
                  className={`spec-choice-btn ${audioTier === 'beamforming' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(900);
                    setAudioTier('beamforming');
                  }}
                >
                  <span className="choice-name">Shure MXA920 Ceiling Beamforming Array</span>
                  <span className="choice-badge">Invisible Steerable Lobes</span>
                </button>
                <button
                  className={`spec-choice-btn ${audioTier === 'table-mics' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(900);
                    setAudioTier('table-mics');
                  }}
                >
                  <span className="choice-name">Wireless Tabletop Boundary Mics</span>
                  <span className="choice-badge">Dante Encrypted</span>
                </button>
                <button
                  className={`spec-choice-btn ${audioTier === 'line-array' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(900);
                    setAudioTier('line-array');
                  }}
                >
                  <span className="choice-name">Bose Pro / Q-SYS Column Array</span>
                  <span className="choice-badge">Auditorium Grade</span>
                </button>
              </div>
            </div>

            {/* 3. UC Conferencing & BYOM */}
            <div className="config-group-block">
              <label className="group-label">3. CONFERENCING & WIRELESS SHARING</label>
              <div className="group-pills-row">
                <button
                  className={`spec-choice-btn ${vcPlatform === 'teams' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(950);
                    setVcPlatform('teams');
                  }}
                >
                  <span className="choice-name">Microsoft Teams Rooms (MTR)</span>
                  <span className="choice-badge">Native Certified</span>
                </button>
                <button
                  className={`spec-choice-btn ${vcPlatform === 'zoom' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(950);
                    setVcPlatform('zoom');
                  }}
                >
                  <span className="choice-name">Zoom Rooms Appliance Suite</span>
                  <span className="choice-badge">One-Touch Join</span>
                </button>
                <button
                  className={`spec-choice-btn ${vcPlatform === 'byom' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(950);
                    setVcPlatform('byom');
                  }}
                >
                  <span className="choice-name">Barco ClickShare CX-50 Wireless BYOM</span>
                  <span className="choice-badge">Universal Laptop</span>
                </button>
              </div>
            </div>

            {/* 4. Control & Logic Engine */}
            <div className="config-group-block">
              <label className="group-label">4. AUTOMATION & TOUCH GLASS INTERFACE</label>
              <div className="group-pills-row">
                <button
                  className={`spec-choice-btn ${controlTier === 'crestron' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(1000);
                    setControlTier('crestron');
                  }}
                >
                  <span className="choice-name">Crestron 4-Series + 10.1" Capacitive Glass</span>
                  <span className="choice-badge">Enterprise Master Logic</span>
                </button>
                <button
                  className={`spec-choice-btn ${controlTier === 'extron' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(1000);
                    setControlTier('extron');
                  }}
                >
                  <span className="choice-name">Extron TouchLink Pro Processor</span>
                  <span className="choice-badge">Pro-AV Architecture</span>
                </button>
              </div>
            </div>

            {/* 5. Acoustic Treatment */}
            <div className="config-group-block">
              <label className="group-label">5. ARCHITECTURAL ACOUSTIC TREATMENT</label>
              <div className="group-pills-row">
                <button
                  className={`spec-choice-btn ${acousticsTier === 'premium' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(900);
                    setAcousticsTier('premium');
                  }}
                >
                  <span className="choice-name">Custom Fabric Wall Panels (NRC 0.85)</span>
                  <span className="choice-badge">Reverberation Control</span>
                </button>
                <button
                  className={`spec-choice-btn ${acousticsTier === 'reference' ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(900);
                    setAcousticsTier('reference');
                  }}
                >
                  <span className="choice-name">THX Decoupled Shell (RT60 0.28s)</span>
                  <span className="choice-badge">Reference Studio Grade</span>
                </button>
              </div>
            </div>
          </div>

          {/* Turnkey Bill of Materials (BOM) Summary Box */}
          <div className="custom-bom-summary-card">
            <div className="bom-header-line">
              <span className="bom-tag">ESTIMATED TURNKEY BOM SPECIFICATION</span>
              <span className="bom-count">14 Subsystems Included</span>
            </div>

            <div className="bom-items-list">
              <div className="bom-item-row">
                <Check size={13} className="text-cyan" />
                <span>OEM Hardware: Samsung / Shure / Crestron / Q-SYS / Barco</span>
              </div>
              <div className="bom-item-row">
                <Check size={13} className="text-cyan" />
                <span>AutoCAD Engineering Schematics & Cable Pull Schedules</span>
              </div>
              <div className="bom-item-row">
                <Check size={13} className="text-cyan" />
                <span>AVIXA CTS-Certified Installation & Laser Alignment in Chennai</span>
              </div>
              <div className="bom-item-row">
                <Check size={13} className="text-cyan" />
                <span>1 Year Priority SLA & AMC Support Included</span>
              </div>
            </div>

            <button
              className="btn-primary export-proposal-btn"
              onClick={handleExportProposal}
              data-cursor="start"
            >
              <span>Export Specification & Request BOQ Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
