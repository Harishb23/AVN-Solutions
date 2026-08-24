import React, { useState } from 'react';
import { Video, Mic, Cast, MonitorCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../components/SectionHeading/SectionHeading';
import './Collaboration.css';

interface CollaborationProps {
  onStartProject: () => void;
}

export const Collaboration: React.FC<CollaborationProps> = ({ onStartProject }) => {
  const [activeNode, setActiveNode] = useState<string>('camera');

  const nodes = [
    {
      id: 'camera',
      name: 'AI Director 4K PTZ',
      icon: Video,
      pos: { top: '22%', left: '48%' },
      tag: 'VISUAL INGESTION',
      headline: 'Multi-Camera AI Speaker Framing',
      description: 'Neural-network powered cameras dynamically recognize active presenters, seamlessly switching from panoramic room views to tight executive framing with zero manual control.'
    },
    {
      id: 'audio',
      name: 'Ceiling Beamforming Mic',
      icon: Mic,
      pos: { top: '35%', left: '26%' },
      tag: 'ACOUSTIC UPLINK',
      headline: '360° Steerable Beamtracking Array',
      description: 'Up to 8 discrete acoustic lobes isolate voices and reject HVAC/keyboard noise with sub-millisecond adaptive echo cancellation (AEC).'
    },
    {
      id: 'display',
      name: 'Dual 4K Front of Room',
      icon: MonitorCheck,
      pos: { top: '48%', left: '72%' },
      tag: 'CONTENT & ROSTER',
      headline: 'Front Row Signature Display Layout',
      description: 'Dedicated screen real estate separates live remote attendees at natural eye level from presentation spreadsheets and video feeds.'
    },
    {
      id: 'touch',
      name: 'Tabletop Touch Console',
      icon: Cast,
      pos: { top: '70%', left: '50%' },
      tag: 'UNIFIED CONTROL',
      headline: 'One-Touch Meeting Initiation',
      description: 'Synchronized calendar integration allows instant meeting entry with one tap for Microsoft Teams Rooms, Zoom Rooms, and Webex.'
    }
  ];

  const currentNode = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <section className="section-spacing collaboration-section" id="collaboration">
      <div className="container-wide">
        <SectionHeading
          badge="UNIFIED COLLABORATION"
          title="CONNECT WITHOUT LIMITS"
          subtitle="We eliminate hybrid meeting friction through certified Microsoft Teams & Zoom Rooms engineered with intelligent camera tracking and acoustic parity."
        />

        <div className="collaboration-stage-grid">
          {/* Interactive Topology Visualizer */}
          <div className="topology-viewport glass-panel" data-cursor="explore" data-cursor-text="INTERACT">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
              alt="Enterprise Hybrid Meeting Room"
              className="topology-bg-img"
            />
            <div className="topology-overlay" />

            {/* Pulsing Interactive Nodes */}
            {nodes.map(n => {
              const Icon = n.icon;
              const isSelected = activeNode === n.id;
              return (
                <button
                  key={n.id}
                  className={`topology-node-marker ${isSelected ? 'selected' : ''}`}
                  style={{ top: n.pos.top, left: n.pos.left }}
                  onClick={() => setActiveNode(n.id)}
                  aria-label={n.name}
                >
                  <span className="node-ping-ring" />
                  <div className="node-dot-inner">
                    <Icon size={16} />
                  </div>
                  <span className="node-floating-label">{n.name}</span>
                </button>
              );
            })}

            {/* Connecting Visual SVG Rays */}
            <svg className="topology-svg-wires">
              <line x1="48%" y1="22%" x2="50%" y2="70%" stroke="rgba(0, 240, 255, 0.4)" strokeDasharray="4,4" />
              <line x1="26%" y1="35%" x2="50%" y2="70%" stroke="rgba(0, 240, 255, 0.4)" strokeDasharray="4,4" />
              <line x1="72%" y1="48%" x2="50%" y2="70%" stroke="rgba(0, 240, 255, 0.4)" strokeDasharray="4,4" />
            </svg>
          </div>

          {/* Node Specification Detail Card */}
          <div className="node-detail-card glass-panel">
            <div className="detail-tag-row">
              <span className="pill-badge">{currentNode.tag}</span>
              <span className="status-live">
                <span className="status-dot status-dot-active" />
                ONLINE / CALIBRATED
              </span>
            </div>

            <h3 className="node-headline text-gradient-white">{currentNode.headline}</h3>
            <p className="node-description">{currentNode.description}</p>

            <div className="collaboration-standards-box">
              <span className="standards-label">CERTIFIED PLATFORM COMPLIANCE:</span>
              <div className="standards-badges">
                <span className="plat-badge">Microsoft Teams Rooms</span>
                <span className="plat-badge">Zoom Rooms Certified</span>
                <span className="plat-badge">Cisco Webex Ready</span>
                <span className="plat-badge">BYOM USB-C Hub</span>
              </div>
            </div>

            <div className="node-cta-row">
              <button className="btn-primary" onClick={onStartProject} data-cursor="start">
                <span>DEPLOY HYBRID COLLABORATION</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
