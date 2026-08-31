import { SITE_URL } from '@/lib/constants';

// Product schema for the 4 product lines actually shown on the Home page
// carousel (there is no dedicated Products page yet in this build). Only
// "Passenger Lifts" gets a brand claim — docs/KONZA_SPEC.md's Fuji catalog
// spec data (FJK450-1150 series) specifically covers that line; the other
// three aren't tied to one confirmed manufacturer, so no brand is asserted.
// No price/offers are included — none exist in source material.
const PRODUCTS = [
  {
    name: 'Passenger Lifts',
    description:
      "Passenger elevators for residential and commercial buildings, installed by Nairobi's authorized Fuji Elevator distributor.",
    brand: 'Fuji Elevator',
  },
  {
    name: 'Escalators',
    description: 'Escalator installation for retail, commercial and institutional buildings across Nairobi.',
  },
  {
    name: 'Home Lifts',
    description: 'Home lift installation for private residences in Nairobi.',
  },
  {
    name: 'Moving Walkways',
    description: 'Moving walkway installation for high-traffic commercial and retail buildings.',
  },
] as const;

// The one testimonial actually rendered on this page — verbatim from
// docs/KONZA_SPEC.md §2. No numeric rating is included: none was ever
// stated, and Google's review-markup policy requires markup to match what
// visibly appears on the page.
const REVIEW = {
  author: 'Salome Chiira',
  jobTitle: 'CEO & Founder',
  organization: 'Radiant Group of Hospitals',
  body:
    'Konza elevators and Escalators have staff who impressed us with their exceptional expertise, professionalism, and attention to detail. From the start, they showcased their extensive knowledge and meticulous planning, ensuring a smooth installation process.',
};

export function HomeJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...PRODUCTS.map((product) => ({
        '@type': 'Product',
        name: product.name,
        description: product.description,
        ...('brand' in product ? { brand: { '@type': 'Brand', name: product.brand } } : {}),
      })),
      {
        '@type': 'Review',
        itemReviewed: { '@id': `${SITE_URL}/#organization` },
        author: {
          '@type': 'Person',
          name: REVIEW.author,
          jobTitle: REVIEW.jobTitle,
          worksFor: {
            '@type': 'Organization',
            name: REVIEW.organization,
          },
        },
        reviewBody: REVIEW.body,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
