import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "13 years in business, 50 completed installations, and Kenya's authorized Fuji Elevator distributor — the story, values and team behind Konza Elevators & Escalator Co. Ltd.",
  openGraph: {
    title: 'About Us | Konza Elevators & Escalator Co. Ltd',
    description:
      "13 years in business, 50 completed installations, and Kenya's authorized Fuji Elevator distributor — the story, values and team behind Konza Elevators & Escalator Co. Ltd.",
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const MILESTONES = [
  {
    n: '01',
    label: '2013 — Founded',
    body: 'A small group of skilled tradespeople came together to take on general elevator and escalator works in Nairobi.',
  },
  {
    n: '02',
    label: '2020 — Fuji Authorization',
    body: 'Became an authorized Fuji Elevator distributor in Kenya, backed by a signed authorization letter.',
  },
  {
    n: '03',
    label: '50 Projects',
    body: 'Reached 50 completed elevator and escalator installations across Nairobi and beyond.',
  },
  {
    n: '04',
    label: 'Today — 13 Years',
    body: 'A 10-person technical and administrative team serving developers, institutions and homeowners.',
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
    body: 'We design and install to KS ISO 8100 practice, and stay current with KEBS and NCA requirements.',
  },
  {
    name: 'Fuji Elevator',
    body: 'Authorized Fuji Elevator distributor in Kenya.',
  },
  {
    name: 'Delfar Elevator',
    body: 'Delfar units installed at Radiant Group of Hospitals and Jesse Kay Hospital, Roysambu.',
  },
  {
    name: 'Glarie',
    body: 'Featured brand — a Glarie elevator installed at MPESA Foundation Academy.',
  },
  {
    name: 'Maurer',
    body: 'Maurer elevator range available through our catalogue.',
  },
];

export default function AboutPage() {
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
            <span className={eyebrow}>Since 2013</span>
            <h1 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-white md:text-5xl">
              Started by a small group of tradespeople. Grown into Nairobi&rsquo;s
              vertical-transportation partner.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-dark md:text-lg">
              In 2013, a small group of skilled tradespeople came together to take on general
              elevator and escalator works. As more professionals joined, we grew our customer
              base and expanded the range of services we offer — building the technical team and
              project history we have today.
            </p>
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

      <section className="bg-white">
        <Container className="py-20">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <span className={eyebrow}>Vision &amp; Mission</span>
                <blockquote className="mt-5 font-serif text-2xl font-bold leading-snug text-navy-950 md:text-3xl">
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
                      <p className="font-serif text-lg font-bold text-navy-950">{value.name}</p>
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
            <span className={eyebrow}>Credentials &amp; Brand Partners</span>
            <h2 className="mt-3 max-w-lg font-serif text-3xl font-bold text-white md:text-4xl">
              Honest about who we work with, and how we build.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
              {CREDENTIALS.map((item) => (
                <div key={item.name} className="text-center md:text-left">
                  <p className="font-serif text-lg font-bold text-white">{item.name}</p>
                  <p className="mt-2 text-sm text-slate-dark">{item.body}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-16 border-t border-white/10 pt-12 text-center md:text-left">
            <span className={eyebrow}>Our Team</span>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div>
                <p className="font-serif text-lg font-bold text-white">David Gachari</p>
                <p className="mt-1 text-sm text-slate-dark">
                  Technical Director — Electrical &amp; Electronic Engineering, 10 years&rsquo;
                  experience.
                </p>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white">Denis Kitili</p>
                <p className="mt-1 text-sm text-slate-dark">Leadership Team.</p>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-white">10-Person Team</p>
                <p className="mt-1 text-sm text-slate-dark">
                  Permanent technical and administrative staff supporting every project.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-900">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-serif text-3xl font-bold text-white md:text-4xl">
              13 years of experience, ready for your next project.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/quote" variant="cta">
                Get a Quote
              </Button>
              <Button href="/projects" variant="ghost">
                See Our Work
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
