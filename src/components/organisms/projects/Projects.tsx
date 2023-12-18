import DetailTitle from "../../atoms/detailTitle/DetailTitle";
import ProjectContainer from "../projectContainer/ProjectContainer";
import styles from "./Projects.module.scss";

function Projects(): JSX.Element {
  return (
    <div className={styles.container} id="projects">
      <DetailTitle title="Projects" />
      <ProjectContainer />
    </div>
  );
}

export default Projects;
