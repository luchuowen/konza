'use client';

export function Chip({
  label,
  active = false,
  onClick,
  count,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  count?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-full border px-4 py-2 font-sans text-sm font-medium transition-colors ${
        active
          ? 'border-red bg-red text-white'
          : 'border-line-light bg-white text-navy-950 hover:border-red hover:text-red'
      }`}
    >
      {label}
      {typeof count === 'number' && <span className="opacity-70">({count})</span>}
    </button>
  );
}
