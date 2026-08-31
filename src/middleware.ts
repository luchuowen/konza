import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// SITE_URL / metadataBase (src/lib/constants.ts, src/app/layout.tsx) are
// hardcoded to the real, eventual production domain, konzaelevators.co.ke —
// intentionally, per docs/BLUEPRINT.md. Until Konza approves this redesign
// and DNS is actually cut over there, this app is served from a temporary
// preview host (konza.navac.co.ke) and/or Firebase App Hosting's own
// default domain, both of which mismatch the site's own metadata. Neither
// should ever get indexed under the wrong URL.
//
// This is scoped to "not the real production host," not to one hardcoded
// preview hostname — so it covers every non-production host reaching this
// app (the Firebase-provided URL during smoke testing, the mapped preview
// subdomain, a future staging host) and switches itself off the moment
// konzaelevators.co.ke is the host actually serving traffic, with no code
// change needed at cutover.
const PRODUCTION_HOST = "konzaelevators.co.ke";

function isProductionHost(host: string): boolean {
  const bareHost = host.split(":")[0].toLowerCase();
  return bareHost === PRODUCTION_HOST || bareHost === `www.${PRODUCTION_HOST}`;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const response = NextResponse.next();

  if (!isProductionHost(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  // Skip static assets — the header only needs to reach actual page/route
  // responses, and Next's image/static handlers don't benefit from it.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
