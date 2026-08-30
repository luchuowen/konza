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
}: {
  slides: CarouselSlide[];
  intervalMs?: number;
  className?: string;
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
      <div className={`relative aspect-[4/3] w-full ${active.image ? '' : 'ph-products'}`}>
        {active.image && (
          <Image src={active.image} alt={active.title} fill className="object-cover" />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent p-4">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red">
            {active.tag}
          </span>
          <p className="mt-1 font-serif text-lg font-bold text-white">{active.title}</p>
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
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? 'bg-red' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
