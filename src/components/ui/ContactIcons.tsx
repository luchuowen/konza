type IconProps = { className?: string };

const strokeProps = {
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function LocationIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function MailboxIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M4 10.5A4.5 4.5 0 0 1 8.5 6H20v9H8.5A4.5 4.5 0 0 1 4 10.5Z" />
      <path d="M4 10.5V18" />
      <circle cx="8.3" cy="10.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <path d="M6.6 10.3c1.2 2.4 3.1 4.3 5.5 5.5l1.9-1.9c.25-.25.6-.33.93-.22 1.03.35 2.14.53 3.27.53.5 0 .9.4.9.9V19c0 .5-.4.9-.9.9C10.1 19.9 4.1 13.9 4.1 5.8c0-.5.4-.9.9-.9h3.9c.5 0 .9.4.9.9 0 1.13.18 2.24.53 3.27.11.33.03.68-.22.93L6.6 10.3Z" />
    </svg>
  );
}

export function MailIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...strokeProps}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export function MapPinIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 22s7.5-7.05 7.5-13A7.5 7.5 0 1 0 4.5 9c0 5.95 7.5 13 7.5 13Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9" r="3" fill="white" />
    </svg>
  );
}

export function CheckIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
