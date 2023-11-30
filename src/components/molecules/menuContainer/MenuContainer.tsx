import { MouseEventHandler } from "react";
import styles from "./MenuContainer.module.scss";
import Menu from "../../atoms/menu/Menu";

interface IProps {
  onClick: MouseEventHandler<SVGSVGElement>;
}

function MenuContainer({ onClick }: IProps): JSX.Element {
  return (
    <div className={styles.menuContainer}>
      <Menu onClick={onClick} />
    </div>
  );
}

export default MenuContainer;
