'use client';

import { createContext, useContext, useState } from 'react';

type MobileNavState = { open: boolean; setOpen: (open: boolean) => void };

// Shared between Header (the drawer itself) and WhatsAppWidget (which hides
// its floating button while the full-screen drawer is open, rather than
// sitting isolated on top of it).
const MobileNavContext = createContext<MobileNavState | null>(null);

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <MobileNavContext.Provider value={{ open, setOpen }}>{children}</MobileNavContext.Provider>;
}

export function useMobileNav() {
  const ctx = useContext(MobileNavContext);
  if (!ctx) throw new Error('useMobileNav must be used within MobileNavProvider');
  return ctx;
}
