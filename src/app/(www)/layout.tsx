import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BitHQ: Spotlighting Talent & Shaping Music Industry",
  description:
    "Explore BitHQ - your hub for emerging talent in the music industry. Discover featured artists, stay updated with events, and join our vibrant community. Enrich your musical journey with us.",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <LenisProvider
          options={{
            lerp: 0.1,
            wheelMultiplier: 0.8,
            smoothWheel: true,
          }}
        >
          <section className="relative">
            <Header />
            {children}
            <Footer />
          </section>
        </LenisProvider>
      </body>
    </html>
  );
}
