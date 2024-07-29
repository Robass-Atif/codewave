// components/TEAM.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TEAM: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState({
    robass: true,
    wordpress: true,
    app: true,
    web: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingStates({
        robass: false,
        wordpress: false,
        app: false,
        web: false,
      });
    }, 3000); // Simulating image loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <SkeletonTheme baseColor="#ccc" highlightColor="#eaeaea">
      <div>
        <div className="pt-35 mt-7 xl:pt-4">
          <div className="bg-indigo-600 pb-20">
            <div className="text-white text-center pt-20">
              <h1 className="text-4xl font-bold">Our Team</h1>
            </div>
            {/* Cards of services */}
            {/* First row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10">
              <div className="bg-white shadow-md rounded-md">
                <div className="flex justify-center relative">
                  {loadingStates.robass ? (
                    <Skeleton height={220} width={240} />
                    
                  ) : (
                    <Image
                      src="/robass1.png"
                      width={240}
                      height={100}
                      alt="Robass Atif"
                      className="my-4"
                    />
                  )}
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">
                    {loadingStates.robass ? <Skeleton width={150} /> : 'ROBASS ATIF'}
                  </h1>
                  <p className="text-center text-gray-500 pt-3">
                    {loadingStates.robass ? (
                      <Skeleton count={2} />
                    ) : (
                      'Full Stack Developer'
                    )}
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-md">
                <div className="flex justify-center relative">
                  {loadingStates.wordpress ? (
                    <Skeleton height={220} width={240} />
                  ) : (
                    <Image
                      src="/abdullah1.png"
                      width={240}
                      height={100}
                      alt="Abdullah"
                      className="my-4"
                    />
                  )}
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">
                    {loadingStates.wordpress ? <Skeleton width={150} /> : 'MUHAMMAD ABDULLAH'}
                  </h1>
                  <p className="text-center text-gray-500 pt-3">
                    {loadingStates.wordpress ? (
                      <Skeleton count={2} />
                    ) : (
                      'MERN Stack Developer'
                    )}
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-md">
                <div className="flex justify-center relative">
                  {loadingStates.app ? (
                    <Skeleton height={220} width={240} />
                  ) : (
                    <Image
                      src="/ahmad1.png"
                      width={240}
                      height={100}
                      alt="Ahmad"
                      className="my-4"
                    />
                  )}
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">
                    {loadingStates.app ? <Skeleton width={150} /> : 'MUHAMMAD AHMAD'}
                  </h1>
                  <p className="text-center text-gray-500 pt-3">
                    {loadingStates.app ? (
                      <Skeleton count={2} />
                    ) : (
                      'Project Manager'
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* Second row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10">
              <div className="bg-white shadow-md rounded-md">
                <div className="flex justify-center relative">
                  {loadingStates.web ? (
                    <Skeleton height={220} width={240}  />
                  ) : (
                    <Image
                      src="/Saad1.png"
                      width={240}
                      height={100}
                      alt="Web Development"
                      className='my-4'
                    />
                  )}
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">
                    {loadingStates.web ? <Skeleton width={150} /> : 'MUHAMMAD SAAD AKMAL'}
                  </h1>
                  <p className="text-center text-gray-500 pt-3">
                    {loadingStates.web ? (
                      <Skeleton count={2} />
                    ) : (
                      'Software Engineer'
                    )}
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-md">
                <div className="flex justify-center relative">
                  {loadingStates.wordpress ? (
                    <Skeleton height={220} width={240} />
                  ) : (
                    <Image
                      src="/ashhad1.png"
                      width={250}
                      height={110}
                      alt="Ashhad Mazhar"
                      className="my-3"
                    />
                  )}
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">
                    {loadingStates.wordpress ? <Skeleton width={150} /> : 'ASHHAD MAZHAR'}
                  </h1>
                  <p className="text-center text-gray-500 pt-3">
                    {loadingStates.wordpress ? (
                      <Skeleton count={2} />
                    ) : (
                      'Cybersecurity Expert'
                    )}
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-md">
                <div className="flex justify-center relative">
                  {loadingStates.app ? (
                    <Skeleton height={220} width={240} />
                  ) : (
                    <Image
                      src="/tayyab5.png"
                      width={240}
                      height={100}
                      alt="Tayyab"
                      className='my-4'
                      
                    />
                  )}
                </div>
                <div className="px-4 pb-4">
                  <h1 className="text-2xl font-bold text-center">
                    {loadingStates.app ? <Skeleton width={150} /> : 'TAYYAB ASHRAF'}
                  </h1>
                  <p className="text-center text-gray-500 pt-3">
                    {loadingStates.app ? (
                      <Skeleton count={2} />
                    ) : (
                      'Technical Recruiter'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default TEAM;
