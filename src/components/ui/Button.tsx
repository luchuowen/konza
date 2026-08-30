import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonVariant = 'cta' | 'ghost';

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof CommonProps> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps | 'href'> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  'inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-3 font-sans text-sm font-semibold transition-colors';

const variants: Record<ButtonVariant, string> = {
  cta: 'bg-red text-white hover:bg-maroon',
  ghost: 'border border-white text-white hover:bg-white hover:text-navy-950',
};

export function Button({ variant = 'cta', href, className = '', children, ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as Omit<ButtonAsLink, keyof CommonProps | 'href'>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as Omit<ButtonAsButton, keyof CommonProps | 'href'>)}>
      {children}
    </button>
  );
}
