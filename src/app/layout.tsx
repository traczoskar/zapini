import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zapini",
  description: "Najlepsze zapiekanki w mieście",
  icons: "/icon.png",
  authors: { name: "Oskar Tracz", url: "https://traczoskar.dev" },
  keywords: [
    "zapiekanki",
    "słupsk",
    "zapini",
    "panini",
    "śniadania słupsk",
    "śniadania",
    "kawa słupsk",
    "kawa",
    "kanapki",
  ],
  alternates: { canonical: "https://www.zapini.pl" },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${leagueSpartan.className} antialiased min-h-screen flex flex-col items-center w-full`}
      >
        {children}
      </body>
    </html>
  );
}
