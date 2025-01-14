import { PerformanceWrapper } from "@/components/layout/performance-wrapper";
import { Footer } from "@/components/ui/footer";
import { Navigation } from "@/components/ui/navigation";
import { Metadata } from "next";
import {
  Alex_Brush,
  Dancing_Script,
  Great_Vibes,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import styles from "./styles/texture.module.css";

// Optimize font loading
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alex-brush",
  preload: true,
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
  preload: true,
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
  preload: true,
});

export const metadata: Metadata = {
  title: "Our Love Story | Jamaica & Morgan",
  description: "Celebrating the love story and wedding memories of Jamaica and Morgan.",
  metadataBase: new URL('https://nicholsweddingmemories.vercel.app'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo.webp', type: 'image/webp', sizes: '32x32' }
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/images/logo.webp', type: 'image/webp', sizes: '180x180' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo.webp',
        color: '#8B4513'
      },
    ],
  },
  openGraph: {
    title: "Our Love Story | Jamaica & Morgan",
    description: "Celebrating the love story and wedding memories of Jamaica and Morgan.",
    type: 'website',
    images: [
      {
        url: '/images/logo.webp',
        width: 180,
        height: 180,
        alt: 'Nichols Wedding Logo'
      }
    ],
  },
  themeColor: '#ffffff',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${alexBrush.variable} ${dancingScript.variable} ${greatVibes.variable}`}
    >
      <body suppressHydrationWarning className="flex min-h-screen flex-col bg-white font-serif antialiased">
        <PerformanceWrapper>
          {/* Texture overlay using CSS module */}
          <div className={styles.textureOverlay} />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </PerformanceWrapper>
      </body>
    </html>
  );
}
