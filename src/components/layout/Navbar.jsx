import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrolled } from '../../hooks/useScrolled';
import './Navbar.css';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const { scrolled } = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to main content */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <motion.header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        role="banner"
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a href="/" className="navbar__logo" aria-label="LeminAi RCS home">
            <img src="/1.png" alt="LeminAi" className="navbar__logo-image" />
            <span className="navbar__rcs-badge" aria-label="RCS product">RCS</span>
          </a>

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="navbar__ctas">
            <a href="#login" className="navbar__login">Login</a>
            <a href="#demo" className="navbar__demo-btn" id="navbar-demo-cta">
              Book a Demo
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`navbar__hamburger-bar ${menuOpen ? 'navbar__hamburger-bar--open' : ''}`} aria-hidden="true" />
            <span className={`navbar__hamburger-bar ${menuOpen ? 'navbar__hamburger-bar--open' : ''}`} aria-hidden="true" />
            <span className={`navbar__hamburger-bar ${menuOpen ? 'navbar__hamburger-bar--open' : ''}`} aria-hidden="true" />
          </button>
        </div>

        {/* Mobile overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              className="navbar__mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="navbar__mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="navbar__mobile-ctas">
                  <a href="#login" className="navbar__mobile-login" onClick={() => setMenuOpen(false)}>Login</a>
                  <a href="#demo" className="navbar__mobile-demo-btn" onClick={() => setMenuOpen(false)}>
                    Book a Demo →
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;

