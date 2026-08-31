import { renderOgImage, ogImageSize, ogImageContentType } from '@/lib/og-image';

export const runtime = 'nodejs';
export const alt = 'Products | Konza Elevators & Escalator Co. Ltd';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function Image() {
  return renderOgImage('Products', 'Nine Products. One Trusted Installer.');
}
