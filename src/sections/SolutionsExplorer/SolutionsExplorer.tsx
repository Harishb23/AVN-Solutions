import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../../utils/sound';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './SolutionsExplorer.css';

interface SolutionsExplorerProps {
  onSelectSolutionDetail?: (solutionId: string) => void;
  onStartProject: () => void;
  initialSelectedId?: string;
}

interface SolutionItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  specPills: { label: string; val: string }[];
  capabilities: string[];
}

export const SolutionsExplorer: React.FC<SolutionsExplorerProps> = ({
  onSelectSolutionDetail,
  onStartProject,
  initialSelectedId
}) => {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const solutions: SolutionItem[] = [
    {
      id: 'corporate-av',
      number: '01',
      title: 'Corporate AV',
      tagline: 'Boardrooms, meeting rooms and executive collaboration spaces.',
      description: 'Turnkey audio-visual architectures designed for executive decision-making and connected modern workplaces.',
      image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1400&q=80',
      tags: ['0.9mm MicroLED', 'Crestron NVX', 'BYOM'],
      specPills: [{ label: 'Display', val: '4K/8K Direct-View' }, { label: 'Audio', val: '360° Beamforming' }, { label: 'Latency', val: '< 15ms' }],
      capabilities: ['Executive Boardroom Systems', 'Wireless BYOM Connectivity', 'Custom Touch Panel Automation']
    },
    {
      id: 'video-conferencing',
      number: '02',
      title: 'Video Collaboration',
      tagline: 'Microsoft Teams, Zoom and hybrid meeting environments.',
      description: 'Native Teams & Zoom Rooms engineered with intelligent camera tracking and crystal-clear room acoustics.',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1400&q=80',
      tags: ['Teams MTR', 'Zoom Rooms', 'Auto-Framing'],
      specPills: [{ label: 'Camera', val: '4K AI Optical' }, { label: 'Join Time', val: '1-Touch Join' }, { label: 'Security', val: 'SIP / H.323' }],
      capabilities: ['AI Speaker Auto-Framing', 'Direct SIP / H.323 Codecs', 'Dual-Display Hybrid Layouts']
    },
    {
      id: 'professional-audio',
      number: '03',
      title: 'Professional Audio',
      tagline: 'PA systems, distributed audio, conference audio, microphones and DSP.',
      description: 'Studio-grade acoustic distribution, Dante network audio routing, ceiling beamforming arrays, and DSP processors.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1400&q=80',
      tags: ['Dante IP', 'Q-SYS DSP', 'EASE 3D'],
      specPills: [{ label: 'Network', val: 'Dante AES67' }, { label: 'Clarity', val: 'STI > 0.70' }, { label: 'Channels', val: '64x64 IP' }],
      capabilities: ['Dante IP Audio Networks', 'Ceiling Mic Array Systems', 'Acoustic Echo Cancellation (AEC)']
    },
    {
      id: 'display-visual',
      number: '04',
      title: 'Visual Systems',
      tagline: 'LED walls, video walls, projectors, professional displays and digital signage.',
      description: 'Seamless fine-pitch Direct-View MicroLED canvases, high-lumen 4K laser projectors, and zero-bezel video walls.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80',
      tags: ['Direct-View LED', 'Laser 4K', 'SDVoE 10G'],
      specPills: [{ label: 'Pitch', val: '0.9mm - 1.5mm' }, { label: 'Lifespan', val: '100k Hours' }, { label: 'Bezel', val: '0.0mm Seamless' }],
      capabilities: ['0.9mm - 1.5mm Direct-View MicroLED', '4K High-Lumen Laser Projection', 'SDVoE 10G Matrix Switching']
    },
    {
      id: 'smart-automation',
      number: '05',
      title: 'Smart Automation',
      tagline: 'Room automation, centralized control, lighting, curtains, HVAC and device control.',
      description: 'Unified control processors orchestrating lighting scenes, shades, AV matrices, and HVAC with single-touch simplicity.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80',
      tags: ['Crestron Home', 'Extron', 'DALI-2 / KNX'],
      specPills: [{ label: 'Control', val: 'Custom Touch UI' }, { label: 'Energy', val: '-35% Lighting' }, { label: 'Bus', val: 'KNX / DALI-2' }],
      capabilities: ['Crestron & Extron Certified Programming', 'DALI Lighting Integration', 'Motorized Shading Automation']
    },
    {
      id: 'home-cinema',
      number: '06',
      title: 'Home Cinema',
      tagline: 'Dedicated home theatres, projectors, acoustics, immersive audio and automation.',
      description: 'Custom luxury private cinemas featuring Dolby Atmos 9.4.6 audio, woven screens, and ISF calibration.',
      image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=1400&q=80',
      tags: ['Dolby Atmos 9.4.6', 'Trinnov 3D', 'THX Master'],
      specPills: [{ label: 'Audio', val: '9.4.6 Discrete' }, { label: 'Acoustic', val: 'RT60 0.28s' }, { label: 'Color', val: 'DCI-P3 99%' }],
      capabilities: ['Dolby Atmos & DTS:X Layouts', 'THX Certified Acoustic Raytracing', 'Anamorphic 4K HDR Projection']
    },
    {
      id: 'digital-signage',
      number: '07',
      title: 'Digital Signage',
      tagline: 'Commercial displays, menu boards, information screens and centralized content.',
      description: 'Enterprise content platforms for corporate lobbies, interactive kiosks, flight boards, and retail networks.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
      tags: ['Cloud CMS', '24/7 Panels', 'Touch Kiosks'],
      specPills: [{ label: 'Fleet', val: 'Centralized CMS' }, { label: 'Duty', val: '24/7 Commercial' }, { label: 'Nits', val: '700+ High Lux' }],
      capabilities: ['Centralized Cloud CMS Fleet', 'High-Brightness 24/7 Commercial Panels', 'Interactive Touch Kiosks']
    },
    {
      id: 'auditorium-av',
      number: '08',
      title: 'Auditorium & Large Venue AV',
      tagline: 'Auditoriums, training rooms, seminar halls and large-format presentation systems.',
      description: 'High-capacity line-array sound reinforcement, stage lighting, broadcast PTZ tracking, and live streaming rigs.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80',
      tags: ['Line Array', 'Stage DMX', 'Broadcast PTZ'],
      specPills: [{ label: 'Coverage', val: '± 1.5 dB Sound' }, { label: 'Projection', val: '50k Lumens' }, { label: 'Camera', val: 'AI Auto-Track' }],
      capabilities: ['Steerable Line-Array Reinforcement', 'Broadcast Multi-PTZ Tracking', 'Stage DMX & Architectural Control']
    },
    {
      id: 'intelligent-lighting',
      number: '09',
      title: 'Intelligent Lighting',
      tagline: 'Lighting control, DALI systems and automated lighting environments.',
      description: 'Architectural and circadian rhythm lighting control systems designed for occupant focus and energy savings.',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=80',
      tags: ['DALI-2', 'Circadian Lux', 'Architectural'],
      specPills: [{ label: 'Protocol', val: 'DALI-2 Native' }, { label: 'Scenes', val: 'Automated Presets' }, { label: 'Tuning', val: 'Tunable White' }],
      capabilities: ['DALI-2 Protocol Integration', 'Tunable White & Circadian Presets', 'Occupancy & Lux Level Automation']
    },
    {
      id: 'acoustics',
      number: '10',
      title: 'Acoustic Solutions',
      tagline: 'Acoustic treatment, simulation and optimized room performance.',
      description: 'Scientific RT60 reverberation modeling, bespoke acoustic wall paneling, bass trapping, and speech clarity.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=80',
      tags: ['EASE 3D', 'RT60 Target', 'Acoustic Timber'],
      specPills: [{ label: 'Modeling', val: 'EASE 3D Raytracing' }, { label: 'Target', val: 'RT60 < 0.60s' }, { label: 'Finish', val: 'Custom Veneer' }],
      capabilities: ['EASE 3D Acoustic Raytracing', 'RT60 Target Optimization (<0.6s)', 'Custom Architectural Wall Treatments']
    }
  ];

  const [activeId, setActiveId] = useState<string>(initialSelectedId || solutions[0].id);

  const activeSolution = solutions.find(s => s.id === activeId) || solutions[0];

  const handleHoverSolution = (id: string) => {
    if (activeId !== id) {
      setActiveId(id);
    }
  };

  const handleClickSolution = (id: string) => {
    soundFx.playClick(900);
    setActiveId(id);
    if (onSelectSolutionDetail) {
      onSelectSolutionDetail(id);
    }
  };

  return (
    <section 
      ref={ref}
      className={`editorial-solutions-section section-spacing ${isRevealed ? 'is-revealed' : ''} reveal-on-scroll`} 
      id="solutions-explorer"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="section-head-left">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-line" />
            <span>OUR SOLUTIONS</span>
          </div>
          <h2 className="section-grand-title">
            Technology designed around <br />
            <span className="title-highlight">the way you work.</span>
          </h2>
          <p className="section-lead-desc">
            From collaboration spaces to immersive environments, we design systems around how people use each space.
          </p>
        </div>

        {/* 2-Column Editorial List & Photographic Stage */}
        <div className="solutions-editorial-layout">
          {/* LEFT: Numbered Interactive List */}
          <div className="solutions-numbered-list" role="tablist">
            {solutions.map((item) => {
              const isActive = item.id === activeId;
              return (
                <div
                  key={item.id}
                  className={`solution-list-row ${isActive ? 'is-active is-active-indicator' : ''}`}
                  onMouseEnter={() => handleHoverSolution(item.id)}
                  onClick={() => handleClickSolution(item.id)}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                >
                  {/* Thin Vertical Active Indicator (400ms expand, no glow) */}
                  <span className="vertical-indicator-bar" aria-hidden="true" />

                  <div className="row-number-col">
                    <span className="row-num">{item.number}</span>
                  </div>

                  {/* Visual Mini Thumbnail */}
                  <div className="row-thumb-col">
                    <img src={item.image} alt={item.title} className="row-thumb-img" loading="lazy" />
                  </div>

                  <div className="row-content-col">
                    <div className="row-title-bar">
                      <h3 className="row-title">{item.title}</h3>
                    </div>
                    <p className="row-tagline">{item.tagline}</p>
                    <div className="row-tags-strip">
                      {item.tags.map((t, tIdx) => (
                        <span key={tIdx} className="row-tag-chip">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="row-action-col">
                    <div className="row-arrow-circle arrow-hover-glide">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dynamic Sticky Photographic Canvas with Smooth Crossfade */}
          <div className="solutions-sticky-canvas">
            <div className="canvas-card hover-card-lift">
              <div className="canvas-image-wrap">
                {solutions.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`canvas-image image-crossfade ${item.id === activeId ? 'active-image' : ''}`}
                    loading="lazy"
                  />
                ))}
                <div className="canvas-overlay-tag">
                  <span>SOLUTION {activeSolution.number} • {activeSolution.title.toUpperCase()}</span>
                </div>
              </div>

              <div className="canvas-body">
                <h4 className="canvas-title">{activeSolution.title}</h4>
                <p className="canvas-desc">{activeSolution.description}</p>

                {/* Visual Spec Badges Grid */}
                <div className="canvas-specs-grid">
                  {activeSolution.specPills.map((spec, sIdx) => (
                    <div key={sIdx} className="canvas-spec-tile">
                      <span className="canvas-spec-lbl">{spec.label}</span>
                      <span className="canvas-spec-val">{spec.val}</span>
                    </div>
                  ))}
                </div>

                <div className="canvas-capabilities">
                  <span className="cap-label">KEY CAPABILITIES</span>
                  <ul className="cap-list">
                    {activeSolution.capabilities.map((cap, i) => (
                      <li key={i} className="cap-item">
                        <CheckCircle2 size={14} className="text-emerald" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="canvas-actions">
                  <button
                    className="btn-primary canvas-primary-btn"
                    onClick={() => {
                      soundFx.playPowerChime();
                      onStartProject();
                    }}
                  >
                    <span>Design This System</span>
                    <ArrowRight size={15} />
                  </button>

                  {onSelectSolutionDetail && (
                    <button
                      className="btn-secondary canvas-details-btn"
                      onClick={() => handleClickSolution(activeSolution.id)}
                    >
                      <span>Full Specifications</span>
                      <ArrowUpRight size={15} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
