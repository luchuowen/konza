import { COMPANY_INFO, SITE_URL, SITE_NAME, BRAND_TAGLINE } from '@/lib/constants';

// Sitewide LocalBusiness structured data. Only confirmed facts from
// docs/KONZA_SPEC.md and lib/constants.ts go in here — no [CONFIRM] field
// (e.g. a WhatsApp Business badge, social profiles) is filled with a guess.
export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: COMPANY_INFO.legalName,
    description: BRAND_TAGLINE,
    url: SITE_URL,
    image: `${SITE_URL}/brand/konza-logo-hires.jpg`,
    logo: `${SITE_URL}/brand/konza-logo-hires.jpg`,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phones[0],
    foundingDate: String(COMPANY_INFO.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address,
      postOfficeBoxNumber: COMPANY_INFO.poBox,
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.coordinates.lat,
      longitude: COMPANY_INFO.coordinates.lng,
    },
    contactPoint: COMPANY_INFO.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone,
      contactType: 'customer service',
      areaServed: 'KE',
    })),
    areaServed: {
      '@type': 'City',
      name: 'Nairobi',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
