import ProjectDetailBracket from "../../atoms/projectDetailBracket/ProjectDetailBracket";
import ProjectDetailLists from "../projectDetailLists/ProjectDetailLists";
import styles from "./ProjectDetailListsContainer.module.scss";

interface IProps {
  bracket: string;
  lists: string[];
}

function ProjectDetailListsContainer({ bracket, lists }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      <ProjectDetailBracket bracket={bracket} />
      <ProjectDetailLists lists={lists} />
    </div>
  );
}

export default ProjectDetailListsContainer;
