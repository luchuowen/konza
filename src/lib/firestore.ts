// Firestore client init — CONFIG ONLY. Per docs/BLUEPRINT.md and CLAUDE.md
// "Deferred", do not provision a live Firestore project or run `firebase`
// CLI deploy commands from inside a build session. Real wiring happens in a
// separate, explicitly-requested prompt after Session 9.
//
// Collections this schema will back (docs/KONZA_SPEC.md §7):
//   leads         — name, phone, email, projectType, buildingType, floorCount,
//                   timeline, message, source ("form" | "whatsapp"), page,
//                   createdAt
//   projects      — name, location, sector, brand, units, image
//   products      — name, category, specs, image
//   blogPosts     — title, slug, body, publishedAt
//   testimonials  — quote, name, role, org

import { initializeApp, getApps, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const firebaseApp =
  getApps().length > 0 ? getApps()[0]! : initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
