import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { WhatsAppInline } from '@/components/ui/WhatsAppInline';
import { QuoteForm } from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    "Tell us about your elevator or escalator project and Kenya's authorized Fuji Elevator distributor will contact you directly by phone or WhatsApp.",
  openGraph: {
    title: 'Get a Quote | Konza Elevators & Escalator Co. Ltd',
    description:
      "Tell us about your elevator or escalator project and Kenya's authorized Fuji Elevator distributor will contact you directly by phone or WhatsApp.",
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const PROOF_STATS = [
  { value: '13', label: 'Years in Business' },
  { value: '50', label: 'Completed Projects' },
  { value: 'Fuji', label: 'Authorized Distributor' },
  { value: '10', label: 'Person Technical Team' },
];

const TESTIMONIALS = [
  {
    quote:
      "Konza staff's expertise in installation was evident in their precise planning and flawless execution, resulting in a top-of-the-line elevators that perfectly catered to our requirements.",
    name: 'Sanjay Shah',
    role: 'Director, Greenhills Investment Ltd (Village Market)',
  },
  {
    quote:
      'The elevators and escalators they installed were not only smooth and reliable but also showcased a remarkable level of craftsmanship. We highly recommend Konza elevators for their outstanding workmanship and dedication to excellence.',
    name: 'Pastor Jimmy Macharia',
    role: 'Founder, Harvest Family Church Ministries',
  },
];

export default function QuotePage() {
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
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Get a Quote</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                Tell us about your building. We&rsquo;ll take it from there.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg">
                Share a few details about your elevator or escalator project — new
                installation, modernization, maintenance or repair — and our team will
                contact you directly by phone or WhatsApp, Kenya&rsquo;s authorized Fuji
                Elevator distributor since 2013.
              </p>
              <a
                href="#whatsapp-quote"
                className="mt-6 inline-block text-sm font-semibold text-red hover:text-white"
              >
                Prefer WhatsApp? Message us directly ↓
              </a>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-900">
        <Container className="py-10">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {PROOF_STATS.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-serif text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-dark">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr]">
            <RevealOnScroll>
              <QuoteForm />
            </RevealOnScroll>

            <div id="whatsapp-quote">
              <RevealOnScroll className="flex flex-col gap-6">
                <WhatsAppInline
                  heading="Prefer WhatsApp?"
                  defaultMessage="Hi Konza Elevators, I'd like a quote for my building."
                />

                <div className="flex flex-col gap-4">
                  {TESTIMONIALS.map((t) => (
                    <blockquote
                      key={t.name}
                      className="rounded-xl border border-line-light bg-white p-5"
                    >
                      <p className="font-serif text-sm italic leading-relaxed text-navy-950">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.06em] text-slate">
                        {t.name} — {t.role}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
