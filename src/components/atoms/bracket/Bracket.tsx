import styles from "./Bracket.module.scss";

interface IProps {
  bracket: string;
}

function Bracket({ bracket }: IProps): JSX.Element {
  return <div className={styles.bracket}>[{bracket}]</div>;
}

export default Bracket;
