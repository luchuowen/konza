export const SITE_NAME = "Konza Elevators & Escalator Co. Ltd";

export const BRAND_TAGLINE =
  "The vertical-transportation partner for Nairobi's next skyline — a 13-year, Fuji-authorized installer with 50 real projects behind it, from Parliament-adjacent office towers to hospital bed lifts.";

export const COMPANY_INFO = {
  legalName: "Konza Elevators & Escalator Co. Ltd",
  foundedYear: 2013,
  address: "Ramco Court, Office C23, off Mombasa Road, Nairobi",
  addressLines: ["Ramco Court, Office C23,", "Off Mombasa Road, Nairobi"],
  poBox: "P.O. Box 406–00511",
  phones: ["+254 726 053 238", "+254 706 811 818"],
  email: "david@konzaelevators.co.ke",
  hours: "Business hours — to be confirmed by Konza",
  whatsappNumber: "+254726053238",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Maintenance", href: "/maintenance" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

export const PRIMARY_CTA: NavLink = { label: "Get a Quote", href: "/quote" };

export const FOOTER_LINKS: NavLink[] = [
  ...NAV_LINKS.slice(0, -1),
  PRIMARY_CTA,
  NAV_LINKS[NAV_LINKS.length - 1],
];

export const SOCIAL_LINKS = {
  facebook: null as string | null,
  instagram: null as string | null,
  linkedin: null as string | null,
};

export const COPYRIGHT_NOTICE = "© 2026 Konza Elevators";

export const DESIGNER_CREDIT = {
  text: "Designed by Navac Global",
  prefix: "Designed by",
  linkLabel: "Navac Global",
  url: "https://navac.co.ke",
};
