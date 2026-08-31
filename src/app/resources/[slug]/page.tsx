import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ARTICLES, getArticleBySlug } from '@/lib/resources-data';

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/resources/${slug}`,
    },
    openGraph: {
      title: `${article.title} | Konza Elevators & Escalator Co. Ltd`,
      description: article.excerpt,
    },
  };
}

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(10,22,40,.35) 0%, rgba(10,22,40,.92) 100%), linear-gradient(125deg, #1d3a5f 0%, #0d2036 45%, #081422 100%)',
        }}
      >
        <Container className="py-16 md:py-20">
          <RevealOnScroll>
            <Link
              href="/resources"
              className="inline-flex min-h-[44px] items-center text-sm font-semibold text-slate-dark transition-colors hover:text-white"
            >
              &larr; All Resources
            </Link>
            <div className="mt-4">
              <span className={eyebrow}>{article.category}</span>
              <h1 className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-[1.15] text-white md:text-5xl">
                {article.title}
              </h1>
              <p className="mt-4 text-sm text-slate-dark">Published {formatDate(article.publishedAt)}</p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl">
              <p className="text-lg font-medium leading-relaxed text-navy-950">{article.intro}</p>

              {article.sections.map((section) => (
                <div key={section.heading} className="mt-10">
                  <h2 className="font-serif text-xl font-bold text-navy-950 md:text-2xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i} className="mt-4 text-base leading-relaxed text-slate">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-serif text-3xl font-bold text-white md:text-4xl">
              Ready to talk about your next elevator or escalator project?
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
