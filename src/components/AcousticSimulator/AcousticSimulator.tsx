import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './AcousticSimulator.css';

export const AcousticSimulator: React.FC = () => {
  const [isTreated, setIsTreated] = useState<boolean>(true);
  const [isPlayingSound, setIsPlayingSound] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Acoustic parameters
  const rt60 = isTreated ? '0.45s (Broadcast Quality)' : '1.92s (Severe Echo)';
  const stiScore = isTreated ? '0.88 // EXCELLENT' : '0.42 // POOR INTELLIGIBILITY';
  const flutterEcho = isTreated ? 'Eliminated (-96%)' : 'High Flutters (+34dB)';
  const ncRating = isTreated ? 'NC-25 (Quiet Conference)' : 'NC-45 (Noisy)';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 200);

    let time = 0;

    const render = () => {
      time += 0.04;
      ctx.clearRect(0, 0, width, height);

      // Grid Lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Reverberation Decay Waveform
      ctx.beginPath();
      const centerY = height / 2;
      const decayFactor = isTreated ? 0.02 : 0.0035;
      const waveColor = isTreated ? '#00f0ff' : '#f43f5e';

      ctx.strokeStyle = waveColor;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = waveColor;
      ctx.shadowBlur = 10;

      for (let x = 0; x < width; x++) {
        const decay = Math.exp(-x * decayFactor);
        const freq1 = Math.sin(x * 0.08 + time * 2);
        const freq2 = Math.cos(x * 0.16 - time);
        const noise = (Math.random() - 0.5) * (isTreated ? 2 : 12);
        const amp = (freq1 * 40 + freq2 * 20 + noise) * decay;

        const y = centerY + amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw STI Target Threshold Line
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.2;
      ctx.moveTo(0, centerY - (isTreated ? 10 : 35));
      ctx.lineTo(width, centerY - (isTreated ? 10 : 35));
      ctx.stroke();
      ctx.setLineDash([]);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isTreated]);

  // Audio preview simulation via Web Audio
  const playImpulseTest = () => {
    if (isPlayingSound) return;
    setIsPlayingSound(true);
    soundFx.playClick(isTreated ? 1200 : 400);

    setTimeout(() => {
      setIsPlayingSound(false);
    }, isTreated ? 600 : 2000);
  };

  return (
    <div className="acoustic-sim-panel glass-panel">
      <div className="acoustic-top-bar">
        <div className="acoustic-title-box">
          <div className="glass-pill">
            <Volume2 size={13} />
            <span>ACOUSTIC SIMULATOR</span>
          </div>
          <h3 className="acoustic-heading">RT60 & Speech Intelligibility Engine</h3>
          <p className="acoustic-sub">
            Toggle between untreated drywall vs AVN precision acoustic paneling to observe real-time reverberation decay curves and STI ratings.
          </p>
        </div>

        {/* Room State Toggle */}
        <div className="acoustic-toggle-group">
          <button
            className={`acoustic-state-btn ${!isTreated ? 'active-untreated' : ''}`}
            onClick={() => {
              soundFx.playClick(500);
              setIsTreated(false);
            }}
            data-cursor="explore"
          >
            <ShieldAlert size={14} />
            <span>UNTREATED RAW ROOM</span>
          </button>

          <button
            className={`acoustic-state-btn ${isTreated ? 'active-treated' : ''}`}
            onClick={() => {
              soundFx.playClick(900);
              setIsTreated(true);
            }}
            data-cursor="explore"
          >
            <CheckCircle2 size={14} />
            <span>AVN TREATED ROOM (NRC 0.85)</span>
          </button>
        </div>
      </div>

      {/* Waveform Spectrogram Canvas */}
      <div className="acoustic-canvas-wrapper">
        <div className="canvas-telemetry-overlay">
          <span className="overlay-badge">
            {isTreated ? 'CALIBRATED // OPTIMAL DECAY' : 'WARNING // SEVERE REVERBERATION'}
          </span>
          <span className="overlay-freq">FREQUENCY RANGE: 125Hz - 8000Hz</span>
        </div>
        <canvas ref={canvasRef} className="acoustic-canvas" />
      </div>

      {/* Telemetry Metrics Grid */}
      <div className="acoustic-metrics-grid">
        <div className="acoustic-metric-card">
          <span className="metric-label">RT60 REVERBERATION DECAY</span>
          <span className={`metric-value ${isTreated ? 'text-cyan' : 'text-danger'}`}>{rt60}</span>
          <span className="metric-desc">Target standard for conference spaces is &lt; 0.60s</span>
        </div>

        <div className="acoustic-metric-card">
          <span className="metric-label">SPEECH TRANSMISSION INDEX (STI)</span>
          <span className={`metric-value ${isTreated ? 'text-emerald' : 'text-danger'}`}>{stiScore}</span>
          <span className="metric-desc">Measures vocal clarity during video calls</span>
        </div>

        <div className="acoustic-metric-card">
          <span className="metric-label">FLUTTER ECHO SUPPRESSION</span>
          <span className={`metric-value ${isTreated ? 'text-cyan' : 'text-danger'}`}>{flutterEcho}</span>
          <span className="metric-desc">Mitigates hard parallel wall reflections</span>
        </div>

        <div className="acoustic-metric-card">
          <span className="metric-label">NOISE CRITERIA (NC)</span>
          <span className={`metric-value ${isTreated ? 'text-emerald' : 'text-danger'}`}>{ncRating}</span>
          <span className="metric-desc">HVAC and ambient noise isolation tier</span>
        </div>
      </div>

      {/* Impulse Test Trigger */}
      <div className="acoustic-footer-actions">
        <button
          className={`btn-secondary impulse-btn ${isPlayingSound ? 'playing' : ''}`}
          onClick={playImpulseTest}
          disabled={isPlayingSound}
          data-cursor="listen"
          data-cursor-text="TEST"
        >
          <Play size={15} className="text-cyan" />
          <span>{isPlayingSound ? 'MEASURING IMPULSE RESPONSE...' : 'PLAY ACOUSTIC IMPULSE TEST'}</span>
        </button>

        <span className="acoustic-compliance-tag">
          ASTM C423 & ISO 3382-2 Compliance Guaranteed
        </span>
      </div>
    </div>
  );
};
