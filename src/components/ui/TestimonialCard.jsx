import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialCard.css';

export function TestimonialCard({ testimonial, index = 0 }) {
  const { quote, author, title, company, initials } = testimonial;

  return (
    <motion.div
      className="testimonial-card"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div className="testimonial-card__stars" aria-label="5 stars">
        {'★★★★★'.split('').map((s, i) => (
          <span key={i} className="testimonial-card__star">{s}</span>
        ))}
      </div>
      <blockquote className="testimonial-card__quote">
        <p>"{quote}"</p>
      </blockquote>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar" aria-hidden="true">
          {initials}
        </div>
        <div className="testimonial-card__meta">
          <strong className="testimonial-card__name">{author}</strong>
          <span className="testimonial-card__role">
            {title}, {company}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;

