import React from 'react';
import { motion } from 'framer-motion';
import './StatsBar.css';

const stats = [
  { number: '45%', label: 'Average open rate', sub: 'vs 6% for SMS' },
  { number: '7×', label: 'Lower cost per message', sub: 'vs WhatsApp Marketing' },
  { number: 'Free', label: 'Blue Tick verification', sub: 'Google-certified' },
  { number: '5-stage', label: 'Campaign funnel tracking', sub: 'Sent → Responded' },
];

export function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Key statistics">
      <div className="stats-bar__inner">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="stats-bar__card"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
          >
            <span className="stats-bar__number">{stat.number}</span>
            <span className="stats-bar__label">{stat.label}</span>
            <span className="stats-bar__sub">{stat.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;

