import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kifel-service.com';

  const staticPages = [
    { url: baseUrl, lastModified: '2025-02-01', changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/ueber-uns`, lastModified: '2025-01-15', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: '2025-01-15', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/karriere`, lastModified: '2025-01-15', changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/aktuelles`, lastModified: '2025-02-01', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/kontakt`, lastModified: '2025-01-15', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/impressum`, lastModified: '2025-01-01', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: '2025-01-01', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: '2025-01-01', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: '2025-01-15',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${baseUrl}/aktuelles/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
