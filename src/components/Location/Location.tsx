import React from "react";
import styles from "./location.module.scss";

import locationImg from "../../assets/img/Location/Location-01.PNG";

const Location: React.FC = () => {
  return (
    <section id="location" className={styles.location}>
      {/* Location Section */}
      <div className={styles["location-section"]}>
        <div className={styles["location-container"]}>
          <div className={styles["location-image-container"]}>
            <img src={locationImg} alt="Leo-Lov Location" className={styles["location-image"]} />
          </div>

          <div className={styles["location-text-container"]}>
            <div className={styles["location-text"]}>
              <h2>FIND OS HER</h2>
              <p>
                Leo-lov holder til i hjertet af byen, hvor retfærdigheden lever og ånder. Vores kontorer er strategisk placeret for nem adgang til domstolene.
                <br />
                <br />
                Kom forbi og oplev vores professionelle miljø, hvor vi hver dag kæmper for vores klienters rettigheder med passion og dedikation.
              </p>
              <div className={styles["location-details"]}>
                <p>
                  <strong>Adresse:</strong> Retslig Gade 42, 1234 København
                </p>
                <p>
                  <strong>Telefon:</strong> +45 12 34 56 78
                </p>
                <p>
                  <strong>Email:</strong> kontakt@leo-lov.dk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
