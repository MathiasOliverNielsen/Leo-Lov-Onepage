import React, { useState, useEffect } from "react";
import "./navbar.module.scss";

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
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-links">
          <a onClick={() => scrollToSection("hero")}>Hjem</a>
          <span className="separator">|</span>
          <a onClick={() => scrollToSection("team")}>Advokaterne</a>
          <span className="separator">|</span>
          <a onClick={() => scrollToSection("about")}>Om LeoLov</a>
          <span className="separator">|</span>
          <a onClick={() => scrollToSection("contact")}>Kontakt</a>
        </div>
      </div>
      <div className="navbar-accent"></div>
    </nav>
  );
};

export default Navbar;
