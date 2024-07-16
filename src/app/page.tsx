import Image from "next/image";
import { useEffect } from "react";
import   Navbar  from   './componet/navbar'
import   HeroSection  from   './componet/HeroSection'
import LowHero from "./componet/lowHero";

export default function Home() {
  return (
    <>
        <Navbar />  
        <HeroSection />
        <LowHero />

    </>
      );
}
