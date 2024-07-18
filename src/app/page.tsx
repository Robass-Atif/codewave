import Image from "next/image";
import { useEffect } from "react";
import   Navbar  from   './component/navbar'
import   HeroSection  from   './component/HeroSection'
import LowHero from "./component/lowHero";
import FooterW from "./component/footerW";
import Contact from './component/contact';



export default function Home() {
  return (
    <>
    
        <HeroSection />
        <LowHero />
        <Contact />
        

    </>
      );
}
