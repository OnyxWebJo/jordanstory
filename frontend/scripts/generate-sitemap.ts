import fs from 'fs';
import path from 'path';
import { TOURS_DATA } from '../src/data/tours';
import { DESTINATIONS_FULL } from '../src/data/destinations';

const SITE_URL = 'https://jordanstorytours.com';
const LOCALES = ['en', 'de', 'fr', 'it'] as const;
type Locale = typeof LOCALES[number];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  alternates: { lang: string; href: string }[];
}

const currentDate = new Date().toISOString().split('T')[0];

const sitemapUrls: SitemapUrl[] = [];

// Helper to create multilingual alternates
function createAlternates(pathGenerator: (lang: Locale) => string): { lang: string; href: string }[] {
  const list: { lang: string; href: string }[] = LOCALES.map((lang) => ({
    lang,
    href: `${SITE_URL}${pathGenerator(lang)}`
  }));
  // Add x-default pointing to English
  list.push({
    lang: 'x-default',
    href: `${SITE_URL}${pathGenerator('en')}`
  });
  return list;
}

// 1. Core Pages (Home, Tours Hub, Destinations Hub, Booking)
const coreRoutes: { pathGen: (lang: Locale) => string; priority: number; changefreq: SitemapUrl['changefreq'] }[] = [
  {
    pathGen: (lang) => `/${lang}/`,
    priority: 1.0,
    changefreq: 'daily'
  },
  {
    pathGen: (lang) => `/${lang}/tours/`,
    priority: 0.9,
    changefreq: 'daily'
  },
  {
    pathGen: (lang) => `/${lang}/destinations/`,
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    pathGen: (lang) => `/${lang}/booking/`,
    priority: 0.8,
    changefreq: 'weekly'
  }
];

coreRoutes.forEach(({ pathGen, priority, changefreq }) => {
  const alternates = createAlternates(pathGen);
  LOCALES.forEach((lang) => {
    sitemapUrls.push({
      loc: `${SITE_URL}${pathGen(lang)}`,
      lastmod: currentDate,
      changefreq,
      priority,
      alternates
    });
  });
});

// 2. Individual Tour Pages
TOURS_DATA.forEach((tour) => {
  if (tour.isDraft) return;

  const pathGen = (lang: Locale) => {
    const slug = tour.slug[lang] || tour.slug.en;
    return `/${lang}/tours/${slug}/`;
  };

  const alternates = createAlternates(pathGen);

  LOCALES.forEach((lang) => {
    sitemapUrls.push({
      loc: `${SITE_URL}${pathGen(lang)}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.85,
      alternates
    });
  });
});

// 3. Individual Destination Pages
DESTINATIONS_FULL.forEach((dest) => {
  const pathGen = (lang: Locale) => {
    const slug = dest.slug[lang] || dest.slug.en;
    return `/${lang}/destinations/${slug}/`;
  };

  const alternates = createAlternates(pathGen);

  LOCALES.forEach((lang) => {
    sitemapUrls.push({
      loc: `${SITE_URL}${pathGen(lang)}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
      alternates
    });
  });
});

// Build XML string
const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(2)}</priority>
${u.alternates
  .map(
    (alt) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write sitemap.xml
const publicDir = path.resolve(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xmlContent, 'utf-8');

// Build robots.txt
const robotsContent = `# Robots.txt for Jordan Story Travel & Tourism
# Official Website: https://jordanstorytours.com

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /review/

# Generative Engine Optimization (GEO) — Allowed AI and LLM Search Agents
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Bingbot
Allow: /

# Sitemap Index Declaration
Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent, 'utf-8');

console.log(`✅ Generated sitemap.xml with ${sitemapUrls.length} localized URLs.`);
console.log(`✅ Generated robots.txt with GEO/LLM crawler permissions.`);
