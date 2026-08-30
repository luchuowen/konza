import { renderOgImage, ogImageSize, ogImageContentType } from '@/lib/og-image';

export const runtime = 'nodejs';
export const alt = 'Projects & Portfolio | Konza Elevators & Escalator Co. Ltd';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return renderOgImage('Projects & Portfolio', '50 Completed Installations Across Nairobi');
}
