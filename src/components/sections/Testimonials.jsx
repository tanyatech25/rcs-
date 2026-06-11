import React from 'react';
import { testimonials } from '../../constants/testimonials';
import TestimonialCard from '../ui/TestimonialCard';
import './Testimonials.css';

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="testimonials__eyebrow">CUSTOMER RESULTS</span>
          <h2 id="testimonials-heading" className="testimonials__title">
            Real businesses. Measurable outcomes.
          </h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
