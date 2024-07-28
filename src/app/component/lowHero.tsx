
import Image from "next/image";
import { FC } from "react";

const LowHero: FC = () => {
  return (
    <>

      <section className="flex flex-col md:flex-row items-center justify-between bg-indigo-600 p-10 mt-20 min-h-[600px]">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl font-bold text-center xl:text-right sm:text-center text-white border-none pb-14">
            Our <span className="text-cyan-500">Cause</span>
          </h2>
          <p className="text-white text-2xl leading-loose">
            At CodeWaves, we are passionate about technology and dedicated to delivering high-quality IT services. Our team of experts has years of experience in web development, cybersecurity, and data analytics. We collaborate closely with our clients to provide customized solutions that drive their success.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/hero2.png" alt="Woman with laptop" className="w-full rounded-lg" />
        </div>
      </section>

    </>
  );
};

export default LowHero;
