import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { WhatsAppInline } from '@/components/ui/WhatsAppInline';
import { ContactForm } from '@/components/forms/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';
import { LocationIcon, MailIcon, MailboxIcon, PhoneIcon } from '@/components/ui/ContactIcons';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Reach Konza Elevators & Escalator Co. Ltd by phone, WhatsApp, email or our Nairobi office — for general enquiries, not just quotes.',
  openGraph: {
    title: 'Contact Us | Konza Elevators & Escalator Co. Ltd',
    description:
      'Reach Konza Elevators & Escalator Co. Ltd by phone, WhatsApp, email or our Nairobi office — for general enquiries, not just quotes.',
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY_INFO.address
)}`;

export default function ContactPage() {
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
              <span className={eyebrow}>Contact Us</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                Get in touch.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg">
                General enquiries, supplier questions or anything else — reach our Nairobi
                office by phone, WhatsApp, email or in person.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <RevealOnScroll className="flex flex-col gap-6">
              <div className="rounded-xl border border-line-light bg-white p-6 sm:p-8">
                <span className={eyebrow}>Our Office</span>
                <ul className="mt-5 flex flex-col gap-4 text-sm text-slate">
                  <li className="flex items-start gap-3">
                    <LocationIcon className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                    <span>
                      {COMPANY_INFO.addressLines.map((line) => (
                        <span key={line} className="block text-navy-950">
                          {line}
                        </span>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MailboxIcon className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                    <span>{COMPANY_INFO.poBox}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                    <span className="flex flex-col gap-1">
                      {COMPANY_INFO.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-red">
                          {phone}
                        </a>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-red">
                      {COMPANY_INFO.email}
                    </a>
                  </li>
                </ul>
                <p className="mt-5 border-t border-line-light pt-4 text-xs italic text-slate">
                  {COMPANY_INFO.hours}
                </p>
              </div>

              <div className="overflow-hidden rounded-xl border border-line-light">
                <div className="ph-map relative flex aspect-[4/3] items-center justify-center sm:aspect-[16/9]">
                  <div className="rounded-lg bg-navy-950/80 px-4 py-3 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-white">
                      Ramco Court, Off Mombasa Road
                    </p>
                    <a
                      href={directionsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-xs font-semibold text-red hover:text-white"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
              </div>

              <WhatsAppInline
                heading="Message Us Instead"
                defaultMessage="Hi Konza Elevators, I have a question."
              />
            </RevealOnScroll>

            <RevealOnScroll>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </Container>
      </section>
    </>
  );
}
