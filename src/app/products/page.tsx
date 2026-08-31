import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Products',
  description:
    "Passenger lifts, freight elevators, home lifts, escalators, moving walkways, dumbwaiters, car lifts, goods hoists and villa platform elevators — the full product range from Kenya's authorized Fuji Elevator distributor.",
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Products | Konza Elevators & Escalator Co. Ltd',
    description:
      "Passenger lifts, freight elevators, home lifts, escalators, moving walkways, dumbwaiters, car lifts, goods hoists and villa platform elevators — the full product range from Kenya's authorized Fuji Elevator distributor.",
  },
};

const eyebrow = 'inline-block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red';

// Fuji's small-machine-room passenger series (docs/KONZA_SPEC.md §2): the
// spec gives model names and a capacity/speed RANGE across the series, not
// a confirmed per-model breakdown — so this stays a range-level spec list,
// never invented per-model numbers.
const FUJI_SPECS = [
  { label: 'Model Series', value: 'FJK450 · FJK630 · FJK800 · FJK1000 · FJK1150' },
  { label: 'Capacity Range', value: '450kg – 1,150kg+' },
  { label: 'Speed Range', value: '1.0 – 3.0 m/s' },
  { label: 'Machine Room', value: 'Small machine room (space-saving)' },
  { label: 'Brand', value: 'Fuji Elevator — authorized Kenyan distributor' },
];

