import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Root-level metadata icons live at /icon and /apple-icon.
    // Some clients (PWA/Lighthouse audits, Safari, crawlers) request them with
    // a locale prefix; redirect those to the canonical root routes.
    return [
      {
        source: '/:locale(en|ka|ru)/icon',
        destination: '/icon',
        permanent: true
      },
      {
        source: '/:locale(en|ka|ru)/apple-icon',
        destination: '/apple-icon',
        permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);
