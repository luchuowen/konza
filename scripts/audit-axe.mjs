import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const BASE = 'http://localhost:3100';
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/maintenance',
  '/resources',
  '/resources/how-to-choose-the-right-elevator-for-your-building',
  '/resources/top-construction-trends-to-watch-in-2026',
  '/quote',
  '/contact',
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

let totalSerious = 0;
const report = [];

for (const route of ROUTES) {
  await page.goto(`${BASE}${route}`, { waitUntil: 'load' });
  // Clear past the .pre scroll-reveal fade-in (600ms CSS transition, see
  // RevealOnScroll.tsx) so the scan reflects the settled page, not a
  // mid-fade animation frame.
  await page.waitForTimeout(1500);
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  const critical = results.violations.filter((v) => v.impact === 'critical');
  const serious = results.violations.filter((v) => v.impact === 'serious');
  const other = results.violations.filter((v) => v.impact !== 'critical' && v.impact !== 'serious');

  totalSerious += critical.length + serious.length;

  const detail = (v) => ({
    id: v.id,
    help: v.help,
    nodeCount: v.nodes.length,
    nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
  });

  report.push({
    route,
    critical: critical.map(detail),
    serious: serious.map(detail),
    other: other.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })),
  });
}

await browser.close();

console.log(JSON.stringify(report, null, 2));
console.log(`\nTOTAL CRITICAL+SERIOUS: ${totalSerious}`);
