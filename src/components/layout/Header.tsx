'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS, PRIMARY_CTA } from '@/lib/constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const onScroll = () => setScrolled(window.scrollY > 40);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    } catch (err) {
      console.error('header scroll listener failed:', err);
    }
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b-[3px] border-red backdrop-blur-md transition-colors duration-300"
      style={{ backgroundColor: scrolled ? 'rgba(10,22,40,.92)' : 'rgba(10,22,40,.72)' }}
    >
      <Container className="flex items-center justify-between py-3">
        <Link href="/" aria-label="Konza Elevators home" className="flex shrink-0 items-center">
          {/*
            The real transparent-PNG logo (public/brand/konza-logo.png) has not
            been supplied by the client yet — see CLAUDE.md Decisions Log,
            2026-08-29. Only the solid-maroon-background hi-res JPEG exists.
            Wrapping it in a paper chip avoids a maroon box artifact directly
            on the navy bar without regenerating or reinterpreting the logo.
            Swap to next/image on konza-logo.png directly once it lands.
          */}
          <span className="inline-flex items-center overflow-hidden rounded-md bg-paper px-2 py-1">
            <Image
              src="/brand/konza-logo-hires.jpg"
              alt="Konza Elevators & Escalator Co. Ltd"
              width={116}
              height={43}
              className="h-8 w-auto md:h-9"
              priority
            />
          </span>
        </Link>

        <nav className="hidden min-[900px]:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden min-[900px]:block">
          <Button href={PRIMARY_CTA.href} variant="cta">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white min-[900px]:hidden"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          {drawerOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {drawerOpen && (
        <div className="border-t border-navy-800 bg-navy-950 min-[900px]:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="flex min-h-[44px] items-center text-white/90 transition-colors hover:text-red"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={PRIMARY_CTA.href}
              variant="cta"
              className="mt-2 w-full"
              onClick={() => setDrawerOpen(false)}
            >
              {PRIMARY_CTA.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
