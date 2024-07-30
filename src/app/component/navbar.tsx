"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Nav = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/Service" },
    { name: "TEAM", link: "/Team" },
    { name: "CAREER", link: "/Career" },
  ];

  let [open, setOpen] = useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.noModule = true;
    script2.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50 bg-white'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <ion-icon name="business"></ion-icon>
          </span>

          <div className="font-extrabold ">
            <h1 className=" md:text-3xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
              CodeWaves
            </h1>
          </div>






        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-lg md:my-0 my-7'>
              <Link href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Nav;
