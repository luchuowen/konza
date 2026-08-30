'use client';

import { useEffect, useRef, useState } from 'react';
import { COMPANY_INFO } from '@/lib/constants';

const DEFAULT_MESSAGE =
  "Hi Konza Elevators, I'd like to enquire about a project.";

// Per docs/KONZA_SPEC.md §7: this widget opens an in-page panel first — never
// an immediate external hand-off. Only the panel's own "Send" button opens
// wa.me, with the message pre-filled.
export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    try {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      const onClickOutside = (e: MouseEvent) => {
        if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('mousedown', onClickOutside);
      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('mousedown', onClickOutside);
      };
    } catch (err) {
      console.error('WhatsApp panel listeners failed:', err);
    }
  }, [open]);

  const number = COMPANY_INFO.whatsappNumber.replace(/[^\d]/g, '');
  const sendHref = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Konza Elevators on WhatsApp"
          className="w-[min(320px,calc(100vw-2.5rem))] rounded-xl border border-line-light bg-paper p-4 text-navy-950 shadow-2xl"
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-[0.08em] text-red">WhatsApp</p>
            <button
              type="button"
              aria-label="Close WhatsApp panel"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center text-navy-950/60 hover:text-navy-950"
            >
              ×
            </button>
          </div>
          <p className="mb-3 text-sm text-slate">
            Message Konza Elevators on WhatsApp — edit if you like, then send.
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="mb-3 w-full resize-none rounded-md border border-line-light bg-white p-2 text-sm text-navy-950 focus:border-red focus:outline-none"
          />
          <a
            href={sendHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#25D366] text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Send on WhatsApp
          </a>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? 'Close WhatsApp chat panel' : 'Chat with Konza Elevators on WhatsApp'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 motion-reduce:transition-none"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping motion-reduce:hidden" />
        )}
        <WhatsAppIcon />
      </button>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="relative"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.28-1.38a9.9 9.9 0 0 0 4.71 1.2h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.14c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.11-4.85-4.3-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .41-.07.64.49.24.57.81 1.97.88 2.11.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.55.73 1.81.86.26.14.44.21.5.32.07.12.07.65-.17 1.33z" />
    </svg>
  );
}
