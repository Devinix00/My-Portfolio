import styles from "./ModalDetailTitle.module.scss";

interface IProps {
  title: string;
}

function ModalDetailTitle({ title }: IProps): JSX.Element {
  return <h3 className={styles.title}>{title}</h3>;
}

export default ModalDetailTitle;
