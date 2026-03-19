import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexGen Digital — Websites, Funnels & Automation for Coaches",
  description: "We build high-converting websites, automated lead funnels and smart systems for coaches and service businesses. Get more clients without the hustle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
