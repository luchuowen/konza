import type { Lead } from "@/types/lead";
import { COMPANY_INFO } from "@/lib/constants";

// docs/KONZA_SPEC.md §10 item 2: the sales inbox is itself [CONFIRM] — Konza
// hasn't named one yet — so SALES_NOTIFICATION_EMAIL is read from env with a
// fallback to the general inbox in lib/constants.ts, never a fabricated address.
const NOTIFICATION_RECIPIENT = process.env.SALES_NOTIFICATION_EMAIL || COMPANY_INFO.email;

export async function notifyLeadByEmail(lead: Lead): Promise<void> {
  // TODO: wire real email provider once credentials exist (no ESP configured
  // in this build phase — see CLAUDE.md's deferred list). Never let a failure
  // here block or fail the lead submission itself; the Firestore write is the
  // record of truth.
  console.info(
    `[notify-lead-email] Would send lead notification to ${NOTIFICATION_RECIPIENT} for ${lead.name} (${lead.page}).`
  );
}
