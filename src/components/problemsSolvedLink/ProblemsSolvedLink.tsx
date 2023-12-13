import { Link } from "react-router-dom";
import styles from "./ProblemsSolvedLink.module.scss";

interface IProps {
  problemsSolvedLink: string;
}

function ProblemsSolvedLink({ problemsSolvedLink }: IProps): JSX.Element {
  return (
    <Link to={problemsSolvedLink} className={styles.link}>
      해결한 문제들
    </Link>
  );
}

export default ProblemsSolvedLink;
