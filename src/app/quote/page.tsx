import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { WhatsAppInline } from '@/components/ui/WhatsAppInline';
import { QuoteForm } from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description:
    "Tell us about your elevator or escalator project and Kenya's authorized Fuji Elevator distributor will contact you directly by phone or WhatsApp, no obligation.",
  alternates: {
    canonical: '/quote',
  },
  openGraph: {
    title: 'Get a Quote | Konza Elevators & Escalator Co. Ltd',
    description:
      "Tell us about your elevator or escalator project and Kenya's authorized Fuji Elevator distributor will contact you directly by phone or WhatsApp, no obligation.",
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const PROOF_STATS = [
  { value: '13', label: 'Years in Business' },
  { value: '50', label: 'Completed Projects' },
  { value: 'Fuji', label: 'Authorized Distributor' },
  { value: '10', label: 'Person Technical Team' },
];

export default function QuotePage() {
  return (
    <>
      <section
        className="relative overflow-hidden inner-hero"
      >
        <Container className="py-16 md:py-24">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Get a Quote</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                Tell us about your project. We&rsquo;ll take care of the rest.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg">
                Fill out the form below for new installations, modernizations, or
                maintenance. Our engineers will review your building requirements and
                reach out via phone call or WhatsApp.
              </p>
              <a
                href="#whatsapp-quote"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-red hover:text-white"
              >
                Prefer a quick chat? Message us directly on WhatsApp ↓
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.5fr_1fr] md:items-stretch">
            <RevealOnScroll>
              <QuoteForm />
            </RevealOnScroll>

            <div id="whatsapp-quote" className="h-full">
              <RevealOnScroll className="h-full">
                <WhatsAppInline
                  heading="Prefer WhatsApp?"
                  defaultMessage="Hi Konza Elevators, I'd like a quote for my building."
                  className="h-full"
                />
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
