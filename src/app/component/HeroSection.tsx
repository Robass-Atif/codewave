import React from 'react';
import imageC from '..../public/guru.png'; // Correct path to your hero image
import Image from 'next/image';


function HeroSection() {
  return (

    <main className="container mx-auto px-4 py-2 flex flex-col lg:flex-row items-center mt-20 xl:mt-22 sm:mt-40 xl:pt-0 md:pt-0 pt-5">

      <div className="lg:w-1/2 mb-10 lg:mb-0 pr-10 xl:pl-5  border-l-4 border-indigo-600  pl-5">
        <div className="absolute inset-0 left-[-1px] top-0 bottom-0 border-l-4  "></div>
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900 ">
          Welcome to <span className=" md:text-4xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
            CodeWaves
          </span>

        </h1>
        <p className="text-xl text-gray-800 mb-8 leading-relaxed">
          We specialize in delivering top-notch web development, IT consulting, and innovative tech solutions tailored to your needs. Explore our services to see how we can help your business grow.
        </p>
      </div>




      <div className="lg:w-1/2">
        <img src={"/hero2.png"} alt="Woman with laptop" className="w-full rounded-lg p-5 " />
        {/* <Image
          src="/Home.png"
          width={736}
          height={500}
          alt="Web Development"
          className=" rounded-lg  pl-10"
         /> */}

      </div>
    </main>

  );
}

export default HeroSection;
