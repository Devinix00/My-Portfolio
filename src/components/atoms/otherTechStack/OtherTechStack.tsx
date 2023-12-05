import styles from "./OtherTechStack.module.scss";

interface IProps {
  title: string;
}

function OtherTechStack({ title }: IProps): JSX.Element {
  return <div className={styles.title}>{title}</div>;
}

export default OtherTechStack;
