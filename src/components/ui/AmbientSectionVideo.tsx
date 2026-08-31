'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// docs/KONZA_MEDIA_PROMPTS.md slots this loop as an optional ambient texture
// for the Industries page's Retail & Escalators section — "nice-to-have, not
// required for launch." Per this project's fail-safe mandate, it never
// replaces the real photo, only plays on top of it: the <Image> beneath is
// always rendered, and the video is an absolutely-positioned enhancement that
// disappears (on error, or when the visitor prefers reduced motion) leaving
// the photo intact underneath.
//
// This fallback is not purely theoretical: standard H.264/AAC MP4 (what both
// generated videos on this site use) isn't decodable in every environment —
// e.g. Firefox on Linux without the OS's proprietary codec packages, or a
// stripped-down Chromium build. See CLAUDE.md's Session 5 follow-up entry:
// what first looked like a corrupt "Escalator Ambient Loop.mp4" file turned
// out to be exactly this, not a bad export — don't re-diagnose it as a file
// defect without first ruling out the playback environment.
export function AmbientSectionVideo({
  src,
  fallbackImage,
  alt,
}: {
  src: string;
  fallbackImage: string;
  alt: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    try {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduced) setShowVideo(true);
    } catch (err) {
      console.error('ambient video motion-preference check failed:', err);
    }
  }, []);

  return (
    <div className="absolute inset-0">
      <Image src={fallbackImage} alt={alt} fill className="object-cover" />
      {showVideo && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setShowVideo(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
