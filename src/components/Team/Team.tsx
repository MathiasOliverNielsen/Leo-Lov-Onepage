import React from "react";
import styles from "./team.module.scss";

// Import avatar images
import avatar1 from "../../assets/img/Avatar-Icons/Ellipse 1.png";
import avatar2 from "../../assets/img/Avatar-Icons/Ellipse 2.png";
import avatar3 from "../../assets/img/Avatar-Icons/Ellipse 3.png";
import avatar4 from "../../assets/img/Avatar-Icons/Ellipse 4.png";

interface TeamMemberProps {
  name: string;
  quote: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, quote, image }) => (
  <div className={styles["team-member"]}>
    <div className={styles["team-member-image"]}>
      <img src={image} alt={name} className={styles["team-avatar"]} />
    </div>
    <h4 className={styles["team-member-name"]}>{name}</h4>
    <p className={styles["team-member-quote"]}>{quote}</p>
    <div className={styles["team-member-divider"]}></div>
  </div>
);

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "John Harbinger",
      quote: '"Jeg er den mest successfulde advokat i firmaet. I hvert fald mere end Peter."',
      image: avatar1,
    },
    {
      name: "Peter Parker",
      quote: '"Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere end John"',
      image: avatar2,
    },
    {
      name: "Elise Li",
      quote: '"Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg altid sagt."',
      image: avatar3,
    },
    {
      name: "Morten Nate",
      quote: '"Jeg er født på landet. På landet er der ingen ret og lov. Det er det vilde vest derude."',
      image: avatar4,
    },
  ];

  return (
    <section id="team" className={styles.team}>
      <div className={styles["team-container"]}>
        <h2 className={styles["team-title"]}>MØD HOLDET</h2>
        <div className={styles["team-members"]}>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} quote={member.quote} image={member.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
