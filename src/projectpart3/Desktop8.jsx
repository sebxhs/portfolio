"use client";
import React from "react";
import styles from "./Desktop8.module.css";
import PaperWireframesSection from "./PaperWireframesSection";
import WireframesPrototypeSection from "./WireframesPrototypeSection";
import HighFidelityPrototypeSection from "./HighFidelityPrototypeSection";
import ConclusionSection from "./ConclusionSection";

function Desktop8() {
  return (
    <main className={styles.desktop8}>
      <div className={styles.div}>
        <div className={styles.div2}>
          <PaperWireframesSection />
          <hr className={styles.div10} />
          <WireframesPrototypeSection />
          <hr className={styles.div12} />
          <HighFidelityPrototypeSection />
          <hr className={styles.div14} />
          <ConclusionSection />
          <hr className={styles.div15} />
        </div>
      </div>
    </main>
  );
}

export default Desktop8;
