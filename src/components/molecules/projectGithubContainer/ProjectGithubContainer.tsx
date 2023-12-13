import ProjectDetailBracket from "../../atoms/projectDetailBracket/ProjectDetailBracket";
import ProjectDetailGithubLink from "../../atoms/projectDetailGithubLink/ProjectDetailGithubLink";
import styles from "./ProjectGithubContainer.module.scss";

interface IProps {
  bracket: string;
  githubLink: string;
}

function ProjectGithubContainer({ bracket, githubLink }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      <ProjectDetailBracket bracket={bracket} />
      <ProjectDetailGithubLink githubLink={githubLink} />
    </div>
  );
}

export default ProjectGithubContainer;
