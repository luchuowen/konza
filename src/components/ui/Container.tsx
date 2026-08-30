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
