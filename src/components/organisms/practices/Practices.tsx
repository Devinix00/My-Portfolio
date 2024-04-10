import DetailTitle from "../../atoms/detailTitle/DetailTitle";
import ProjectContainer from "../projectContainer/ProjectContainer";
import styles from "./Practices.module.scss";

function Practices(): JSX.Element {
  return (
    <div className={styles.container} id="practices">
      <DetailTitle title="Practices (연습용 프로젝트)" />
      <ProjectContainer />
    </div>
  );
}

export default Practices;
