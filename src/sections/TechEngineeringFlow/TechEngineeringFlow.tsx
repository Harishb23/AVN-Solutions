import React, { useState } from 'react';
import { 
  Laptop, 
  Cpu, 
  Network, 
  Monitor, 
  Sliders, 
  ArrowRight, 
  Sparkles, 
  Radio, 
  CheckCircle2 
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './TechEngineeringFlow.css';

interface TechEngineeringFlowProps {
  onStartProject: () => void;
}

type SignalStageKey = 'source' | 'processing' | 'distribution' | 'endpoints' | 'control';

interface SignalStageData {
  id: SignalStageKey;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  specs: { label: string; value: string }[];
}

const SIGNAL_STAGES: Record<SignalStageKey, SignalStageData> = {
  source: {
    id: 'source',
    number: '01',
    title: 'SOURCE INGESTION',
    subtitle: 'High-Resolution Input Capture',
    description: 'Capturing pristine signals from 4K PTZ broadcast cameras, beamforming microphone arrays, HDMI 2.1 laptop feeds, and wireless BYOM presentation buttons.',
    technologies: ['4K / 8K Video', 'Wireless Collaboration (Barco)', 'Shure Ceiling Beamforming Mics', 'USB-C DP Alt Mode + 100W PD'],
    specs: [
      { label: 'Signal Bandwidth', value: '48 Gbps HDMI 2.1' },
      { label: 'Audio Ingestion', value: '24-bit / 96kHz Dante' },
      { label: 'Wireless Latency', value: '< 25ms Real-Time' }
    ]
  },
  processing: {
    id: 'processing',
    number: '02',
    title: 'DSP & MATRIX PROCESSING',
    subtitle: 'Acoustic Algorithms & Video Scaling',
    description: 'Hardware Digital Signal Processing (DSP) executing multi-channel Acoustic Echo Cancellation (AEC), noise suppression, and real-time 4K video hardware scaling.',
    technologies: ['DSP IntelliMix / Q-SYS', 'Acoustic Echo Cancellation (AEC)', 'Hardware Windowing Processors', 'Automated Microphone Mixing (Automix)'],
    specs: [
      { label: 'AEC Latency', value: '< 1.5ms Sub-frame' },
      { label: 'Processing Depth', value: '64-Bit Floating Point' },
      { label: 'Noise Rejection', value: '-28 dB Dynamic' }
    ]
  },
  distribution: {
    id: 'distribution',
    number: '03',
    title: 'ZERO-LATENCY DISTRIBUTION',
    subtitle: 'Enterprise 10G IP Transport',
    description: 'Distributing uncompressed 4K60 4:4:4 HDR video and multi-channel Dante audio across standard Cat6A copper and multi-mode fiber with sub-millisecond latency.',
    technologies: ['AV-over-IP (SDVoE / 10G)', 'Dante / AES67 Digital Audio', 'HDBaseT 3.0', 'PoE+ / PoE++ Power Delivery'],
    specs: [
      { label: 'Glass-to-Glass Latency', value: '0.04ms True Zero' },
      { label: 'Network Backbone', value: '10 Gbps Ethernet' },
      { label: 'Channel Capacity', value: '512 × 512 Dante Matrix' }
    ]
  },
  endpoints: {
    id: 'endpoints',
    number: '04',
    title: 'DISPLAY & ACOUSTIC ENDPOINTS',
    subtitle: 'Human-Scale Visual & Audio Immersion',
    description: 'Delivering the processed experience through direct-view 0.9mm MicroLED walls, laser-blended projection, and point-source line arrays tuned for uniform SPL.',
    technologies: ['Direct-View MicroLED', '4K Laser Projection Mapping', 'Dolby Atmos Spatial Audio', 'Digital Signage Networks'],
    specs: [
      { label: 'Visual Clarity', value: 'Snellen 20/20 Optimal' },
      { label: 'Uniform Coverage', value: '±1.5 dB Across All Seats' },
      { label: 'Color Gamut', value: '110% DCI-P3 Rec.2020' }
    ]
  },
  control: {
    id: 'control',
    number: '05',
    title: 'CENTRALIZED ORCHESTRATION',
    subtitle: 'One-Touch Intelligent Automation',
    description: 'Crestron and Extron control engines unifying room lighting scenes, motorized window shades, HVAC climate, and display routing into an intuitive capacitive glass interface.',
    technologies: ['Crestron 4-Series Core', 'DALI-2 Lighting Gateway', 'Motorized Drapery & Screen Control', 'Room Scheduling / BACnet IoT'],
    specs: [
      { label: 'Macro Speed', value: '< 150ms Instant Recall' },
      { label: 'Security Topo', value: '802.1X / TLS 1.3' },
      { label: 'Energy Savings', value: 'Up to 35% with Occupancy' }
    ]
  }
};

export const TechEngineeringFlow: React.FC<TechEngineeringFlowProps> = ({ onStartProject }) => {
  const [activeStage, setActiveStage] = useState<SignalStageKey>('distribution');

  const currentStage = SIGNAL_STAGES[activeStage];

  const stageKeys: SignalStageKey[] = ['source', 'processing', 'distribution', 'endpoints', 'control'];
  const stageIcons = {
    source: Laptop,
    processing: Cpu,
    distribution: Network,
    endpoints: Monitor,
    control: Sliders
  };

  const techChips = [
    '4K / 8K AV',
    'HDBaseT 3.0',
    'AV-over-IP 10G',
    'Dante / AES67',
    'DSP IntelliMix',
    'PoE++ Ultra90',
    'Wireless BYOM',
    'Microsoft Teams MTR',
    'Digital Signage CMS',
    'Crestron 4-Series',
    'DALI-2 Lighting',
    'BACnet / IoT'
  ];

  return (
    <section className="tech-engineering-section dark-tech-zone" id="engineering-flow">
      <div className="container-wide">
        {/* Dark Tech Section Header */}
        <div className="tech-head-center">
          <div className="tech-eyebrow-badge">
            <Radio size={13} className="text-cyan pulse-radar" />
            <span>SYSTEM TOPOLOGY & SIGNAL FLOW ARCHITECTURE</span>
          </div>
          <h2 className="tech-grand-headline">
            Behind Every Great AV Experience{' '}
            <span className="tech-cyan-gradient">Is Good Engineering.</span>
          </h2>
          <p className="tech-lead-summary">
            We map room geometry, acoustic reflections, and network bandwidth to create resilient signal flow topologies that guarantee zero latency and 99.99% operational uptime.
          </p>
        </div>

        {/* Glowing Technology Chips Cloud */}
        <div className="tech-chips-cloud">
          {techChips.map((chip, idx) => (
            <div key={idx} className="glowing-tech-chip">
              <Sparkles size={11} className="text-cyan" />
              <span>{chip}</span>
            </div>
          ))}
        </div>

        {/* 5-Stage Animated Signal Flow Diagram */}
        <div className="tech-diagram-container">
          <div className="diagram-stepper-bar">
            {stageKeys.map((key, idx) => {
              const StageIcon = stageIcons[key];
              const isSelected = activeStage === key;
              return (
                <button
                  key={key}
                  className={`diagram-stage-step ${isSelected ? 'is-active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(900 + idx * 100);
                    setActiveStage(key);
                  }}
                >
                  <div className="step-circle">
                    <StageIcon size={16} />
                  </div>
                  <div className="step-text-col">
                    <span className="step-idx">0{idx + 1}</span>
                    <span className="step-name">{SIGNAL_STAGES[key].title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Signal Stage Interactive Inspection Card */}
          <div className="stage-inspection-card">
            <div className="inspection-left">
              <div className="stage-num-tag">SIGNAL FLOW STAGE {currentStage.number} OF 05</div>
              <h3 className="inspection-title">{currentStage.title}</h3>
              <span className="inspection-subtitle">{currentStage.subtitle}</span>
              <p className="inspection-desc">{currentStage.description}</p>

              {/* Technologies in this stage */}
              <div className="inspection-technologies">
                <span className="tech-list-label">DEPLOYED HARDWARE & STANDARDS:</span>
                <div className="tech-chips-mini">
                  {currentStage.technologies.map((t, i) => (
                    <span key={i} className="chip-mini">
                      <CheckCircle2 size={12} className="text-cyan" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="inspection-right">
              <span className="telemetry-box-label">ENGINEERING BENCHMARKS</span>
              <div className="benchmarks-grid">
                {currentStage.specs.map((spec, i) => (
                  <div key={i} className="benchmark-tile">
                    <span className="bm-label">{spec.label}</span>
                    <span className="bm-value">{spec.value}</span>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary inspection-cta-btn"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Request Signal Schematic for Your Space</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
