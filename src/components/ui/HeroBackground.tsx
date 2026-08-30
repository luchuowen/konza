'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Crossfading background for the Home hero, rotating the 3 real hero photos
// docs/KONZA_MEDIA_PROMPTS.md slots as "Home hero, slide 1/2/3". Follows the
// same fail-safe pattern as Carousel.tsx: the first image is a plain <Image
// priority> that's always rendered (never hidden behind JS), the rotation is
// a progressive enhancement layered on top, and it respects reduced-motion.
export function HeroBackground({ images, intervalMs = 6000 }: { images: string[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0);
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
      console.error('hero background motion-preference check failed:', err);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return;
    try {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, intervalMs);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    } catch (err) {
      console.error('hero background rotation failed:', err);
    }
  }, [reducedMotion, images.length, intervalMs]);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className="object-cover transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
