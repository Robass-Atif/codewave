// components/SERVICE.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface LoadingStates {
  web: boolean;
  wordpress: boolean;
  app: boolean;
  dataAnalytics: boolean;
  cybersecurity: boolean;
  ai: boolean;
}

function SERVICE() {
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    web: true,
    wordpress: true,
    app: true,
    dataAnalytics: true,
    cybersecurity: true,
    ai: true,
  });

  // Simulate image loading delay for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingStates({
        web: false,
        wordpress: false,
        app: false,
        dataAnalytics: false,
        cybersecurity: false,
        ai: false,
      });
    }, 3000); // Change this duration as per your requirement

    return () => clearTimeout(timer);
  }, []);

  const renderCard = (key: keyof LoadingStates, title: string, description: string, imgSrc: string) => (
    <div className='bg-white  rounded-md'>
      <div className='flex justify-center relative'>
        {loadingStates[key] ? (
          <Skeleton height={220} width={240} />
        ) : (
          <Image
            src={imgSrc}
            width={240}
            height={100}
            alt={title}
          />
        )}
      </div>
      <div className='px-4 pb-4'>
        <h1 className='text-2xl font-bold text-center'>
          {loadingStates[key] ? <Skeleton width={150} /> : title}
        </h1>
        <p className='text-center text-gray-500 pt-3'>
          {loadingStates[key] ? (
            <Skeleton count={2} />
          ) : (
            description
          )}
        </p>
      </div>
    </div>
  );

  return (
    <SkeletonTheme baseColor="#ccc" highlightColor="#eaeaea">
      <div>
        <div className='pt-25 mt-4'>
          <div className='bg-indigo-600 pb-20'>
            <div className='text-white text-center pt-20'>
              <h1 className='text-4xl font-bold'>Our Services</h1>
            </div>
            {/* Cards of services */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10'>
              {renderCard('web', 'Web Development', 'Build responsive and scalable websites tailored to your needs.', '/Web.png')}
              {renderCard('wordpress', 'WordPress Development', 'Create custom WordPress themes and plugins for your website.', '/Wordpress.png')}
              {renderCard('app', 'App Development', 'Develop mobile apps for iOS and Android platforms.', '/app.jpg')}
              {renderCard('dataAnalytics', 'Data Analytics', 'Analyze your data to gain insights and drive decision-making.', '/DataScience.png')}
              {renderCard('cybersecurity', 'Cybersecurity', 'Protect your systems and data with our cybersecurity solutions.', '/Cybersecurity.png')}
              {renderCard('ai', 'Artificial Intelligence', 'Implement AI solutions to automate and enhance your business processes.', '/AI.png')}
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default SERVICE;
