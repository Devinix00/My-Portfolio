import styles from "./AboutMeInfoContent.module.scss";

interface IProps {
  content: string | JSX.Element;
}

function AboutMeInfoContent({ content }: IProps): JSX.Element {
  return <div className={styles.content}>{content}</div>;
}

export default AboutMeInfoContent;
