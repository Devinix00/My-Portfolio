import styles from "./DetailTitle.module.scss";

interface IProps {
  title: string;
}

function DetailTitle({ title }: IProps): JSX.Element {
  return <h2 className={styles.aboutMeText}>{title}</h2>;
}

export default DetailTitle;
