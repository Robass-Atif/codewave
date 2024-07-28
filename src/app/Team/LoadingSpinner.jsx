// components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 rounded-md">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
