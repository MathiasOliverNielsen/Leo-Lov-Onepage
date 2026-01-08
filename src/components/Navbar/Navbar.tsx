import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 55; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles["navbar-container"]}>
        <div className={styles["navbar-links"]}>
          <a onClick={() => scrollToSection("hero")}>Hjem</a>
          <span className={styles.separator}>|</span>
          <a onClick={() => scrollToSection("team")}>Advokaterne</a>
          <span className={styles.separator}>|</span>
          <a onClick={() => scrollToSection("about")}>Om LeoLov</a>
          <span className={styles.separator}>|</span>
          <a onClick={() => scrollToSection("contact")}>Kontakt</a>
        </div>
        <div className={styles["navbar-logo"]}>
          <span className={styles["logo-leo"]}>Leo</span>
          <span className={styles["logo-lov"]}>-Lov</span>
        </div>
      </div>
      <div className={styles["navbar-accent"]}></div>
    </nav>
  );
};

export default Navbar;
