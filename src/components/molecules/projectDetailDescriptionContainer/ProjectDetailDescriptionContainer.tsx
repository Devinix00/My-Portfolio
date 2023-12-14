import ProjectDetailDescription from "../../atoms/projectDetailDescription/ProjectDetailDescription";
import styles from "./ProjectDetailDescriptionContainer.module.scss";
import ProjectDetailBracket from "../../atoms/bracket/Bracket";

interface IProps {
  bracket: string;
  description?: string;
}

function ProjectDetailDescriptionContainer({
  bracket,
  description,
}: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      <ProjectDetailBracket bracket={bracket} />
      <ProjectDetailDescription description={description} />
    </div>
  );
}

export default ProjectDetailDescriptionContainer;
