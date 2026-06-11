import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';
import './FeatureCard.css';

export function FeatureCard({ feature, index = 0 }) {
  const { icon, title, description, badge, wide } = feature;

  const badgeVariantMap = { green: 'green', teal: 'teal', amber: 'amber' };

  return (
    <motion.div
      className={`feature-card ${wide ? 'feature-card--wide' : ''}`}
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="feature-card__inner">
        <div className="feature-card__header">
          <span className="feature-card__icon" aria-hidden="true">
            {icon}
          </span>
          {badge && (
            <Badge
              label={badge.label}
              variant={badgeVariantMap[badge.color] || 'teal'}
            />
          )}
        </div>
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__desc">{description}</p>
      </div>
      <div className="feature-card__gradient-line" aria-hidden="true" />
    </motion.div>
  );
}

export default FeatureCard;

