import styles from "./InfoDetail.module.scss";
import { Link } from "react-router-dom";

interface IProps {
  path: string;
  content: string;
}

function InfoDetail({ path, content }: IProps): JSX.Element {
  return (
    <>
      <Link to={path} className={styles.link}>
        {content}
      </Link>
    </>
  );
}

export default InfoDetail;
