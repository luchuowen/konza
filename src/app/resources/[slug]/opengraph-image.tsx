import { renderOgImage, ogImageSize, ogImageContentType } from '@/lib/og-image';
import { ARTICLES, getArticleBySlug } from '@/lib/resources-data';

export const runtime = 'nodejs';
export const alt = 'Konza Elevators & Escalator Co. Ltd';
export const size = ogImageSize;
export const contentType = ogImageContentType;

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  return renderOgImage(article?.category ?? 'Resources & Guides', article?.title ?? 'Konza Elevators & Escalator Co. Ltd');
}
