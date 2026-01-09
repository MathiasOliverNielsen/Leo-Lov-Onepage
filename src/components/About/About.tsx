import React from "react";
import styles from "./about.module.scss";

import aboutImg1 from "../../assets/img/img1.jpg";
import aboutImg2 from "../../assets/img/img2.jpg";

// Simple reusable AboutSection component
interface AboutSectionProps {
  image: string;
  title: string;
  text: string;
  reverse?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ image, title, text, reverse = false }) => (
  <div className={styles["about-section"]}>
    <div className={`${styles["about-container"]} ${reverse ? styles.reverse : ""}`}>
      <img src={image} alt={title} className={styles["about-image"]} />
      <div className={styles["about-text"]}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <AboutSection
        image={aboutImg2}
        title="INTET PROBLEM"
        text="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle opleve at støde på et retsligt problem som Leo-lov ikke kan løse, får du halvdelen af beløbet igen."
      />

      <AboutSection
        image={aboutImg1}
        title="EVIG GARANTI"
        text="Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!"
        reverse
      />
    </section>
  );
};

export default About;
