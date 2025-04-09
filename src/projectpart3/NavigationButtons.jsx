"use client";
import React from "react";
import styles from "./Desktop8.module.css";

function NavigationButtons() {
  return (
    <>
      <button className={styles.div18}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f982464adc1f46d491b6571ac37a8eb2e477f900?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
          alt="Home icon"
          className={styles.img6}
        />
        <span className={styles.home}>Home</span>
      </button>

      <button className={styles.viewCaseStudy}>View Case Study</button>

      <button className={styles.div19}>
        <span className={styles.next}>Next</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfaa2ff3d94a32d5a127e7fc2adb2dd8d9ae032f?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
          alt="Next icon"
          className={styles.img7}
        />
      </button>

      <div className={styles.div20}></div>
    </>
  );
}

export default NavigationButtons;
