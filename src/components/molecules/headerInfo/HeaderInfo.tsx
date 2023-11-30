import { Dispatch, SetStateAction } from "react";
import InfoDetail from "../../atoms/infoDetail/InfoDetail";
import styles from "./HeaderInfo.module.scss";
import useHandleHeaderResize from "../../../hooks/useHandleHeaderResize/useHandleHeaderResize";

interface IProps {
  isMenuClicked: boolean | null;
  setIsMenuClicked: Dispatch<SetStateAction<boolean | null>>;
}

function HeaderInfo({ isMenuClicked, setIsMenuClicked }: IProps): JSX.Element {
  const animationClasses: { [key: string]: string | null } = {
    true: styles.clicked,
    null: null,
    false: styles.unClicked,
  };

  const animationClass = animationClasses[String(isMenuClicked)];

  const clickedClass = `${styles.container} ${animationClass}`;

  useHandleHeaderResize({
    isMenuClicked,
    setIsMenuClicked,
  });

  return (
    <>
      <div className={clickedClass}>
        <InfoDetail path="/" content="About me" />
        <InfoDetail path="/" content="Tech stacks" />
        <InfoDetail path="/" content="Projects" />
      </div>
    </>
  );
}

export default HeaderInfo;
