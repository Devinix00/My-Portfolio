import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

interface IProps {
  path: string;
  content: string;
}

function Logo({ path, content }: IProps): JSX.Element {
  return (
    <Link to={path} target="_BLANK" className={styles.link}>
      <div className={styles.logo}>{content}</div>
    </Link>
  );
}

export default Logo;
