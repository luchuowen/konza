export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  intro: string;
  sections: ArticleSection[];
};

// The 2 real posts from docs/KONZA_SPEC.md §2 ("Blog"), reframed — not copied —
// with the real Kenya price bands, servicing guidance and market-sizing data kept intact.
export const ARTICLES: Article[] = [
  {
    slug: 'how-to-choose-the-right-elevator-for-your-building',
    category: 'Buying Guide',
    title: 'How to Choose the Right Elevator for Your Building',
    excerpt:
      'A practical starting point for developers and homeowners: typical elevator costs in Kenya, how often systems need servicing, and how fast the market is growing.',
    publishedAt: '2026-07-15',
    intro:
      'Choosing an elevator or escalator is a long-term decision — the system you install will run for years, carry your building’s traffic, and need to be serviced reliably. Here’s what to weigh before you commit to a specification.',
    sections: [
      {
        heading: 'What Elevators Cost in Kenya',
        paragraphs: [
          'Prices vary by capacity, speed, number of stops and finish, but three broad bands are useful for early budgeting. Residential passenger elevators typically fall between KES 2.5M and KES 6M. Freight and service elevators, built for heavier and more frequent use, generally run from KES 5M to KES 12M. Home lifts, sized for private residences, are the most affordable of the three, usually between KES 1.5M and KES 3M.',
          'These are general ranges, not quotations — the final figure depends on the specific model, the number of floors served, and the condition of the building the elevator is going into. A free condition report and estimate is the fastest way to get a number specific to your project.',
        ],
      },
      {
        heading: 'Matching the Elevator to the Building',
        paragraphs: [
          'A residential tower, a hospital and a retail mall all put very different demands on an elevator. Hospitals need larger cars for beds and equipment and prioritize reliability above all else. Retail and commercial buildings move higher volumes of people and often pair elevators with escalators for peak-hour flow. Homes need a compact footprint and a quieter ride. Getting this match right up front avoids expensive changes later.',
        ],
      },
      {
        heading: 'How Often Elevators Need Servicing',
        paragraphs: [
          'As a general guide, elevators are inspected and serviced every 6 to 12 months, with higher-traffic buildings serviced more frequently than that range suggests. A maintenance contract sets a servicing schedule tailored to how heavily your system is actually used, rather than leaving it to guesswork.',
        ],
      },
      {
        heading: 'A Market That Is Still Growing',
        paragraphs: [
          'This isn’t a slowing industry. Statista sizes the global elevator and escalator market at $79.06 billion in 2024, projected to reach $116.14 billion by 2030 — a reflection of how much the world is continuing to build upward. Nairobi, zoned to build up to 75 storeys, is part of that same story.',
        ],
      },
    ],
  },
  {
    slug: 'top-construction-trends-to-watch-in-2026',
    category: 'Industry Trends',
    title: 'Top Construction Trends to Watch in 2026',
    excerpt:
      'From carbon-sequestering materials to AI-assisted scheduling, four trends shaping construction projects in 2026 — and what they mean for buildings going up in Nairobi.',
    publishedAt: '2026-08-05',
    intro:
      'Vertical transportation doesn’t exist in isolation — it goes into buildings shaped by the wider construction industry. Here are four trends worth watching this year, and why they matter for anyone planning a new build.',
    sections: [
      {
        heading: '1. Carbon-Sequestering Materials',
        paragraphs: [
          'Building materials engineered to capture and store carbon, rather than simply reduce emissions in their production, are moving out of pilot projects and into mainstream specification. For developers weighing long-term sustainability commitments, this is becoming a real line item in material selection, not just a talking point.',
        ],
      },
      {
        heading: '2. Agentic AI Site Scheduling',
        paragraphs: [
          'AI systems capable of coordinating multiple moving parts on a site — trades, deliveries, equipment — are being used to tighten scheduling on complex builds. The result is fewer idle days and better sequencing between contractors working on the same site.',
        ],
      },
      {
        heading: '3. Robotics on Site',
        paragraphs: [
          'Robotics are increasingly handling repetitive or hazardous tasks on construction sites, freeing skilled tradespeople for work that needs their judgment and easing pressure on project timelines.',
        ],
      },
      {
        heading: '4. Real-Time AI Safety Monitoring',
        paragraphs: [
          'AI-based monitoring systems that track site activity in real time are being adopted to flag safety risks as they emerge, rather than relying solely on periodic inspection — a meaningful shift for site safety culture.',
        ],
      },
      {
        heading: 'What This Means for Your Build',
        paragraphs: [
          'Whichever of these trends a project adopts, the fundamentals of a good build don’t change: coordination between contractors, and vertical transportation planned in from the start rather than bolted on at the end. That coordination is exactly what our Construction & Contracting Services are built to support alongside our elevator and escalator installation work.',
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
