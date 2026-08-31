import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { AmbientSectionVideo } from '@/components/ui/AmbientSectionVideo';
import { IMAGES } from '@/lib/images';
import { PROJECTS } from '@/lib/projects-data';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Residential highrise, commercial & office, hospital & institutional, and retail & escalators — how Konza Elevators & Escalator serves each type of building, with real named projects.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries | Konza Elevators & Escalator Co. Ltd',
    description:
      'Residential highrise, commercial & office, hospital & institutional, and retail & escalators — how Konza Elevators & Escalator serves each type of building, with real named projects.',
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

// The 4 industry tiles (docs/KONZA_SPEC.md §5/§6) don't map one-to-one onto
// projects-data.ts's 5 sectors: Hospital & Institutional combines two real
// sectors (healthcare + institutional), and Commercial & Office / Retail &
// Escalators both draw from the single 'commercial' sector, split by what
// each named project actually is (an office tower vs. a shopping mall) —
// never by re-typing project data, only by name-matching against the
// PROJECTS array already built in Session 3.
const residentialProjects = PROJECTS.filter((p) => p.sector === 'residential').slice(0, 3);
const officeProjects = PROJECTS.filter((p) => p.name.includes('Junction Trade Centre'));
const hospitalProjects = PROJECTS.filter(
  (p) => p.sector === 'healthcare' || p.sector === 'institutional'
).slice(0, 3);
const retailProjects = PROJECTS.filter(
  (p) => p.name.includes('Village Market') || p.name.includes('Mega Mall')
);

type SectorSection = {
  n: string;
  name: string;
  image: string;
  need: string;
  copy: string;
  projects: typeof PROJECTS;
  video?: string;
};

const SECTORS: SectorSection[] = [
  {
    n: '01',
    name: 'Residential Highrise',
    image: IMAGES.industryResidentialHighrise,
    need: 'Compliance & Timelines',
    copy: 'Property developers and contractors building apartments need compliance with Kenyan standards, clear delivery timelines, and technical specs for multi-unit, high-rise buildings.',
    projects: residentialProjects,
  },
  {
    n: '02',
    name: 'Commercial & Office',
    image: IMAGES.industryCommercialOffice,
    need: 'Delivery Speed',
    copy: 'CBD and office-tower projects run on occupied-building schedules — we coordinate delivery, site preparation and installation to keep disruption to a minimum.',
    projects: officeProjects,
  },
  {
    n: '03',
    name: 'Hospital & Institutional',
    image: IMAGES.industryHospitalInstitutional,
    need: 'Safety Record & References',
    copy: 'Institutional and healthcare buyers need verifiable references and a real safety record before they commit — not marketing claims. Here are some of ours.',
    projects: hospitalProjects,
  },
  {
    n: '04',
    name: 'Retail & Escalators',
    image: IMAGES.industryRetailEscalators,
    need: 'High-Traffic Reliability',
    copy: 'Malls and other high-traffic retail spaces need escalators and elevators built to run reliably, day after day, under continuous public use.',
    projects: retailProjects,
    video: IMAGES.videoEscalatorAmbient,
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden inner-hero">
        <Container className="py-16 md:py-24">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Industries</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-sans text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                Four ways buildings use Konza.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg">
                The home page introduces our four sectors. This page goes deeper into each
                one — the real needs, and the real projects behind them.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {SECTORS.map((sector, i) => {
        const tone = i % 2 === 0 ? 'bg-paper' : 'bg-navy-950';
        const isDark = tone === 'bg-navy-950';
        const imageFirst = i % 2 === 0;

        return (
          <section key={sector.n} className={tone}>
            <Container className="py-16 md:py-20">
              <div
                className={`grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-14 ${
                  imageFirst ? '' : 'md:[&>*:first-child]:order-2'
                }`}
              >
                <RevealOnScroll>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                    {sector.video ? (
                      <AmbientSectionVideo
                        src={sector.video}
                        fallbackImage={sector.image}
                        alt={sector.name}
                      />
                    ) : (
                      <Image
                        src={sector.image}
                        alt={sector.name}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                </RevealOnScroll>

                <RevealOnScroll className="text-center md:text-left">
                  <span className={`font-sans text-2xl font-bold text-red`}>{sector.n}</span>
                  <h2
                    className={`mt-2 font-sans text-2xl font-bold md:text-3xl ${
                      isDark ? 'text-white' : 'text-navy-950'
                    }`}
                  >
                    {sector.name}
                  </h2>
                  <span className={`mt-3 block text-xs font-bold uppercase tracking-[0.1em] text-red`}>
                    {sector.need}
                  </span>
                  <p className={`mt-4 text-base ${isDark ? 'text-slate-dark' : 'text-slate'}`}>
                    {sector.copy}
                  </p>

                  {sector.projects.length > 0 && (
                    <ul className="mt-6 space-y-3 text-left">
                      {sector.projects.map((project) => (
                        <li
                          key={project.name}
                          className={`rounded-lg border px-4 py-3 ${
                            isDark
                              ? 'border-white/10 bg-white/[0.03]'
                              : 'border-line-light bg-white'
                          }`}
                        >
                          <p
                            className={`text-sm font-bold ${
                              isDark ? 'text-white' : 'text-navy-950'
                            }`}
                          >
                            {project.name}
                          </p>
                          <p className={`mt-0.5 text-xs ${isDark ? 'text-slate-dark' : 'text-slate'}`}>
                            {project.detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:justify-start">
                    <Button href="/quote" variant="cta">
                      Get a Quote
                    </Button>
                    <Link
                      href="/projects"
                      className="min-h-[44px] inline-flex items-center text-sm font-semibold text-red hover:text-maroon"
                    >
                      See All Projects →
                    </Link>
                  </div>
                </RevealOnScroll>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-navy-900">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-sans text-3xl font-bold text-white md:text-4xl">
              Whatever your building type, we&rsquo;ve likely already built for one like it.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="cta" className="min-w-[190px]">
                Get a Quote
              </Button>
              <Button href="/products" variant="ghost" className="min-w-[190px]">
                Browse Products
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
