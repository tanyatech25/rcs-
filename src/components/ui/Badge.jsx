import React from 'react';
import './Badge.css';

export function Badge({ label, variant = 'teal', className = '' }) {
  return (
    <span className={`badge badge--${variant} ${className}`}>{label}</span>
  );
}

export default Badge;

