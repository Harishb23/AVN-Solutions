import React from 'react';
import { 
  Compass, 
  Scale, 
  Layers, 
  Cpu, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { soundFx } from '../../utils/sound';
import './WhyChooseUs.css';

interface WhyChooseUsProps {
  onStartProject: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onStartProject }) => {
  const reasons = [
    {
      num: '01',
      title: 'Engineering First',
      description: 'Solutions designed around real spatial, acoustic geometry, and technical requirements rather than cookie-cutter templates.',
      icon: Compass,
      highlights: ['Custom RT60 ray-tracing', 'Snellen visual acuity sizing', 'Thermal & power load planning']
    },
    {
      num: '02',
      title: 'Brand-Agnostic Advice',
      description: 'We recommend hardware strictly based on performance, room ergonomics, and your application—not vendor bias.',
      icon: Scale,
      highlights: ['Certified across 50+ OEMs', 'Best-of-breed component pairing', 'Transparent comparative BOQs']
    },
    {
      num: '03',
      title: 'End-to-End Delivery',
      description: 'Design, direct supply, precision installation, custom Crestron programming, and local maintenance under one roof.',
      icon: Layers,
      highlights: ['Single point of accountability', 'Direct OEM warranties', 'Zero contractor finger-pointing']
    },
    {
      num: '04',
      title: 'Experienced Integration',
      description: 'Professional convergence across pro-audio, 4K/8K video, control processors, DALI lighting, and enterprise IT networks.',
      icon: Cpu,
      highlights: ['AVIXA CTS-D / CTS-I certified team', 'Dante Level 3 certified audio', 'Crestron Master certified logic']
    },
    {
      num: '05',
      title: 'Local Chennai Support',
      description: 'Chennai-based headquarters, local staging lab, standby hardware inventory, and guaranteed 2-hour SLA response.',
      icon: MapPin,
      highlights: ['Sholinganallur HQ & Demo Lab', 'Emergency spare units in stock', 'Dedicated Tamil Nadu engineers']
    },
    {
      num: '06',
      title: 'Future-Ready Architecture',
      description: 'Open-standard IP topology (Dante, AES67, SDVoE) engineered to scale seamlessly as your business grows.',
      icon: TrendingUp,
      highlights: ['10G Cat6A & Fiber backbone', 'Cloud firmware & health telemetry', 'Modular expansion capability']
    }
  ];

  return (
    <section className="why-choose-us-section" id="why-us">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">ENGINEERING CREDENTIALS</span>
          </div>
          <h2 className="section-grand-title">
            Why Businesses <span className="title-highlight">Choose AVN Solutions.</span>
          </h2>
          <p className="section-lead-desc">
            We bridge the gap between architectural aesthetics, acoustic science, and enterprise IT networks to deliver spaces that perform flawlessly.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="why-us-grid">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div key={idx} className="why-card" data-cursor="explore">
                <div className="why-card-top">
                  <div className="why-icon-wrap">
                    <Icon size={20} className="text-cyan" />
                  </div>
                  <span className="why-seq">{r.num}</span>
                </div>

                <h3 className="why-title">{r.title}</h3>
                <p className="why-desc">{r.description}</p>

                <div className="why-highlights-list">
                  {r.highlights.map((h, i) => (
                    <div key={i} className="why-hl-item">
                      <CheckCircle2 size={12} className="text-cyan" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action */}
        <div className="why-bottom-box">
          <div className="why-bottom-text">
            <h4>Ready to discuss your facility's AV architecture?</h4>
            <p>Schedule a complimentary site survey with our CTS-certified solutions engineers in Chennai.</p>
          </div>
          <button
            className="btn-primary why-action-btn"
            onClick={() => {
              soundFx.playPowerChime();
              onStartProject();
            }}
          >
            <span>Book a Site Survey</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
