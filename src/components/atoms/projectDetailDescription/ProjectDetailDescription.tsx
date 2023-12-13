import styles from "./ProjectDetailDescription.module.scss";

interface IProps {
  description?: string;
}

function ProjectDetailDescription({ description }: IProps): JSX.Element {
  return <div className={styles.description}>{description}</div>;
}

export default ProjectDetailDescription;
