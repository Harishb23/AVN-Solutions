import React, { useState } from 'react';
import { Power, Sun, Monitor, Camera, Mic, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './AutomationSim.css';

interface AutomationSimProps {
  onStartProject?: () => void;
}

export const AutomationSim: React.FC<AutomationSimProps> = ({ onStartProject }) => {
  const [meetingActive, setMeetingActive] = useState<boolean>(false);
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);

  // Automation subsystems
  const [state, setState] = useState({
    lighting: '100% Bright (Idle)',
    shades: 'Open',
    display: 'Standby',
    camera: 'Parked',
    mics: 'Muted',
    dsp: 'Idle',
    temp: '24°C'
  });

  const handleStartMeeting = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    setStepIndex(1);

    // Sequence 1: Dim lights & lower motorized shades
    setTimeout(() => {
      setState(s => ({ ...s, lighting: '35% Presentation Dim', shades: 'Motorized Drop (100%)' }));
      setStepIndex(2);
    }, 600);

    // Sequence 2: Power on 4K Direct-View LED Display
    setTimeout(() => {
      setState(s => ({ ...s, display: 'Active (4K HDR Feed)' }));
      setStepIndex(3);
    }, 1300);

    // Sequence 3: AI PTZ Camera un-parks and frames executive table
    setTimeout(() => {
      setState(s => ({ ...s, camera: 'AI Auto-Framing Active' }));
      setStepIndex(4);
    }, 2000);

    // Sequence 4: Ceiling beamforming mics un-mute & DSP AEC online
    setTimeout(() => {
      setState(s => ({ ...s, mics: 'Un-muted (Beamtracking)', dsp: 'AEC Noise Filter 0.00ms' }));
      setStepIndex(5);
    }, 2700);

    // Sequence 5: Complete Room Mode Activated
    setTimeout(() => {
      setMeetingActive(true);
      setIsExecuting(false);
      setStepIndex(6);
    }, 3400);
  };

  const handleResetMeeting = () => {
    setMeetingActive(false);
    setStepIndex(0);
    setState({
      lighting: '100% Bright (Idle)',
      shades: 'Open',
      display: 'Standby',
      camera: 'Parked',
      mics: 'Muted',
      dsp: 'Idle',
      temp: '24°C'
    });
  };

  const macroSteps = [
    { title: 'LIGHTING & SHADES', desc: 'DALI dimming to 35% & motorized acoustic shades drop.' },
    { title: '4K MICROLED WALL', desc: 'Power sequencing via Crestron IP relay & HDMI handshake.' },
    { title: 'AI PTZ CAMERA', desc: 'Auto-framing active presenter and wide-angle roster.' },
    { title: 'CEILING MIC ARRAY', desc: 'Shure MXA920 beamtracking unmuted & AEC engaged.' },
    { title: 'ROOM AUTOMATION ENGAGED', desc: 'Executive environment ready for hybrid presentation.' }
  ];

  return (
    <section className="section-spacing automation-sim-section" id="automation">
      <div className="container-wide">
        <SectionHeading
          badge="WOW 4 — LIVE SIMULATOR"
          title="ONE TOUCH. COMPLETE CONTROL."
          subtitle="Experience the power of custom automation. Click 'START MEETING' below to watch lighting, shades, displays, cameras, and audio synchronize in real-time."
        />

        <div className="automation-console-wrapper glass-panel">
          {/* Top Panel Glass Header */}
          <div className="console-top-hud">
            <div className="hud-brand-box">
              <span className="hud-firmware">AVN TOUCH OS // V4.8.2</span>
              <span className="hud-room-name">EXECUTIVE BOARDROOM 01</span>
            </div>

            <div className="hud-status-badge">
              <span className={`status-dot ${meetingActive ? 'status-dot-active' : ''}`} />
              <span className="hud-mode-text">
                {meetingActive ? 'ROOM MODE: PRESENTATION ACTIVE' : 'ROOM MODE: IDLE'}
              </span>
            </div>
          </div>

          <div className="console-main-layout">
            {/* Left Column: Interactive Touch Control Pad */}
            <div className="virtual-touch-pad">
              <div className="touch-pad-header">
                <span className="touch-tag">VIRTUAL CRESTRON / Q-SYS TOUCH GLASS</span>
              </div>

              <div className="macro-power-action">
                {!meetingActive ? (
                  <button
                    className={`btn-start-macro ${isExecuting ? 'executing' : ''}`}
                    onClick={handleStartMeeting}
                    disabled={isExecuting}
                    data-cursor="start"
                    data-cursor-text="ACTIVATE"
                  >
                    <Power size={28} className="power-icon" />
                    <div className="btn-macro-text">
                      <span className="btn-macro-title">
                        {isExecuting ? 'SEQUENCING HARDWARE...' : 'START MEETING'}
                      </span>
                      <span className="btn-macro-sub">Tap to execute 5-macro room choreography</span>
                    </div>
                  </button>
                ) : (
                  <button
                    className="btn-reset-macro"
                    onClick={handleResetMeeting}
                    data-cursor="explore"
                    data-cursor-text="RESET"
                  >
                    <RotateCcw size={22} />
                    <div className="btn-macro-text">
                      <span className="btn-macro-title">END MEETING & RESET ROOM</span>
                      <span className="btn-macro-sub">Restore baseline lighting & standby displays</span>
                    </div>
                  </button>
                )}
              </div>

              {/* Subsystem Telemetry Nodes */}
              <div className="subsystems-grid">
                <div className={`subsystem-cell ${stepIndex >= 1 ? 'active' : ''}`}>
                  <Sun size={18} className="cell-icon text-cyan" />
                  <div className="cell-content">
                    <span className="cell-label">LIGHTING SCENE</span>
                    <span className="cell-val">{state.lighting}</span>
                  </div>
                </div>

                <div className={`subsystem-cell ${stepIndex >= 2 ? 'active' : ''}`}>
                  <Monitor size={18} className="cell-icon text-cyan" />
                  <div className="cell-content">
                    <span className="cell-label">VIDEO WALL</span>
                    <span className="cell-val">{state.display}</span>
                  </div>
                </div>

                <div className={`subsystem-cell ${stepIndex >= 3 ? 'active' : ''}`}>
                  <Camera size={18} className="cell-icon text-cyan" />
                  <div className="cell-content">
                    <span className="cell-label">AI PTZ CAM</span>
                    <span className="cell-val">{state.camera}</span>
                  </div>
                </div>

                <div className={`subsystem-cell ${stepIndex >= 4 ? 'active' : ''}`}>
                  <Mic size={18} className="cell-icon text-cyan" />
                  <div className="cell-content">
                    <span className="cell-label">BEAMFORMING MICS</span>
                    <span className="cell-val">{state.mics}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Execution Log & Automation Pipeline */}
            <div className="automation-log-panel">
              <span className="log-heading">MACRO EXECUTION PIPELINE</span>

              <div className="log-steps-container">
                {macroSteps.map((m, idx) => {
                  const isDone = stepIndex > idx;
                  const isCurrent = stepIndex === idx + 1;

                  return (
                    <div
                      key={idx}
                      className={`log-step-row ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`}
                    >
                      <div className="log-step-indicator">
                        {isDone ? <CheckCircle2 size={16} className="text-emerald" /> : <span>0{idx + 1}</span>}
                      </div>
                      <div className="log-step-body">
                        <span className="log-step-title">{m.title}</span>
                        <span className="log-step-desc">{m.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="automation-footer-note">
                <ShieldCheck size={16} className="text-cyan" />
                <span>Engineered with dual-redundancy Crestron 4-Series control processors.</span>
                {onStartProject && (
                  <button
                    onClick={onStartProject}
                    style={{ marginLeft: 'auto', color: 'var(--cyan-primary)', fontSize: '0.75rem', fontWeight: 600 }}
                  >
                    SPECIFY THIS SYSTEM →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
