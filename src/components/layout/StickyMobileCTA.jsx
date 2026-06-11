import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrolled } from '../../hooks/useScrolled';
import './StickyMobileCTA.css';

export function StickyMobileCTA() {
  const { scrollY } = useScrolled(400);
  const visible = scrollY > 400;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="sticky-mobile-cta"
          initial={{ y: 72 }}
          animate={{ y: 0 }}
          exit={{ y: 72 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          aria-live="polite"
        >
          <a href="#demo" className="sticky-mobile-cta__btn" id="sticky-demo-cta">
            Book a free demo →
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyMobileCTA;

