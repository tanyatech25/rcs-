import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQItem.css';

export function FAQItem({ faq, index = 0 }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${faq.id}`;
  const answerId = `faq-answer-${faq.id}`;

  return (
    <div className="faq-item">
      <button
        className="faq-item__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={answerId}
        id={id}
      >
        <span className="faq-item__question">{faq.question}</span>
        <motion.span
          className="faq-item__icon"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={id}
            className="faq-item__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="faq-item__answer-inner">
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FAQItem;

