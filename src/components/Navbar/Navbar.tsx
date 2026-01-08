import React, { useEffect } from "react";
import "./Navbar.Module.scss";

const Navbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
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
    <nav className="navbar">
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
        <div className="navbar-logo">
          <span className="logo-leo">Leo</span>
          <span className="logo-lov">-Lov</span>
        </div>
      </div>
      <div className="navbar-accent"></div>
    </nav>
  );
};

export default Navbar;
