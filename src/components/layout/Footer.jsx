import React from 'react';
import './Footer.css';

const services = [
  { label: 'RCS', href: '#', active: true },
  { label: 'WhatsApp API', href: '#' },
  { label: 'Web Push', href: '#' },
  { label: 'Website Builder', href: '#' },
  { label: 'Partner Program', href: '#' },
];

const company = [
  { label: 'About Us', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
];

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Shipping & Delivery', href: '#' },
];

function SocialIcon({ label, path }) {
  return (
    <a href="#" className="footer__social-link" aria-label={label}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d={path} fill="currentColor" />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__grid">
          {/* Col 1 — Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logo">
              <span className="footer__logo-text">LeminAi</span>
              <span className="footer__rcs-badge">RCS</span>
            </div>
            <p className="footer__tagline">
              India's official Google RCS Business Messaging partner
            </p>
            <div className="footer__social" aria-label="Social media links">
              {/* Facebook */}
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.5a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
            <div className="footer__contact">
              <a href="tel:+919682828181" className="footer__contact-link">+91 9682828181</a>
              <a href="mailto:admin@leminai.com" className="footer__contact-link">admin@leminai.com</a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Services</h3>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={`footer__link ${s.active ? 'footer__link--active' : ''}`}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div className="footer__col">
            <h3 className="footer__col-title">Company</h3>
            <ul className="footer__links">
              {company.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="footer__link">{c.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div className="footer__col">
            <h3 className="footer__col-title">Legal</h3>
            <ul className="footer__links">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer__link">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copyright">© 2025 LeminAi. All rights reserved.</span>
          <span className="footer__partner-badge">
            <span className="footer__partner-dot">🔵</span>
            Official Google RCS Partner
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

