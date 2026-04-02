import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorSparkle from "@/components/CursorSparkle";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Script from "next/script";

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

const siteName = "LITE camp";
const siteUrl = "https://www.litecamp.cz";
const title = "LITE camp 2026 – Letní tábor s angličtinou | Sázava";
const description =
  "Letní tábor s intenzivní výukou angličtiny na ostrově na řece Sázavě. 14 dní zážitků, nová přátelství a angličtina přirozenou cestou. Pro děti 7–17 let. Termíny: 18. 7. – 1. 8. 2026.";
const ogImage = `${siteUrl}/fotky/group-photo.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "letní tábor",
    "letní tábor s angličtinou",
    "anglický tábor",
    "dětský tábor",
    "LITE camp",
    "tábor Sázava",
    "tábor 2026",
    "výuka angličtiny děti",
    "příměstský tábor",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title,
    description,
    locale: "cs_CZ",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "LITE camp 2026 – děti na letním táboře s angličtinou na Sázavě",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${baloo2.variable} ${nunito.variable} h-full antialiased`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W617ZJ4EQG" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-W617ZJ4EQG');`}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1255927940003692');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1255927940003692&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "19px" }}>
        <ScrollProgress />
        <CursorSparkle />
        <StickyMobileCTA />
        {children}
      </body>
    </html>
  );
}
