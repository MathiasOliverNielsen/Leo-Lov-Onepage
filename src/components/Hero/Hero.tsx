import styles from "./Hero.module.scss";
import img3 from "../../assets/img/img3.jpg";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles["hero-background"]}>
        <img src={img3} alt="Office background" className={styles["hero-image"]} />
      </div>
      <div className={styles["hero-content"]}>
        <h1 className={styles["hero-title"]}>
          <span className={styles["title-leo"]}>Leo</span>
          <span className={styles["title-lov"]}>-Lov</span>
        </h1>
        <p className={styles["hero-subtitle"]}>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
      </div>
    </section>
  );
};

export default Hero;
