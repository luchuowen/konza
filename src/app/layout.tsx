import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { MobileNavProvider } from "@/lib/mobile-nav-context";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Konza Elevators & Escalator Co. Ltd | Vertical Transportation, Nairobi",
    template: "%s | Konza Elevators & Escalator Co. Ltd",
  },
  description:
    "Nairobi's authorized Fuji Elevator distributor since 2013 — 13 years, 50 completed installations, vertical transportation for the city's next skyline.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MobileNavProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </MobileNavProvider>
      </body>
    </html>
  );
}
