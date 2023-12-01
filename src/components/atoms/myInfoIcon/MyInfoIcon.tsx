import styles from "./MyInfoIcon.module.scss";

interface IProps {
  icon: JSX.Element;
}

function MyInfoIcon({ icon }: IProps): JSX.Element {
  return <>{icon}</>;
}

export default MyInfoIcon;
