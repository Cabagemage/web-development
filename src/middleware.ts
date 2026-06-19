import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(en|ka|ru)/:path*',
    '/((?!api|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|manifest|sitemap|robots|.*\\..*).*)'
  ]
};
