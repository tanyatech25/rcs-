import React from 'react';
import './MetricsFunnel.css';

const stages = [
  { label: 'Sent', pct: 100, color: '#6254e7' },
  { label: 'Delivered', pct: 98, color: '#7b6fea' },
  { label: 'Read', pct: 45, color: '#9b94e8' },
  { label: 'Clicked', pct: 22, color: '#b5b0ef' },
  { label: 'Responded', pct: 14, color: '#34a853' },
];

export function MetricsFunnel() {
  const maxPct = stages[0].pct;
  return (
    <div className="metrics-funnel" aria-label="5-stage campaign funnel">
      <div className="metrics-funnel__bars">
        {stages.map((s, i) => (
          <div key={i} className="metrics-funnel__stage">
            <div className="metrics-funnel__bar-wrap">
              <div
                className="metrics-funnel__bar"
                style={{
                  height: `${(s.pct / maxPct) * 80}px`,
                  background: s.color,
                  minHeight: 24,
                }}
              />
            </div>
            <span className="metrics-funnel__pct" style={{ color: s.color }}>
              {s.pct}%
            </span>
            <span className="metrics-funnel__label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="metrics-funnel__arrow" aria-hidden="true">
        {stages.map((_, i) =>
          i < stages.length - 1 ? (
            <span key={i} className="metrics-funnel__chevron">›</span>
          ) : null
        )}
      </div>
    </div>
  );
}

export default MetricsFunnel;
