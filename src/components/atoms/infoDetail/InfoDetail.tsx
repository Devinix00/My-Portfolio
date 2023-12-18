import { MouseEventHandler } from "react";
import styles from "./InfoDetail.module.scss";

interface IProps {
  id: string;
  content: string;
  handleCloseMenu: MouseEventHandler<HTMLAnchorElement>;
}

function InfoDetail({ id, content, handleCloseMenu }: IProps): JSX.Element {
  return (
    <>
      <a href={`#${id}`} className={styles.link} onClick={handleCloseMenu}>
        {content}
      </a>
    </>
  );
}

export default InfoDetail;
