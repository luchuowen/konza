import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 15.5.24's built-in image optimizer has a confirmed production-only
    // bug: its internal self-fetch for local /public images fails (returns an
    // HTML error page instead of the file's bytes) whenever the filename
    // contains a non-ASCII character. Every real photo asset in this project
    // is named with an em dash per docs/KONZA_MEDIA_PROMPTS.md's convention
    // (e.g. "Hero — Vertical City Nairobi.jpg"), so every real photo was
    // silently broken under `next start` while working fine under `next dev`
    // — exactly the kind of defect invisible from reading the code. Verified
    // with an ASCII-only control file (public/brand/konza-logo-hires.jpg,
    // which optimizes fine) to isolate the cause to the filename, not a
    // general local-image failure. Renaming the real client-delivered asset
    // files isn't an option (breaks the exact-filename-match rule), so
    // optimization is disabled here to restore working images everywhere;
    // see the Session 8 decision log for the follow-up options (patching
    // Next, or an asset-rename decision with client sign-off).
    unoptimized: true,
  },
};

export default nextConfig;
