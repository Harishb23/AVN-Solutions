import React from 'react';
import { testimonialsData } from '../../data/testimonials';
import { Star, Quote, Building2, MapPin } from 'lucide-react';
import './TestimonialsSection.css';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container-wide">
        {/* Section Heading */}
        <div className="section-head-center">
          <div className="section-eyebrow-pill">
            <span className="eyebrow-dot" />
            <span className="eyebrow-title">VERIFIED CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="section-grand-title">
            Trusted By Enterprises & <span className="title-highlight">Discerning Space Owners.</span>
          </h2>
          <p className="section-lead-desc">
            Read authentic feedback from corporate technology heads, medical directors, architects, and private cinema owners across Chennai.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card" data-cursor="explore">
              <div className="testimonial-card-top">
                <div className="rating-stars-row">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <Quote size={20} className="quote-glyph text-cyan" />
              </div>

              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-project-tag">
                <Building2 size={12} className="text-cyan" />
                <span>{item.projectType}</span>
              </div>

              <div className="testimonial-author-row">
                {item.avatarImage && (
                  <img src={item.avatarImage} alt={item.name} className="author-avatar-img" />
                )}
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-designation">{item.designation}</span>
                  <span className="author-company">{item.company}</span>
                  <div className="author-loc">
                    <MapPin size={10} className="text-cyan" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
