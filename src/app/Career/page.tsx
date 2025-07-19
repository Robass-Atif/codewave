// src/components/CAREER.tsx
import type { Metadata } from "next";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Careers at CodeWaves - Join Our Team",
  description: "Join CodeWaves' dynamic team and explore exciting career opportunities in web development, software engineering, cybersecurity, and more.",
  keywords: "CodeWaves careers, web development jobs, software engineering jobs, cybersecurity careers, AI jobs",
  openGraph: {
    title: "Careers at CodeWaves - Join Our Team",
    description: "Discover career opportunities at CodeWaves and join our innovative team in web development, cybersecurity, and AI.",
    url: "https://codewaves.vercel.app/careers",
    siteName: "CodeWaves",
    images: [
      {
        url: "https://codewaves.vercel.app/images/og-image-careers.jpg", // Adjust path to your actual OG image
        width: 1200,
        height: 630,
        alt: "CodeWaves Careers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at CodeWaves - Join Our Team",
    description: "Explore exciting career opportunities at CodeWaves in web development, cybersecurity, and more.",
    images: ["https://codewaves.vercel.app/images/twitter-image-careers.jpg"], // Adjust path to your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
  },
};

const CAREER: React.FC = () => {
  return (
    <div>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CodeWaves Careers",
            description: "Join CodeWaves' dynamic team and explore exciting career opportunities in web development, software engineering, cybersecurity, and more.",
            url: "https://codewaves.vercel.app/careers",
            publisher: {
              "@type": "Organization",
              name: "CodeWaves",
              logo: {
                "@type": "ImageObject",
                url: "https://codewaves.vercel.app/images/logo.png", // Adjust path to your actual logo
              },
            },
            potentialAction: {
              "@type": "ApplyAction",
              name: "Apply for a Job at CodeWaves",
              target: "https://forms.gle/wEerrHwK4vGmynvF9",
            },
          }),
        }}
      />
      <section className="bg-indigo-600 min-h-screen flex flex-col justify-center items-center text-center">
        <div className="text-white max-w-2xl px-4">
          <h1 className="text-4xl font-bold">Careers at CodeWaves</h1>
          <p className="pt-5 text-lg">
            We are hiring! Join our innovative team and grow your career in a dynamic environment.
          </p>
          <p className="pt-2 text-lg">
            Explore opportunities in web development, software engineering, cybersecurity, AI, and more.
          </p>
          <p className="pt-2 text-lg">
            Be part of CodeWaves and help shape the future of technology.
          </p>
        </div>
        <div className="pt-10">
          <a
            href="https://forms.gle/wEerrHwK4vGmynvF9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 font-bold py-2 px-6 rounded hover:bg-indigo-400 hover:text-white transition duration-500"
            aria-label="Apply now for career opportunities at CodeWaves"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default CAREER;