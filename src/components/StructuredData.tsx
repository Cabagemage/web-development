import { SITE_URL, siteConfig } from '@/config';

export default function StructuredData({
  locale,
  description,
  jobTitle,
  addressCountry,
  addressLocality,
  streetAddress
}: {
  locale: string;
  description: string;
  jobTitle: string;
  addressCountry: string;
  addressLocality: string;
  streetAddress: string;
}) {
  const sameAs = [siteConfig.social.telegram, siteConfig.social.facebook];
  const logoUrl = `${SITE_URL}/icon`;

  const person = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Andrei',
    url: SITE_URL,
    jobTitle,
    description,
    sameAs,
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Golang',
      'Frontend Architecture',
      'Micro-frontends'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry,
      addressLocality,
      streetAddress
    }
  };

  const service = {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Codemage — Web Development',
    url: SITE_URL,
    logo: logoUrl,
    description,
    provider: { '@id': `${SITE_URL}/#person` },
    areaServed: 'Worldwide',
    serviceType: 'Web development',
    address: {
      '@type': 'PostalAddress',
      addressCountry,
      addressLocality,
      streetAddress
    }
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#person` }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [person, service, website]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
