import React from "react";
import styles from "./about.module.scss";

import aboutImg1 from "../../assets/img/img1.jpg";
import aboutImg2 from "../../assets/img/img2.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      {/* Section 1 */}
      <div className={styles["about-section"]}>
        <div className={styles["about-container"]}>
          <img src={aboutImg2} alt="About Leo-Lov" className={styles["about-image"]} />

          <div className={styles["about-text"]}>
            <h2>INTET PROBLEM</h2>
            <p>
              Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge.
              <br />
              <br />
              Hvis du mod alt forventning skulle opleve at støde på et retsligt problem som Leo-lov ikke kan løse, får du halvdelen af beløbet igen.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className={styles["about-section"]}>
        <div className={`${styles["about-container"]} ${styles.reverse}`}>
          <div className={styles["about-text"]}>
            <h2>EVIG GARANTI</h2>
            <p>
              Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge.
              <br />
              <br />
              Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!
            </p>
          </div>

          <img src={aboutImg1} alt="Guarantee" className={styles["about-image"]} />
        </div>
      </div>
    </section>
  );
};

export default About;
