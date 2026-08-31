import {
  applicationDefault,
  cert,
  getApps,
  initializeApp,
  type App,
} from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

// Server-only (never imported by a client component).
//
// Two supported credential paths, in priority order:
//
// 1. Explicit service-account env vars (FIREBASE_ADMIN_PROJECT_ID /
//    CLIENT_EMAIL / PRIVATE_KEY) — used for any environment that isn't
//    Firebase App Hosting itself (local dev against a real project, a
//    non-Google host, etc.).
// 2. Application Default Credentials — used automatically on Firebase App
//    Hosting, where the backend's own built-in service account is available
//    with no key to manage. App Hosting (a Cloud Run service under the
//    hood) always sets K_SERVICE, so its presence is a reliable signal that
//    ADC will resolve; GOOGLE_CLOUD_PROJECT/GCLOUD_PROJECT (also
//    platform-injected) supplies the project ID `cert()` would otherwise
//    have carried explicitly.
//
// If neither path has what it needs, isFirebaseAdminConfigured stays false
// and every write gracefully degrades (see src/app/actions/submit-lead.ts) —
// this must never throw at build/import time.
const explicitProjectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
const explicitClientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
const explicitPrivateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");
const hasExplicitCredentials = Boolean(
  explicitProjectId && explicitClientEmail && explicitPrivateKey
);

// K_SERVICE is set by Cloud Run (and therefore by every Firebase App
// Hosting backend, which runs on Cloud Run) — never set locally or on other
// hosts, so it's a safe proxy for "ADC via the platform service account is
// available here."
const runningOnAppHosting = Boolean(process.env.K_SERVICE);
const adcProjectId = process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT;
const hasAdcCredentials = runningOnAppHosting && Boolean(adcProjectId);

export const isFirebaseAdminConfigured = hasExplicitCredentials || hasAdcCredentials;

let app: App | undefined;

function getAdminApp(): App {
  if (!isFirebaseAdminConfigured) {
    throw new Error(
      "firebase-admin is not configured — set FIREBASE_ADMIN_PROJECT_ID/CLIENT_EMAIL/PRIVATE_KEY, " +
        "or deploy on Firebase App Hosting where Application Default Credentials are used automatically."
    );
  }
  if (!app) {
    app =
      getApps()[0] ??
      initializeApp(
        hasExplicitCredentials
          ? {
              credential: cert({
                projectId: explicitProjectId,
                clientEmail: explicitClientEmail,
                privateKey: explicitPrivateKey,
              }),
            }
          : {
              credential: applicationDefault(),
              projectId: adcProjectId,
            }
      );
  }
  return app;
}

export function getAdminDb(): Firestore {
  return getFirestore(getAdminApp());
}
