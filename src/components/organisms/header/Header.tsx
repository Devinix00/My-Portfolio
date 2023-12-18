import { useState } from "react";
import LogoText from "../../atoms/logoText/LogoText";
import HeaderInfo from "../../molecules/headerInfo/HeaderInfo";
import styles from "./Header.module.scss";
import useShowMenu from "../../../hooks/useShowMenu/useShowMenu";
import MenuContainer from "../../molecules/menuContainer/MenuContainer";

function Header(): JSX.Element {
  const [isMenuClicked, setIsMenuClicked] = useState<null | boolean>(null);
  const { handleClickMenu, handleCloseMenu } = useShowMenu({
    isMenuClicked,
    setIsMenuClicked,
  });

  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <LogoText />
        <HeaderInfo
          isMenuClicked={isMenuClicked}
          setIsMenuClicked={setIsMenuClicked}
          handleCloseMenu={handleCloseMenu}
        />
      </div>
      <MenuContainer onClick={handleClickMenu} />
    </div>
  );
}

export default Header;
