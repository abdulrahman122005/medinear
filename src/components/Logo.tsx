import React from 'react';

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logoGrad" x1="80%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="46" stroke="url(#logoGrad)" strokeWidth="4" />
      <path d="M50 15C34.536 15 22 27.536 22 43C22 62.5 50 85 50 85C50 85 78 62.5 78 43C78 27.536 65.464 15 50 15Z" fill="url(#logoGrad)" />
      <path d="M45 28H55V37H64V47H55V56H45V47H36V37H45V28Z" fill="white" />
      
      <g transform="translate(38, 65) rotate(-50)">
        <rect x="-14" y="-26" width="28" height="52" rx="14" fill="white" />
        <rect x="-11" y="-23" width="22" height="46" rx="11" fill="white" stroke="url(#logoGrad)" strokeWidth="2" />
        <path d="M-10 0 H10 V12 A10 10 0 0 1 -10 12 Z" fill="url(#logoGrad)" />
      </g>
    </svg>
  );
}
