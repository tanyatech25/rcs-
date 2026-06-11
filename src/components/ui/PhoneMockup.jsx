import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PhoneMockup.css';

const messages = [
  {
    type: 'rich-card',
    content: {
      brand: 'FreshCart',
      title: 'Flash Sale — 40% Off Groceries',
      subtitle: 'Valid today until midnight',
      buttonLabel: 'Shop Now',
      color: '#1A6BF5',
    },
  },
  {
    type: 'carousel',
    content: {
      cards: [
        { title: 'New Arrivals', sub: 'Up to 50% off', color: '#0D1B3E' },
        { title: 'Bestsellers', sub: 'Quick delivery', color: '#1A4A8F' },
      ],
    },
  },
  {
    type: 'quick-reply',
    content: {
      message: 'Hi! Would you like to hear about our exclusive offers this week?',
      chips: ['Yes, show me!', 'Maybe later'],
    },
  },
];

export function PhoneMockup() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const msg = messages[msgIndex];

  return (
    <div
      className="phone-mockup-wrapper"
      role="img"
      aria-label="Animated demonstration of LeminAi RCS message types"
    >
      {/* Floating stat badges */}
      <motion.div
        className="phone-stat phone-stat--green"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span className="phone-stat__dot phone-stat__dot--green" />
        45% open rate
      </motion.div>
      <motion.div
        className="phone-stat phone-stat--blue"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        aria-hidden="true"
      >
        7× cheaper
      </motion.div>

      {/* Phone frame */}
      <div className="phone-frame">
        <div className="phone-notch" aria-hidden="true" />

        {/* Chat header */}
        <div className="phone-chat-header">
          <div className="phone-chat-avatar" aria-hidden="true">FC</div>
          <div className="phone-chat-info">
            <div className="phone-chat-name">
              FreshCart
              <span className="phone-chat-verified" aria-label="Verified business">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="7" fill="#1A6BF5" />
                  <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
            <div className="phone-chat-status">Online · RCS</div>
          </div>
        </div>

        {/* Messages area */}
        <div className="phone-chat-body">
          {/* Static previous message */}
          <div className="phone-bubble phone-bubble--incoming">
            <span>Hi! Thanks for joining FreshCart.</span>
          </div>

          {/* Animated current message */}
          <AnimatePresence mode="wait">
            <motion.div
              key={msgIndex}
              className="phone-msg-wrapper"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {msg.type === 'rich-card' && (
                <div className="phone-rich-card">
                  <div
                    className="phone-rich-card__image"
                    style={{ background: `linear-gradient(135deg, ${msg.content.color}33, ${msg.content.color}66)` }}
                    aria-hidden="true"
                  >
                    <span className="phone-rich-card__brand">{msg.content.brand}</span>
                  </div>
                  <div className="phone-rich-card__body">
                    <strong>{msg.content.title}</strong>
                    <span>{msg.content.subtitle}</span>
                    <button className="phone-rich-card__btn">{msg.content.buttonLabel}</button>
                  </div>
                </div>
              )}
              {msg.type === 'carousel' && (
                <div className="phone-carousel">
                  {msg.content.cards.map((c, i) => (
                    <div
                      key={i}
                      className="phone-carousel__card"
                      style={{ background: c.color }}
                    >
                      <strong>{c.title}</strong>
                      <span>{c.sub}</span>
                    </div>
                  ))}
                </div>
              )}
              {msg.type === 'quick-reply' && (
                <div className="phone-quick-reply">
                  <div className="phone-bubble phone-bubble--incoming">
                    {msg.content.message}
                  </div>
                  <div className="phone-chips">
                    {msg.content.chips.map((chip, i) => (
                      <button key={i} className="phone-chip">{chip}</button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Read receipt */}
          <div className="phone-read-receipt" aria-label="Read: blue double tick">
            <span className="phone-tick phone-tick--blue">✓✓</span>
            <span className="phone-tick-label">Read</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;

