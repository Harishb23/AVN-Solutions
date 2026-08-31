import React, { useState } from 'react';
import { Volume2, VolumeX, ShieldCheck, PhoneCall } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './TopStatusBar.css';

interface TopStatusBarProps {
  onOpenCommandPalette: () => void;
}

export const TopStatusBar: React.FC<TopStatusBarProps> = () => {
  const [isMuted, setIsMuted] = useState<boolean>(soundFx.getMuted());

  const handleToggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="top-status-bar">
      <div className="container-wide top-status-inner">
        {/* Left: Operational Status */}
        <div className="status-left">
          <div className="telemetry-badge">
            <span className="live-pulse-dot" />
            <span className="telemetry-text">CHENNAI INTEGRATION FACILITY // SYSTEMS ONLINE</span>
          </div>

          <div className="status-divider hide-mobile" />

          <div className="telemetry-item hide-mobile">
            <ShieldCheck size={12} className="status-icon text-emerald" />
            <span>AVIXA CTS-D & CTS-I CERTIFIED</span>
          </div>
        </div>

        {/* Right: Direct Phone & Audio FX Toggle */}
        <div className="status-right">
          <a href="tel:04424501688" className="status-phone-link hide-mobile">
            <PhoneCall size={11} className="text-cyan" />
            <span>DIRECT LINE: 044 2450 1688</span>
          </a>

          <button
            className="status-action-btn sound-toggle"
            onClick={handleToggleSound}
            title={isMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            aria-label="Toggle sound feedback"
          >
            {isMuted ? (
              <>
                <VolumeX size={12} className="text-dim" />
                <span className="action-btn-label">SFX OFF</span>
              </>
            ) : (
              <>
                <Volume2 size={12} className="text-cyan" />
                <span className="action-btn-label text-cyan">SFX ON</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
