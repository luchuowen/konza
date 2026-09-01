import type { Metadata } from 'next';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ContactForm } from '@/components/forms/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import { MapPinIcon, PhoneIcon, MailIcon } from '@/components/ui/ContactIcons';
import { ClockIcon } from '@/components/ui/FeatureIcons';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Reach Konza Elevators & Escalator Co. Ltd by phone, WhatsApp, email or our Ramco Court office off Mombasa Road, Nairobi — for general enquiries, not quotes.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Konza Elevators & Escalator Co. Ltd',
    description:
      'Reach Konza Elevators & Escalator Co. Ltd by phone, WhatsApp, email or our Ramco Court office off Mombasa Road, Nairobi — for general enquiries, not quotes.',
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}`;

function InfoCard({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-line-light bg-white p-6 shadow-[0_1px_2px_rgba(10,22,40,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-red/30 hover:shadow-[0_16px_32px_-20px_rgba(10,22,40,0.18)]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red/10 text-red">
        <span className="h-5 w-5">{icon}</span>
      </span>
      <div className="flex-1">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-red">{label}</p>
        <div className="mt-1.5 text-sm text-slate">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <Image
          src={IMAGES.contactOfficeExterior}
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(10,22,40,.72) 0%, rgba(10,22,40,.94) 100%)' }}
        />
        <Container className="relative py-16 md:py-24">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Contact Us</span>
              <h1
                className="mx-auto mt-4 max-w-2xl font-sans text-3xl font-medium leading-[1.15] text-white md:mx-0 md:text-4xl"
                style={{ textShadow: '0 2px 20px rgba(10,22,40,.85)' }}
              >
                We&rsquo;re here to help.
              </h1>
              <p
                className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg"
                style={{ textShadow: '0 1px 12px rgba(10,22,40,.85)' }}
              >
                Have questions about an ongoing project, supplier partnerships, or service
                support? Reach out to our Nairobi team by phone, email, WhatsApp, or visit
                our office along Mombasa Road.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch">
            <RevealOnScroll>
              <ContactForm />
            </RevealOnScroll>

            <RevealOnScroll className="h-full">
              <div className="flex h-full flex-col justify-between gap-5">
                <InfoCard icon={<MapPinIcon className="h-full w-full" />} label="Our Office">
                  {COMPANY_INFO.addressLines.map((line) => (
                    <span key={line} className="block text-navy-950">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-slate">{COMPANY_INFO.poBox}</span>
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex min-h-[44px] items-center text-xs font-semibold text-red hover:text-maroon"
                  >
                    Get Directions →
                  </a>
                </InfoCard>

                <InfoCard icon={<PhoneIcon className="h-full w-full" />} label="Call Us">
                  {COMPANY_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="flex min-h-[44px] items-center text-navy-950 hover:text-red"
                    >
                      {phone}
                    </a>
                  ))}
                </InfoCard>

                <InfoCard icon={<MailIcon className="h-full w-full" />} label="Email Us">
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex min-h-[44px] items-center text-navy-950 hover:text-red"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </InfoCard>

                <InfoCard icon={<ClockIcon className="h-full w-full" />} label="Business Hours">
                  <span className="block text-navy-950">{COMPANY_INFO.hours}</span>
                </InfoCard>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll className="mt-8">
            <div className="overflow-hidden rounded-xl border border-line-light">
              <div className="ph-map relative flex aspect-[21/9] items-center justify-center max-md:aspect-[4/3]">
                <div className="flex flex-col items-center">
                  <span className="mb-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-bold text-navy-950 shadow-lg">
                    Konza Elevators
                  </span>
                  <MapPinIcon className="h-9 w-9 text-red drop-shadow-md" />
                </div>

                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-navy-950 shadow-lg transition-colors hover:text-red"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
