import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import   Navbar  from   './component/navbar'
import   Footer  from   './component/footerW'
import Whatsapp from "./component/whatsapp";

import FooterW from "./component/footerW";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeWaves",
  description: "CodeWaves is a web development company that provides web development services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        
        
        <script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </Head>

     




       
      <body className={inter.className}>
       
      <Whatsapp/>
      <Navbar/>
        {children}
        
        <FooterW />
        </body>
        
    
    </html>
  );
}
