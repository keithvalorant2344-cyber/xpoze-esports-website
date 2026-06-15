import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xpoze-esports.example"),
  title: {
    default: "Xpoze Esports | Mauritius Esports Organization",
    template: "%s | Xpoze Esports"
  },
  description:
    "Xpoze Esports is a Mauritius-based esports organization developing talent in Valorant, Tekken 8, and Fortnite for international competition.",
  keywords: [
    "Xpoze Esports",
    "Mauritius esports",
    "Valorant Mauritius",
    "Tekken 8 Mauritius",
    "Fortnite Mauritius",
    "CyberRoom Mauritius"
  ],
  authors: [{ name: "Xpoze Esports" }],
  openGraph: {
    title: "Xpoze Esports",
    description:
      "Developing Mauritius esports talent and competing internationally.",
    url: "https://xpoze-esports.example",
    siteName: "Xpoze Esports",
    images: [
      {
        url: "/images/hero-arena.png",
        width: 1600,
        height: 900,
        alt: "Xpoze Esports purple arena hero visual"
      }
    ],
    locale: "en_MU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpoze Esports",
    description:
      "Mauritius esports talent across Valorant, Tekken 8, and Fortnite.",
    images: ["/images/hero-arena.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#050309",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SiteShell>
      </body>
    </html>
  );
}
