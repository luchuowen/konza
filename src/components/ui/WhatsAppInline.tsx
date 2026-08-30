'use client';

import { useState } from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';

// Inline, always-visible counterpart to the floating WhatsAppWidget (which is
// desktop-only) — per docs/KONZA_SPEC.md §7's "in-page panel first" rule, this
// still only opens wa.me from its own explicit Send button, never on load or
// on a container click.
export function WhatsAppInline({
  heading = 'Prefer WhatsApp?',
  defaultMessage,
}: {
  heading?: string;
  defaultMessage: string;
}) {
  const [message, setMessage] = useState(defaultMessage);
  const number = COMPANY_INFO.whatsappNumber.replace(/[^\d]/g, '');
  const sendHref = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="rounded-xl border border-line-light bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
          <WhatsAppIcon className="h-6 w-6 text-white" />
        </span>
        <div>
          <p className="font-serif text-lg font-bold text-navy-950">{heading}</p>
          <p className="text-sm text-slate">Message us directly — most Kenyan buyers do.</p>
        </div>
      </div>
      <label htmlFor="whatsapp-inline-message" className="sr-only">
        Your WhatsApp message
      </label>
      <textarea
        id="whatsapp-inline-message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        className="mt-4 w-full resize-none rounded-md border border-line-light bg-paper p-3 text-sm text-navy-950 focus:border-red focus:outline-none"
      />
      <a
        href={sendHref}
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Send on WhatsApp
      </a>
    </div>
  );
}
