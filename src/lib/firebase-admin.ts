import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore, type Firestore } from "firebase-admin/firestore";

// Server-only (never imported by a client component). No live Firestore project
// exists yet — see CLAUDE.md's deferred list — so these env vars are unset in
// every environment until Konza's project is provisioned in a future session.
// Failure here must be graceful and clearly logged, never a build-time crash.
const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID;
const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");

export const isFirebaseAdminConfigured = Boolean(projectId && clientEmail && privateKey);

let app: App | undefined;

function getAdminApp(): App {
  if (!isFirebaseAdminConfigured) {
    throw new Error(
      "firebase-admin is not configured — FIREBASE_ADMIN_PROJECT_ID/CLIENT_EMAIL/PRIVATE_KEY are unset."
    );
  }
  if (!app) {
    app = getApps()[0] ?? initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
  }
  return app;
}

export function getAdminDb(): Firestore {
  return getFirestore(getAdminApp());
}
