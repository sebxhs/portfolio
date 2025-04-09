import React from "react"; 
import styles from "./Desktop8.module.css";

function WireframesPrototypeSection() {
  return (
    <>
      <h2 className={styles.lowFidelityWireframesPrototype}>
        Low-Fidelity Wireframes + Prototype
      </h2>
      <section className={styles.div11}>
        <iframe
  style={{ 
    width: "100%", 
    border: "1px solid black" 
  }}
          height="750"
          src="https://embed.figma.com/design/oWbgonpiBSa9fJovWrWidy/Exclusive-Sneakers-App?node-id=0-1&embed-host=share"
          allowFullScreen
          title="Figma Prototype"
        ></iframe>
      </section>
    </>
  );
}

export default WireframesPrototypeSection;