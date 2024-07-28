// components/SERVICE.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Loader from './Loader';
import classNames from 'classnames';

function SERVICE() {
  const [loadingStates, setLoadingStates] = useState({
    web: true,
    wordpress: true,
    app: true,
    dataAnalytics: true,
    cybersecurity: true,
    ai: true,
  });

  const handleImageLoad = (imageKey:any) => {
    setLoadingStates((prevStates) => ({
      ...prevStates,
      [imageKey]: false,
    }));
  };

  return (
    <div>
      <div className='pt-25 mt-4'>
        <div className='bg-indigo-600 pb-20'>
          <div className='text-white text-center pt-20'>
            <h1 className='text-4xl font-bold'>Our Services</h1>
          </div>
          {/* Cards of services */}
          {/* First row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10'>
            <div className='bg-white shadow-md rounded-md relative'>
              {loadingStates.web && <Loader />}
              <div className=''>
                <div className='flex justify-center relative'>
                  <Image
                    src="/Web.png"
                    width={240}
                    height={100}
                    alt='Web Development'
                    className={classNames({ 'opacity-0': loadingStates.web })}
                    onLoadingComplete={() => handleImageLoad('web')}
                  />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>Web Development</h1>
                  <p className='text-center text-gray-500 pt-3'>Build responsive and scalable websites tailored to your needs.</p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-md rounded-md relative'>
              {loadingStates.wordpress && <Loader />}
              <div className=''>
                <div className='flex justify-center relative'>
                  <Image
                    src="/Wordpress.png"
                    width={240}
                    height={100}
                    alt='WordPress Development'
                    className={classNames({ 'opacity-0': loadingStates.wordpress })}
                    onLoadingComplete={() => handleImageLoad('wordpress')}
                  />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>WordPress Development</h1>
                  <p className='text-center text-gray-500 pt-3'>Create and manage dynamic websites with ease using WordPress.</p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-md rounded-md relative'>
              {loadingStates.app && <Loader />}
              <div className=''>
                <div className='flex justify-center relative'>
                  <Image
                    src="/app.jpg"
                    width={240}
                    height={100}
                    alt='App Development'
                    className={classNames({ 'opacity-0': loadingStates.app })}
                    onLoadingComplete={() => handleImageLoad('app')}
                  />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>App Development</h1>
                  <p className='text-center text-gray-500 pt-3'>Design and develop custom applications for mobile and web platforms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10'>
            <div className='bg-white shadow-md rounded-md relative'>
              {loadingStates.dataAnalytics && <Loader />}
              <div className=''>
                <div className='flex justify-center relative'>
                  <Image
                    src="/DataScience.png"
                    width={300}
                    height={100}
                    alt='Data Analytics'
                    className={classNames({ 'opacity-0': loadingStates.dataAnalytics })}
                    onLoadingComplete={() => handleImageLoad('dataAnalytics')}
                  />
                </div>
                <div className='p-4 '>
                  <h1 className='text-2xl font-bold text-center'>Data Analytics</h1>
                  <p className='text-center text-gray-500 pt-3'>Transform data into actionable insights for strategic decision-making</p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-md rounded-md relative'>
              {loadingStates.cybersecurity && <Loader />}
              <div className=''>
                <div className='flex justify-center relative'>
                  <Image
                    src="/Cybersecurity.png"
                    width={300}
                    height={100}
                    alt='Cybersecurity'
                    className={classNames({ 'opacity-0': loadingStates.cybersecurity })}
                    onLoadingComplete={() => handleImageLoad('cybersecurity')}
                  />
                </div>
                <div className='p-4'>
                  <h1 className='text-2xl font-bold text-center'>Cybersecurity</h1>
                  <p className='text-center text-gray-500 pt-3'>Protect your digital assets with comprehensive security solutions</p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-md rounded-md relative'>
              {loadingStates.ai && <Loader />}
              <div className=''>
                <div className='flex justify-center relative'>
                  <Image
                    src="/AI.png"
                    width={300}
                    height={100}
                    alt='Artificial Intelligence'
                    className={classNames({ 'opacity-0': loadingStates.ai })}
                    onLoadingComplete={() => handleImageLoad('ai')}
                  />
                </div>
                <div className='p-4'>
                  <h1 className='text-2xl font-bold text-center'>Artificial Intelligence</h1>
                  <p className='text-center text-gray-500 pt-3'>Leverage artificial intelligence to enhance your business processes and decision-making</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SERVICE;
