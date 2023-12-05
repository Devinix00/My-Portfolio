import styles from "./TechStackDetail.module.scss";

interface IProps {
  content?: string;
}

function TechStackDetail({ content }: IProps): JSX.Element {
  return <div className={styles.content}>{content}</div>;
}

export default TechStackDetail;
