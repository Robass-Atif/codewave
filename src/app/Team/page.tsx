// components/TEAM.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Loader from './LoadingSpinner';
import classNames from 'classnames';

const TEAM = () => {
  const [loadingStates, setLoadingStates] = useState({
    robass: true,
    wordpress: true,
    app: true,
    web: true,
  });

  const handleImageLoad = (imageKey:any) => {
    setLoadingStates((prevStates) => ({
      ...prevStates,
      [imageKey]: false,
    }));
  };

  return (
    <div>
      <div className="pt-35 mt-7">
        <div className="bg-indigo-600 pb-20">
          <div className="text-white text-center pt-20">
            <h1 className="text-4xl font-bold">Our Team</h1>
          </div>
          {/* Cards of services */}
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10">
            <div className="bg-white shadow-md rounded-md relative">
              {loadingStates.robass && <Loader />}
              <div className="p-10">
                <div className="flex justify-center relative">
                  <Image
                    src="/Robass.jpeg"
                    width={340}
                    height={100}
                    alt="Robass Atif"
                    className={classNames({ 'opacity-0': loadingStates.robass })}
                    onLoadingComplete={() => handleImageLoad('robass')}
                  />
                </div>
                <div className="p-4">
                  <h1 className="text-2xl font-bold text-center">ROBASS ATIF</h1>
                  <p className="text-center text-gray-500 pt-3">We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md relative">
              {loadingStates.wordpress && <Loader />}
              <div className="">
                <div className="flex justify-center relative">
                  <img
                    src="/Wordpress.png"
                    alt="WordPress Development"
                    className={classNames({ 'opacity-0': loadingStates.wordpress })}
                    onLoad={() => handleImageLoad('wordpress')}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">WordPress Development</h1>
                  <p className="text-center text-gray-500 pt-3">We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md relative">
              {loadingStates.app && <Loader />}
              <div className="">
                <div className="flex justify-center relative">
                  <img
                    src="/app.jpg"
                    alt="App Development"
                    className={classNames({ 'opacity-0': loadingStates.app })}
                    onLoad={() => handleImageLoad('app')}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">App Development</h1>
                  <p className="text-center text-gray-500 pt-3">We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10">
            <div className="bg-white shadow-md rounded-md relative">
              {loadingStates.web && <Loader />}
              <div className="">
                <div className="flex justify-center relative">
                  <img
                    src="/Web.png"
                    alt="Web Development"
                    className={classNames({ 'opacity-0': loadingStates.web })}
                    onLoad={() => handleImageLoad('web')}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">Web Development</h1>
                  <p className="text-center text-gray-500 pt-3">We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md relative">
              {loadingStates.wordpress && <Loader />}
              <div className="">
                <div className="flex justify-center relative">
                  <img
                    src="/Wordpress.png"
                    alt="WordPress Development"
                    className={classNames({ 'opacity-0': loadingStates.wordpress })}
                    onLoad={() => handleImageLoad('wordpress')}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">WordPress Development</h1>
                  <p className="text-center text-gray-500 pt-3">We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-md relative">
              {loadingStates.app && <Loader />}
              <div className="">
                <div className="flex justify-center relative">
                  <img
                    src="/app.jpg"
                    alt="App Development"
                    className={classNames({ 'opacity-0': loadingStates.app })}
                    onLoad={() => handleImageLoad('app')}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">App Development</h1>
                  <p className="text-center text-gray-500 pt-3">We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TEAM;
