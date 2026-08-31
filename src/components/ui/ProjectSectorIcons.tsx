type IconProps = { className?: string };

const svgProps = {
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true as const,
};

export function HealthcareIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="4" y="8.5" width="16" height="12" rx="1.5" />
      <path d="M8 8.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.5" />
      <path d="M12 12v5M9.5 14.5h5" />
    </svg>
  );
}

export function CommercialIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.25" />
      <path d="M8.5 7.5h1M14.5 7.5h1M8.5 11h1M14.5 11h1M8.5 14.5h1M14.5 14.5h1" />
      <path d="M10 20.5v-3.5h4v3.5" />
    </svg>
  );
}

export function InstitutionalIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M3.5 9.5 12 4l8.5 5.5" />
      <path d="M4.5 9.5v10.5M19.5 9.5v10.5M4 20h16" />
      <path d="M8 9.5v9M12 9.5v9M16 9.5v9" />
    </svg>
  );
}

export function IndustrialIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M3.5 20.5V12l5-3v3l5-3v3l4-2.5v11" />
      <path d="M3.5 20.5h17" />
      <path d="M17.5 8V5M17.5 5h2v-2" />
    </svg>
  );
}

export function ResidentialIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M5.5 10v10h13V10" />
      <path d="M10 20v-5.5h4V20" />
    </svg>
  );
}
