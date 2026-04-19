import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Business Analyst",
    "Financial Assessment Consultant",
    "Purva Jain",
    "UniSuper",
    "AI Enablement SME",
    "Digital Financial Advice",
    "Process Improvement",
    "SAFe Product Owner"
  ],
  authors: [{ name: "Purva Jain" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage.url,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
