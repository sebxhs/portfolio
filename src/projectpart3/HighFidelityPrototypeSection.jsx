import React from "react";
import styles from "./Desktop8.module.css";

function HighFidelityPrototypeSection() {
  return (
    <>
      <h2 className={styles.highFidelityPrototype}>High-Fidelity Prototype</h2>
      <section className={styles.div13}>
      <iframe
  style={{ 
    width: "100%", 
    border: "1px solid black" 
  }}
  height="750"
  src="https://embed.figma.com/proto/oWbgonpiBSa9fJovWrWidy/Exclusive-Sneakers-App?node-id=245-543&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=245%3A539&show-proto-sidebar=1&embed-host=share"
  allowFullScreen
  title="Figma Prototype"
/>
      </section>
    </>
  );
}


export default HighFidelityPrototypeSection;
