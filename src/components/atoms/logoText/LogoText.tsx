import styles from "./LogoText.module.scss";
import { Link } from "react-router-dom";

function LogoText(): JSX.Element {
  return (
    <Link to="/" className={styles.link}>
      KBS's portfolio
    </Link>
  );
}

export default LogoText;
