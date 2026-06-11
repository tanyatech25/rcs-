import React from 'react';
import { motion } from 'framer-motion';
import './DashboardPreview.css';

function TickState({ state }) {
  const map = {
    sent: { symbol: '✓', label: 'Sent', color: '#64748B' },
    delivered: { symbol: '✓✓', label: 'Delivered', color: '#64748B' },
    read: { symbol: '✓✓', label: 'Read', color: '#1A6BF5' },
  };
  const t = map[state];
  return (
    <span className="tick-state" aria-label={t.label}>
      <span style={{ color: t.color, fontWeight: 700 }}>{t.symbol}</span>
      <span className="tick-state__label">{t.label}</span>
    </span>
  );
}

const conversations = [
  { id: 1, name: 'FreshCart Campaign', preview: 'Flash sale live — 4.2k sent', tick: 'read', unread: 0, time: '2m' },
  { id: 2, name: 'FinEdge Promo', preview: 'Loan offer — awaiting replies', tick: 'delivered', unread: 3, time: '14m' },
  { id: 3, name: 'EduNext Onboarding', preview: 'Welcome message sent', tick: 'sent', unread: 0, time: '1h' },
];

export function DashboardPreview() {
  return (
    <section className="dashboard" id="dashboard" aria-labelledby="dashboard-heading">
      <div className="dashboard__inner">
        {/* Left copy */}
        <motion.div
          className="dashboard__copy"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="dashboard__eyebrow">THE DASHBOARD</span>
          <h2 id="dashboard-heading" className="dashboard__title">
            Familiar feel. Telecom-grade power.
          </h2>
          <p className="dashboard__body">
            The dashboard looks and works like WhatsApp Web — with single tick (sent),
            double tick (delivered), and blue double tick (read) — but adds live telecom
            delivery reports, campaign analytics, and unlimited agent access.
          </p>
          <ul className="dashboard__bullets" aria-label="Dashboard features">
            <li>
              <span className="dashboard__check" aria-hidden="true">✓</span>
              Real-time tick receipts (✓ · ✓✓ · Blue ✓✓) sourced from telecom
            </li>
            <li>
              <span className="dashboard__check" aria-hidden="true">✓</span>
              Unlimited agents — assign roles, set permissions, manage teams
            </li>
            <li>
              <span className="dashboard__check" aria-hidden="true">✓</span>
              Two-way conversations — reply, escalate, close tickets from one inbox
            </li>
          </ul>
        </motion.div>

        {/* Right mockup */}
        <motion.div
          className="dashboard__mockup"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          aria-label="Dashboard UI mockup"
        >
          <div className="dash-ui">
            {/* Sidebar */}
            <div className="dash-sidebar">
              <div className="dash-sidebar__header">
                <span className="dash-sidebar__title">Conversations</span>
                <span className="dash-sidebar__count">12</span>
              </div>
              {conversations.map((c) => (
                <div
                  key={c.id}
                  className={`dash-convo ${c.id === 1 ? 'dash-convo--active' : ''}`}
                >
                  <div className="dash-convo__avatar">{c.name[0]}</div>
                  <div className="dash-convo__info">
                    <div className="dash-convo__name">{c.name}</div>
                    <div className="dash-convo__preview">
                      <TickState state={c.tick} />
                      <span>{c.preview}</span>
                    </div>
                  </div>
                  <div className="dash-convo__meta">
                    <span className="dash-convo__time">{c.time}</span>
                    {c.unread > 0 && (
                      <span className="dash-convo__badge">{c.unread}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Main chat */}
            <div className="dash-main">
              <div className="dash-main__header">
                <div className="dash-avatar">FC</div>
                <div>
                  <div className="dash-main__name">FreshCart Campaign</div>
                  <div className="dash-main__sub">4,218 recipients · RCS</div>
                </div>
              </div>
              <div className="dash-main__body">
                {/* Outbound rich card */}
                <div className="dash-msg dash-msg--out">
                  <div className="dash-rich-card">
                    <div className="dash-rich-card__img" aria-hidden="true">
                      <span>FreshCart</span>
                    </div>
                    <div className="dash-rich-card__body">
                      <strong>Flash Sale — 40% Off</strong>
                      <span>Today until midnight</span>
                      <button className="dash-rich-card__btn">Shop Now</button>
                    </div>
                  </div>
                  <div className="dash-msg__meta">
                    <span className="dash-tick--blue">✓✓</span>
                    <span className="dash-time">10:34 AM</span>
                  </div>
                </div>

                {/* Customer reply */}
                <div className="dash-msg dash-msg--in">
                  <div className="dash-bubble">
                    Interested! What are the terms?
                  </div>
                  <div className="dash-msg__meta">
                    <span className="dash-time">10:36 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating metric chips */}
          <motion.div
            className="dash-metric dash-metric--top"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Delivered: 98.2%"
          >
            <span className="dash-metric__dot dash-metric__dot--green" aria-hidden="true" />
            Delivered: 98.2%
          </motion.div>
          <motion.div
            className="dash-metric dash-metric--bottom"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
            aria-label="Read: 44.7%"
          >
            <span className="dash-metric__dot dash-metric__dot--blue" aria-hidden="true" />
            Read: 44.7%
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default DashboardPreview;

