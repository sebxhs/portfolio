import React from "react";
import styles from "./Desktop8.module.css";

function PaperWireframesSection() {
  return (
    <>
      <section className={styles.div3}>
        <h2 className={styles.paperWireframes}>Paper Wireframes</h2>
        <p
          className={
            styles.paperwireframesshowthescreensfromloadingscreentoorderconfirmedscreenshowcasingtheusersjourneyfromsigningintopurchasinganitem
          }
        >
          Paper wireframes show the screens from loading screen to order
          confirmed screenshowcasing the users journey from signing in to
          purchasing an item.
        </p>
      </section>

      <section className={styles.div4}>
        <div className={styles.div5}>
          <div className={styles.column}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd1487c8ba9376b9f5eada711a0fb7971f563141?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
              alt="Paper wireframe example"
              className={styles.img}
            />
          </div>
          <div className={styles.column2}>

              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfa5c74003da4bcb7e93fcce1ea4a7e63501e28b?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
                alt="Paper wireframe example"
                className={styles.img2}
              />

          </div>
        </div>
      </section>

      <section className={styles.div7}>
        <div className={styles.div8}>
          <div className={styles.column}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f190d0ee252e6d4e76b5910815a443605b454703?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
              alt="Paper wireframe example"
              className={styles.img}
            />
          </div>
          <div className={styles.column3}>
            <div className={styles.div9}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/998ffa281b06e89b5b4e16a7fbe0e35f409bc7f0?placeholderIfAbsent=true&apiKey=5099c9be96b742b8a19200c312540852"
                alt="Paper wireframe example"
                className={styles.img3}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaperWireframesSection;
