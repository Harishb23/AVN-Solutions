import React, { useState } from 'react';
import { Radio, Waves, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import { WaveformCanvas } from '../../components/WaveformCanvas/WaveformCanvas';
import './AudioExperience.css';

interface AudioExperienceProps {
  onStartProject: () => void;
}

export const AudioExperience: React.FC<AudioExperienceProps> = ({ onStartProject }) => {
  const [selectedFreq, setSelectedFreq] = useState<'speech' | 'full' | 'sub' | 'ultra'>('speech');

  const audioFrequencies = [
    { id: 'speech', label: 'SPEECH INTELLIGIBILITY (1 kHz - 4 kHz)', amp: 30, freq: 0.035, desc: 'Optimized for Boardrooms, Municipal Chambers & Academic Lecture Halls where STI > 0.70 is mandatory.' },
    { id: 'full', label: 'FULL SPECTRUM HIGH-SPL (20 Hz - 20 kHz)', amp: 48, freq: 0.02, desc: 'Auditorium concert line-arrays, grand convention ballrooms, and immersive theatrical audio.' },
    { id: 'sub', label: 'LOW FREQUENCY HARMONICS (< 100 Hz)', amp: 65, freq: 0.008, desc: 'Directional cardioid subwoofers engineered to prevent low-end resonance buildup in structural walls.' },
    { id: 'ultra', label: 'DANTE AES67 NETWORK MATRIX', amp: 22, freq: 0.05, desc: 'Ultra-low latency (< 1.5ms) uncompressed 24-bit / 96kHz digital audio routing across IT fiber networks.' }
  ];

  const currentConfig = audioFrequencies.find(f => f.id === selectedFreq) || audioFrequencies[0];

  const audioServices = [
    { title: 'Concert & PA Line Arrays', desc: 'Precision vertical dispersion eliminating ceiling bounce in large halls.' },
    { title: 'Ceiling Beamforming Mic Arrays', desc: 'Steerable microphone lobes tracking moving speakers in real-time.' },
    { title: 'Digital Signal Processors (DSP)', desc: 'AI-driven acoustic echo cancellation, automixing, and noise gating.' },
    { title: 'Multi-Zone BGM & Paging', desc: 'Centralized Dante audio distribution for hotels, campuses, and venues.' }
  ];

  return (
    <section className="section-spacing audio-experience-section" id="audio">
      <div className="container-wide">
        <SectionHeading
          badge="WOW 2 — ACOUSTIC PRECISION"
          title="HEAR THE DIFFERENCE"
          subtitle="Sound is not merely amplified; it is calculated. We eliminate acoustic reflections, calibrate RT60 decay, and guarantee crystal clarity in every seat."
        />

        <div className="audio-experience-grid">
          {/* Left Column: Interactive Frequency Lab Visualizer */}
          <div className="audio-visualizer-card glass-panel" data-cursor="listen" data-cursor-text="LISTEN">
            <div className="card-top-hud">
              <div className="hud-metric">
                <span className="metric-tag">ACOUSTIC FREQUENCY ANALYZER</span>
                <span className="metric-val text-cyan">LIVE SIMULATION</span>
              </div>
              <div className="eq-container">
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
              </div>
            </div>

            {/* Live Interactive Waveform Canvas */}
            <div className="waveform-display-box">
              <WaveformCanvas
                amplitude={currentConfig.amp}
                frequency={currentConfig.freq}
                color="#00F0FF"
                bands={5}
                height={180}
              />
              <div className="canvas-crosshairs">
                <div className="ch-line-h" />
                <div className="ch-line-v" />
                <span className="ch-label">RTA-96K // 0.00ms JITTER</span>
              </div>
            </div>

            {/* Frequency Selector Buttons */}
            <div className="freq-selector-tray">
              <span className="tray-label">SELECT ACOUSTIC PROFILE:</span>
              <div className="freq-buttons-row">
                {audioFrequencies.map(f => (
                  <button
                    key={f.id}
                    className={`freq-mode-btn ${selectedFreq === f.id ? 'active' : ''}`}
                    onClick={() => setSelectedFreq(f.id as any)}
                  >
                    {f.id.toUpperCase()} MODE
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Profile Telemetry */}
            <div className="freq-description-box">
              <div className="freq-title-row">
                <Radio size={16} className="text-cyan" />
                <span className="freq-title">{currentConfig.label}</span>
              </div>
              <p className="freq-desc">{currentConfig.desc}</p>
            </div>
          </div>

          {/* Right Column: Audio Engineering Capabilities */}
          <div className="audio-capabilities-column">
            <div className="capabilities-header">
              <span className="tech-badge">
                <Waves size={14} className="text-cyan" />
                COMPUTATIONAL ACOUSTICS
              </span>
              <h3 className="capabilities-title text-gradient-white">
                Engineered for 100% Speech Intelligibility
              </h3>
              <p className="capabilities-lead">
                Poor room acoustics cannot be fixed by louder speakers. We deploy computational EASE boundary modeling, calibrate DSP filter coefficients, and specify steerable transducer arrays tailored to physical room geometries.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="audio-services-list">
              {audioServices.map((item, idx) => (
                <div key={idx} className="audio-service-card">
                  <div className="service-card-left">
                    <span className="service-num">0{idx + 1}</span>
                  </div>
                  <div className="service-card-body">
                    <h4 className="service-name">{item.title}</h4>
                    <p className="service-detail">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="audio-cta-wrap">
              <button
                className="btn-primary"
                onClick={onStartProject}
                data-cursor="start"
              >
                <span>ENGINEER YOUR ACOUSTIC SPACE</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
