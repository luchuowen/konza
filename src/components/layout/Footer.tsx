import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
  BRAND_TAGLINE,
  COMPANY_INFO,
  COPYRIGHT_NOTICE,
  DESIGNER_CREDIT,
  FOOTER_LINKS,
  PRIMARY_CTA,
} from '@/lib/constants';
import { SocialLinksRow } from '@/components/layout/SocialLinks';

function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactList({ compact = false }: { compact?: boolean }) {
  const textSize = compact ? 'text-xs' : 'text-sm';
  const gap = compact ? 'gap-3' : 'gap-4';
  return (
    <ul
      className={`flex flex-col ${gap} ${textSize} items-center text-center text-slate-dark min-[900px]:items-start min-[900px]:text-left`}
    >
      <li>
        {COMPANY_INFO.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </li>
      <li>{COMPANY_INFO.poBox}</li>
      {COMPANY_INFO.phones.map((phone) => (
        <li key={phone}>
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="inline-flex min-h-[44px] items-center hover:text-white"
          >
            {phone}
          </a>
        </li>
      ))}
      <li>
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          className="inline-flex min-h-[44px] items-center hover:text-white"
        >
          {COMPANY_INFO.email}
        </a>
      </li>
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-t-[3px] border-red bg-navy-950 text-white">
      <Container className="flex flex-col items-center gap-10 py-14 min-[900px]:flex-row min-[900px]:flex-nowrap min-[900px]:items-start min-[900px]:justify-between">
        <div className="flex flex-col items-center gap-4 text-center min-[900px]:items-start min-[900px]:text-left">
          <span className="inline-flex w-fit items-center overflow-hidden rounded-md bg-paper px-2 py-1">
            <Image
              src="/brand/konza-logo-hires.jpg"
              alt="Konza Elevators & Escalator Co. Ltd"
              width={116}
              height={43}
              className="h-9 w-auto"
            />
          </span>
          <p className="max-w-xs text-sm text-slate-dark">{BRAND_TAGLINE}</p>
        </div>

        <div>
          <h3 className="mb-4 hidden text-xs font-bold uppercase tracking-[0.1em] text-red min-[900px]:block">
            Company
          </h3>
          <ul className="hidden flex-col gap-2 min-[900px]:flex">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-slate-dark transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <details className="group min-[900px]:hidden">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.1em] text-red [&::-webkit-details-marker]:hidden">
              Company
              <ChevronIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <ul className="flex flex-col items-center gap-1 pb-1 pt-2 text-center">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[40px] items-center text-xs text-slate-dark transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>

        <div>
          <h3 className="mb-4 hidden text-xs font-bold uppercase tracking-[0.1em] text-red min-[900px]:block">
            Get in Touch
          </h3>
          <div className="hidden min-[900px]:block">
            <ContactList />
          </div>

          <details className="group min-[900px]:hidden">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-center gap-2 text-center text-xs font-bold uppercase tracking-[0.1em] text-red [&::-webkit-details-marker]:hidden">
              Get in Touch
              <ChevronIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="pb-1 pt-2">
              <ContactList compact />
            </div>
          </details>
        </div>

        <div className="flex flex-col items-center text-center min-[900px]:items-start min-[900px]:text-left">
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-red">Connect</h3>
          <SocialLinksRow className="justify-center min-[900px]:justify-start" />
          <Button href={PRIMARY_CTA.href} variant="cta" className="mt-6 w-[212px]">
            {PRIMARY_CTA.label}
          </Button>
        </div>
      </Container>

      <div className="border-t border-navy-800">
        <Container className="flex flex-col items-center gap-2 py-6 text-center text-xs text-slate-dark min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between min-[900px]:text-left">
          <p>{COPYRIGHT_NOTICE}</p>
          <p>
            {DESIGNER_CREDIT.prefix}{' '}
            <a
              href={DESIGNER_CREDIT.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center font-semibold text-red"
            >
              {DESIGNER_CREDIT.linkLabel}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
