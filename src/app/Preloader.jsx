// src/component/Preloader.tsx
import React from "react";
import { Ripple } from "react-css-spinners";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div
      className={styles.preloader}
      role="status"
      aria-busy="true"
      aria-label="Loading CodeWaves website"
    >
      <Ripple color="rgba(106,130,211,1)" size={125} thickness={7} />
    </div>
  );
};

export default Preloader;