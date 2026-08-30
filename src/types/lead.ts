// Schema matches docs/KONZA_SPEC.md §7 "Lead capture: Firestore `leads` collection"
// exactly — `source` distinguishes the enquiry channel (form vs. a future WhatsApp-
// click event), `page` distinguishes which page it was submitted from.
export type LeadSource = "form" | "whatsapp";
export type LeadPage = "quote" | "contact";
export type LeadStatus = "new" | "contacted" | "quoted" | "won" | "lost";

export interface Lead {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  buildingType: string;
  floorCount?: number;
  timeline: string;
  message?: string;
  source: LeadSource;
  page: LeadPage;
  createdAt: string;
  status: LeadStatus;
}
