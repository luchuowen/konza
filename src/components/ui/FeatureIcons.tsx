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

export function ElevatorIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="6" y="3.5" width="12" height="17" rx="1.5" />
      <path d="M10 8.5 12 6.5 14 8.5M10 15.5 12 17.5 14 15.5" />
    </svg>
  );
}

export function RefreshIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M4 12a8 8 0 0 1 13.66-5.66L20 8.5M20 4v4.5h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.66 5.66L4 15.5M4 20v-4.5h4.5" />
    </svg>
  );
}

export function WrenchIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L4 16.2V20h3.8l5.3-5.3a4 4 0 0 0 4.6-5.4l-2.6 2.6-2.1-2.1 2.6-2.6Z" />
    </svg>
  );
}

export function ClipboardCheckIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="5.5" y="4.5" width="13" height="16" rx="1.5" />
      <path d="M9 4.5V3.75A1.25 1.25 0 0 1 10.25 2.5h3.5A1.25 1.25 0 0 1 15 3.75V4.5" />
      <path d="M9 12.5l2 2 4-4" />
    </svg>
  );
}

export function BuildingIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M5 21V6.5L13 3v18" />
      <path d="M13 9.5 19 12v9" />
      <path d="M5 21h14" />
      <path d="M8.5 9h1M8.5 12.5h1M8.5 16h1" />
    </svg>
  );
}

export function TruckIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M3 6.5h10v10H3z" />
      <path d="M13 10.5h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M12 3.5 19 6v6c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5V6l7-2.5Z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  );
}

export function BadgeCheckIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M12 3.5 14 5.3l2.6-.4.9 2.5 2.3 1.3-.7 2.5.7 2.5-2.3 1.3-.9 2.5-2.6-.4L12 19l-2-1.8-2.6.4-.9-2.5-2.3-1.3.7-2.5-.7-2.5 2.3-1.3.9-2.5 2.6.4L12 3.5Z" />
      <path d="M9.3 12l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function CalendarIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="1.5" />
      <path d="M4 9.5h16M8 3v4M16 3v4" />
    </svg>
  );
}

export function ClockIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <circle cx="12" cy="12.5" r="8" />
      <path d="M12 8v4.5l3 2" />
    </svg>
  );
}

export function UsersIcon({ className = '' }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 5.3a3 3 0 0 1 0 5.9" />
      <path d="M15 14.3c2.5.3 4.5 2.2 4.5 4.7" />
    </svg>
  );
}
