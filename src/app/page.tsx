import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Carousel, type CarouselSlide } from '@/components/ui/Carousel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { LiftShaftVideo } from '@/components/ui/LiftShaftVideo';
import { IMAGES, projectImageSrc } from '@/lib/images';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';

export const metadata: Metadata = {
  title: 'Elevators & Escalators for Every Building in Nairobi',
  description:
    "Nairobi's authorized Fuji Elevator distributor since 2013 — 13 years, 50 completed installations, vertical transportation for the city's next skyline.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Konza Elevators & Escalator Co. Ltd | Vertical Transportation, Nairobi",
    description:
      "Nairobi's authorized Fuji Elevator distributor since 2013 — 13 years, 50 completed installations, vertical transportation for the city's next skyline.",
  },
};

const PRODUCT_SLIDES: CarouselSlide[] = [
  { tag: 'Product', title: 'Passenger Lifts', image: IMAGES.productPassengerLifts },
  { tag: 'Product', title: 'Escalators', image: IMAGES.productEscalators },
  { tag: 'Product', title: 'Home Lifts', image: IMAGES.productHomeLifts },
  { tag: 'Product', title: 'Moving Walkways', image: IMAGES.productMovingWalkways },
];

// Project and Trusted-By slides deliberately draw from disjoint real photos
// (no filename shared between the two arrays below) — the two carousels run
// synchronized, so any shared image would show twice on screen at once.
const PROJECT_SLIDES: CarouselSlide[] = [
  {
    tag: 'Project',
    title: 'Junction Trade Centre',
    image: projectImageSrc('Project — Junction Trade Centre.jpg'),
  },
  {
    tag: 'Project',
    title: 'MPESA Foundation Academy',
    image: projectImageSrc('Project — MPESA Foundation Academy.jpg'),
  },
  { tag: 'Project', title: 'Ruai Mega Mall', image: projectImageSrc('Project — Ruai Mega Mall.jpg') },
  {
    tag: 'Project',
    title: 'Kajiado Law Courts',
    image: projectImageSrc('Project — Kajiado Law Courts.jpg'),
  },
];

const TRUST_SLIDES: CarouselSlide[] = [
  {
    tag: 'Trusted By',
    title: 'Radiant Group of Hospitals',
    image: projectImageSrc('Project — Radiant Hospital.jpg'),
  },
  {
    // Sanjay Shah, the quoted Greenhills Investment Ltd testimonial, is
    // Director of Greenhills — the developer behind Village Market
    // (docs/KONZA_SPEC.md §2's testimonial attribution) — same real
    // installation, not a substitute photo.
    tag: 'Trusted By',
    title: 'Greenhills Investment Ltd',
    image: projectImageSrc('Project — Village Market.jpg'),
  },
  {
    // Replaces Harvest Family Church Ministries (a real testimonial source,
    // but with no matching photo anywhere in public/images/ — showing it
    // meant falling back to the .ph-trust placeholder every third beat).
    // Jesse Kay Hospital is a real completed Konza project (KONZA_SPEC.md
    // §2, also in projects-data.ts) with its own real photo, distinct from
    // every photo used elsewhere in this section.
    tag: 'Trusted By',
    title: 'Jesse Kay Hospital',
    image: projectImageSrc('Project — Jesse Kay Hospital.jpg'),
  },
];

const PROOF_STATS = [
  { value: '13', label: 'Years in Business' },
  { value: '50', label: 'Completed Projects' },
  { value: 'Fuji', label: 'Authorized Distributor' },
  { value: '10', label: 'Person Technical Team' },
];

const COMPLIANCE_ITEMS = [
  {
    n: '01',
    label: 'Kenyan Standards',
    body: 'We design and install elevators in line with KS ISO 8100 and current KEBS requirements.',
  },
  {
    n: '02',
    label: 'Authorized Fuji Distributor',
    body: 'We are an authorized Fuji Elevator distributor in Kenya, officially supplied and supported by Fuji.',
  },
  {
    n: '03',
    label: 'Delivery & Installation',
    body: 'We coordinate delivery, site preparation and elevator installation throughout every stage of the project.',
  },
  {
    n: '04',
    label: 'Repair & Maintenance',
    body: 'We inspect, repair and maintain elevators, starting with a free condition report and quotation.',
  },
];

