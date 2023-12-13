import styles from "./AboutMeInfoContainer.module.scss";
import ContactMe from "../../atoms/contactMe/ContactMe";
import AboutMeInfo from "../aboutMeInfo/AboutMeInfo";

interface IAboutMeInfoType {
  type: string;
}

const infoTypes: IAboutMeInfoType[] = [
  { type: "name" },
  { type: "bornIn" },
  { type: "residence" },
  { type: "number" },
  { type: "email" },
  { type: "github" },
  { type: "blog" },
];

function AboutMeInfoContainer(): JSX.Element {
  return (
    <div className={styles.container}>
      {infoTypes.map((info, index) => (
        <AboutMeInfo key={index} {...info} />
      ))}
      <ContactMe />
    </div>
  );
}

export default AboutMeInfoContainer;
