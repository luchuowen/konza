export const SITE_NAME = "Konza Elevators & Escalator Co. Ltd";

export const SITE_URL = "https://konzaelevators.co.ke";

export const BRAND_TAGLINE =
  "Konza Elevators is a Kenyan company providing elevator and escalator supply, installation, maintenance, repair and modernization services. Established in 2013, we are an authorized Fuji Elevator distributor with 50 completed projects.";

export const COMPANY_INFO = {
  legalName: "Konza Elevators & Escalator Co. Ltd",
  foundedYear: 2013,
  address: "Ramco Court, Office C23, off Mombasa Road, Nairobi",
  addressLines: ["Ramco Court, Office C23,", "Off Mombasa Road, Nairobi"],
  poBox: "P.O. Box 406–00511",
  phones: ["+254 726 053 238", "+254 706 811 818"],
  email: "info@konzaelevators.co.ke",
  hours: "Monday–Friday, 9:00AM–5:00PM",
  whatsappNumber: "+254726053238",
  coordinates: { lat: -1.3188588346016903, lng: 36.83547029202306 },
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

export const FOOTER_LINKS: NavLink[] = NAV_LINKS;

export const SOCIAL_LINKS = {
  facebook: null as string | null,
  instagram: null as string | null,
  linkedin: null as string | null,
};

export const COPYRIGHT_NOTICE = "Copyright © 2026 Konza Elevators";

export const DESIGNER_CREDIT = {
  text: "Designed by NAVAC Global",
  prefix: "Designed by",
  linkLabel: "NAVAC Global",
  url: "https://navac.co.ke",
};
