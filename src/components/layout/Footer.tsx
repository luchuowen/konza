import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { COMPANY_INFO, DESIGNER_CREDIT, FOOTER_LINKS, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-red bg-navy-950 text-white">
      <Container className="grid grid-cols-1 gap-10 py-14 min-[900px]:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center overflow-hidden rounded-md bg-paper px-2 py-1">
            <Image
              src="/brand/konza-logo-hires.jpg"
              alt="Konza Elevators & Escalator Co. Ltd"
              width={116}
              height={43}
              className="h-9 w-auto"
            />
          </span>
          <p className="max-w-xs text-sm text-slate-dark">
            Nairobi&apos;s authorized Fuji Elevator distributor since 2013 — vertical
            transportation for the city&apos;s next skyline.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-red">Sitemap</h3>
          <ul className="flex flex-col gap-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="min-h-[44px] text-sm text-slate-dark transition-colors hover:text-white flex items-center"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-red">
            Get in Touch
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-dark">
            <li>{COMPANY_INFO.address}</li>
            <li>{COMPANY_INFO.poBox}</li>
            {COMPANY_INFO.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                {COMPANY_INFO.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-red">Connect</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-dark">
            <li>
              {SOCIAL_LINKS.facebook ? (
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
                  Facebook
                </a>
              ) : (
                <span className="opacity-60">Facebook — coming soon</span>
              )}
            </li>
            <li>
              {SOCIAL_LINKS.instagram ? (
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                  Instagram
                </a>
              ) : (
                <span className="opacity-60">Instagram — coming soon</span>
              )}
            </li>
            <li>
              {SOCIAL_LINKS.linkedin ? (
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                  LinkedIn
                </a>
              ) : (
                <span className="opacity-60">LinkedIn — coming soon</span>
              )}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-navy-800">
        <Container className="flex flex-col gap-2 py-6 text-xs text-slate-dark min-[900px]:flex-row min-[900px]:items-center min-[900px]:justify-between">
          <p>{COMPANY_INFO.address}</p>
          <p>
            © {year} Konza Elevators &amp; Escalator Co. Ltd · Designed by{' '}
            <a
              href={DESIGNER_CREDIT.url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-red hover:underline"
            >
              NAVAC GLOBAL
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
