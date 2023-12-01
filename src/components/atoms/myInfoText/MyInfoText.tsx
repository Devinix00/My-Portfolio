import styles from "./MyInfoText.module.scss";

interface IProps {
  content: string | JSX.Element;
}

function MyInfoText({ content }: IProps): JSX.Element {
  return <div className={styles.content}>{content}</div>;
}

export default MyInfoText;
