'use client';

import { useState } from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { CheckIcon, PhoneIcon } from '@/components/ui/ContactIcons';

const WHY_WHATSAPP = [
  'A real member of our team replies personally.',
  'Share photos of your site or building right in the chat.',
  'Keep the conversation going after you submit the form.',
];

// Inline, always-visible WhatsApp panel for the Quote page sidebar — per
// docs/KONZA_SPEC.md §7's "in-page panel first" rule, this still only opens
// wa.me from its own explicit Send button, never on load or on a container
// click. Laid out as a flex column with a flex-1 "Why WhatsApp" filler so it
// CAN match the height of a taller sidebar — but only when the caller opts in
// via `className="h-full"` (e.g. Quote, where this is the sole sidebar card).
// Deliberately does NOT default to h-full: an unconditional h-full broke a
// prior Contact layout where this sat among sibling cards — an unconditional
// h-full there demanded the whole stretched column's height for itself,
// starving its siblings via flex-shrink (shrank the map card to ~50px).
// `variant="inline"` drops the card's own border/bg/padding so it can be
// embedded as a trailing section inside another card (e.g. Contact's office
// card) instead of nested as a card-within-a-card.
export function WhatsAppInline({
  heading = 'Prefer WhatsApp?',
  defaultMessage,
  className = '',
  variant = 'card',
  showTips = true,
}: {
  heading?: string;
  defaultMessage: string;
  className?: string;
  variant?: 'card' | 'inline';
  showTips?: boolean;
}) {
  const [message, setMessage] = useState(defaultMessage);
  const number = COMPANY_INFO.whatsappNumber.replace(/[^\d]/g, '');
  const sendHref = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`flex flex-col ${
        variant === 'card' ? 'rounded-xl border border-line-light bg-white p-8' : 'mt-6 border-t border-line-light pt-6'
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#075E54]">
          <WhatsAppIcon className="h-7 w-7 text-white" />
        </span>
        <div>
          <p className="font-sans text-xl font-bold text-navy-950">{heading}</p>
          <p className="text-sm text-slate">Message us directly for a faster response.</p>
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
        className="mt-6 w-full resize-none rounded-md border border-line-light bg-paper p-3 text-sm text-navy-950 focus:border-red focus:outline-none"
      />
      <a
        href={sendHref}
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#075E54] text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Send on WhatsApp
      </a>

      {showTips && (
        <div className="mt-8 flex flex-1 flex-col border-t border-line-light pt-6">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red">Why WhatsApp</p>
          <ul className="mt-4 flex flex-col gap-3">
            {WHY_WHATSAPP.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-1 flex-col justify-end border-t border-line-light pt-6">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red">
              Prefer to Call?
            </p>
            <a
              href={`tel:${COMPANY_INFO.phones[0].replace(/\s/g, '')}`}
              className="mt-3 flex min-h-[44px] items-center gap-3 text-navy-950 transition-colors hover:text-red"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span className="font-sans text-base font-bold">{COMPANY_INFO.phones[0]}</span>
            </a>
            <p className="mt-2 text-sm text-slate">{COMPANY_INFO.hours}</p>
          </div>
        </div>
      )}
    </div>
  );
}
