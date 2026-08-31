import Link from 'next/link';
import type { ReactNode } from 'react';

type FeatureCardProps = {
  n: string;
  label: string;
  body: string;
  tag?: string;
  icon?: ReactNode;
  tone?: 'light' | 'dark';
  href?: string;
  ctaLabel?: string;
  className?: string;
};

export function FeatureCard({
  n,
  label,
  body,
  tag,
  icon,
  tone = 'light',
  href,
  ctaLabel,
  className = '',
}: FeatureCardProps) {
  const isDark = tone === 'dark';

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 md:p-7 ${
        isDark
          ? 'border border-white/10 bg-white/[0.03] hover:border-red/40 hover:bg-white/[0.06]'
          : 'border border-line-light bg-white shadow-[0_1px_2px_rgba(10,22,40,0.04)] hover:border-red/30 hover:shadow-[0_20px_40px_-16px_rgba(10,22,40,0.16)]'
      } ${className}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-1 -top-4 select-none font-sans text-7xl font-bold leading-none md:-top-5 md:text-8xl ${
          isDark ? 'text-white/[0.045]' : 'text-navy-950/[0.045]'
        }`}
      >
        {n}
      </span>

      <div className="relative flex flex-1 flex-col">
        {icon && (
          <div
            className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
              isDark ? 'bg-red/15 text-red' : 'bg-red/10 text-red'
            }`}
          >
            <span className="h-6 w-6">{icon}</span>
          </div>
        )}

        {tag && (
          <span
            className={`text-[0.68rem] font-bold uppercase tracking-[0.1em] ${
              isDark ? 'text-red/80' : 'text-red/80'
            }`}
          >
            {tag}
          </span>
        )}

        <h3
          className={`font-sans text-lg font-bold md:text-xl ${
            tag ? 'mt-2' : ''
          } ${isDark ? 'text-white' : 'text-navy-950'}`}
        >
          {label}
        </h3>

        <p className={`mt-3 flex-1 text-sm md:text-base ${isDark ? 'text-slate-dark' : 'text-slate'}`}>
          {body}
        </p>

        {href && ctaLabel && (
          <Link
            href={href}
            className="mt-5 inline-flex min-h-[44px] w-fit items-center gap-1 text-sm font-semibold text-red transition-colors hover:text-maroon"
          >
            {ctaLabel} →
          </Link>
        )}
      </div>
    </div>
  );
}
