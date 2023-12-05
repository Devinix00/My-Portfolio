import styles from "./TechStackImage.module.scss";

interface IProps {
  imgSrc: string;
  alt: string;
}

function TechStackImage({ imgSrc, alt }: IProps): JSX.Element {
  return <img src={imgSrc} alt={alt} className={styles.img} />;
}

export default TechStackImage;
