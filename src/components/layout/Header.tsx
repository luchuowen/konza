'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SocialLinksRow } from '@/components/layout/SocialLinks';
import { NAV_LINKS, PRIMARY_CTA } from '@/lib/constants';
import { useMobileNav } from '@/lib/mobile-nav-context';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { open: drawerOpen, setOpen: setDrawerOpen } = useMobileNav();

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

  useEffect(() => {
    if (!drawerOpen) return;
    try {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setDrawerOpen(false);
      };
      document.addEventListener('keydown', onKeyDown);
      return () => {
        document.body.style.overflow = previousOverflow;
        document.removeEventListener('keydown', onKeyDown);
      };
    } catch (err) {
      console.error('drawer lock/escape listener failed:', err);
    }
  }, [drawerOpen, setDrawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b-[3px] border-red backdrop-blur-md transition-colors duration-300"
      style={{ backgroundColor: scrolled ? 'rgba(10,22,40,.92)' : 'rgba(10,22,40,.72)' }}
    >
      <Container className="grid grid-cols-[44px_1fr_44px] items-center py-3 min-[900px]:flex min-[900px]:justify-between">
        <span aria-hidden="true" className="min-[900px]:hidden" />
        <Link
          href="/"
          aria-label="Konza Elevators home"
          className="flex shrink-0 items-center justify-self-center min-[900px]:justify-self-auto"
        >
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
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {drawerOpen && createPortal(
        <div className="fixed inset-0 z-[60] flex flex-col bg-navy-950 min-[900px]:hidden">
          <div className="flex items-center justify-between border-b-[3px] border-red px-5 py-3">
            <Link href="/" onClick={closeDrawer} aria-label="Konza Elevators home" className="flex items-center">
              <span className="inline-flex items-center overflow-hidden rounded-md bg-paper px-2 py-1">
                <Image
                  src="/brand/konza-logo-hires.jpg"
                  alt="Konza Elevators & Escalator Co. Ltd"
                  width={116}
                  height={43}
                  className="h-8 w-auto"
                />
              </span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeDrawer}
              className="inline-flex h-11 w-11 items-center justify-center text-white"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeDrawer}
                  className="flex min-h-[44px] items-center text-lg text-white/90 transition-colors hover:text-red"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button href={PRIMARY_CTA.href} variant="cta" className="mt-6 w-full" onClick={closeDrawer}>
              {PRIMARY_CTA.label}
            </Button>

            <div className="mt-auto flex flex-col items-center gap-4 pt-10">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-red">Connect</p>
              <SocialLinksRow />
            </div>
          </div>
        </div>,
        document.body
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
