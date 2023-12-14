import Bracket from "../../atoms/bracket/Bracket";
import ProjectDetailLists from "../projectDetailLists/ProjectDetailLists";
import styles from "./ProjectDetailListsContainer.module.scss";

interface IProps {
  bracket: string;
  lists: string[];
}

function ProjectDetailListsContainer({ bracket, lists }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Bracket bracket={bracket} />
      <ProjectDetailLists lists={lists} />
    </div>
  );
}

export default ProjectDetailListsContainer;
