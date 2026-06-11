import React from 'react';
import { features } from '../../constants/features';
import FeatureCard from '../ui/FeatureCard';
import MetricsFunnel from '../ui/MetricsFunnel';
import './FeaturesGrid.css';

export function FeaturesGrid() {
  return (
    <section className="features-grid" id="features" aria-labelledby="features-heading">
      <div className="features-grid__inner">
        <div className="features-grid__header">
          <span className="features-grid__eyebrow">BUILT FOR RESULTS</span>
          <h2 id="features-heading" className="features-grid__title">
            Everything your team needs to run RCS at scale
          </h2>
          <p className="features-grid__sub">
            From instant no-code campaigns to enterprise-grade analytics — every feature is
            designed to increase engagement, not just message volume.
          </p>
        </div>

        <div className="features-grid__grid">
          {features.map((feature, i) => {
            if (feature.wide) {
              return (
                <div key={feature.id} className="features-grid__wide-card">
                  <div className="feature-card feature-card--wide-inner">
                    <div className="feature-card__inner">
                      <div className="feature-card__header">
                        <span className="feature-card__icon" aria-hidden="true">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="feature-card__title">{feature.title}</h3>
                      <p className="feature-card__desc">{feature.description}</p>
                    </div>
                    <MetricsFunnel />
                    <div className="feature-card__gradient-line" aria-hidden="true" />
                  </div>
                </div>
              );
            }
            return <FeatureCard key={feature.id} feature={feature} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
