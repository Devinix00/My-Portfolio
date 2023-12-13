import styles from "./ProjectDetailBracket.module.scss";

interface IProps {
  bracket: string;
}

function ProjectDetailBracket({ bracket }: IProps): JSX.Element {
  return <div className={styles.bracket}>[{bracket}]</div>;
}

export default ProjectDetailBracket;
