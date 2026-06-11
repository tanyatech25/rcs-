import React from 'react';
import './Button.css';

export function Button({
  variant = 'primary',
  children,
  onClick,
  href,
  size = 'md',
  className = '',
  ...props
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;

