import styles from "./DetailTitle.module.scss";

interface IProps {
  title: string;
}

function DetailTitle({ title }: IProps): JSX.Element {
  const classType = `${styles.title} ${
    title === "About Me" ? styles.aboutMe : null
  }`;
  return <h2 className={classType}>{title}</h2>;
}

export default DetailTitle;
