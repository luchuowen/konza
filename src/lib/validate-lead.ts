// Single source of truth for lead-form validation, imported by the client forms
// (real-time field errors) and by the server action (never trust client-only
// validation). Keep both call sites on this file so the rules can't drift apart.

export type QuoteFormValues = {
  name: string;
  phone: string;
  email: string;
  buildingType: string;
  projectType: string;
  floorCount: string;
  timeline: string;
  message: string;
};

export type ContactFormValues = {
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
};

export type FieldErrors<T> = Partial<Record<keyof T, string>>;

const PHONE_PATTERN = /^[+\d][\d\s-]{6,}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const BUILDING_TYPES = ["Residential", "Commercial", "Institutional", "Industrial"] as const;

export const PROJECT_TYPES = [
  "New Installation",
  "Modernization",
  "Maintenance",
  "Repair",
  "Construction & Contracting",
  "Equipment & Plant Hire",
  "Not Sure Yet",
] as const;

export const TIMELINES = [
  "As Soon As Possible",
  "Within 1 Month",
  "1–3 Months",
  "3–6 Months",
  "Just Researching",
] as const;

export const CONTACT_REASONS = [
  "General Enquiry",
  "Installation",
  "Modernization",
  "Maintenance",
  "Repair",
  "Construction & Contracting",
  "Equipment & Plant Hire",
  "Other",
] as const;

function validateName(name: string): string | undefined {
  if (!name.trim()) return "Please enter your name.";
  if (name.trim().length < 2) return "Please enter your full name.";
  return undefined;
}

function validatePhone(phone: string): string | undefined {
  if (!phone.trim()) return "Please enter a phone number.";
  if (!PHONE_PATTERN.test(phone.trim())) return "Please enter a valid phone number.";
  return undefined;
}

function validateEmail(email: string): string | undefined {
  if (!email.trim()) return undefined; // optional
  if (!EMAIL_PATTERN.test(email.trim())) return "Please enter a valid email address.";
  return undefined;
}

function validateMessage(message: string, required: boolean): string | undefined {
  if (required && !message.trim()) return "Please tell us a little about your enquiry.";
  return undefined;
}

export function validateQuoteForm(values: QuoteFormValues): FieldErrors<QuoteFormValues> {
  const errors: FieldErrors<QuoteFormValues> = {};
  const name = validateName(values.name);
  if (name) errors.name = name;
  const phone = validatePhone(values.phone);
  if (phone) errors.phone = phone;
  const email = validateEmail(values.email);
  if (email) errors.email = email;
  if (!values.buildingType) errors.buildingType = "Please select a building type.";
  if (!values.projectType) errors.projectType = "Please select a project type.";
  if (!values.timeline) errors.timeline = "Please select a timeline.";
  if (values.floorCount.trim() && Number.isNaN(Number(values.floorCount))) {
    errors.floorCount = "Please enter a number.";
  }
  return errors;
}

export function validateContactForm(values: ContactFormValues): FieldErrors<ContactFormValues> {
  const errors: FieldErrors<ContactFormValues> = {};
  const name = validateName(values.name);
  if (name) errors.name = name;
  const phone = validatePhone(values.phone);
  if (phone) errors.phone = phone;
  const email = validateEmail(values.email);
  if (email) errors.email = email;
  if (!values.reason) errors.reason = "Please select a reason for contacting us.";
  const message = validateMessage(values.message, true);
  if (message) errors.message = message;
  return errors;
}
