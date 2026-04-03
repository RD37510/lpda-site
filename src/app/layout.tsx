import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LPDA — Atelier carrosserie & detailing premium",
  description:
    "LPDA accompagne les passionnés d’automobiles dans des services de detailing, protection céramique et carrosserie de prestige à Tours.",
  metadataBase: new URL("https://lepouvoirdelautomobile.fr"),
  openGraph: {
    title: "LPDA — Atelier carrosserie & detailing premium",
    description:
      "Detraquez un rituel d’atelier : inspection sous lumière rasante, traitements céramiques et rapports immersifs.",
    url: "https://lepouvoirdelautomobile.fr",
    siteName: "LPDA",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    title: "LPDA — Atelier carrosserie & detailing premium",
    description:
      "LPDA combine design, carrosserie et savoir-faire technologique pour sublimer votre véhicule.",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#020513] text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <Link href="/" className="flex items-center">
              <Image
                src="https://mlraba0m5wz3.i.optimole.com/w:800/h:266/q:mauto/f:best/https://lepouvoirdelautomobile.fr/wp-content/uploads/2026/01/cropped-LOGO-fINAL-lpda.png"
                alt="Logo LPDA"
                width={220}
                height={74}
                priority
                className="h-12 w-auto sm:h-14"
              />
            </Link>
            <nav className="hidden gap-8 text-sm font-medium uppercase tracking-[0.2em] md:flex">
              <Link className="transition hover:text-red-500" href="/">
                Expertise
              </Link>
              <Link className="transition hover:text-red-500" href="/services">
                Services
              </Link>
              <Link className="transition hover:text-red-500" href="/about">
                Pourquoi nous
              </Link>
              <Link className="transition hover:text-red-500" href="/#contacthome">
                Contact
              </Link>
            </nav>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-2 text-xs uppercase tracking-[0.3em] transition hover:border-red-500 hover:text-red-500"
            >
              Prendre RDV
            </Link>
          </div>
        </header>
        {children}
        <footer className="border-t border-white/10 bg-black/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-xs uppercase tracking-[0.3em] text-white/60 md:flex-row md:items-center md:justify-between">
            <div>LPDA Tours — Atelier detailing & protection automobile</div>
            <div className="flex flex-wrap gap-6">
              <Link className="hover:text-red-500" href="#">
                Politique
              </Link>
              <Link className="hover:text-red-500" href="#">
                Conditions
              </Link>
              <Link className="hover:text-red-500" href="#">
                Mentions
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
