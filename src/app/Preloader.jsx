// src/component/Preloader.js
"use client";
import React, { useEffect, useState } from 'react';
import { Ripple } from 'react-css-spinners';
import styles from './Preloader.module.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1); // Adjust the delay time as needed (in milliseconds)
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.preloader}>
      <Ripple color="rgba(236,216,234,1)" size={119} thickness={7} />
    </div>
  );
};

export default Preloader;
