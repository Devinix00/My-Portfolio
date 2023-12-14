import ModalDetailContainer from "../../molecules/modalDetailContainer/ModalDetailContainer";
import ModalDetailTitleContainer from "../../molecules/modalDetailTitleContainer/ModalDetailTitleContainer";
import styles from "./ModalIndividualContent.module.scss";

function ModalIndividualContent(): JSX.Element {
  return (
    <>
      <ModalDetailTitleContainer />
      <div className={styles.modalDetailsContainer}>
        <ModalDetailContainer bracket="문제 상황" />
        <ModalDetailContainer bracket="원인" />
        <ModalDetailContainer bracket="문제 해결 과정" />
        <ModalDetailContainer bracket="기술 블로그 링크" />
      </div>
    </>
  );
}

export default ModalIndividualContent;
