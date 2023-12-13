import styles from "./ProjectDetailList.module.scss";

interface IProps {
  list: string;
}

function ProjectDetailList({ list }: IProps): JSX.Element {
  return <li className={styles.list}>{list}</li>;
}

export default ProjectDetailList;
