import styles from "./Bracket.module.scss";

interface IProps {
  bracket: string;
}

function Bracket({ bracket }: IProps): JSX.Element {
  const bracketClassMap: { [key: string]: string } = {
    "문제 상황": styles.circumstance,
    원인: styles.reason,
    "문제 해결 과정": styles.process,
    "기술 블로그 링크": styles.blogLink,
  };

  const bracketClass = bracketClassMap[bracket] || styles.bracket;

  return <div className={bracketClass}>[{bracket}]</div>;
}

export default Bracket;
