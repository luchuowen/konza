import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ProjectsFilterGrid } from '@/components/sections/ProjectsFilterGrid';

export const metadata: Metadata = {
  title: 'Projects & Portfolio',
  description:
    "50 completed elevator and escalator installations across Nairobi — from hospitals to CBD office towers, filterable by sector.",
  openGraph: {
    title: 'Projects & Portfolio | Konza Elevators & Escalator Co. Ltd',
    description:
      "50 completed elevator and escalator installations across Nairobi — from hospitals to CBD office towers, filterable by sector.",
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const HEADER_STATS = [
  { value: '50', label: 'Projects' },
  { value: '5', label: 'Sectors' },
  { value: '13', label: 'Years' },
];

export default function ProjectsPage() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(10,22,40,.35) 0%, rgba(10,22,40,.92) 100%), linear-gradient(125deg, #1d3a5f 0%, #0d2036 45%, #081422 100%)',
        }}
      >
        <Container className="py-16 md:py-24">
          <RevealOnScroll>
            <span className={eyebrow}>Portfolio</span>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-white md:text-5xl">
              50 completed installations across Nairobi — real buildings, real clients.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-dark md:text-lg">
              From hospital bed lifts to CBD office towers, every project below is a real,
              named installation drawn from 13 years of work as Kenya&rsquo;s authorized Fuji
              Elevator distributor.
            </p>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-12 flex gap-10 md:mt-16">
            {HEADER_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-dark">{stat.label}</p>
              </div>
            ))}
          </RevealOnScroll>
        </Container>
      </section>

      <ProjectsFilterGrid />

      <section className="bg-navy-950">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-serif text-3xl font-bold text-white md:text-4xl">
              Let&rsquo;s add your building to this list.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="cta">
                Get a Quote
              </Button>
              <Button href="/contact" variant="ghost">
                Talk to Our Team
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
