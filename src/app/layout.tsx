import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNavProvider } from "@/lib/mobile-nav-context";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { DevCredit } from "@/components/seo/DevCredit";
import { SITE_URL } from "@/lib/constants";

const geist = Geist({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-geist",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Konza Elevators & Escalator Co. Ltd | Vertical Transportation, Nairobi",
    template: "%s | Konza Elevators & Escalator Co. Ltd",
  },
  description:
    "Nairobi's authorized Fuji Elevator distributor since 2013 — 13 years, 50 completed installations, vertical transportation for the city's next skyline.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [
      {
        url: "/images/OG — Social Share Card.jpg",
        width: 1424,
        height: 752,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${geist.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <DevCredit />
        <LocalBusinessJsonLd />
        <MobileNavProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MobileNavProvider>
      </body>
    </html>
  );
}
