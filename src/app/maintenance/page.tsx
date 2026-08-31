import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Maintenance Contracts',
  description:
    'Scheduled servicing, a free condition report, response-time SLAs and compliance support — one maintenance contract for your elevators and escalators in Nairobi.',
  alternates: {
    canonical: '/maintenance',
  },
  openGraph: {
    title: 'Maintenance Contracts | Konza Elevators & Escalator Co. Ltd',
    description:
      'Scheduled servicing, a free condition report, response-time SLAs and compliance support — one maintenance contract for your elevators and escalators in Nairobi.',
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const INCLUDED = [
  {
    n: '01',
    label: 'Free Condition Report',
    body: 'Every contract starts with a free condition report and estimate, so you know the real state of your system before anything is agreed.',
  },
  {
    n: '02',
    label: 'Scheduled Servicing',
    body: 'Inspection and servicing on a schedule tailored to how heavily your elevators and escalators are actually used.',
  },
  {
    n: '03',
    label: 'Response-Time SLA',
    body: 'A response-time service level, set out clearly in your contract, so you know what to expect when you call.',
  },
  {
    n: '04',
    label: 'Compliance Support',
    body: 'Designed and serviced to KS ISO 8100 practice, staying current with KEBS and NCA requirements.',
  },
  {
    n: '05',
    label: 'Our Technical Team',
    body: 'Backed by our 10-person technical and administrative team, the same one behind 50 completed installations.',
  },
];

const HOW_IT_WORKS = [
  {
    n: '01',
    label: 'Free Condition Report',
    body: 'We assess your elevator or escalator on site and provide a free condition report and estimate.',
  },
  {
    n: '02',
    label: 'Contract & SLA Agreed',
    body: 'We agree the servicing schedule, response-time SLA and terms of your maintenance contract.',
  },
  {
    n: '03',
    label: 'Scheduled Maintenance',
    body: 'We carry out scheduled servicing and are on call under your agreed SLA for anything in between.',
  },
];

export default function MaintenancePage() {
  return (
    <>
      <section
        className="relative overflow-hidden inner-hero"
      >
        <Container className="py-16 md:py-24">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Maintenance Contracts</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-sans text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                One contract. Every elevator and escalator covered.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg">
                A free condition report, scheduled servicing, a response-time SLA and
                NCA-aware compliance support — under one maintenance contract, built for
                facility and property managers who need contract clarity.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <Button href="/quote" variant="cta" className="min-w-[220px]">
                  Get a Maintenance Quote
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
        <Image src={IMAGES.complianceBand} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-950/40" />
      </div>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>What&rsquo;s Included</span>
              <h2 className="mx-auto mt-3 max-w-lg font-sans text-3xl font-bold text-navy-950 md:mx-0 md:text-4xl">
                No tiers to decode — just what your contract covers.
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
              {INCLUDED.map((item, i) => (
                <div
                  key={item.n}
                  className={`text-center md:pr-4 md:text-left ${
                    i < INCLUDED.length - 1 ? 'md:border-r md:border-line-light' : ''
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

      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[21/9]">
        <Image
          src={IMAGES.maintenanceInspection}
          alt="A Konza Elevators technician carrying out a maintenance inspection"
          fill
          className="object-cover"
        />
      </div>

      <section className="bg-navy-950">
        <Container className="py-20">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>How It Works</span>
              <h2 className="mx-auto mt-3 max-w-lg font-sans text-3xl font-bold text-white md:mx-0 md:text-4xl">
                FROM FREE CONDITION REPORT TO ONGOING COVER
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {HOW_IT_WORKS.map((step, i) => (
                <div
                  key={step.n}
                  className={`text-center md:pr-4 md:text-left ${
                    i < HOW_IT_WORKS.length - 1 ? 'md:border-r md:border-white/10' : ''
                  }`}
                >
                  <span className="font-sans text-2xl font-bold text-red">{step.n}</span>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-white">
                    {step.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-dark">{step.body}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-900">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-sans text-3xl font-bold text-white md:text-4xl">
              Get a maintenance contract built around how your building is actually used.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="cta" className="min-w-[220px]">
                Get a Maintenance Quote
              </Button>
              <Button href="/contact" variant="ghost" className="min-w-[190px]">
                Talk to Our Team
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
