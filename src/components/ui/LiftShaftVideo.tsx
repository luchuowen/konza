'use client';

import { useState } from 'react';

// docs/KONZA_MEDIA_PROMPTS.md slots this video as the "Home signature motion
// moment (fallback still: reuse asset #1)". Per this project's fail-safe
// mandate, a video that fails to load must not leave a blank section — falls
// back to the hand-drawn lift-shaft SVG animation this section used before.
export function LiftShaftVideo({ src, poster }: { src: string; poster: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg width="120" height="180" viewBox="0 0 120 180" fill="none" aria-hidden="true" className="mx-auto">
        <rect x="10" y="10" width="100" height="160" rx="4" stroke="#E8453D" strokeWidth="2" />
        <line x1="30" y1="10" x2="30" y2="170" stroke="#E8453D" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="90" y1="10" x2="90" y2="170" stroke="#E8453D" strokeWidth="1" strokeOpacity="0.5" />
        <rect
          className="lift-car"
          x="24"
          y="70"
          width="72"
          height="46"
          rx="3"
          fill="#142A47"
          stroke="#E8453D"
          strokeWidth="2"
        />
        <line x1="24" y1="93" x2="96" y2="93" stroke="#E8453D" strokeWidth="1" strokeOpacity="0.6" />
      </svg>
    );
  }

  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      onError={() => setFailed(true)}
      className="mx-auto h-auto w-full max-w-[420px] rounded-lg border border-white/10"
    />
  );
}
