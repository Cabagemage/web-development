import { routing } from '@/i18n/routing';

// TODO: replace with your real production domain (no trailing slash)
export const SITE_URL = 'https://andrei.dev';

export const siteConfig = {
  url: SITE_URL,
  name: 'MzeDev',
  twitter: '@Memecounterr',
  social: {
    telegram: 'https://t.me/Memecounterr',
    linkedin: 'https://www.linkedin.com/in/cabagemage/',
    facebook: 'https://www.facebook.com/profile.php?id=61590966781844'
  }
};

const OG_LOCALE: Record<string, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  ka: 'ka_GE'
};

export function ogLocale(locale: string) {
  return OG_LOCALE[locale] ?? 'en_US';
}

export function languageAlternates() {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${SITE_URL}/${locale}`;
  }
  languages['x-default'] = `${SITE_URL}/${routing.defaultLocale}`;
  return languages;
}
