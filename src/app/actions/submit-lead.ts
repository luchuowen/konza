'use server';

import { getAdminDb, isFirebaseAdminConfigured } from '@/lib/firebase-admin';
import { notifyLeadByEmail } from '@/lib/notify-lead-email';
import {
  validateContactForm,
  validateQuoteForm,
  type ContactFormValues,
  type QuoteFormValues,
} from '@/lib/validate-lead';
import type { Lead } from '@/types/lead';

export type SubmitLeadState =
  | { status: 'idle' }
  | { status: 'invalid'; errors: Record<string, string> }
  | { status: 'error'; message: string }
  | { status: 'success' };

async function writeLead(lead: Lead): Promise<SubmitLeadState> {
  if (!isFirebaseAdminConfigured) {
    // Expected during this build phase — no live Firestore project exists yet
    // (see CLAUDE.md's deferred list). Logging clearly rather than failing the
    // page lets the form's own UX be verified before real credentials land.
    console.warn(
      `[submit-lead] firebase-admin not configured — logging lead instead of writing to Firestore: ${JSON.stringify(lead)}`
    );
  } else {
    try {
      await getAdminDb().collection('leads').add(lead);
    } catch (err) {
      console.error('[submit-lead] Firestore write failed:', err);
      return {
        status: 'error',
        message: 'Something went wrong submitting your request. Please try WhatsApp or call us directly.',
      };
    }
  }

  await notifyLeadByEmail(lead).catch((err) => console.error('[submit-lead] email notification failed:', err));
  return { status: 'success' };
}

export async function submitQuoteLead(
  _prevState: SubmitLeadState,
  formData: FormData
): Promise<SubmitLeadState> {
  const values: QuoteFormValues = {
    name: String(formData.get('name') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    email: String(formData.get('email') ?? ''),
    buildingType: String(formData.get('buildingType') ?? ''),
    projectType: String(formData.get('projectType') ?? ''),
    floorCount: String(formData.get('floorCount') ?? ''),
    timeline: String(formData.get('timeline') ?? ''),
    message: String(formData.get('message') ?? ''),
  };

  const errors = validateQuoteForm(values);
  if (Object.keys(errors).length > 0) {
    return { status: 'invalid', errors: errors as Record<string, string> };
  }

  const lead: Lead = {
    name: values.name.trim(),
    phone: values.phone.trim(),
    email: values.email.trim() || undefined,
    buildingType: values.buildingType,
    projectType: values.projectType,
    floorCount: values.floorCount.trim() ? Number(values.floorCount) : undefined,
    timeline: values.timeline,
    message: values.message.trim() || undefined,
    source: 'form',
    page: 'quote',
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  return writeLead(lead);
}

export async function submitContactLead(
  _prevState: SubmitLeadState,
  formData: FormData
): Promise<SubmitLeadState> {
  const values: ContactFormValues = {
    name: String(formData.get('name') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
  };

  const errors = validateContactForm(values);
  if (Object.keys(errors).length > 0) {
    return { status: 'invalid', errors: errors as Record<string, string> };
  }

  // Contact page deliberately skips Quote's project-detail segmentation (§6:
  // "simpler contact form") — these three Lead fields are required by the
  // shared schema but not asked of a general-inquiry visitor, so they're set
  // to honest internal placeholders rather than fabricated answers.
  const lead: Lead = {
    name: values.name.trim(),
    phone: values.phone.trim(),
    email: values.email.trim() || undefined,
    buildingType: 'Not specified',
    projectType: 'General Inquiry',
    timeline: 'Not specified',
    message: values.message.trim() || undefined,
    source: 'form',
    page: 'contact',
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  return writeLead(lead);
}
