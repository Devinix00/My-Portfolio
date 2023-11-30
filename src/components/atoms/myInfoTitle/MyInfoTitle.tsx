import { useState } from "react";
import styles from "./MyInfoTitle.module.scss";
import useHandleResizeInfoTitle from "../../../hooks/useHandleResizeInfoTitle/useHandleResizeInfoTitle";

function MyInfoTitle(): JSX.Element {
  const [isSmallWidth, setIsSmallWidth] = useState<boolean>(false);
  useHandleResizeInfoTitle({ isSmallWidth, setIsSmallWidth });

  return (
    <h2 className={styles.myInfoTitle}>
      개발을 사랑하는{isSmallWidth && <br />} 주니어 Front-End 개발자
      김범수입니다.
    </h2>
  );
}

export default MyInfoTitle;
