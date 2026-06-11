import React from 'react';
import { pricingTiers } from '../../constants/pricing';
import PricingCard from '../ui/PricingCard';
import './Pricing.css';

export function Pricing() {
  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-heading">
      <div className="pricing__inner">
        <div className="pricing__header">
          <span className="pricing__eyebrow">TRANSPARENT PRICING</span>
          <h2 id="pricing-heading" className="pricing__title">
            Pay per message. No monthly fees. No surprises.
          </h2>
          <p className="pricing__sub">
            Zero setup cost. Free Blue Tick. Start sending in 48 hours.
          </p>
        </div>

        <div className="pricing__grid">
          {pricingTiers.map((tier, i) => (
            <PricingCard key={tier.id} tier={tier} index={i} />
          ))}
        </div>

        {/* Cost comparison callout */}
        <div className="pricing__callout" role="note">
          <span aria-hidden="true">💰</span>
          <p>
            Switching from WhatsApp Marketing? Save{' '}
            <span className="pricing__callout-num">₹0.66</span> per message.
            That's{' '}
            <span className="pricing__callout-num">₹66,000</span> saved on
            every <span className="pricing__callout-num">100,000</span> messages sent.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

