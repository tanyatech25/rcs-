import React from 'react';
import { motion } from 'framer-motion';
import './FinalCTA.css';

export function FinalCTA() {
  return (
    <section className="final-cta" id="demo" aria-labelledby="final-cta-heading">
      <div className="final-cta__inner">
        <motion.div
          className="final-cta__content"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="final-cta__badge">START TODAY</span>
          <h2 id="final-cta-heading" className="final-cta__title">
            Your customers are opening RCS.
            <br />
            Are you sending it?
          </h2>
          <p className="final-cta__body">
            Join 500+ Indian brands sending richer, verified, higher-converting messages
            with LeminAi RCS. Free onboarding on Jio &amp; Vi. Live in 48 hours.
          </p>
          <div className="final-cta__ctas">
            <a
              href="#demo"
              className="final-cta__btn final-cta__btn--primary"
              id="final-primary-cta"
            >
              Book a free demo →
            </a>
            <a
              href="#pricing"
              className="final-cta__btn final-cta__btn--secondary"
              id="final-secondary-cta"
            >
              Start at ₹0.12/msg
            </a>
          </div>
          <p className="final-cta__trust">
            <span>✓ No credit card for demo</span>
            <span aria-hidden="true"> · </span>
            <span>✓ Free Blue Tick included</span>
            <span aria-hidden="true"> · </span>
            <span>✓ Zero setup fee</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;

