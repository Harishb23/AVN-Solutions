import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Lightbulb, 
  Monitor, 
  Sliders, 
  Camera, 
  Volume2, 
  Thermometer, 
  Laptop, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './SmartSpaceSim.css';

interface SmartSpaceSimProps {
  onStartProject: () => void;
}

interface StepItem {
  id: string;
  name: string;
  subsystem: string;
  icon: any;
  statusText: string;
  stateValue: string;
}

export const SmartSpaceSim: React.FC<SmartSpaceSimProps> = ({ onStartProject }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  const sequenceSteps: StepItem[] = [
    {
      id: 'lighting',
      name: 'Circadian DALI Lighting',
      subsystem: 'LIGHTING',
      icon: Lightbulb,
      statusText: 'Dimming to 40% Executive Conference Preset...',
      stateValue: '40% Lux (4000K Neutral)'
    },
    {
      id: 'shades',
      name: 'Motorized Acoustic Curtains',
      subsystem: 'SHADING',
      icon: Sliders,
      statusText: 'Lowering motorized blackout acoustic blinds...',
      stateValue: 'Closed (100% Blackout)'
    },
    {
      id: 'display',
      name: '8K Direct-View MicroLED',
      subsystem: 'VISUAL',
      icon: Monitor,
      statusText: 'Powering up display canvas with HDMI 2.1 matrix...',
      stateValue: '8K HDR Active (1000 Nits)'
    },
    {
      id: 'camera',
      name: 'AI Director PTZ Cameras',
      subsystem: 'CONFERENCING',
      icon: Camera,
      statusText: 'Initializing optical tracking & auto-framing engine...',
      stateValue: 'Tracking Active (4K60)'
    },
    {
      id: 'mics',
      name: 'Ceiling Beamforming Array',
      subsystem: 'AUDIO',
      icon: Volume2,
      statusText: 'Activating 8 steerable acoustic lobes with AEC DSP...',
      stateValue: 'Unmuted (IntelliMix DSP)'
    },
    {
      id: 'hvac',
      name: 'HVAC & Environmental Core',
      subsystem: 'CLIMATE',
      icon: Thermometer,
      statusText: 'Optimizing room temperature for 18 occupants...',
      stateValue: '22°C (Eco-Adaptive Mode)'
    },
    {
      id: 'presentation',
      name: 'Wireless BYOM & Teams MTR',
      subsystem: 'COLLABORATION',
      icon: Laptop,
      statusText: 'Broadcasting Barco ClickShare & MS Teams calendar...',
      stateValue: 'Ready for One-Touch Join'
    }
  ];

  const handleStartSequence = () => {
    if (isRunning) return;
    soundFx.playPowerChime();
    setIsRunning(true);
    setIsCompleted(false);
    setCurrentStepIndex(0);
  };

  const handleReset = () => {
    soundFx.playClick(800);
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setIsCompleted(false);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isRunning && currentStepIndex >= 0 && currentStepIndex < sequenceSteps.length) {
      timer = setTimeout(() => {
        soundFx.playClick(900 + currentStepIndex * 80);
        if (currentStepIndex + 1 < sequenceSteps.length) {
          setCurrentStepIndex(prev => prev + 1);
        } else {
          setIsCompleted(true);
          setIsRunning(false);
        }
      }, 700);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentStepIndex, sequenceSteps.length]);

  return (
    <section className="smart-space-section" id="smart-space">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">INTELLIGENT ROOM ORCHESTRATION</span>
          </div>
          <h2 className="section-grand-title">
            Make Your Space <span className="title-highlight">Intelligent.</span>
          </h2>
          <p className="section-lead-desc">
            See how custom Crestron & DALI programming unifies lighting, curtains, climate, cameras, displays, and audio into seamless automated meeting presets.
          </p>
        </div>

        {/* Interactive Simulation Console */}
        <div className="simulation-console-card">
          {/* Top Console Action Bar */}
          <div className="console-action-bar">
            <div className="console-title-cluster">
              <span className="sim-tag">INTERACTIVE AUTOMATION TEST BENCH</span>
              <h3 className="sim-name">Executive Boardroom Macro: "START MEETING"</h3>
            </div>

            <div className="console-controls">
              {!isRunning && !isCompleted ? (
                <button
                  className="btn-primary start-sim-btn"
                  onClick={handleStartSequence}
                  data-cursor="start"
                  data-cursor-text="EXECUTE"
                >
                  <Play size={15} fill="currentColor" />
                  <span>START MEETING (TRIGGER MACRO)</span>
                </button>
              ) : isRunning ? (
                <div className="sim-running-indicator">
                  <span className="sim-pulse-dot" />
                  <span>EXECUTING AUTOMATION MACRO...</span>
                </div>
              ) : (
                <button className="btn-secondary reset-sim-btn" onClick={handleReset}>
                  <RotateCcw size={14} className="text-cyan" />
                  <span>Reset Room Simulation</span>
                </button>
              )}
            </div>
          </div>

          {/* Sequential Device Activation Grid */}
          <div className="sim-steps-grid">
            {sequenceSteps.map((step, idx) => {
              const Icon = step.icon;
              const isPast = currentStepIndex > idx || isCompleted;
              const isCurrent = currentStepIndex === idx && isRunning;
              const isPending = currentStepIndex < idx && !isCompleted;

              return (
                <div
                  key={step.id}
                  className={`sim-device-card ${isCurrent ? 'is-activating' : ''} ${isPast ? 'is-active' : ''} ${isPending ? 'is-pending' : ''}`}
                >
                  <div className="device-card-top">
                    <div className="device-icon-wrap">
                      <Icon size={18} />
                    </div>
                    <span className="device-seq">STEP 0{idx + 1}</span>
                  </div>

                  <span className="device-subsystem">{step.subsystem}</span>
                  <h4 className="device-name">{step.name}</h4>

                  <div className="device-status-badge">
                    {isCurrent ? (
                      <span className="status-activating">
                        <span className="spinner-mini" /> {step.statusText}
                      </span>
                    ) : isPast ? (
                      <span className="status-ready">
                        <CheckCircle2 size={12} /> {step.stateValue}
                      </span>
                    ) : (
                      <span className="status-standby">Standby (Awaiting Trigger)</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Completion Celebration Banner */}
          {isCompleted && (
            <div className="sim-complete-banner">
              <div className="complete-text-wrap">
                <div className="complete-badge">
                  <Sparkles size={13} />
                  <span>ROOM FULLY CONFIGURED IN UNDER 5 SECONDS</span>
                </div>
                <h4 className="complete-title">All 7 Subsystems Synchronized & Ready For Video Call</h4>
                <p className="complete-desc">Participants can now walk in, plug in one USB-C cable or tap the touch glass to start high-impact collaboration.</p>
              </div>

              <button
                className="btn-primary complete-cta-btn"
                onClick={() => {
                  soundFx.playPowerChime();
                  onStartProject();
                }}
              >
                <span>Automate Your Facility</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
