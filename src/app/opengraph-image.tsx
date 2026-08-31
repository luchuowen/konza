import { renderHomeOgImage, ogImageSize, ogImageContentType } from '@/lib/og-image';

export const runtime = 'nodejs';
export const alt = "Konza Elevators & Escalator Co. Ltd | Vertical Transportation, Nairobi";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return renderHomeOgImage();
}
