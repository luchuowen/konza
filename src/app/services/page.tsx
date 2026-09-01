import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { FeatureCard } from '@/components/ui/FeatureCard';
import {
  ElevatorIcon,
  RefreshIcon,
  WrenchIcon,
  ClipboardCheckIcon,
  BuildingIcon,
  TruckIcon,
} from '@/components/ui/FeatureIcons';

type ServiceItem = {
  id: string;
  title: string;
  tag: string;
  body: string;
  icon: ReactNode;
};

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Installation, modernization, maintenance, repair, construction & contracting, and equipment hire — the full range of services from Konza Elevators & Escalator.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | Konza Elevators & Escalator Co. Ltd',
    description:
      'Installation, modernization, maintenance, repair, construction & contracting, and equipment hire — the full range of services from Konza Elevators & Escalator.',
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const SERVICES: ServiceItem[] = [
  {
    id: 'installation',
    title: 'Installation',
    tag: 'New Builds & Developments',
    body: 'We supply and install elevators and escalators for new buildings — passenger lifts, freight lifts, home lifts, escalators, moving walkways and more, managing every stage from delivery to final commissioning.',
    icon: <ElevatorIcon className="h-full w-full" />,
  },
  {
    id: 'modernization',
    title: 'Modernization',
    tag: 'Commercial & Institutional Buildings',
    body: 'We upgrade existing elevator and escalator systems — improving reliability and bringing older installations up to current standards, with minimal disruption to an occupied building.',
    icon: <RefreshIcon className="h-full w-full" />,
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    tag: 'All Building Types',
    body: 'Scheduled inspection and servicing to keep elevators and escalators running safely and reliably, with a maintenance-frequency schedule tailored to how heavily each system is used.',
    icon: <WrenchIcon className="h-full w-full" />,
  },
  {
    id: 'repair',
    title: 'Repair',
    tag: 'All Building Types',
    body: 'Cost-effective repairs focused on minimizing downtime. Every repair engagement starts with a free condition report and estimate, so you know exactly what needs fixing before we begin.',
    icon: <ClipboardCheckIcon className="h-full w-full" />,
  },
  {
    id: 'construction',
    title: 'Construction & Contracting',
    tag: 'Developers & Contractors',
    body: 'General, civil, mechanical and electrical construction services delivered alongside our vertical-transportation work, for projects that need both under one contractor.',
    icon: <BuildingIcon className="h-full w-full" />,
  },
  {
    id: 'equipment-hire',
    title: 'Equipment & Plant Hire',
    tag: 'Contractors & Developers',
    body: 'When our vehicles and plant equipment aren’t in use on our own contracts, we make them available for hire — a practical option for contractors who need equipment on short notice.',
    icon: <TruckIcon className="h-full w-full" />,
  },
];

const ENGAGEMENT_STEPS = [
  {
    n: '01',
    label: 'Free Condition Report',
    body: 'We assess your elevator or escalator on site and provide a free condition report and estimate.',
  },
  {
    n: '02',
    label: 'Quotation',
    body: 'You receive a clear quotation for the recommended work, with no obligation.',
  },
  {
    n: '03',
    label: 'Scheduled Work',
    body: 'We schedule and carry out the work while minimizing disruption to your building.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section
        className="relative overflow-hidden inner-hero"
      >
        <Container className="py-16 md:py-24">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Services</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-sans text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                Installation, construction, equipment hire, maintenance, repair and modernization.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg">
                Complete elevator and escalator services, from installation and construction to
                long-term maintenance, repairs and upgrades.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-20">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((item, i) => (
                <FeatureCard
                  key={item.id}
                  n={String(i + 1).padStart(2, '0')}
                  tag={item.tag}
                  label={item.title}
                  body={item.body}
                  icon={item.icon}
                />
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="py-20">
          <RevealOnScroll>
            <div className="mx-auto max-w-lg text-center">
              <span className={eyebrow}>How an Engagement Works</span>
              <h2 className="mt-3 font-sans text-3xl font-bold text-white md:text-4xl">
                From free condition report to scheduled work.
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="relative mt-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-red/40 via-white/15 to-transparent md:block"
            />
            <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
              {ENGAGEMENT_STEPS.map((step) => (
                <div key={step.n} className="relative mx-auto flex max-w-xs flex-col items-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-red/50 bg-navy-950 font-sans text-base font-bold text-red">
                    {step.n}
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-white">
                    {step.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-dark">{step.body}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-20">
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <span className={eyebrow}>Maintenance Contracts</span>
              <h2 className="mt-3 font-sans text-2xl font-bold text-navy-950 md:text-3xl">
                Keep Your Elevators Running Safely
              </h2>
              <p className="mt-4 text-base text-slate">
                Keep your lifts and escalators reliable, safe and compliant with a maintenance
                plan that works for your building. Our maintenance contracts include scheduled
                servicing, quick response to faults, condition reports and ongoing technical
                support.
              </p>
              <div className="mt-6">
                <Button href="/maintenance" variant="cta">
                  View Maintenance Plans
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-sans text-3xl font-bold text-white md:text-4xl">
              Let&rsquo;s plan your elevator solution.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="cta" className="min-w-[190px]">
                Get a Quote
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