const RESIDENTIAL_COMPARISON = [
  {
    name: 'Home Lifts',
    image: IMAGES.productHomeLifts,
    setting: 'Inside the home, beside an existing staircase',
    bestFor: 'Single-family houses wanting an indoor lift',
    finish: 'Warm brushed-bronze and off-white cab',
  },
  {
    name: 'Villa Platform Elevators',
    image: IMAGES.productVillaPlatformElevators,
    setting: 'Exterior, beside a staircase — open platform',
    bestFor: 'Villas and townhouses, real installs across Nairobi',
    finish: 'Slim guide-rail mast, low glass safety guard',
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden inner-hero">
        <Container className="py-16 md:py-24">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Products</span>
              <h1 className="mx-auto mt-4 max-w-2xl font-sans text-4xl font-bold leading-[1.1] text-white md:mx-0 md:text-5xl">
                Nine products. One trusted installer.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base text-slate-dark md:mx-0 md:text-lg">
                From Fuji-supplied passenger lifts to home lifts, escalators and specialist
                hoists — every product we supply, we also install and maintain ourselves.
              </p>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-14">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={IMAGES.productPassengerLifts}
                  alt="Stainless-steel passenger elevator car interior with doors open onto a commercial lobby"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll className="text-center md:text-left">
              <span className={eyebrow}>Passenger Lifts</span>
              <h2 className="mt-3 font-sans text-2xl font-bold text-navy-950 md:text-3xl">
                Fuji-supplied lifts for residential and commercial buildings.
              </h2>
              <p className="mt-4 text-base text-slate">
                Our core product line, supplied through our authorized Fuji Elevator
                distributorship — the small-machine-room passenger series covers most
                building types we install for.
              </p>
              <dl className="mt-6 divide-y divide-line-light overflow-hidden rounded-xl border border-line-light">
                {FUJI_SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <dt className="text-xs font-bold uppercase tracking-[0.08em] text-slate">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-semibold text-navy-950 sm:text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <Button href="/quote" variant="cta">
                  Request This Product
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-20">
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl text-center">
              <span className={eyebrow}>Which Lift For Your Home?</span>
              <h2 className="mt-3 font-sans text-2xl font-bold text-navy-950 md:text-3xl">
                Home Lifts vs. Villa Platform Elevators
              </h2>
              <p className="mt-4 text-base text-slate">
                Both are real, installed product lines for residential properties across
                Nairobi — the right one depends on where the lift needs to sit on your
                property.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {RESIDENTIAL_COMPARISON.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-xl border border-line-light bg-white"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={product.image}
                      alt={`${product.name} — ${product.setting}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center md:text-left">
                    <h3 className="font-sans text-lg font-bold text-navy-950">{product.name}</h3>
                    <dl className="mt-4 space-y-2 text-sm">
                      <div>
                        <dt className="font-bold text-slate">Setting</dt>
                        <dd className="text-slate">{product.setting}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-slate">Best For</dt>
                        <dd className="text-slate">{product.bestFor}</dd>
                      </div>
                      <div>
                        <dt className="font-bold text-slate">Finish</dt>
                        <dd className="text-slate">{product.finish}</dd>
                      </div>
                    </dl>
                    <div className="mt-5">
                      <Button href="/quote" variant="cta" className="min-w-[190px]">
                        Request This Product
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-950">
        <Container className="py-16 md:py-20">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Freight &amp; Goods Handling</span>
              <h2 className="mx-auto mt-3 max-w-lg font-sans text-3xl font-bold text-white md:mx-0 md:text-4xl">
                Built for cargo, not passengers.
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={IMAGES.productFreightElevators}
                    alt="Heavy-duty industrial freight elevator with reinforced steel walls and diamond-plate floor"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center md:text-left">
                  <h3 className="font-sans text-lg font-bold text-white">Freight Elevators</h3>
                  <p className="mt-2 text-sm text-slate-dark">
                    Reinforced steel cars built for warehouses, industrial buildings and
                    loading bays — moving cargo, not people.
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={IMAGES.productGoodsHoist}
                    alt="External steel-lattice goods hoist mounted on a construction site building"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center md:text-left">
                  <h3 className="font-sans text-lg font-bold text-white">Goods Hoist</h3>
                  <p className="mt-2 text-sm text-slate-dark">
                    External hoists for construction sites and warehouses, moving materials
                    up a building while work is under way.
                  </p>
                </div>
              </article>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8 text-center md:text-left">
            <Button href="/quote" variant="cta" className="min-w-[190px]">
              Request This Product
            </Button>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 md:py-20">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>High-Traffic Movement</span>
              <h2 className="mx-auto mt-3 max-w-lg font-sans text-3xl font-bold text-navy-950 md:mx-0 md:text-4xl">
                Escalators and moving walkways for busy buildings.
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="overflow-hidden rounded-xl border border-line-light">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={IMAGES.productEscalators}
                    alt="Modern commercial escalator with stainless-steel balustrades in a retail atrium"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center md:text-left">
                  <h3 className="font-sans text-lg font-bold text-navy-950">Escalators</h3>
                  <p className="mt-2 text-sm text-slate">
                    Installed for shopping malls and other high-traffic commercial spaces —
                    our largest single installation, Village Market, includes 11.
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-xl border border-line-light">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={IMAGES.productMovingWalkways}
                    alt="Horizontal moving walkway corridor with stainless-steel balustrades"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center md:text-left">
                  <h3 className="font-sans text-lg font-bold text-navy-950">Moving Walkways</h3>
                  <p className="mt-2 text-sm text-slate">
                    Flat, continuous-motion walkways for airports, malls and other large
                    commercial corridors.
                  </p>
                </div>
              </article>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8 text-center md:text-left">
            <Button href="/quote" variant="cta" className="min-w-[190px]">
              Request This Product
            </Button>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-16 md:py-20">
          <RevealOnScroll>
            <div className="mx-auto text-center md:mx-0 md:text-left">
              <span className={eyebrow}>Specialty Products</span>
              <h2 className="mx-auto mt-3 max-w-lg font-sans text-3xl font-bold text-navy-950 md:mx-0 md:text-4xl">
                Dumbwaiters and car lifts.
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll stagger className="mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="overflow-hidden rounded-xl border border-line-light bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={IMAGES.productDumbwaiters}
                    alt="Compact stainless-steel dumbwaiter installation in a professional kitchen setting"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center md:text-left">
                  <h3 className="font-sans text-lg font-bold text-navy-950">Dumbwaiters</h3>
                  <p className="mt-2 text-sm text-slate">
                    Compact service lifts for kitchens, hotels and restaurants, moving goods
                    between floors without using a passenger lift.
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-xl border border-line-light bg-white">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={IMAGES.productCarLifts}
                    alt="Heavy-duty vehicle lift platform inside a multi-storey parking structure"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center md:text-left">
                  <h3 className="font-sans text-lg font-bold text-navy-950">Car Lifts</h3>
                  <p className="mt-2 text-sm text-slate">
                    Vehicle lift platforms for multi-storey parking structures, moving cars
                    between parking levels.
                  </p>
                </div>
              </article>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8 text-center md:text-left">
            <Button href="/quote" variant="cta" className="min-w-[190px]">
              Request This Product
            </Button>
          </RevealOnScroll>
        </Container>
      </section>

      <section className="bg-navy-900">
        <Container className="flex flex-col items-center py-20 text-center">
          <RevealOnScroll>
            <h2 className="mx-auto max-w-xl font-sans text-3xl font-bold text-white md:text-4xl">
              Tell us which product fits your building.
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
