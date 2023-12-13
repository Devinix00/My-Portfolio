import ProjectDetailList from "../../atoms/projectDetailList/ProjectDetailList";
import styles from "./ProjectDetailLists.module.scss";

interface IProps {
  lists?: string[];
}

function ProjectDetailLists({ lists }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      {lists?.map((list, index) => (
        <ProjectDetailList list={list} key={index} />
      ))}
    </div>
  );
}

export default ProjectDetailLists;
