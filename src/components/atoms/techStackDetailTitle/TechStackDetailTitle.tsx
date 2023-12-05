import styles from "./TechStackDetailTitle.module.scss";

interface IProps {
  title: string;
  isOtherTechStacks?: boolean;
}

function TechStackDetailTitle({
  title,
  isOtherTechStacks,
}: IProps): JSX.Element {
  const titleClass = `${styles.title} ${
    isOtherTechStacks ? styles.otherStacks : null
  }`;
  return <h3 className={titleClass}>{title}</h3>;
}

export default TechStackDetailTitle;
