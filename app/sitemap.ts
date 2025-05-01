import type { MetadataRoute } from 'next';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

// https://www.sitemaps.org/protocol.html
// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

// Change frequency:
// NEVER: Old news stories, press releases, etc
// YEARLY: Contact, “About Us”, login, registration pages
// MONTHLY: FAQs, instructions, occasionally updated articles
// WEEKLY: Product info pages, website directories
// DAILY: Blog entry index, classifieds, small message board
// HOURLY: Major news site, weather information, forum
// ALWAYS: Stock market data, social bookmarking categories

// Priority:
// 0.8-1.0: Homepage, subdomains, product info, major features, major category pages.
// 0.4-0.7: Articles and blog entries, minor category pages, sub-category pages, FAQs
// 0.0-0.3: Outdated news, info that has become irrelevant

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hiddenfilecleaner.app';
  const articles = (
    await readdir(join(process.cwd(), 'app', '(pages)', 'articles'), {
      recursive: false,
      withFileTypes: true,
    })
  ).filter((file) => file.isDirectory());
  const eulaAndPrivacy = ['/eula', '/privacy-policy'];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...eulaAndPrivacy.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(), // TODO: Get last modified date from file
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
  ];
}
