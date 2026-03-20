import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
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
    <html lang="cs" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
