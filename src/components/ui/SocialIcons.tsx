type IconProps = { className?: string };

export function FacebookIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.9 21v-7.6h2.56l.38-2.97h-2.94V8.53c0-.86.24-1.44 1.47-1.44h1.57V4.44c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.91v2.2H8.4v2.97h2.46V21h3.04Z" />
    </svg>
  );
}

export function InstagramIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      className={className}
    >
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 8.5H3.87V20h3.07V8.5ZM5.4 4a1.78 1.78 0 1 0 0 3.56A1.78 1.78 0 0 0 5.4 4ZM20.5 20h-3.06v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H10.3V8.5h2.94v1.57h.04c.41-.78 1.42-1.6 2.92-1.6 3.13 0 3.7 2.06 3.7 4.74V20Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.28-1.38a9.9 9.9 0 0 0 4.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.11-4.85-4.3-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .41-.07.64.49.24.57.81 1.97.88 2.11.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.55.73 1.81.86.26.14.44.21.5.32.07.12.07.65-.17 1.33z" />
    </svg>
  );
}
