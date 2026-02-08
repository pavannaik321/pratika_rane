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
    default: "Pratika Rane | Quality Assurance Engineer | Pharma & Regulatory Compliance",
    template: "%s | Pratika Rane",
  },

  description:
    "Pratika Rane is a Quality Assurance Engineer specializing in pharmaceutical quality systems, regulatory compliance, GMP audits, ISO 13485, MDSAP, FDA, and global regulatory inspections. Based in India, available for QA and compliance roles.",

  keywords: [
    "Pratika Rane",
    "Pratika",
    "Quality Assurance Engineer",
    "QA Engineer",
    "Pharmaceutical Quality Assurance",
    "Regulatory Compliance Engineer",
    "GMP Quality Assurance",
    "ISO 13485 QA",
    "MDSAP Auditor",
    "FDA Audit Experience",
    "Quality Assurance Engineer near me",
    "Pharma QA Professional",
    "Quality Systems Specialist",
  ],

  authors: [{ name: "Pratika Rane" }],
  creator: "Pratika Rane",
  publisher: "Pratika Rane",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.pratikarane.com", // change to your real domain
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pratikarane.com",
    siteName: "Pratika Rane Portfolio",
    title: "Pratika Rane | Quality Assurance & Regulatory Compliance Professional",
    description:
      "Experienced Quality Assurance Engineer with global regulatory audit exposure (FDA, ISO 13485, MDSAP, GMP). Explore professional background, compliance expertise, and contact details.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pratika Rane | Quality Assurance Engineer",
    description:
      "Pharmaceutical Quality Assurance Engineer with global regulatory audit experience. GMP, ISO 13485, FDA, MDSAP.",
  },

  category: "Quality Assurance",
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
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pratika Rane",
              jobTitle: "Quality Assurance Engineer",
              description:
                "Quality Assurance Engineer specializing in pharmaceutical quality systems, regulatory compliance, GMP audits, ISO 13485, and global regulatory inspections.",
              url: "https://www.pratikarane.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              knowsAbout: [
                "Quality Assurance",
                "Pharmaceutical Quality Assurance",
                "Regulatory Compliance",
                "GMP",
                "ISO 13485",
                "MDSAP",
                "FDA Audits",
                "Global Regulatory Inspections",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}

