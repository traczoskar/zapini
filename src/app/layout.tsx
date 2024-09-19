import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Zapini - Pyszne śniadania w Słupsku | Bajgle, zapiekanki, bagietki",
    template: "%s | Zapini - Pyszne śniadania w Słupsku",
  },
  description:
    "Odkryj smaczne śniadania w Słupsku! Zapini oferuje świeże bajgle, zapiekanki oraz bagietki i pyszną kawę z dostawą lub odbiorem własnym. Zamów online już teraz!",
  icons: "/icon.png",
  authors: [
    { name: "Oskar Tracz", url: "https://traczoskar.dev" },
    { name: "Zapini", url: "https://zapini.pl" },
  ],
  creator: "Zapini",
  publisher: "Zapini",
  metadataBase: new URL("https://www.zapini.pl"),
  keywords: [
    "zapiekanki",
    "słupsk",
    "bajgle",
    "bagietki",
    "bagietki śniadaniowe",
    "śniadanie słupsk",
    "restauracja śniadaniowa słupsk",
    "dostawa śniadań słupsk",
    "dostawa śniadań",
    "zapini",
    "panini",
    "śniadania Słupsk",
    "śniadania",
    "kawa słupsk",
    "kawa",
    "kanapki",
  ],
  openGraph: {
    type: "website",
    url: "https://www.zapini.pl",
    title: "Zapini - Pyszne śniadania w Słupsku | Bajgle, zapiekanki, bagietki",
    description:
      "Odkryj smaczne śniadania w Zapini! Świeże bajgle, zapiekanki oraz bagietki i pyszna kawa z dostawą lub odbiorem własnym w Słupsku. Zamów online!",
    siteName: "Zapini",
    images: [
      {
        url: "https://www.zapini.pl/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zapini - Pyszne śniadania w Słupsku | Bajgle, zapiekanki, bagietki",
      },
    ],
    locale: "pl_PL",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/xml": [
        { url: "https://www.zapini.pl/sitemap.xml", title: "Sitemap" },
      ],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapini - Pyszne śniadania w Słupsku | Bajgle, zapiekanki, bagietki",
    description:
      "Zapini | Świeże bajgle, zapiekanki i bagietki z dostawą lub odbiorem własnym. Zamów online!",
    images: ["https://www.zapini.pl/og-image.png"],
  },
  category: "Restauracja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${leagueSpartan.className} antialiased min-h-screen flex flex-col items-center w-full`}
      >
        {children}
      </body>
    </html>
  );
}
