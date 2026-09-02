import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Lightbulb, 
  Sliders, 
  Monitor, 
  Camera, 
  Volume2, 
  Thermometer, 
  Laptop, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SmartSpaceSim.css';

interface SmartSpaceSimProps {
  onStartProject: () => void;
}

interface AutomationStep {
  number: string;
  subsystem: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  statusBadge: string;
}

export const SmartSpaceSim: React.FC<SmartSpaceSimProps> = ({ onStartProject }) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  const steps: AutomationStep[] = [
    {
      number: '01',
      subsystem: 'LIGHTING',
      title: 'Lighting',
      description: 'Workspace lighting adjusts automatically to optimal 4000K presentation preset.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1400&q=80',
      statusBadge: 'Circadian DALI Active • 40% Lux'
    },
    {
      number: '02',
      subsystem: 'SHADING',
      title: 'Shading',
      description: 'Motorized curtains and acoustic blackout shades position themselves silently.',
      icon: Sliders,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
      statusBadge: 'Acoustic Blinds Lowered • Zero Glare'
    },
    {
      number: '03',
      subsystem: 'DISPLAY',
      title: 'Display',
      description: 'Ultra-HD presentation video wall powers on with direct HDMI/IP matrix routing.',
      icon: Monitor,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80',
      statusBadge: 'Direct-View MicroLED Active • 4K HDR'
    },
    {
      number: '04',
      subsystem: 'CONFERENCING',
      title: 'Conferencing',
      description: 'Camera and meeting systems initialize optical auto-framing and voice tracking.',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1400&q=80',
      statusBadge: 'AI Auto-Framing PTZ Online'
    },
    {
      number: '05',
      title: 'Audio',
      subsystem: 'AUDIO',
      description: 'Microphones and speakers configure steerable beam lobes and echo cancellation.',
      icon: Volume2,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80',
      statusBadge: 'Dante DSP Unmuted • AEC Active'
    },
    {
      number: '06',
      subsystem: 'CLIMATE',
      title: 'Climate',
      description: 'Room temperature adjusts automatically for executive occupancy comfort.',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80',
      statusBadge: 'HVAC Stabilized • 22°C Adaptive'
    },
    {
      number: '07',
      subsystem: 'COLLABORATION',
      title: 'Collaboration',
      description: 'Wireless presentation and one-touch conferencing join become instantly available.',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80',
      statusBadge: 'One-Touch Join • BYOM Ready'
    }
  ];

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlayingSequence, setIsPlayingSequence] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const hasAutoTriggeredRef = React.useRef<boolean>(false);

  const currentStep = steps[activeStepIndex] || steps[0];

  // Auto trigger sequence when entering viewport once
  useEffect(() => {
    if (isRevealed && !hasAutoTriggeredRef.current) {
      hasAutoTriggeredRef.current = true;
      const timeoutId = setTimeout(() => {
        setIsPlayingSequence(true);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isRevealed]);

  const handleSelectStep = (idx: number) => {
    soundFx.playClick(900 + idx * 30);
    setIsPlayingSequence(false); // Pause sequence on manual click
    setActiveStepIndex(idx);
  };

  const handleStartExperience = () => {
    soundFx.playPowerChime();
    setIsPlayingSequence(true);
    setIsCompleted(false);
    setActiveStepIndex(0);
  };

  const handleReset = () => {
    soundFx.playClick(800);
    setIsPlayingSequence(false);
    setIsCompleted(false);
    setActiveStepIndex(0);
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isPlayingSequence && activeStepIndex < steps.length) {
      timer = setTimeout(() => {
        soundFx.playClick(950 + activeStepIndex * 40);
        if (activeStepIndex + 1 < steps.length) {
          setActiveStepIndex(prev => prev + 1);
        } else {
          setIsCompleted(true);
          setIsPlayingSequence(false);
        }
      }, 600); // 600ms per step as specified in requirements
    }
    return () => clearTimeout(timer);
  }, [isPlayingSequence, activeStepIndex, steps.length]);

  return (
    <section 
      ref={ref}
      className={`automation-experience-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="smart-space"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-head-left">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-line" />
            <span>INTELLIGENT AUTOMATION</span>
          </div>
          <h2 className="section-grand-title">
            One command. <br />
            <span className="title-highlight">Everything ready.</span>
          </h2>
          <p className="section-lead-desc">
            See how intelligent automation prepares a meeting space before the first person enters.
          </p>
        </div>

        {/* 2-Column Room Experience Layout */}
        <div className="automation-experience-layout">
          {/* LEFT: Large Boardroom Visual Experience Canvas with Crossfading */}
          <div className="automation-visual-stage">
            <div className="visual-stage-card hover-card-lift">
              <div className="visual-media-frame">
                {steps.map((s, idx) => (
                  <img
                    key={s.number}
                    src={s.image}
                    alt={s.title}
                    className={`visual-stage-img image-crossfade ${activeStepIndex === idx ? 'active-image' : ''}`}
                    loading="lazy"
                  />
                ))}
                
                {/* Active Subsystem Indicator */}
                <div className="visual-live-indicator">
                  <span className="live-dot" />
                  <span className="live-text">{currentStep.statusBadge}</span>
                </div>
              </div>

              <div className="visual-stage-footer">
                <div className="stage-step-meta">
                  <span className="stage-seq">STAGE {currentStep.number} OF 07</span>
                  <h3 className="stage-step-title">{currentStep.subsystem}</h3>
                  <p className="stage-step-desc">{currentStep.description}</p>
                </div>

                <div className="stage-trigger-controls">
                  {!isPlayingSequence && !isCompleted ? (
                    <button
                      className="btn-primary start-experience-btn"
                      onClick={handleStartExperience}
                    >
                      <Play size={15} fill="currentColor" />
                      <span>See the experience</span>
                    </button>
                  ) : isPlayingSequence ? (
                    <div className="experience-running-tag">
                      <span className="running-dot" />
                      <span>Synchronizing space ({activeStepIndex + 1}/7)...</span>
                    </div>
                  ) : (
                    <div className="experience-done-group">
                      <button className="btn-secondary reset-exp-btn" onClick={handleReset}>
                        <RotateCcw size={14} />
                        <span>Replay</span>
                      </button>
                      <button className="btn-primary" onClick={onStartProject}>
                        <span>Automate Your Facility</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Sequential Steps */}
          <div className="automation-steps-list">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStepIndex === idx;
              const isPassed = activeStepIndex >= idx || isCompleted;

              return (
                <div
                  key={step.number}
                  className={`automation-step-row ${isSelected ? 'is-active is-active-indicator' : ''} ${isPassed ? 'is-passed' : ''}`}
                  onClick={() => handleSelectStep(idx)}
                  onMouseEnter={() => !isPlayingSequence && handleSelectStep(idx)}
                  role="button"
                  tabIndex={0}
                >
                  {/* Subtle Vertical Indicator */}
                  <span className="vertical-indicator-bar" aria-hidden="true" />

                  <div className="step-num-col">
                    <span className="step-num">{step.number}</span>
                  </div>

                  <div className="step-icon-col">
                    <div className="step-icon-bubble">
                      <Icon size={16} />
                    </div>
                  </div>

                  <div className="step-info-col">
                    <div className="step-header-line">
                      <span className="step-subsystem">{step.subsystem}</span>
                      {isPassed && <CheckCircle2 size={15} className="text-emerald step-check-icon" />}
                    </div>
                    <p className="step-desc-text">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
