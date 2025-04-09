"use client";
import React from "react";
import styles from "./Desktop8.module.css";
import NavigationButtons from "./NavigationButtons";

function ConclusionSection() {
  return (
    <>
      <h2 className={styles.conclusionNextSteps}>Conclusion & Next Steps</h2>

      <section className={styles.div16}>
        <div className={styles.div17}></div>
        <article
          className={
            styles.thedesignandprototypeforExclusiveKickseffectivelysupporttheusersgoalofeasilyfindingandpurchasinglimitedEditionsneakersondropdayByincorporatinganintuitivesearchexperienceafastandsecurecheckoutprocessandpersonalizednotificationstheappenhancesthesneakerShoppingjourneyforbothdedicatedcollectorsandcasualbuyersKeyUXandUIdecisionswerefocusedonminimizinguseranxietyaboutmissingdropswhilestreamliningthepurchasingprocessforexclusivereleasesInsightsgatheredfromusertestingplayedacrucialroleinrefiningthedesignensuringauserCenteredexperiencethatmeetstheexpectationsofthetargetaudience
          }
        >
          The design and prototype for Exclusive Kicks effectively support the
          user's goal of easily finding and purchasing limited-edition sneakers
          on drop day. By incorporating an intuitive search experience, a fast
          and secure checkout process, and personalized notifications, the app
          enhances the sneaker-shopping journey for both dedicated collectors
          and casual buyers.
          <br />
          <br />
          Key UX and UI decisions were focused on minimizing user anxiety about
          missing drops while streamlining the purchasing process for exclusive
          releases. Insights gathered from user testing played a crucial role in
          refining the design, ensuring a user-centered experience that meets
          the expectations of the target audience.
        </article>

        <NavigationButtons />
      </section>
    </>
  );
}

export default ConclusionSection;
