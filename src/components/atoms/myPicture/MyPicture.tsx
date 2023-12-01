import styles from "./MyPicture.module.scss";
import MyPic from "../../../images/myPic.jpg";

function MyPicture(): JSX.Element {
  return <img src={MyPic} alt="my pic" className={styles.myPicture} />;
}

export default MyPicture;
