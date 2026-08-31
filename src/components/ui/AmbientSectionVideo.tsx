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
// This fallback is exercised for real, not theoretical: "Video — Escalator
// Ambient Loop.mp4" throws a real `error` event in Chromium (code 4,
// DEMUXER_ERROR_NO_SUPPORTED_STREAMS) despite being a structurally valid MP4
// container (confirmed with `file`) — some encoding/codec issue from
// whichever tool generated it. The static photo renders correctly for every
// visitor as a result; get the file re-exported before treating the motion
// effect itself as live.
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
