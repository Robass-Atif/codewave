import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center space-x-2">
          <a
            href="https://www.facebook.com/profile.php?id=61562765675071"
            target='_blank'
            type="button"
            className="rounded-full bg-[#3b5998] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </a>

          <a
            href="https://youtube.com/@codewave-ne6zp?si=2zycmTSqGlIkBY3v"
            target='_blank'
            type="button"
            className="rounded-full bg-[#FF0000] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M23.498 6.186a2.992 2.992 0 0 0-2.1-2.1C18.137 4.5 12 4.5 12 4.5s-6.137 0-9.398.586a2.992 2.992 0 0 0-2.1 2.1C.01 8.558 0 12 0 12s.01 3.442.502 5.814a2.992 2.992 0 0 0 2.1 2.1C5.863 19.5 12 19.5 12 19.5s6.137 0 9.398-.586a2.992 2.992 0 0 0 2.1-2.1C23.99 15.442 24 12 24 12s-.01-3.442-.502-5.814zM9.546 15.548V8.452l6.691 3.548-6.691 3.548z" />
              </svg>
            </span>
          </a>


          <a
            href="mailto:codewaveinstitute@gmail.com"

            type="button"
            className="rounded-full bg-[#dd4b39] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 488 512">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
            </span>
          </a>


          <a
            href="https://www.instagram.com/codewaveinstitute/"
            target='_blank'
            type="button"
            className="rounded-full bg-[#ac2bac] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/company/codewavesco/"
            target='_blank'
            type="button"
            className="rounded-full bg-[#0082ca] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.14-372a53.68 53.68 0 1 1 53.68 53.68A53.67 53.67 0 0 1 54.14 76zm394.26 372h-92.68V312.36c0-32.38-11.6-54.54-40.54-54.54-22.1 0-35.25 14.87-41.05 29.22-2.12 5.15-2.65 12.36-2.65 19.57V448h-92.68s1.23-233.86 0-258.1h92.68v36.61a94 94 0 0 1 83.38-46.14c60.82 0 106.41 39.73 106.41 125.17z" />
              </svg>
            </span>
          </a>


          

        </div>
      </div>

      <div className="bg-zinc-200 p-4 w-full text-center dark:bg-neutral-700">
        © 2024 Copyright: CodeWaves

      </div>
    </footer >
  );
};

export default Footer;
