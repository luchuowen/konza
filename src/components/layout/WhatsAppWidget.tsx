'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { COMPANY_INFO } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { useMobileNav } from '@/lib/mobile-nav-context';

const DEFAULT_MESSAGE =
  "Hi Konza Elevators, I'd like to enquire about a project.";

// Quote carries its own always-visible WhatsAppInline panel, so the floating
// widget would just duplicate it there. Contact dropped both its inline panel
// and this floating widget per direct request — WhatsApp is still reachable
// there via the footer's WhatsApp icon and the phone numbers on the page.
const PAGES_WITHOUT_FLOATING_WHATSAPP = ['/quote', '/contact'];

export function WhatsAppWidget() {
  const pathname = usePathname();
  const { open: drawerOpen } = useMobileNav();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (drawerOpen) setOpen(false);
  }, [drawerOpen]);

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

  if (drawerOpen) return null;
  if (pathname && PAGES_WITHOUT_FLOATING_WHATSAPP.includes(pathname)) return null;

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-50 hidden flex-col items-end gap-3 min-[900px]:flex">
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
            className="flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#075E54] text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
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
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#075E54] text-white shadow-lg transition-transform hover:scale-105 motion-reduce:transition-none"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#075E54] opacity-75 animate-ping motion-reduce:hidden" />
        )}
        <WhatsAppIcon className="relative h-6 w-6" />
      </button>
    </div>
  );
}
