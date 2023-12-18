import styles from "./LogoText.module.scss";

function LogoText(): JSX.Element {
  return (
    <a href="#root" className={styles.link}>
      KBS's portfolio
    </a>
  );
}

export default LogoText;
