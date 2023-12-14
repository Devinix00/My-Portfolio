import useModalTypeStore from "../../../stores/useModalTypeStore/useModalTypeStore";
import styles from "./ModalTitle.module.scss";

function ModalTitle(): JSX.Element {
  const { modalType } = useModalTypeStore();
  return <h2 className={styles.title}>{modalType}</h2>;
}

export default ModalTitle;
