import { Link } from "react-router-dom";
import styles from "./ProjectDetailGithubLink.module.scss";

interface IProps {
  githubLink: string;
}

function ProjectDetailGithubLink({ githubLink }: IProps): JSX.Element {
  return (
    <Link to={githubLink} target="_BLANK" className={styles.link}>
      {githubLink}
    </Link>
  );
}

export default ProjectDetailGithubLink;
