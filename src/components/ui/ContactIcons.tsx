type IconProps = { className?: string };

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
