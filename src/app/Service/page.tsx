import React from 'react'
import Image from 'next/image'

function SERVICE() {
  return (
    <div>

      <div className='pt-25 mt-4'>
        <div className='bg-indigo-600 pb-20'>
          <div className='text-white text-center pt-20'>
            <h1 className='text-4xl font-bold '>Our Services</h1>

          </div>
          {/* cards of services */}
          {/* first row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10'>
            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>

                  <Image src={"/Web.png"} width={240} height={100} alt='development' />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>Web Development</h1>
                  <p className='text-center text-gray-500 pt-3'>Build responsive and scalable websites tailored to your needs.</p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>

                  <Image src={"/Wordpress.png"} width={240} height={100} alt='development' />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>WordPress Development</h1>
                  <p className='text-center text-gray-500 pt-3'>Create and manage dynamic websites with ease using WordPress.</p>
                </div>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>

                  <Image src={"/app.jpg"} width={240} height={100} alt='development' />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>App Development</h1>
                  <p className='text-center text-gray-500 pt-3'>Design and develop custom applications for mobile and web platforms.</p>
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10'>
            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>

                  <Image src={"/DataScience.png"} width={300} height={100} alt='development' />
                </div>
                <div className='p-4 '>
                  <h1 className='text-2xl font-bold text-center'>Data Analytics</h1>
                  <p className='text-center text-gray-500 pt-3'>Transform data into actionable insights for strategic decision-making</p>
                </div>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>

                  <Image src={"/Cybersecurity.png"} width={300} height={100} alt='development' />
                </div>
                <div className='p-4'>
                  <h1 className='text-2xl font-bold text-center'>Cybersecurity</h1>
                  <p className='text-center text-gray-500 pt-3'>Protect your digital assets with comprehensive security solutions</p>
                </div>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>

                  <Image src={"/AI.png"} width={300} height={100} alt='development' />
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
  )
}

export default SERVICE
