import React from 'react';
import './TrustBar.css';

const brands = [
  'FreshCart', 'FinEdge', 'TrendFit', 'QuickServe', 'RetailHub',
  'PayZap', 'EduNext', 'HealthFirst', 'ZapdoDelivery', 'ClearLoan',
  'BrightMart', 'SwiftPay',
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trusted by businesses">
      <div className="trust-bar__inner">
        <p className="trust-bar__headline">TRUSTED BY 500+ INDIAN BUSINESSES</p>
        <div className="trust-bar__marquee-wrapper" aria-hidden="true">
          <div className="trust-bar__marquee">
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="trust-bar__pill">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;

