import Image from "next/image";
import { useEffect } from "react";
import   Navbar  from   './componet/navbar'
import   HeroSection  from   './componet/HeroSection'
import LowHero from "./componet/lowHero";
import FooterW from "./componet/footerW";
import Contact from "./componet/contact";


export default function Home() {
  return (
    <>
        <Navbar /> 
        <HeroSection />
        <LowHero />
        <Contact />
        <FooterW />

    </>
      );
}
