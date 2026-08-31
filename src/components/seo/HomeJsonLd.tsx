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

// All 3 testimonials actually rendered on this page — verbatim from
// docs/KONZA_SPEC.md §2. No numeric rating is included: none was ever
// stated, and Google's review-markup policy requires markup to match what
// visibly appears on the page.
const REVIEWS = [
  {
    author: 'Salome Chiira',
    jobTitle: 'CEO & Founder',
    organization: 'Radiant Group of Hospitals',
    body:
      'Konza elevators and Escalators have staff who impressed us with their exceptional expertise, professionalism, and attention to detail. From the start, they showcased their extensive knowledge and meticulous planning, ensuring a smooth installation process.',
  },
  {
    author: 'Sanjay Shah',
    jobTitle: 'Director',
    organization: 'Greenhills Investment Ltd (Village Market)',
    body:
      "Konza staff's expertise in installation was evident in their precise planning and flawless execution, resulting in a top-of-the-line elevators that perfectly catered to our requirements. With their unwavering commitment to quality and safety. We highly recommend them!",
  },
  {
    author: 'Pastor Jimmy Macharia',
    jobTitle: 'Founder',
    organization: 'Harvest Family Church Ministries',
    body:
      'The elevators and escalators they installed were not only smooth and reliable but also showcased a remarkable level of craftsmanship. We highly recommend Konza elevators for their outstanding workmanship and dedication to excellence.',
  },
] as const;

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
      ...REVIEWS.map((review) => ({
        '@type': 'Review',
        itemReviewed: { '@id': `${SITE_URL}/#organization` },
        author: {
          '@type': 'Person',
          name: review.author,
          jobTitle: review.jobTitle,
          worksFor: {
            '@type': 'Organization',
            name: review.organization,
          },
        },
        reviewBody: review.body,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
