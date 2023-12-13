import styles from "./ProjectDetailTitle.module.scss";

function ProjectDetailTitle({ ...project }: IProject): JSX.Element {
  return <h3 className={styles.title}>{project.type}</h3>;
}

export default ProjectDetailTitle;
