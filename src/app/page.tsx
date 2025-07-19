import type { Metadata } from "next";
import HeroSection from "./component/HeroSection";
import LowHero from "./component/lowHero";
import Contact from "./component/contact";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "CodeWaves - Innovative Web Development Solutions",
  description: "Welcome to CodeWaves, your trusted partner for custom web development, responsive design, and innovative digital solutions.",
  keywords: "web development, CodeWaves, custom websites, responsive design, software solutions",
  openGraph: {
    title: "CodeWaves - Innovative Web Development Solutions",
    description: "Explore CodeWaves' expert web development services to build high-performance, responsive websites tailored to your business.",
    url: "https://codewaves.vercel.app",
    siteName: "CodeWaves",
    images: [
      {
        url: "https://codewaves.vercel.app/og-image-home.jpg", // Adjust path to your actual OG image
        width: 1200,
        height: 630,
        alt: "CodeWaves Home",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeWaves - Innovative Web Development Solutions",
    description: "Build your dream website with CodeWaves' expert web development services.",
    images: ["https://codewaves.vercel.app/twitter-image-home.jpg"], // Adjust path to your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Optional: Enable SSG for the home page
export const dynamic = "force-static"; // App Router: Forces static generation

export default function Home() {
  return (
    <main>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CodeWaves Home",
            description: "Welcome to CodeWaves, your trusted partner for custom web development, responsive design, and innovative digital solutions.",
            url: "https://codewaves.vercel.app",
            publisher: {
              "@type": "Organization",
              name: "CodeWaves",
              logo: {
                "@type": "ImageObject",
                url: "https://codewaves.vercel.app/logo.png", // Adjust path to your actual logo
              },
            },
          }),
        }}
      />
      <HeroSection />
      <LowHero />
      <Contact />
    </main>
  );
}