// src/components/TEAM.tsx
import type { Metadata } from "next";
import Image from "next/image";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Our Team - CodeWaves",
  description: "Meet the talented team at CodeWaves, experts in web development, software engineering, cybersecurity, and more.",
  keywords: "CodeWaves team, web development team, software engineers, cybersecurity experts",
  openGraph: {
    title: "Our Team - CodeWaves",
    description: "Discover the skilled professionals behind CodeWaves' innovative web development and digital solutions.",
    url: "https://codewaves.vercel.app/team",
    siteName: "CodeWaves",
    images: [
      {
        url: "https://codewaves.vercel.app/images/og-image-team.jpg", // Adjust path to your actual OG image
        width: 1200,
        height: 630,
        alt: "CodeWaves Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - CodeWaves",
    description: "Meet the experts driving CodeWaves' web development and digital solutions.",
    images: ["https://codewaves.vercel.app/images/twitter-image-team.jpg"], // Adjust path to your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Define team member data
const teamMembers = [
  {
    name: "Rob-squared: Robass Atif",
    role: "Full Stack Developer and Data Analyst",
    image: "/robass1.png",
    alt: "Robass Atif, Full Stack Developer",
  },
  {
    name: "Muhammad Abdullah",
    role: "MERN Stack Developer",
    image: "/abdullah1.png",
    alt: "Muhammad Abdullah, MERN Stack Developer",
  },
  {
    name: "Muhammad Ahmad",
    role: "Project Manager",
    image: "/ahmad1.png",
    alt: "Muhammad Ahmad, Project Manager",
  },
  {
    name: "Muhammad Saad Akmal",
    role: "Software Engineer",
    image: "/Saad1.png",
    alt: "Muhammad Saad Akmal, Software Engineer",
  },
  {
    name: "Ashhad Mazhar",
    role: "Cybersecurity Expert and Data Engineer",
    image: "/ashhad1.png",
    alt: "Ashhad Mazhar, Cybersecurity Expert",
  },
  {
    name: "Tayyab Ashraf",
    role: "Technical Recruiter",
    image: "/tayyab5.png",
    alt: "Tayyab Ashraf, Technical Recruiter",
  },
];

const TEAM: React.FC = () => {
  return (
    <div>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CodeWaves Team",
            description: "Meet the talented team at CodeWaves, experts in web development, software engineering, cybersecurity, and more.",
            url: "https://codewaves.vercel.app/team",
            publisher: {
              "@type": "Organization",
              name: "CodeWaves",
              logo: {
                "@type": "ImageObject",
                url: "https://codewaves.vercel.app/images/logo.png", // Adjust path to your actual logo
              },
            },
          }),
        }}
      />
      <div className="pt-16 mt-7 xl:pt-4">
        <section className="bg-indigo-600 pb-20">
          <div className="text-white text-center pt-20">
            <h1 className="text-4xl font-bold">Our Team</h1>
          </div>
          {/* Cards of team members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white shadow-md rounded-md">
                <div className="flex justify-center relative">
                  <Image
                    src={member.image}
                    width={240}
                    height={220}
                    alt={member.alt}
                    className="my-4"
                    loading={index > 2 ? "lazy" : "eager"} // Lazy load for second row
                  />
                </div>
                <div className="px-4 pb-4">
                  <h2 className="text-2xl font-bold text-center">{member.name}</h2>
                  <p className="text-center text-gray-500 pt-3">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TEAM;