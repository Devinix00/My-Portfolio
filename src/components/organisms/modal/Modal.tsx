import { useState } from "react";
import ModalHeader from "../../molecules/modalHeader/ModalHeader";
import styles from "./Modal.module.scss";
import useCloseWithDelay from "../../../hooks/useCloseWithDelay/useCloseWithDelay";
import ModalContent from "../modalContent/ModalContent";
import styled from "styled-components";
import DevelopedBy from "../../atoms/developedBy/DevelopedBy";

function Modal(): JSX.Element {
  const [isClosing, setIsClosing] = useState(false);
  const { closeWithDelay } = useCloseWithDelay({ setIsClosing });

  const containerClass = `${styles.container} ${isClosing ? styles.close : ""}`;

  return (
    <div className={containerClass}>
      <div className={styles.modalContent}>
        <ModalHeader closeWithDelay={closeWithDelay} />
        <ModalContent />
        <ModalFooter>
          <DevelopedBy />
        </ModalFooter>
      </div>
    </div>
  );
}

export default Modal;

const ModalFooter = styled.footer`
  background-color: #212121;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
