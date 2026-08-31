import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ARTICLES } from '@/lib/resources-data';

export const metadata: Metadata = {
  title: 'Resources & Guides',
  description:
    'Buying guides and industry insight from Konza Elevators & Escalator Co. Ltd — elevator costs in Kenya, servicing guidance, and construction trends for 2026.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Resources & Guides | Konza Elevators & Escalator Co. Ltd',
    description:
      'Buying guides and industry insight from Konza Elevators & Escalator Co. Ltd — elevator costs in Kenya, servicing guidance, and construction trends for 2026.',
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

export default function ResourcesPage() {
  return (
    <>
      <section
        className="relative overflow-hidden inner-hero"
      >
        <Container className="py-16 md:py-24">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Resources</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-serif text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                Guides for choosing, maintaining and building with elevators and escalators.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg">
                Practical, Kenya-specific guidance from our team — with more added as we publish
                it.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-20">
          <RevealOnScroll stagger>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group relative flex aspect-[4/3] flex-col overflow-hidden rounded-xl transition-transform hover:-translate-y-1"
                >
                  <div className="ph-projects absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-navy-950/5 transition-colors group-hover:from-navy-950" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-center transition-transform duration-300 group-hover:translate-y-0">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-red">
                      {article.category}
                    </span>
                    <h2 className="mt-1 font-serif text-lg font-bold text-white">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-dark">{article.excerpt}</p>
                  </div>
                </Link>
              ))}

              <div className="relative flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-dashed border-line-light bg-white/60 p-6 text-center">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-slate">
                  Coming Soon
                </span>
                <p className="mt-2 font-serif text-lg font-bold text-navy-950">
                  More Guides on the Way
                </p>
                <p className="mt-2 text-sm text-slate">
                  We&rsquo;re adding new buying guides and industry insight regularly — check
                  back soon.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-serif text-3xl font-bold text-white md:text-4xl">
              Have a question these guides don&rsquo;t answer?
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
