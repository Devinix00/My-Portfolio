import Bracket from "../../atoms/bracket/Bracket";
import styles from "./ModalDetailContainer.module.scss";

interface IProps {
  bracket: string;
}

function ModalDetailContainer({ bracket }: IProps): JSX.Element {
  return <Bracket bracket={bracket}></Bracket>;
}

export default ModalDetailContainer;
