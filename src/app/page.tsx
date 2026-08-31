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
  title: "Vertical Transportation for Nairobi's Skyline",
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

const PROJECT_SLIDES: CarouselSlide[] = [
  {
    tag: 'Project',
    title: 'Junction Trade Centre, Nairobi CBD',
    image: projectImageSrc('Project — Junction Trade Centre.jpg'),
  },
  {
    tag: 'Project',
    title: 'Radiant Group of Hospitals',
    image: projectImageSrc('Project — Radiant Hospital.jpg'),
  },
  { tag: 'Project', title: 'Village Market', image: projectImageSrc('Project — Village Market.jpg') },
  {
    tag: 'Project',
    title: 'MPESA Foundation Academy',
    image: projectImageSrc('Project — MPESA Foundation Academy.jpg'),
  },
];

const TRUST_SLIDES: CarouselSlide[] = [
  { tag: 'Trusted By', title: 'Radiant Group of Hospitals' },
  { tag: 'Trusted By', title: 'Greenhills Investment Ltd' },
  { tag: 'Trusted By', title: 'Harvest Family Church Ministries' },
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

const FEATURED_PROJECTS = [
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
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(10,22,40,.55) 0%, rgba(10,22,40,.94) 100%)' }}
        />
        <Container className="relative pb-16 pt-16 text-center md:pb-24 md:pt-24">
          <RevealOnScroll>
            <h1 className="mx-auto max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-white md:text-6xl">
              Elevators &amp; Escalators for Every Building
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:text-lg">
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
              <Carousel slides={PRODUCT_SLIDES} intervalMs={2600} placeholderClass="ph-products" />
              <Carousel slides={PROJECT_SLIDES} intervalMs={3100} placeholderClass="ph-projects" />
              <Carousel slides={TRUST_SLIDES} intervalMs={3600} placeholderClass="ph-trust" />
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-900">
        <Container className="py-14">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {PROOF_STATS.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-serif text-3xl font-bold text-white md:text-4xl">
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
                  <span className="font-serif text-2xl font-bold text-red">{item.n}</span>
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
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-bold text-white md:text-4xl">
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
                View all 50 →
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {FEATURED_PROJECTS.map((project) => (
                <article
                  key={project.name}
                  className="overflow-hidden rounded-xl border border-line-light bg-white transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 text-center md:text-left">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red">
                      {project.sector}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-navy-950">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{project.spec}</p>
                  </div>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="py-20">
          <RevealOnScroll>
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-2xl font-normal italic leading-relaxed text-white md:text-3xl">
                &ldquo;Konza elevators and Escalators have staff who impressed us with their
                exceptional expertise, professionalism, and attention to detail. From the start,
                they showcased their extensive knowledge and meticulous planning, ensuring a
                smooth installation process.&rdquo;
              </p>
              <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-slate-dark">
                Salome Chiira — CEO &amp; Founder, Radiant Group of Hospitals
              </footer>
            </blockquote>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20">
          <RevealOnScroll className="text-center">
            <span className={eyebrow}>Where We Work</span>
            <h2 className="mx-auto mt-3 max-w-lg font-serif text-3xl font-bold text-navy-950 md:text-4xl">
              Elevator and escalator solutions for different types of buildings.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {INDUSTRY_TILES.map((tile) => (
                // Not a <Link>: /industries (docs/KONZA_SPEC.md §5, item 6) has no
                // build session yet, so there's nowhere real to send this tile to
                // — see docs/PRE-LAUNCH-AUDIT.md. Re-wrap in Link once it exists.
                <div
                  key={tile.n}
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
                    <span className="font-serif text-2xl font-bold text-red">{tile.n}</span>
                    <h3 className="mt-3 font-serif text-lg font-bold text-navy-950">{tile.name}</h3>
                    <p className="mt-2 text-sm text-slate">{tile.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
