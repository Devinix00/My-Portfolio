import styles from "./AboutMeInfoContainer.module.scss";
import ContactMe from "../../atoms/contactMe/ContactMe";
import AboutMeInfo from "../aboutMeInfo/AboutMeInfo";

function AboutMeInfoContainer(): JSX.Element {
  return (
    <div className={styles.container}>
      <AboutMeInfo type="name" />
      <AboutMeInfo type="bornIn" />
      <AboutMeInfo type="residence" />
      <AboutMeInfo type="number" />
      <AboutMeInfo type="email" />
      <AboutMeInfo type="github" />
      <AboutMeInfo type="blog" />
      <ContactMe />
    </div>
  );
}

export default AboutMeInfoContainer;
