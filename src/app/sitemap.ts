import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { ARTICLES } from '@/lib/resources-data';

// Only routes that actually exist as pages in this build. /products and
// /industries are part of the approved IA (docs/KONZA_SPEC.md §5) but have
// no build session yet — see docs/PRE-LAUNCH-AUDIT.md — so they're excluded
// here too (NAV_LINKS in constants.ts also omits them, for the same reason).
const STATIC_ROUTES = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/projects', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/maintenance', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/resources', changeFrequency: 'weekly' as const, priority: 0.6 },
  { path: '/quote', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/resources/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticEntries, ...articleEntries];
}
