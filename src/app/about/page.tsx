import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "13 years in business, 50 completed installations, and Kenya's authorized Fuji Elevator distributor — the story, values and team behind Konza Elevators.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Konza Elevators & Escalator Co. Ltd',
    description:
      "13 years in business, 50 completed installations, and Kenya's authorized Fuji Elevator distributor — the story, values and team behind Konza Elevators.",
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const MILESTONES = [
  {
    n: '01',
    label: '2013 — Founded',
    body: 'A skilled team came together to provide elevator and escalator services in Nairobi.',
  },
  {
    n: '02',
    label: '2020 — Fuji Authorization',
    body: 'Became an authorized Fuji Elevator distributor, supplying and supporting customers across Kenya.',
  },
  {
    n: '03',
    label: '50 — Projects Completed',
    body: 'Completed 50 elevator and escalator installations across Nairobi and other parts of Kenya.',
  },
  {
    n: '04',
    label: 'Today — 13 Years',
    body: 'A 10-person team serving developers, institutions, businesses and homeowners across Kenya.',
  },
];

const VALUES = [
  {
    name: 'Team Work',
    body: 'Working together, communicating openly, and building strong relationships with colleagues and customers.',
  },
  {
    name: 'Accountability',
    body: 'Taking responsibility for our own actions, and holding the team accountable.',
  },
  {
    name: 'Safety & Quality',
    body: 'Working safely, and doing it right the first time.',
  },
  {
    name: 'Integrity',
    body: 'Doing the right thing, always — honest and fair.',
  },
  {
    name: 'Initiative',
    body: 'Seeing what needs to be done, and taking ownership of it.',
  },
];

const CREDENTIALS = [
  {
    name: 'KS ISO 8100',
    body: 'We design and install elevators to KS ISO 8100 and follow current KEBS and NCA requirements.',
  },
  {
    name: 'Fuji Elevator',
    body: 'Authorized Fuji Elevator distributor in Kenya, supplying and installing Fuji elevator systems.',
  },
  {
    name: 'Delfar Elevator',
    body: 'Delfar elevators installed at Radiant Group of Hospitals and Jesse Kay Hospital, Roysambu.',
  },
  {
    name: 'Glarie',
    body: 'Glarie elevators installed at MPESA Foundation Academy as part of our project portfolio.',
  },
  {
    name: 'Maurer',
    body: 'Maurer elevators are available through our range of elevator systems and solutions.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="relative overflow-hidden inner-hero"
      >
        <Container className="py-16 md:py-24">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Since 2013</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-sans text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                From a Small Team to a Trusted Elevator Partner
              </h1>
              <p className="mx-auto mt-6 hidden max-w-xl text-base text-slate-dark md:mx-0 md:block md:text-lg">
                Konza Elevators was established in 2013 by a team of skilled professionals
                providing elevator and escalator services. Over the years, we have grown our
                team, expanded our services and completed projects across Kenya.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:hidden">
                Established in 2013, providing trusted elevator and escalator services across
                Kenya.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20">
          <RevealOnScroll>
            <span className={eyebrow}>Our Timeline</span>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {MILESTONES.map((item, i) => (
                <div
                  key={item.n}
                  className={`text-center md:pr-4 md:text-left ${
                    i < MILESTONES.length - 1 ? 'md:border-r md:border-line-light' : ''
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
        <Image src={IMAGES.aboutTeamAtWork} alt="The Konza Elevators team at work" fill className="object-cover" />
      </div>

      <section className="bg-white">
        <Container className="py-20">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <span className={eyebrow}>Vision &amp; Mission</span>
                <blockquote className="mt-5 font-sans text-2xl font-bold leading-snug text-navy-950 md:text-3xl">
                  &ldquo;To be a top elevator and escalator engineering company in the region, for
                  service and technical expertise.&rdquo;
                </blockquote>
                <p className="mt-6 max-w-md text-base text-slate">
                  We deliver up-to-date elevator and escalator engineering work with client
                  satisfaction as our ultimate goal — on time, on budget, with specialist
                  expertise applied to every project, and growth through partnership with the
                  significant players in our industry.
                </p>
              </div>

              <div>
                <span className={eyebrow}>Our Values</span>
                <ul className="mt-5 space-y-6">
                  {VALUES.map((value) => (
                    <li key={value.name}>
                      <p className="font-sans text-lg font-bold text-navy-950">{value.name}</p>
                      <p className="mt-1 text-sm text-slate">{value.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="py-20">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Credentials &amp; Brand Partners</span>
              <h2 className="mx-auto mt-3 max-w-lg font-sans text-3xl font-bold text-white md:mx-0 md:text-4xl">
                The standards we follow and the elevator brands we supply and install.
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-12">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-5">
              {CREDENTIALS.map((item) => (
                <div
                  key={item.name}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-red hover:bg-white/[0.06] md:text-left"
                >
                  <p className="font-sans text-lg font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-red">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm text-slate-dark">{item.body}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-16 border-t border-white/10 pt-12 text-center md:text-left">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:aspect-[21/9]">
              <Image src={IMAGES.careersWorkshopBench} alt="A Konza Elevators technical workshop bench" fill className="object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-navy-950/70 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                Our Workshop
              </span>
            </div>

            <span className={`${eyebrow} mt-10 block`}>Our Team</span>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <p className="font-sans text-lg font-bold text-white">David Gachari</p>
                <p className="mt-1 text-sm text-slate-dark">
                  Technical Director — Electrical &amp; Electronic Engineering with 10 years of
                  experience.
                </p>
              </div>
              <div>
                <p className="font-sans text-lg font-bold text-white">Denis Kitili</p>
                <p className="mt-1 text-sm text-slate-dark">
                  Leadership Team member supporting the company&rsquo;s projects, operations and
                  continued growth.
                </p>
              </div>
              <div>
                <p className="font-sans text-lg font-bold text-white">10-Person Team</p>
                <p className="mt-1 text-sm text-slate-dark">
                  A dedicated technical and administrative team supporting projects from start to
                  completion.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-900">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-sans text-3xl font-bold text-white md:text-4xl">
              13 years of experience, ready to deliver your next elevator or escalator project.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="cta" className="min-w-[190px]">
                Get a Quote
              </Button>
              <Button href="/projects" variant="ghost" className="min-w-[190px]">
                See Our Work
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