type FeaturedProjectSector = 'Commercial' | 'Institutional' | 'Healthcare' | 'Residential';

const FEATURED_PROJECTS: {
  sector: FeaturedProjectSector;
  name: string;
  spec: string;
  image: string;
}[] = [
  {
    sector: 'Commercial',
    name: 'Junction Trade Centre',
    spec: '2× 10-stop panoramic elevators, Fuji — Nairobi CBD.',
    image: projectImageSrc('Project — Junction Trade Centre.jpg'),
  },
  {
    sector: 'Institutional',
    name: 'MPESA Foundation Academy',
    spec: 'Glarie-supplied 2-stop elevator installation.',
    image: projectImageSrc('Project — MPESA Foundation Academy.jpg'),
  },
  {
    sector: 'Healthcare',
    name: 'Radiant Group of Hospitals',
    spec: '2× 11-stop + 1× 5-stop elevators, Fuji & Delfar.',
    image: projectImageSrc('Project — Radiant Hospital.jpg'),
  },
  {
    sector: 'Commercial',
    name: 'Village Market',
    spec: '11 escalators + 1× 3-stop elevator, Fuji — our largest single installation.',
    image: projectImageSrc('Project — Village Market.jpg'),
  },
  {
    sector: 'Residential',
    name: 'The Moon Apartments, Ruaka',
    spec: 'Passenger lift installation for a residential apartment development.',
    image: projectImageSrc('Project — The Moon Apartments Ruaka.jpg'),
  },
  {
    sector: 'Residential',
    name: 'Blessed House, Thika Road',
    spec: 'Passenger lift installation on the Thika Road corridor.',
    image: projectImageSrc('Project — Blessed House Thika Road.jpg'),
  },
];

const INDUSTRY_TILES = [
  {
    n: '01',
    name: 'Residential Highrise',
    body: 'Elevators for apartments and residential buildings, from planning to installation and maintenance.',
    image: IMAGES.industryResidentialHighrise,
  },
  {
    n: '02',
    name: 'Commercial & Office',
    body: 'Elevator systems for offices and commercial buildings, designed for reliable daily use.',
    image: IMAGES.industryCommercialOffice,
  },
  {
    n: '03',
    name: 'Hospital & Institutional',
    body: 'Safe and reliable elevator systems for hospitals, schools and other public institutions.',
    image: IMAGES.industryHospitalInstitutional,
  },
  {
    n: '04',
    name: 'Retail & Escalators',
    body: 'Escalators and elevators built for shopping malls and other high-traffic commercial spaces.',
    image: IMAGES.industryRetailEscalators,
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Konza elevators and Escalators have staff who impressed us with their exceptional expertise, professionalism, and attention to detail. From the start, they showcased their extensive knowledge and meticulous planning, ensuring a smooth installation process.',
    name: 'Salome Chiira',
    role: 'CEO & Founder, Radiant Group of Hospitals',
  },
  {
    quote:
      "Konza staff's expertise in installation was evident in their precise planning and flawless execution, resulting in a top-of-the-line elevators that perfectly catered to our requirements. With their unwavering commitment to quality and safety. We highly recommend them!",
    name: 'Sanjay Shah',
    role: 'Director, Greenhills Investment Ltd (Village Market)',
  },
  {
    quote:
      'The elevators and escalators they installed were not only smooth and reliable but also showcased a remarkable level of craftsmanship. We highly recommend Konza elevators for their outstanding workmanship and dedication to excellence.',
    name: 'Pastor Jimmy Macharia',
    role: 'Founder, Harvest Family Church Ministries',
  },
] as const;

