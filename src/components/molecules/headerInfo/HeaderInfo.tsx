import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import InfoDetail from "../../atoms/infoDetail/InfoDetail";
import styles from "./HeaderInfo.module.scss";
import useHandleResizeHeader from "../../../hooks/useHandleResizeHeader/useHandleResizeHeader";

interface IProps {
  isMenuClicked: boolean | null;
  setIsMenuClicked: Dispatch<SetStateAction<boolean | null>>;
  handleCloseMenu: MouseEventHandler<HTMLAnchorElement>;
}

function HeaderInfo({
  isMenuClicked,
  setIsMenuClicked,
  handleCloseMenu,
}: IProps): JSX.Element {
  const animationClasses: { [key: string]: string | null } = {
    true: styles.clicked,
    null: null,
    false: styles.unClicked,
  };

  const animationClass = animationClasses[String(isMenuClicked)];

  const clickedClass = `${styles.container} ${animationClass}`;

  useHandleResizeHeader({
    isMenuClicked,
    setIsMenuClicked,
  });

  return (
    <>
      <div className={clickedClass}>
        <InfoDetail
          id="aboutMe"
          content="About me"
          handleCloseMenu={handleCloseMenu}
        />
        <InfoDetail
          id="techStacks"
          content="Tech stacks"
          handleCloseMenu={handleCloseMenu}
        />
        <InfoDetail
          id="practices"
          content="Practices"
          handleCloseMenu={handleCloseMenu}
        />
      </div>
    </>
  );
}

export default HeaderInfo;
