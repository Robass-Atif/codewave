// src/components/SERVICE.tsx
import type { Metadata } from "next";
import Image from "next/image";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Our Services - CodeWaves",
  description: "Explore CodeWaves' comprehensive web development, app development, cybersecurity, AI, and data analytics services tailored to your business needs.",
  keywords: "web development, app development, cybersecurity, AI, data analytics, CodeWaves services",
  openGraph: {
    title: "Our Services - CodeWaves",
    description: "Discover CodeWaves' expert services in web development, mobile apps, cybersecurity, AI, and data analytics.",
    url: "https://codewaves.vercel.app/services",
    siteName: "CodeWaves",
    images: [
      {
        url: "https://codewaves.vercel.app/images/og-image-services.jpg", // Adjust path to your actual OG image
        width: 1200,
        height: 630,
        alt: "CodeWaves Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - CodeWaves",
    description: "Explore CodeWaves' innovative services in web development, mobile apps, cybersecurity, and more.",
    images: ["https://codewaves.vercel.app/images/twitter-image-services.jpg"], // Adjust path to your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Define service data
const services = [
  {
    title: "Web Development",
    description: "Build responsive and scalable websites tailored to your needs.",
    image: "/Web.png",
    alt: "CodeWaves Web Development Services",
  },
  {
    title: "WordPress Development",
    description: "Create custom WordPress themes and plugins for your website.",
    image: "/Wordpress.png",
    alt: "CodeWaves WordPress Development Services",
  },
  {
    title: "App Development",
    description: "Develop mobile apps for iOS and Android platforms.",
    image: "/app.jpg",
    alt: "CodeWaves Mobile App Development Services",
  },
  {
    title: "Data Analytics",
    description: "Analyze your data to gain insights and drive decision-making.",
    image: "/DataScience.png",
    alt: "CodeWaves Data Analytics Services",
  },
  {
    title: "Cybersecurity",
    description: "Protect your systems and data with our cybersecurity solutions.",
    image: "/Cybersecurity.png",
    alt: "CodeWaves Cybersecurity Services",
  },
  {
    title: "Artificial Intelligence",
    description: "Implement AI solutions to automate and enhance your business processes.",
    image: "/AI.png",
    alt: "CodeWaves Artificial Intelligence Services",
  },
];

const SERVICE: React.FC = () => {
  return (
    <div>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CodeWaves Services",
            description: "Explore CodeWaves' comprehensive web development, app development, cybersecurity, AI, and data analytics services.",
            url: "https://codewaves.vercel.app/services",
            publisher: {
              "@type": "Organization",
              name: "CodeWaves",
              logo: {
                "@type": "ImageObject",
                url: "https://codewaves.vercel.app/images/logo.png", // Adjust path to your actual logo
              },
            },
            hasPart: services.map((service) => ({
              "@type": "Service",
              name: service.title,
              description: service.description,
            })),
          }),
        }}
      />
      <div className="pt-16 mt-4 xl:pt-4">
        <section className="bg-indigo-600 pb-20">
          <div className="text-white text-center pt-20">
            <h1 className="text-4xl font-bold">Our Services</h1>
          </div>
          {/* Cards of services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-md">
                <div className="flex justify-center">
                  <Image
                    src={service.image}
                    width={240}
                    height={220}
                    alt={service.alt}
                    className="mt-4"
                    loading={index > 2 ? "lazy" : "eager"} // Lazy load for second row
                  />
                </div>
                <div className="px-4 pb-4">
                  <h2 className="text-2xl font-bold text-center">{service.title}</h2>
                  <p className="text-center text-gray-500 pt-3">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SERVICE;