const eyebrow =
  'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <section className="relative overflow-hidden">
        <HeroBackground images={[IMAGES.heroVerticalCity, IMAGES.heroTechnician, IMAGES.heroHospitalLobby]} />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(10,22,40,.72) 0%, rgba(10,22,40,.94) 100%)' }}
        />
        <Container className="relative pb-16 pt-16 text-center md:pb-24 md:pt-24">
          <RevealOnScroll>
            <h1
              className="mx-auto max-w-2xl font-sans text-3xl font-medium leading-[1.15] text-white md:text-5xl"
              style={{ textShadow: '0 2px 20px rgba(10,22,40,.85)' }}
            >
              Elevators &amp; Escalators for Every Building
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:text-lg"
              style={{ textShadow: '0 1px 12px rgba(10,22,40,.85)' }}
            >
              We supply, install, maintain and repair elevators and escalators for homes,
              offices, hospitals, malls and industrial buildings.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="cta" className="min-w-[190px]">
                Get a Quote
              </Button>
              <Button href="/projects" variant="ghost" className="min-w-[190px]">
                See Our Work
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-16 md:mt-20">
            <span className={`${eyebrow} mb-6 block`}>What Konza Delivers</span>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {/* All three run the same intervalMs so they advance in lockstep — a single
                  synchronized beat is far easier to follow than three uncoordinated timers. */}
              <Carousel slides={PRODUCT_SLIDES} intervalMs={4000} placeholderClass="ph-products" />
              <Carousel slides={PROJECT_SLIDES} intervalMs={4000} placeholderClass="ph-projects" />
              <Carousel slides={TRUST_SLIDES} intervalMs={4000} placeholderClass="ph-trust" />
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-900">
        <Container className="py-14">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {PROOF_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-sans text-3xl font-bold text-white md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-dark">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
        <Image src={IMAGES.complianceBand} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-950/40" />
      </div>

      <section className="bg-white">
        <Container className="py-14">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {COMPLIANCE_ITEMS.map((item, i) => (
                <div
                  key={item.n}
                  className={`text-center md:pr-4 md:text-left ${
                    i < COMPLIANCE_ITEMS.length - 1 ? 'md:border-r md:border-line-light' : ''
                  }`}
                >
                  <span className="font-sans text-2xl font-bold text-red">{item.n}</span>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-navy-950">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-slate">{item.body}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <span className={eyebrow}>How It Works</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-sans text-3xl font-bold text-white md:text-4xl">
              From installation to modernization and maintenance, we handle your elevator
              needs from start to finish.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <LiftShaftVideo src={IMAGES.videoLiftShaftCutaway} poster={IMAGES.heroVerticalCity} />
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20">
          <RevealOnScroll>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className={eyebrow}>Our Work</span>
              </div>
              <Link
                href="/projects"
                className="min-h-[44px] shrink-0 text-sm font-semibold text-red hover:text-maroon"
              >
                View all projects →
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {FEATURED_PROJECTS.map((project, i) => (
                <Link
                  key={project.name}
                  href="/projects"
                  className="group overflow-hidden rounded-xl border border-line-light bg-white text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:text-left"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-baseline justify-center gap-2 md:justify-start">
                      <span className="font-sans text-2xl font-bold text-red">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-red/70">
                        {project.sector}
                      </span>
                    </div>
                    <h3 className="mt-2 font-sans text-lg font-bold text-navy-950 group-hover:text-red">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{project.spec}</p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="py-20">
          <RevealOnScroll className="text-center">
            <span className={eyebrow}>What Clients Say</span>
            <h2 className="mx-auto mt-2 max-w-md font-sans text-xl font-semibold text-white md:text-2xl">
              Trusted by developers, institutions and homeowners.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="flex h-full flex-col rounded-xl border border-navy-800 bg-navy-900 p-6 text-center transition-colors duration-300 hover:border-red/40"
                >
                  <span aria-hidden="true" className="font-sans text-3xl leading-none text-red">
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 font-serif text-base italic leading-relaxed text-slate-dark">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-navy-800 pt-4">
                    <p className="text-xs font-bold uppercase tracking-[0.06em] text-white">{t.name}</p>
                    <p className="mt-1 text-xs text-slate-dark">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20">
          <RevealOnScroll className="text-center">
            <span className={eyebrow}>Where We Work</span>
            <h2 className="mx-auto mt-3 max-w-lg font-sans text-3xl font-bold text-navy-950 md:text-4xl">
              Elevator and escalator solutions for different types of buildings.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {INDUSTRY_TILES.map((tile) => (
                <Link
                  key={tile.n}
                  href="/industries"
                  className="group overflow-hidden rounded-xl border border-line-light bg-white text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:text-left"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={tile.image}
                      alt={tile.name}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-sans text-2xl font-bold text-red">{tile.n}</span>
                    <h3 className="mt-3 font-sans text-lg font-bold text-navy-950 group-hover:text-red">
                      {tile.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{tile.body}</p>
                  </div>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
