export async function GET() {
  const robots = `# Bed-Stuy Locksmith robots.txt
# Allow all search engines to crawl the site

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /temp/
Disallow: /*.pdf$
Disallow: /wp-admin/
Disallow: /wp-login.php
Disallow: /wp-includes/
Disallow: /wp-content/plugins/
Disallow: /wp-content/themes/

# Sitemap location
Sitemap: https://locksmithbedstuy.com/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
