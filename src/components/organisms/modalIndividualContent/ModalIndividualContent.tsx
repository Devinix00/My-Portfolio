import ModalDetailTitle from "../../atoms/modalDetailTitle/ModalDetailTitle";
import ModalDetailContainer from "../../molecules/modalDetailContainer/ModalDetailContainer";
import styles from "./ModalIndividualContent.module.scss";

interface IProps {
  content: IModalContents;
}

function ModalIndividualContent({ content }: IProps): JSX.Element {
  return (
    <>
      <ModalDetailTitle title={content.title} />
      <div className={styles.modalDetailsContainer}>
        <ModalDetailContainer
          bracket="문제 상황"
          content={content.circumstance}
        />
        <ModalDetailContainer bracket="원인" content={content.reason} />

        <ModalDetailContainer
          bracket="문제 해결 과정"
          content={content.process}
        />

        <ModalDetailContainer
          bracket="기술 블로그 링크"
          content={content.blogLink}
        />
      </div>
    </>
  );
}

export default ModalIndividualContent;
