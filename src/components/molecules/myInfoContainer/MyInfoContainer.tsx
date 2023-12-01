import styles from "./MyInfoContainer.module.scss";
import MyInfo from "../myInfo/MyInfo";
import ContactMe from "../../atoms/contactMe/ContactMe";

function MyInfoContainer(): JSX.Element {
  return (
    <div className={styles.container}>
      <MyInfo type="name" />
      <MyInfo type="bornIn" />
      <MyInfo type="residence" />
      <MyInfo type="number" />
      <MyInfo type="email" />
      <MyInfo type="github" />
      <MyInfo type="blog" />
      <ContactMe />
    </div>
  );
}

export default MyInfoContainer;
