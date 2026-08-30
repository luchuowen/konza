'use client';

import { useEffect, useRef, useState } from 'react';

export function RevealOnScroll({
  children,
  stagger = false,
  className = '',
}: {
  children: React.ReactNode;
  stagger?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false); // starts FALSE — visible by default

  useEffect(() => {
    try {
      const el = ref.current;
      if (!el) return;
      setHidden(true); // only hide once we know observation will actually happen
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setHidden(false);
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      io.observe(el);
      return () => io.disconnect();
    } catch (err) {
      console.error('reveal init failed, content remains visible:', err);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? 'reveal-stagger' : 'reveal'} ${hidden ? 'pre' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
