import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    title: 'Register your brand',
    desc: 'Submit your brand details. LeminAi handles Google RCS registration and Blue Tick verification — typically approved within 48 hours on Jio and Vi.',
  },
  {
    num: '02',
    title: 'Build your first message',
    desc: 'Use the no-code message builder to create rich cards, carousels, or simple branded messages with CTA buttons. No developer needed.',
  },
  {
    num: '03',
    title: 'Upload and segment your audience',
    desc: 'Import your contact list. Use smart segmentation to group by behaviour, location, or purchase history for targeted sends.',
  },
  {
    num: '04',
    title: 'Send, track, and optimise',
    desc: 'Launch your campaign. Watch delivery, reads, link clicks, and replies flow in live on your analytics dashboard.',
  },
];

export function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-heading">
      <div className="how-it-works__inner">
        <div className="how-it-works__header">
          <span className="how-it-works__eyebrow">SIMPLE ONBOARDING</span>
          <h2 id="how-heading" className="how-it-works__title">
            Live in 48 hours, not 48 days
          </h2>
        </div>

        <div className="how-it-works__steps-wrapper">
          {/* Connector line */}
          <motion.div
            className="how-it-works__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            aria-hidden="true"
          />

          <div className="how-it-works__steps">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="how-step"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              >
                <div className="how-step__circle" aria-hidden="true">
                  <span>{step.num}</span>
                </div>
                <h3 className="how-step__title">{step.title}</h3>
                <p className="how-step__desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

