import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Correct import for Next.js Head
import "./globals.css";
import Navbar from "./component/navbar";
import FooterW from "./component/footerW"; // Removed duplicate import
import Whatsapp from "./component/whatsapp";
import Scroll from "./component/scrollUp";
import Preloader from "./Preloader";

const inter = Inter({ subsets: ["latin"] });

// Enhanced metadata for SEO
export const metadata: Metadata = {
  title: "CodeWaves - Web Development Services",
  description: "CodeWaves is a leading web development company offering innovative and customized web development services to elevate your online presence.",
  keywords: "web development, CodeWaves, web design, custom websites, software development",
  openGraph: {
    title: "CodeWaves - Web Development Services",
    description: "Discover top-tier web development services with CodeWaves. We build responsive, high-performance websites tailored to your needs.",
    url: "https://www.codewaves.com", // Replace with your actual domain
    siteName: "CodeWaves",
    images: [
      {
        url: "https://www.codewaves.com/og-image.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "CodeWaves Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeWaves - Web Development Services",
    description: "Innovative web development services by CodeWaves to boost your online presence.",
    images: ["https://codewaves.vercel.app/twitter-image.jpg"], // Replace with your Twitter image
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Preconnect to improve script loading performance */}
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        {/* Async script loading for Ionicons */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          async
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          async
        />
        {/* Favicon for better branding */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        {/* Preloader should not block content; ensure it’s non-blocking */}
        <Preloader />
        <Scroll />
        <Whatsapp />
        <Navbar />
        <main>{children}</main> {/* Added main tag for semantic HTML */}
        <FooterW />
      </body>
    </html>
  );
}