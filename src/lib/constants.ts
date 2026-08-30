// Sourced from docs/KONZA_SPEC.md §2 "Grounded Truth" and §9 "Footer + Designer
// Credit". Values marked [CONFIRM] are unresolved in the source spec — never
// upgrade a [CONFIRM] placeholder to a stated fact without the client's sign-off
// landing in KONZA_SPEC.md first.

export const SITE_NAME = "Konza Elevators & Escalator Co. Ltd";

export const COMPANY_INFO = {
  legalName: "Konza Elevators & Escalator Co. Ltd",
  foundedYear: 2013,
  address: "Ramco Court, Office C23, off Mombasa Road, Nairobi",
  poBox: "P.O. Box 406–00511",
  phones: ["+254 726 053 238", "+254 706 811 818"],
  // [CONFIRM] Spec recommends a general inbox rather than publishing a named
  // individual's address. Do not present this as the final public contact
  // email until Konza confirms — see docs/KONZA_SPEC.md §10, item 2.
  email: "david@konzaelevators.co.ke", // [CONFIRM]
  // [CONFIRM] Header vs. footer hours conflict on the live site; spec says
  // stage a placeholder that is visually obvious during client review rather
  // than silently guessing. See docs/KONZA_SPEC.md §2 and §10, item 1.
  hours: "Business hours — to be confirmed by Konza", // [CONFIRM]
  // [CONFIRM] No dedicated WhatsApp Business number identified; using the
  // primary phone number provisionally. See docs/KONZA_SPEC.md §10, item 6.
  whatsappNumber: "+254726053238", // [CONFIRM]
} as const;

export type NavLink = {
  label: string;
  href: string;
};

// Primary navigation — the ten core IA pages, docs/KONZA_SPEC.md §5.
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Maintenance Contracts", href: "/maintenance" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

// Persistent header CTA, always visible per docs/KONZA_SPEC.md §5.
export const PRIMARY_CTA: NavLink = { label: "Get a Quote", href: "/quote" };

// Footer sitemap row, docs/KONZA_SPEC.md §9.
export const FOOTER_LINKS: NavLink[] = [
  { label: "Sitemap", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Contact", href: "/contact" },
];

// [CONFIRM] Facebook presence is currently fragmented across 3 uncoordinated
// pages (docs/KONZA_SPEC.md §2, "Known site defects"); Instagram and LinkedIn
// are net-new per §3/§9. No confirmed URLs exist yet for any of the three —
// do not invent handles. Populate once Konza supplies real links.
export const SOCIAL_LINKS = {
  facebook: null as string | null, // [CONFIRM]
  instagram: null as string | null, // [CONFIRM] — new presence
  linkedin: null as string | null, // [CONFIRM] — new presence
};

// Footer credit line, docs/KONZA_SPEC.md §9 — exact, verbatim approved
// wording (including the year), no trailing full stop on the line itself.
export const DESIGNER_CREDIT = {
  text: "© 2026 Konza Elevators & Escalator Co. Ltd. Designed by NAVAC GLOBAL",
  url: "https://navac.co.ke/",
};
