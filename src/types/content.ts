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
