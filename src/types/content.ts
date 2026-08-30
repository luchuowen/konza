export type LeadSource = "form" | "whatsapp";

export interface Lead {
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  buildingType: string;
  floorCount?: number;
  timeline: string;
  message?: string;
  source: LeadSource;
  page: string;
  createdAt: string;
}

export interface Project {
  name: string;
  location: string;
  sector: "Healthcare" | "Commercial" | "Institutional" | "Industrial" | "Residential";
  brand: string;
  units: string;
  image: string;
}

export interface Product {
  name: string;
  category: string;
  specs?: Record<string, string>;
  image: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  body: string;
  publishedAt: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  org: string;
}
