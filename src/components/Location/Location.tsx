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
              <h2>HER BOR VI</h2>
              <p>
                Vi har valgt at bosætte os i sølen!
                <br />
                <br />
                Her er dejlig varmt og ikke ret mange fattige mennesker. Det nyder vi rigtig meget.
                <br />
                <br />
                "Hvis du har råd til at tage til Seychellerne har du råd til os". Det er et af vores utallige motto'er.
              </p>
              <div className={styles["location-details"]}>
                <p>
                  <strong>Leo-Lov ApS</strong>
                </p>
                <p>Maldive rd. 22</p>
                <p>Seychelles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
