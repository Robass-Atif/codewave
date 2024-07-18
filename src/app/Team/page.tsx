import React from 'react'
import Image from 'next/image'

function TEAM() {
  return (
    <div className=''>


      <div className='pt-35 mt-7' >
        <div className='bg-indigo-600 pb-20'>
          <div className='text-white text-center pt-20'>
            <h1 className='text-4xl font-bold'>Our Team</h1>

          </div>
          {/* cards of services */}
          {/* first row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10'>
            <div className='bg-white shadow-md rounded-md'>
              <div className='p-10'>
                <div className='flex justify-center'>
                  <Image src={"/Robass.jpeg"} width={340} height={100} alt='development' />
                </div>
                <div className='p-4'>
                  <h1 className='text-2xl font-bold text-center'>Web Development</h1>
                  <p className='text-center text-gray-500 pt-3'>We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>
                  <img src={"/Wordpress.png"} alt='development' />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>WordPress Development</h1>
                  <p className='text-center text-gray-500 pt-3'>We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>
                  <img src={"/app.jpg"} alt='development' />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>App Development</h1>
                  <p className='text-center text-gray-500 pt-3'>We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:px-20 px-5 pt-10'>
            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>
                  <img src={"/Web.png"} alt='development' />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>Web Development</h1>
                  <p className='text-center text-gray-500 pt-3'>We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>
                  <img src={"/Wordpress.png"} alt='development' />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>WordPress Development</h1>
                  <p className='text-center text-gray-500 pt-3'>We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>
            <div className='bg-white shadow-md rounded-md'>
              <div className=''>
                <div className='flex justify-center'>
                  <img src={"/app.jpg"} alt='development' />
                </div>
                <div className='px-4 pb-4'>
                  <h1 className='text-2xl font-bold text-center'>App Development</h1>
                  <p className='text-center text-gray-500 pt-3'>We provide web development services for your business to grow online.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}

export default TEAM
