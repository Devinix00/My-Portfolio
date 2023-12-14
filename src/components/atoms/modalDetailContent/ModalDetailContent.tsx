import { Link } from "react-router-dom";
import styles from "./ModalDetailContent.module.scss";

interface IProps {
  bracket: string;
  content: string;
}

function ModalDetailContent({ bracket, content }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      {bracket === "기술 블로그 링크" ? (
        <Link to={content} target="_BLANK" className={styles.link}>
          {content}
        </Link>
      ) : (
        <div className={styles.content}>{content}</div>
      )}
    </div>
  );
}

export default ModalDetailContent;
