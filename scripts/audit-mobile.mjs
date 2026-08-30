import { chromium } from 'playwright';

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
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await context.newPage();

const consoleErrors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', (err) => consoleErrors.push(String(err)));

const report = [];

for (const route of ROUTES) {
  consoleErrors.length = 0;
  await page.goto(`${BASE}${route}`, { waitUntil: 'load' });
  await page.waitForTimeout(1500);

  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    return { docWidth, winWidth, overflowing: docWidth > winWidth };
  });

  const smallTargets = await page.evaluate(() => {
    const selectors = 'a, button, input, select, textarea, [role="button"]';
    const els = Array.from(document.querySelectorAll(selectors));
    const results = [];
    for (const el of els) {
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      // A closed <details> panel's content isn't display:none (it's hidden
      // via content-visibility), so getBoundingClientRect() still reports
      // its cached layout size even though it's unrendered and untappable.
      // checkVisibility() is the DOM API that actually accounts for that.
      if (typeof el.checkVisibility === 'function' && !el.checkVisibility()) continue;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;
      if (rect.height < 44 || rect.width < 24) {
        results.push({
          tag: el.tagName,
          text: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 40),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
    }
    return results;
  });

  report.push({
    route,
    overflow,
    smallTargetCount: smallTargets.length,
    smallTargets: smallTargets.slice(0, 15),
    consoleErrors: [...consoleErrors],
  });
}

await browser.close();
console.log(JSON.stringify(report, null, 2));
