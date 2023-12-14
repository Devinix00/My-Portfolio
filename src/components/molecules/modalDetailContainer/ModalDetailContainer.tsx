import Bracket from "../../atoms/bracket/Bracket";
import ModalDetailContent from "../../atoms/modalDetailContent/ModalDetailContent";
import styles from "./ModalDetailContainer.module.scss";

interface IProps {
  bracket: string;
  content: string;
}

function ModalDetailContainer({ bracket, content }: IProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Bracket bracket={bracket} />
      <ModalDetailContent bracket={bracket} content={content} />
    </div>
  );
}

export default ModalDetailContainer;
