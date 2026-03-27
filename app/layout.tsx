import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorSparkle from "@/components/CursorSparkle";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const baloo2 = Baloo_2({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "LITE camp 2026 – Letní tábor s angličtinou",
  description:
    "Letní tábor s intenzivní výukou angličtiny na ostrově na řece Sázavě. 14 dní zážitků, nová přátelství a anglicky jako se říká přirozenou cestou. Pro děti 7–17 let.",
  keywords: ["letní tábor", "angličtina", "děti", "LITE camp", "Sázava", "2026"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${baloo2.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "19px" }}>
        <ScrollProgress />
        <CursorSparkle />
        <StickyMobileCTA />
        {children}
      </body>
    </html>
  );
}
