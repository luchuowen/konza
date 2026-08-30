'use client';

import { useState } from 'react';
import { Button } from './Button';

export type AccordionItemData = {
  id: string;
  title: string;
  tag: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export function Accordion({
  items,
  defaultOpenId,
}: {
  items: AccordionItemData[];
  defaultOpenId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  return (
    <div className="divide-y divide-line-light border-y border-line-light">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `accordion-button-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex min-h-[44px] w-full items-center justify-center gap-3 py-6 text-center md:justify-between md:gap-4 md:text-left"
              >
                <span className="font-serif text-xl font-bold text-navy-950 md:text-2xl">
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 font-serif text-2xl font-light leading-none text-red transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="flex flex-col items-center pb-8 text-center md:items-start md:text-left"
            >
              <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red">
                {item.tag}
              </span>
              <p className="mt-3 max-w-2xl text-base text-slate">{item.body}</p>
              <div className="mt-5">
                <Button href={item.ctaHref} variant="cta">
                  {item.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
