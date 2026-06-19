import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { GoogleTagManager } from '@next/third-parties/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { routing, type Locale } from '@/i18n/routing';
import {
  SITE_URL,
  siteConfig,
  ogLocale,
  languageAlternates
} from '@/config';
import StructuredData from '@/components/StructuredData';
import '../globals.css';

const GTM_ID = 'GTM-TNW5PC8F';
const GOOGLE_ADS_ID = 'AW-18253826253';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#070a14',
  colorScheme: 'dark'
};

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const canonical = `${SITE_URL}/${locale}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: `%s · ${siteConfig.name}`
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: siteConfig.name, url: SITE_URL }],
    creator: siteConfig.name,
    applicationName: siteConfig.name,
    alternates: {
      canonical,
      languages: languageAlternates()
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      locale: ogLocale(locale),
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => ogLocale(l))
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      creator: siteConfig.twitter
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const tMeta = await getTranslations({ locale, namespace: 'meta' });
  const tAbout = await getTranslations({ locale, namespace: 'about' });

  return (
    <html lang={locale} suppressHydrationWarning>
      <GoogleTagManager gtmId={GTM_ID} />
      <Script
        id="gtag-src"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
      </Script>
      <head>
        <StructuredData
          locale={locale}
          description={tMeta('description')}
          jobTitle={tAbout('role')}
          addressCountry="Georgia"
          addressLocality="Tbilisi"
          streetAddress="Bakhtrioni street, N22"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Noto+Sans+Georgian:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
