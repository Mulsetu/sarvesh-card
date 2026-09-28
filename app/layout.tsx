import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import { RegisterServiceWorker } from "@/components/pwa/RegisterServiceWorker";
import { profile, shareText, shareTitle } from "@/lib/profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sarvesh.mulsetu.com"),
  applicationName: "Mulsetu ID",
  title: { default: shareTitle, template: "%s" },
  description: shareText,
  alternates: { canonical: profile.profileUrl },
  appleWebApp: {
    capable: true,
    title: "Mulsetu ID",
    statusBarStyle: "default",
  },
  icons: {
    icon: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Sarvesh Gadkari — Founder & CEO | Mulsetu",
    description: shareText,
    url: profile.profileUrl,
    siteName: "Mulsetu",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvesh Gadkari — Founder & CEO | Mulsetu",
    description: shareText,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" className={`${inter.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        {children}
        <RegisterServiceWorker />
      </body>
    </html>
  );
}
