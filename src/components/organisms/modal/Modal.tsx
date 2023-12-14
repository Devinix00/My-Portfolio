import { useState } from "react";
import ModalHeader from "../../molecules/modalHeader/ModalHeader";
import Footer from "../footer/Footer";
import styles from "./Modal.module.scss";
import useCloseWithDelay from "../../../hooks/useCloseWithDelay/useCloseWithDelay";
import ModalContent from "../modalContent/ModalContent";

function Modal(): JSX.Element {
  const [isClosing, setIsClosing] = useState(false);
  const { closeWithDelay } = useCloseWithDelay({ setIsClosing });

  const containerClass = `${styles.container} ${isClosing ? styles.close : ""}`;

  return (
    <div className={containerClass}>
      <div className={styles.modalContent}>
        <ModalHeader closeWithDelay={closeWithDelay} />
        <ModalContent />
        <Footer />
      </div>
    </div>
  );
}

export default Modal;
