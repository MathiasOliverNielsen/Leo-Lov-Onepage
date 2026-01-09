import React from "react";
import styles from "./location.module.scss";

import locationImg from "../../assets/img/Location/Location-01.PNG";

// Reusable Components
interface LocationSectionProps {
  children: React.ReactNode;
}

const LocationSection: React.FC<LocationSectionProps> = ({ children }) => <div className={styles["location-section"]}>{children}</div>;

interface LocationContainerProps {
  children: React.ReactNode;
}

const LocationContainer: React.FC<LocationContainerProps> = ({ children }) => <div className={styles["location-container"]}>{children}</div>;

interface LocationImageProps {
  src: string;
  alt: string;
}

const LocationImage: React.FC<LocationImageProps> = ({ src, alt }) => (
  <div className={styles["location-image-container"]}>
    <img src={src} alt={alt} className={styles["location-image"]} />
  </div>
);

interface LocationContentProps {
  children: React.ReactNode;
}

const LocationContent: React.FC<LocationContentProps> = ({ children }) => (
  <div className={styles["location-text-container"]}>
    <div className={styles["location-text"]}>{children}</div>
  </div>
);

interface LocationDetailsProps {
  children: React.ReactNode;
}

const LocationDetails: React.FC<LocationDetailsProps> = ({ children }) => <div className={styles["location-details"]}>{children}</div>;

// Main Location Component
const Location: React.FC = () => {
  return (
    <section id="location" className={styles.location}>
      <LocationSection>
        <LocationContainer>
          <LocationImage src={locationImg} alt="Leo-Lov Location" />

          <LocationContent>
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
            <LocationDetails>
              <p>
                <strong>Leo-Lov ApS</strong>
              </p>
              <p>Maldive rd. 22</p>
              <p>Seychelles</p>
            </LocationDetails>
          </LocationContent>
        </LocationContainer>
      </LocationSection>
    </section>
  );
};

export default Location;
