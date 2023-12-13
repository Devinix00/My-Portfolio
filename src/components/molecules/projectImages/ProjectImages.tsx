import styles from "./ProjectImages.module.scss";

interface IProps {
  style: React.CSSProperties;
}

function ProjectImages({ style }: IProps): JSX.Element {
  return <div style={style} className={styles.container}></div>;
}

export default ProjectImages;
