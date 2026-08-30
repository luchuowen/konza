import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Carousel, type CarouselSlide } from '@/components/ui/Carousel';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export const metadata: Metadata = {
  title: "Vertical Transportation for Nairobi's Skyline",
  description:
    "Nairobi's authorized Fuji Elevator distributor since 2013 — 13 years, 50 completed installations, vertical transportation for the city's next skyline.",
  openGraph: {
    title: "Konza Elevators & Escalator Co. Ltd | Vertical Transportation, Nairobi",
    description:
      "Nairobi's authorized Fuji Elevator distributor since 2013 — 13 years, 50 completed installations, vertical transportation for the city's next skyline.",
  },
};

const PRODUCT_SLIDES: CarouselSlide[] = [
  { tag: 'Product', title: 'Passenger Lifts' },
  { tag: 'Product', title: 'Escalators' },
  { tag: 'Product', title: 'Home Lifts' },
  { tag: 'Product', title: 'Moving Walkways' },
];

const PROJECT_SLIDES: CarouselSlide[] = [
  { tag: 'Project', title: 'Junction Trade Centre, Nairobi CBD' },
  { tag: 'Project', title: 'Radiant Group of Hospitals' },
  { tag: 'Project', title: 'Village Market' },
  { tag: 'Project', title: 'MPESA Foundation Academy' },
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
  },
  {
    sector: 'Institutional',
    name: 'MPESA Foundation Academy',
    spec: 'Glarie-supplied 2-stop elevator installation.',
  },
  {
    sector: 'Healthcare',
    name: 'Radiant Group of Hospitals',
    spec: '2× 11-stop + 1× 5-stop elevators, Fuji & Delfar.',
  },
  {
    sector: 'Commercial',
    name: 'Village Market',
    spec: '11 escalators + 1× 3-stop elevator, Fuji — our largest single installation.',
  },
  {
    sector: 'Residential',
    name: 'The Moon Apartments, Ruaka',
    spec: 'Passenger lift installation for a residential apartment development.',
  },
  {
    sector: 'Residential',
    name: 'Blessed House, Thika Road',
    spec: 'Passenger lift installation on the Thika Road corridor.',
  },
];

const INDUSTRY_TILES = [
  {
    n: '01',
    name: 'Residential Highrise',
    body: 'Price clarity, aesthetics, and a straightforward path to booking a consultation.',
  },
  {
    n: '02',
    name: 'Commercial & Office',
    body: 'Compliance, delivery timelines, and technical specs for multi-unit, high-rise capability.',
  },
  {
    n: '03',
    name: 'Hospital & Institutional',
    body: 'Verifiable references, safety record, and procurement-friendly documentation.',
  },
  {
    n: '04',
    name: 'Retail & Escalators',
    body: 'High-traffic reliability and maintenance SLAs facility managers can plan around.',
  },
];

const eyebrow =
  'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(10,22,40,.35) 0%, rgba(10,22,40,.92) 100%), linear-gradient(125deg, #1d3a5f 0%, #0d2036 45%, #081422 100%)',
        }}
      >
        <Container className="pb-16 pt-16 md:pb-24 md:pt-24">
          <RevealOnScroll>
            <h1 className="max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-white md:text-6xl">
              Elevators &amp; Escalators for Every Building
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-dark md:text-lg">
              We supply, install, maintain and repair elevators and escalators for homes,
              offices, hospitals, malls and industrial buildings.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/quote" variant="cta">
                Get a Quote
              </Button>
              <Button href="/projects" variant="ghost">
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

      {/* 2. Proof band */}
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

      {/* 3. Compliance strip — deliberate "break up the dark" white section */}
      <section className="bg-white">
        <Container className="py-14">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {COMPLIANCE_ITEMS.map((item, i) => (
                <div
                  key={item.n}
                  className={`pr-4 ${
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

      {/* 4. Signature motion moment — lift-shaft cutaway motif */}
      <section className="bg-navy-950">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <span className={eyebrow}>How It Works</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-bold text-white md:text-4xl">
              Installation, modernization, and maintenance — one system, not three vendors.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <svg
              width="120"
              height="180"
              viewBox="0 0 120 180"
              fill="none"
              aria-hidden="true"
              className="mx-auto"
            >
              <rect x="10" y="10" width="100" height="160" rx="4" stroke="#E8453D" strokeWidth="2" />
              <line x1="30" y1="10" x2="30" y2="170" stroke="#E8453D" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="90" y1="10" x2="90" y2="170" stroke="#E8453D" strokeWidth="1" strokeOpacity="0.5" />
              <rect
                className="lift-car"
                x="24"
                y="70"
                width="72"
                height="46"
                rx="3"
                fill="#142A47"
                stroke="#E8453D"
                strokeWidth="2"
              />
              <line x1="24" y1="93" x2="96" y2="93" stroke="#E8453D" strokeWidth="1" strokeOpacity="0.6" />
            </svg>
          </RevealOnScroll>
        </Container>
      </section>

      {/* 5. Featured projects */}
      <section className="bg-paper">
        <Container className="py-20">
          <RevealOnScroll>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className={eyebrow}>Our Work</span>
                <h2 className="mt-3 max-w-lg font-serif text-3xl font-bold text-navy-950 md:text-4xl">
                  Real projects, not stock photography.
                </h2>
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
                  <div className="ph-projects aspect-[4/3] w-full" />
                  <div className="p-5">
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

      {/* 6. Testimonial */}
      <section className="bg-navy-950">
        <Container className="py-20">
          <RevealOnScroll>
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-serif text-2xl italic leading-relaxed text-white md:text-3xl">
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

      {/* 7. Industries grid */}
      <section className="bg-paper">
        <Container className="py-20">
          <RevealOnScroll>
            <span className={eyebrow}>Where We Work</span>
            <h2 className="mt-3 max-w-lg font-serif text-3xl font-bold text-navy-950 md:text-4xl">
              Four ways buildings use Konza.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {INDUSTRY_TILES.map((tile) => (
                <Link
                  key={tile.n}
                  href="/industries"
                  className="block rounded-xl border border-line-light bg-white p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="font-serif text-2xl font-bold text-red">{tile.n}</span>
                  <h3 className="mt-3 font-serif text-lg font-bold text-navy-950">{tile.name}</h3>
                  <p className="mt-2 text-sm text-slate">{tile.body}</p>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
