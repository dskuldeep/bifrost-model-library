import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.getmaxim.ai/bifrost/model-library'),
  title: {
    default: 'Bifrost AI Model Library - Explore Providers and Capabilities',
    template: '%s | Bifrost AI Model Library',
  },
  description: 'Browse AI models across providers. Compare capabilities, context limits, and pricing details.',
  keywords: ['Bifrost AI Model Library', 'model catalog', 'AI providers', 'model capabilities', 'model pricing'],
  authors: [{ name: 'Bifrost AI Model Library' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.getmaxim.ai/bifrost/model-library',
    siteName: 'Bifrost AI Model Library',
    title: 'Bifrost AI Model Library - Explore Providers and Capabilities',
    description: 'Browse AI models across providers. Compare capabilities, context limits, and pricing details.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bifrost AI Model Library',
    description: 'Browse AI models across providers. Compare capabilities, context limits, and pricing details.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
