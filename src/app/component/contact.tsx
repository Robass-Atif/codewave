// src/components/CommentForm.tsx
"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Ring } from "react-css-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Page-specific metadata for SEO (if used as a standalone page)
export const metadata = {
  title: "Contact Us - CodeWaves",
  description: "Get in touch with CodeWaves for web development, cybersecurity, AI, and more. Submit your inquiry today!",
  keywords: "CodeWaves contact, web development inquiry, cybersecurity support, AI consultation",
  openGraph: {
    title: "Contact Us - CodeWaves",
    description: "Reach out to CodeWaves for expert web development, cybersecurity, and AI services.",
    url: "https://codewaves.vercel.app/contact",
    siteName: "CodeWaves",
    images: [
      {
        url: "https://codewaves.vercel.app/images/og-image-contact.jpg", // Adjust path to your actual OG image
        width: 1200,
        height: 630,
        alt: "CodeWaves Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - CodeWaves",
    description: "Submit your inquiry to CodeWaves for top-tier web development and digital solutions.",
    images: ["https://codewaves.vercel.app/images/twitter-image-contact.jpg"], // Adjust path to your actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
  },
};

const CommentForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const templateParams = {
    from_name: name,
    from_email: email,
    message: comment,
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email via EmailJS
      await emailjs.send(
        "service_pcimnyt",
        "template_mfnpm8o",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Use environment variable
      );

      // Send data to API
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, comment }),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setName("");
      setEmail("");
      setComment("");
      toast.success("Message sent successfully!", {
        position: "bottom-left",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-left",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "CodeWaves Contact",
            description: "Get in touch with CodeWaves for web development, cybersecurity, AI, and more.",
            url: "https://codewaves.vercel.app/contact",
            publisher: {
              "@type": "Organization",
              name: "CodeWaves",
              logo: {
                "@type": "ImageObject",
                url: "https://codewaves.vercel.app/images/logo.png", // Adjust path to your actual logo
              },
            },
            potentialAction: {
              "@type": "CommunicateAction",
              name: "Contact CodeWaves",
              target: "https://codewaves.vercel.app/contact",
            },
          }),
        }}
      />
      <form
        className="bg-blue-600 min-h-screen flex justify-center items-center py-12"
        onSubmit={sendEmail}
        aria-busy={loading}
      >
        <div className="card bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Contact CodeWaves
          </h2>
          <div className="form">
            <div className="group mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                aria-required="true"
              />
            </div>
            <div className="group mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                aria-required="true"
              />
            </div>
            <div className="group mb-6">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Your Message"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="p-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                rows={4}
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg py-2.5 px-5 w-full flex items-center justify-center transition-all duration-300"
              disabled={loading}
              aria-label={loading ? "Submitting form" : "Submit form"}
            >
              {loading ? <Ring color="#ECE8EA" size={20} thickness={7} /> : "Submit"}
            </button>
          </div>
          <ToastContainer />
        </div>
      </form>
    </section>
  );
};

export default CommentForm;