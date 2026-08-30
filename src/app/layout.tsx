import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konza Elevators & Escalator Co. Ltd",
  description:
    "Nairobi's authorized Fuji Elevator distributor since 2013 — vertical transportation for the city's next skyline.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
