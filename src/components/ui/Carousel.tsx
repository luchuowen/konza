'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export type CarouselSlide = {
  tag: string;
  title: string;
  image?: string;
};

export function Carousel({
  slides,
  intervalMs = 3000,
  className = '',
  placeholderClass = 'ph-products',
}: {
  slides: CarouselSlide[];
  intervalMs?: number;
  className?: string;
  placeholderClass?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    try {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mq.matches);
      const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mq.addEventListener('change', handleChange);
      return () => mq.removeEventListener('change', handleChange);
    } catch (err) {
      console.error('carousel motion-preference check failed:', err);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion || paused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reducedMotion, paused, slides.length, intervalMs]);

  if (slides.length === 0) return null;
  const active = slides[index];
  const showDots = slides.length > 1 && !reducedMotion;
  const allowManualNav = slides.length > 1;

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`relative aspect-[4/3] w-full ${active.image ? '' : placeholderClass}`}>
        {active.image && (
          <Image src={active.image} alt={active.title} fill className="object-cover" />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 via-navy-950/75 to-transparent px-4 pb-4 pt-10">
          <span
            className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red"
            style={{ textShadow: '0 1px 6px rgba(10,22,40,.9)' }}
          >
            {active.tag}
          </span>
          <p
            className="mt-1 font-sans text-lg font-medium text-white"
            style={{ textShadow: '0 1px 6px rgba(10,22,40,.9)' }}
          >
            {active.title}
          </p>
        </div>
      </div>

      {(showDots || allowManualNav) && (
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.title + i}
              type="button"
              aria-label={`Go to slide ${i + 1}: ${s.title}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className="-m-[18px] flex h-11 w-11 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-red' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
