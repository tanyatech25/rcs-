import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from '../ui/PhoneMockup';
import { useCounter } from '../../hooks/useCounter';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

export function Hero() {
  const [countStarted, setCountStarted] = useState(false);
  const openRate = useCounter(45, 1800, countStarted);

  useEffect(() => {
    const t = setTimeout(() => setCountStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      {/* Background elements */}
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div className="hero__glow hero__glow--teal" aria-hidden="true" />

      <div className="hero__inner">
        {/* Left column */}
        <div className="hero__content">
          {/* Trust badge */}
          <motion.div
            className="hero__trust-badge"
            {...fadeUp(0.1)}
          >
            <span className="hero__trust-dot" aria-hidden="true">🔵</span>
            Official Google RCS Business Messaging Partner
          </motion.div>

          {/* H1 */}
          <motion.h1
            id="hero-heading"
            className="hero__headline"
            {...fadeUp(0.25)}
          >
            Stop broadcasting.{' '}
            <span className="hero__headline-accent">Start converting.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="hero__subheadline"
            {...fadeUp(0.4)}
          >
            LeminAi RCS puts your brand inside your customer's native message app
            — verified, interactive, and 7× cheaper than WhatsApp. Free onboarding
            on Jio &amp; Vi.
          </motion.p>

          {/* Open rate pill */}
          <motion.div
            className="hero__open-rate"
            {...fadeUp(0.55)}
            aria-label={`${openRate}% average open rate, versus 6% for SMS`}
          >
            <span className="hero__open-rate-dot" aria-hidden="true" />
            <span className="hero__open-rate-number">{openRate}%</span>
            <span className="hero__open-rate-label">average open rate</span>
            <span className="hero__open-rate-vs" aria-hidden="true">vs 6% for SMS</span>
          </motion.div>

          {/* CTA pair */}
          <motion.div
            className="hero__ctas"
            {...fadeUp(0.70)}
          >
            <a href="#demo" className="hero__cta hero__cta--primary" id="hero-primary-cta">
              Book a free demo →
            </a>
            <a href="#pricing" className="hero__cta hero__cta--secondary" id="hero-secondary-cta">
              Start at ₹0.12 / msg
            </a>
          </motion.div>

          {/* Carrier trust row */}
          <motion.div
            className="hero__carriers"
            {...fadeUp(0.85)}
            aria-label="Free onboarding on Jio and Vi"
          >
            <span className="hero__carriers-label">Free onboarding on</span>
            <span className="hero__carrier-pill">Jio</span>
            <span className="hero__carrier-pill">Vi</span>
          </motion.div>
        </div>

        {/* Right column — phone */}
        <motion.div
          className="hero__phone"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

