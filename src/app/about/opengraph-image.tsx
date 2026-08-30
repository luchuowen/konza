import { renderOgImage, ogImageSize, ogImageContentType } from '@/lib/og-image';

export const runtime = 'nodejs';
export const alt = 'About Us | Konza Elevators & Escalator Co. Ltd';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return renderOgImage('About Us', 'The Story, Values and Team Behind Konza');
}
