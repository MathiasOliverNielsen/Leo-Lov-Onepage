import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";

// Reusable Components
interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => <a onClick={onClick}>{children}</a>;

interface SeparatorProps {}

const Separator: React.FC<SeparatorProps> = () => <span className={styles.separator}>|</span>;

interface NavLogoProps {
  leo: string;
  lov: string;
}

const NavLogo: React.FC<NavLogoProps> = ({ leo, lov }) => (
  <div className={styles["navbar-logo"]}>
    <span className={styles["logo-leo"]}>{leo}</span>
    <span className={styles["logo-lov"]}>{lov}</span>
  </div>
);

interface NavLinksProps {
  scrollToSection: (sectionId: string) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ scrollToSection }) => (
  <div className={styles["navbar-links"]}>
    <NavLink onClick={() => scrollToSection("hero")}>Hjem</NavLink>
    <Separator />
    <NavLink onClick={() => scrollToSection("team")}>Advokaterne</NavLink>
    <Separator />
    <NavLink onClick={() => scrollToSection("about")}>Om LeoLov</NavLink>
    <Separator />
    <NavLink onClick={() => scrollToSection("contact")}>Kontakt</NavLink>
  </div>
);

// Main Navbar Component
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
        <NavLinks scrollToSection={scrollToSection} />
        <NavLogo leo="Leo" lov="-Lov" />
      </div>
      <div className={styles["navbar-accent"]}></div>
    </nav>
  );
};

export default Navbar;
