// width:100% is load-bearing: this component must never collapse to
// content-width when it's a flex child with auto margins (see
// docs/KONZA_SPEC.md §4, the "two real, fixed CSS bugs" note).
export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-5 md:px-11 ${className}`}>
      {children}
    </div>
  );
}
