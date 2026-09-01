import { ImageResponse } from 'next/og';
import fs from 'node:fs/promises';
import path from 'node:path';

export const ogImageSize = { width: 1424, height: 752 };
export const ogImageContentType = 'image/png';

// The real asset already has "Konza Elevators / Vertical Transportation for
// Nairobi's Skyline" baked into its bottom-left quadrant (it was composed as
// the Home page's own card). Compositing a different route's title on top of
// that verbatim would double up illegible text (verified by rendering it —
// see CLAUDE.md's Verification standard), so:
//  - Home reuses the asset exactly as supplied, no overlay text at all.
//  - Every other route shows only the photo's top ~460px (before the baked
//    caption starts), scaled up via CSS to fill the frame, with that route's
//    own real title composited on top. This crops the existing photo purely
//    with layout math at render time — no new file, nothing regenerated.
const TEXT_FREE_SOURCE_HEIGHT = 460;
const CROP_SCALE = ogImageSize.height / TEXT_FREE_SOURCE_HEIGHT;
const SCALED_WIDTH = ogImageSize.width * CROP_SCALE;
const SCALED_LEFT = (ogImageSize.width - SCALED_WIDTH) / 2;

let bgDataUri: string | null = null;

async function getBackgroundDataUri(): Promise<string> {
  if (bgDataUri) return bgDataUri;
  const filePath = path.join(process.cwd(), 'public/images/OG — Social Share Card.jpg');
  const buffer = await fs.readFile(filePath);
  bgDataUri = `data:image/jpeg;base64,${buffer.toString('base64')}`;
  return bgDataUri;
}

// The Home page's OG card: the real asset as supplied, untouched.
export async function renderHomeOgImage() {
  const bg = await getBackgroundDataUri();
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element -- Satori (next/og) renders this at build time, not a browser <img>
      <img
        src={bg}
        alt=""
        width={ogImageSize.width}
        height={ogImageSize.height}
        style={{ objectFit: 'cover' }}
      />
    ),
    { ...ogImageSize }
  );
}

// Every other route: the same real photo's text-free top slice, with that
// route's own real page title composited over it.
export async function renderOgImage(eyebrow: string, title: string) {
  const bg = await getBackgroundDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: ogImageSize.width,
          height: ogImageSize.height,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori (next/og) renders this at build time, not a browser <img> */}
        <img
          src={bg}
          alt=""
          width={SCALED_WIDTH}
          height={ogImageSize.height * CROP_SCALE}
          style={{ position: 'absolute', top: 0, left: SCALED_LEFT }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ogImageSize.width,
            height: ogImageSize.height,
            background:
              'linear-gradient(180deg, rgba(8,17,29,0.15) 0%, rgba(8,17,29,0.92) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: ogImageSize.width,
            height: ogImageSize.height,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '72px 88px',
          }}
        >
          <span
            style={{
              display: 'flex',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#E8453D',
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#ffffff',
              maxWidth: 1100,
            }}
          >
            {title}
          </span>
          <span
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 24,
              fontWeight: 600,
              color: '#93A2B2', // --slate-dark
            }}
          >
            Konza Elevators &amp; Escalator Co. Ltd
          </span>
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
