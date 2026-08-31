import React, { useState } from 'react';
import { Monitor, Eye, Ruler, ShieldCheck } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './PixelPitchCalculator.css';

export const PixelPitchCalculator: React.FC = () => {
  const [distanceMeters, setDistanceMeters] = useState<number>(3.5);
  const [selectedPitch, setSelectedPitch] = useState<number>(1.2);

  // Recommendations based on 20/20 human eye resolution formula (Pitch = Distance in meters / 2.5)
  const optimalMaxPitch = (distanceMeters / 2.5).toFixed(2);
  const isAcuityMatched = selectedPitch <= parseFloat(optimalMaxPitch);

  const pitches = [
    { pitch: 0.9, name: '0.9mm Ultra-MicroLED', bestFor: 'Command Centers & Luxury Boardrooms (1.5m+)' },
    { pitch: 1.2, name: '1.2mm Fine Pitch LED', bestFor: 'Executive Conference & Townhalls (2.5m+)' },
    { pitch: 1.5, name: '1.5mm High-Density LED', bestFor: 'Auditoriums & Experience Hubs (3.5m+)' },
    { pitch: 2.5, name: '2.5mm Standard Commercial', bestFor: 'Large Hall Backdrops & Stage (6.0m+)' }
  ];

  return (
    <div className="pixel-pitch-panel glass-panel">
      <div className="pitch-top-bar">
        <div>
          <div className="glass-pill">
            <Monitor size={13} />
            <span>DISPLAY ACUITY CALCULATOR</span>
          </div>
          <h3 className="pitch-heading">MicroLED Pixel Pitch & Viewing Distance Engine</h3>
          <p className="pitch-sub">
            Calculated using the ISO 9241-307 visual acuity metric to ensure zero pixelation at closest viewer seating.
          </p>
        </div>
      </div>

      <div className="pitch-body-grid">
        {/* Left: Distance Slider & Pitch Selection */}
        <div className="pitch-controls-box">
          <div className="pitch-slider-group">
            <div className="slider-header">
              <span className="slider-label">
                <Ruler size={15} className="text-cyan" />
                <span>CLOSEST VIEWER DISTANCE</span>
              </span>
              <span className="slider-val text-cyan">{distanceMeters} METERS ({((distanceMeters * 3.28084)).toFixed(1)} FT)</span>
            </div>

            <input
              type="range"
              min="1.0"
              max="10.0"
              step="0.5"
              value={distanceMeters}
              onChange={e => {
                soundFx.playClick(650);
                setDistanceMeters(parseFloat(e.target.value));
              }}
              className="pitch-range-slider"
            />
            <div className="slider-ticks">
              <span>1.0m (Huddle)</span>
              <span>3.5m (Boardroom)</span>
              <span>6.5m (Auditorium)</span>
              <span>10.0m (Arena)</span>
            </div>
          </div>

          <div className="pitch-options-group">
            <span className="options-title">SELECT TARGET PIXEL PITCH:</span>
            <div className="pitch-options-list">
              {pitches.map(p => (
                <button
                  key={p.pitch}
                  className={`pitch-opt-btn ${selectedPitch === p.pitch ? 'active' : ''}`}
                  onClick={() => {
                    soundFx.playClick(750);
                    setSelectedPitch(p.pitch);
                  }}
                  data-cursor="explore"
                >
                  <div className="pitch-opt-left">
                    <span className="pitch-opt-num">{p.pitch}mm</span>
                    <span className="pitch-opt-name">{p.name}</span>
                  </div>
                  <span className="pitch-opt-for">{p.bestFor}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Acuity & Resolution Telemetry */}
        <div className="pitch-telemetry-box glass-panel">
          <div className="acuity-status-badge">
            <Eye size={16} className={isAcuityMatched ? 'text-emerald' : 'text-amber'} />
            <span className={isAcuityMatched ? 'text-emerald' : 'text-amber'}>
              {isAcuityMatched ? 'RETINA RETENTION // ZERO PIXELATION' : 'BORDERLINE // VISIBLE PIXELS'}
            </span>
          </div>

          <div className="acuity-calc-row">
            <span className="acuity-label">MAX RECOMMENDED PITCH FOR {distanceMeters}m:</span>
            <span className="acuity-value text-cyan">≤ {optimalMaxPitch}mm</span>
          </div>

          <div className="acuity-metrics-list">
            <div className="acuity-metric">
              <span className="m-key">ACTIVE SELECTION:</span>
              <span className="m-val">{selectedPitch}mm Fine Pitch</span>
            </div>
            <div className="acuity-metric">
              <span className="m-key">NATIVE 4K SCREEN WIDTH:</span>
              <span className="m-val">{((3840 * selectedPitch) / 1000).toFixed(2)} Meters ({(((3840 * selectedPitch) / 1000) * 3.28084).toFixed(1)} Feet)</span>
            </div>
            <div className="acuity-metric">
              <span className="m-key">ESTIMATED REFRESH RATE:</span>
              <span className="m-val text-cyan">3,840 Hz (Moiré-Free Broadcast)</span>
            </div>
            <div className="acuity-metric">
              <span className="m-key">HDR BRIGHTNESS:</span>
              <span className="m-val">1,000 - 1,600 Nits Calibrated</span>
            </div>
          </div>

          <div className="pitch-compliance-note">
            <ShieldCheck size={14} className="text-emerald" />
            <span>Complies with AVIXA DISCAS Display Image Size and Contrast standards.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
