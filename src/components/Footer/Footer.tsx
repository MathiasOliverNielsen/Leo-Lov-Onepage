import React from "react";
import Styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles["footer-container"]}>
        <div className={Styles["footer-column"]}>
          <h3 className={Styles["footer-title"]}>Adresse</h3>
          <div className={Styles["footer-content"]}>
            <p>Find os her:</p>
            <p>Maldive rd. 22,</p>
            <p>Seychelle Islands</p>
          </div>
        </div>

        <div className={Styles["footer-column"]}>
          <h3 className={Styles["footer-title"]}>Kontakt</h3>
          <div className={Styles["footer-content"]}>
            <p>Kontakt os her:</p>
            <p>email@mail.dk</p>
            <p>Tlf: 0192 3023</p>
          </div>
        </div>

        <div className={Styles["footer-column"]}>
          <h3 className={Styles["footer-title"]}>Politik</h3>
          <div className={Styles["footer-content"]}>
            <p>Vores politikker:</p>
            <p>Privatlivspolitk</p>
            <p>Cookiepolitik</p>
            <p>Generalle betingelse</p>
          </div>
        </div>

        <div className={Styles["footer-column"]}>
          <h3 className={Styles["footer-title"]}>Sociale medier</h3>
          <div className={Styles["footer-social"]}>
            <a href="#" className={Styles["social-icon"]} aria-label="Facebook">
              <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.5 40.1655C18.6766 40.1655 15.8808 39.6461 13.2723 38.6368C10.6638 37.6276 8.29366 36.1483 6.2972 34.2834C4.30074 32.4186 2.71707 30.2047 1.63659 27.7681C0.556114 25.3315 0 22.7201 0 20.0828C0 17.4455 0.556114 14.834 1.63659 12.3974C2.71707 9.96087 4.30074 7.74696 6.2972 5.8821C8.29366 4.01725 10.6638 2.53796 13.2723 1.52871C15.8808 0.519456 18.6766 -3.92989e-08 21.5 0C27.2022 7.93677e-08 32.6708 2.11586 36.7028 5.8821C40.7348 9.64835 43 14.7565 43 20.0828C43 25.409 40.7348 30.5172 36.7028 34.2834C32.6708 38.0497 27.2022 40.1655 21.5 40.1655ZM21.5 40.1655V17.2138C21.5 15.692 22.1472 14.2325 23.2992 13.1565C24.4512 12.0804 26.0137 11.4759 27.6429 11.4759H29.1786M13.8214 22.9517H29.1786"
                  stroke="white"
                />
              </svg>
            </a>
            <a href="#" className={Styles["social-icon"]} aria-label="LinkedIn">
              <svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.2857 15.7793V30.1241M30.7143 30.1241V22.9517C30.7143 21.4299 30.0671 19.9705 28.9151 18.8944C27.7631 17.8183 26.2006 17.2138 24.5714 17.2138C22.9422 17.2138 21.3798 17.8183 20.2278 18.8944C19.0758 19.9705 18.4286 21.4299 18.4286 22.9517V30.1241V15.7793M10.75 11.4759H13.8214M3.07143 0H39.9286C40.7432 0 41.5244 0.302265 42.1004 0.840301C42.6764 1.37834 43 2.10807 43 2.86897V37.2966C43 38.0575 42.6764 38.7872 42.1004 39.3252C41.5244 39.8633 40.7432 40.1655 39.9286 40.1655H3.07143C2.25684 40.1655 1.47561 39.8633 0.899601 39.3252C0.323596 38.7872 0 38.0575 0 37.2966V2.86897C0 2.10807 0.323596 1.37834 0.899601 0.840301C1.47561 0.302265 2.25684 0 3.07143 0Z"
                  stroke="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
