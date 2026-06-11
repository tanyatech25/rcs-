import React from 'react';
import { motion } from 'framer-motion';
import './PricingCard.css';

export function PricingCard({ tier, index = 0 }) {
  const { name, price, unit, description, highlights, cta, badge, popular } = tier;

  return (
    <motion.div
      className={`pricing-card ${popular ? 'pricing-card--popular' : ''}`}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
    >
      {badge && (
        <div className="pricing-card__badge" aria-label={`${badge} plan`}>
          {badge}
        </div>
      )}
      <div className="pricing-card__header">
        <h3 className="pricing-card__name">{name}</h3>
        <p className="pricing-card__desc">{description}</p>
      </div>
      <div className="pricing-card__price">
        <span className="pricing-card__amount">{price}</span>
        {unit && <span className="pricing-card__unit">{unit}</span>}
      </div>
      <ul className="pricing-card__features" aria-label={`${name} features`}>
        {highlights.map((h, i) => (
          <li key={i} className="pricing-card__feature">
            <svg
              className="pricing-card__check"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="8" cy="8" r="7" fill="rgba(22,163,74,0.12)" />
              <path
                d="M5 8l2 2 4-4"
                stroke="#16A34A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {h}
          </li>
        ))}
      </ul>
      <a
        href="#demo"
        className={`pricing-card__cta ${popular ? 'pricing-card__cta--primary' : 'pricing-card__cta--ghost'}`}
      >
        {cta} →
      </a>
    </motion.div>
  );
}

export default PricingCard;

