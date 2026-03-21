import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexGen Digital — High-Converting Funnels & Lead Systems",
  description: "We build high-converting websites, lead funnels and automation systems for coaches, creators and local businesses. Stop losing leads. Start closing them. Free audit available.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
