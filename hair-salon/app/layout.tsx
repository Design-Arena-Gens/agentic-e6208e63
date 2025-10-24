import type { Metadata } from "next";
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
  title: {
    default: "Luxe Aura Salon",
    template: "%s | Luxe Aura Salon",
  },
  description:
    "Luxe Aura Salon delivers couture hair artistry, holistic rituals, and bespoke experiences in Portland's Design District.",
  openGraph: {
    title: "Luxe Aura Salon",
    description:
      "Couture hair artistry and mindful rituals for luminous, effortless beauty.",
    url: "https://agentic-e6208e63.vercel.app",
    siteName: "Luxe Aura Salon",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Aura Salon",
    description:
      "Couture hair artistry and mindful rituals for luminous, effortless beauty.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
