import { useState } from "react";
import LogoText from "../../atoms/logoText/LogoText";
import HeaderInfo from "../../molecules/headerInfo/HeaderInfo";
import styles from "./Header.module.scss";
import useShowMenu from "../../../hooks/useShowMenu/useShowMenu";
import MenuContainer from "../../molecules/menuContainer/MenuContainer";

function Header(): JSX.Element {
  const [isMenuClicked, setIsMenuClicked] = useState<null | boolean>(null);
  const { handleClickMenu } = useShowMenu({ isMenuClicked, setIsMenuClicked });

  return (
    <>
      <header className={styles.container}>
        <div className={styles.inner}>
          <LogoText />
          <HeaderInfo
            isMenuClicked={isMenuClicked}
            setIsMenuClicked={setIsMenuClicked}
          />
        </div>
        <MenuContainer onClick={handleClickMenu} />
      </header>
    </>
  );
}

export default Header;
