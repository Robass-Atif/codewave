// src/components/FooterW.tsx
import React from "react";

const FooterW: React.FC = () => {
  return (
    <footer className="bg-zinc-100 text-center text-gray-700 dark:bg-neutral-700 dark:text-white">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CodeWaves",
            url: "https://codewaves.vercel.app",
            logo: "https://codewaves.vercel.app/images/logo.png", // Adjust path to your actual logo
            sameAs: [
              "https://www.facebook.com/profile.php?id=61562765675071",
              "https://youtube.com/@codewave-ne6zp",
              "https://www.instagram.com/codewavesco/",
              "https://www.linkedin.com/company/codewavesinstitute/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "codewaveinstitute@gmail.com",
              contactType: "Customer Service",
            },
          }),
        }}
      />
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=61562765675071"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#3b5998] p-3 text-white transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
            aria-label="Follow CodeWaves on Facebook"
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
                aria-hidden="true"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </a>
          <a
            href="https://youtube.com/@codewave-ne6zp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FF0000] p-3 text-white transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
            aria-label="Subscribe to CodeWaves on YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a2.992 2.992 0 0 0-2.1-2.1C18.137 4.5 12 4.5 12 4.5s-6.137 0-9.398.586a2.992 2.992 0 0 0-2.1 2.1C.01 8.558 0 12 0 12s.01 3.442.502 5.814a2.992 2.992 0 0 0 2.1 2.1C5.863 19.5 12 19.5 12 19.5s6.137 0 9.398-.586a2.992 2.992 0 0 0 2.1-2.1C23.99 15.442 24 12 24 12s-.01-3.442-.502-5.814zM9.546 15.548V8.452l6.691 3.548-6.691 3.548z" />
            </svg>
          </a>
          <a
            href="/contact"
            className="rounded-full bg-[#dd4b39] p-3 text-white transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
            aria-label="Contact CodeWaves via email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M0 4v16h24V4H0zm22 2v12H2V6h20zm-10 9l-7-5V8l7 5 7-5v2l-7 5z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/codewavesco/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#ac2bac] p-3 text-white transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
            aria-label="Follow CodeWaves on Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/codewavesinstitute/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#0082ca] p-3 text-white transition duration-150 ease-in-out hover:shadow-md focus:outline-none"
            aria-label="Connect with CodeWaves on LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.14-372a53.68 53.68 0 1 1 53.68 53.68A53.67 53.67 0 0 1 54.14 76zm394.26 372h-92.68V312.36c0-32.38-11.6-54.54-40.54-54.54-22.1 0-35.25 14.87-41.05 29.22-2.12 5.15-2.65 12.36-2.65 19.57V448h-92.68s1.23-233.86 0-258.1h92.68v36.61a94 94 0 0 1 83.38-46.14c60.82 0 106.41 39.73 106.41 125.17z" />
            </svg>
          </a>
        </div>
        <div className="mb-6">
          <nav className="flex justify-center space-x-4 text-sm">
            <a href="/services" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Services
            </a>
            <a href="/team" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Team
            </a>
            <a href="/careers" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Careers
            </a>
            <a href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
      <div className="bg-zinc-200 p-4 w-full text-center dark:bg-neutral-700">
        © 2025 Copyright: <a href="https://codewaves.vercel.app" className="hover:text-indigo-600 dark:hover:text-indigo-400">CodeWaves</a>
      </div>
    </footer>
  );
};

export default FooterW;