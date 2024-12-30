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
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alex-brush",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Wedding Memories | Jamaica & Morgan",
  description:
    "Celebrating the love story and wedding memories of Jamaica and Morgan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${alexBrush.variable} ${dancingScript.variable} ${greatVibes.variable} flex min-h-screen flex-col bg-white font-serif`}
      >
        {/* Texture overlay using CSS module */}
        <div className={styles.textureOverlay} />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
