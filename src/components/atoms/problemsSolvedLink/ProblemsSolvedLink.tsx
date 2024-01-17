import useOpenModalType from "../../../hooks/useOpenModalType/useOpenModalType";
import styles from "./ProblemsSolvedLink.module.scss";

interface IProps {
  type: string;
}

function ProblemsSolvedLink({ type }: IProps): JSX.Element {
  const { openModalType } = useOpenModalType();

  return (
    <button
      onClick={() => {
        openModalType(type);
      }}
      className={styles.button}
    >
      해결한 문제들
    </button>
  );
}

export default ProblemsSolvedLink;
