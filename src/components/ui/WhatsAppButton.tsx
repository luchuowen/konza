'use client';

import { useEffect, useState } from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';

const DEFAULT_MESSAGE = "Hi Konza Elevators, I'd like to enquire about a project.";

// Sitewide WhatsApp entry point, reached from the footer/drawer "Connect"
// social-icon row. Per docs/KONZA_SPEC.md §7's "in-page panel first" rule,
// this only opens wa.me from the panel's own explicit Send button, never on
// open. Rendered as a centred modal (not an anchored dropdown) so it works
// identically whether the trigger icon sits in the footer or inside the
// mobile nav drawer, without clipping against either container's bounds.
export function WhatsAppButton({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  useEffect(() => {
    if (!open) return;
    try {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
    } catch (err) {
      console.error('WhatsApp modal listener failed:', err);
    }
  }, [open]);

  const number = COMPANY_INFO.whatsappNumber.replace(/[^\d]/g, '');
  const sendHref = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Chat with Konza Elevators on WhatsApp"
        onClick={() => setOpen(true)}
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-navy-800 bg-navy-900 text-slate-dark transition-colors hover:border-red hover:bg-red hover:text-white ${className}`}
      >
        <WhatsAppIcon className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/60 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Chat with Konza Elevators on WhatsApp"
            className="w-[min(360px,100%)] rounded-xl border border-line-light bg-paper p-6 text-navy-950 shadow-2xl"
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
              className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#075E54] text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Send on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
