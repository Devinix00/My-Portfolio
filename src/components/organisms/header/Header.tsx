import { useState } from "react";
import LogoText from "../../atoms/logoText/LogoText";
import HeaderInfo from "../../molecules/headerInfo/HeaderInfo";
import styles from "./Header.module.scss";
import useShowMenu from "../../../hooks/useShowMenu/useShowMenu";
import MenuContainer from "../../molecules/menuContainer/MenuContainer";
import styled from "@emotion/styled";

function Header(): JSX.Element {
  const [isMenuClicked, setIsMenuClicked] = useState<null | boolean>(null);
  const { handleClickMenu } = useShowMenu({ isMenuClicked, setIsMenuClicked });

  return (
    <>
      <Container>
        <div className={styles.inner}>
          <LogoText />
          <HeaderInfo
            isMenuClicked={isMenuClicked}
            setIsMenuClicked={setIsMenuClicked}
          />
        </div>
        <MenuContainer onClick={handleClickMenu} />
      </Container>
    </>
  );
}

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: rgb(33, 33, 33);
  color: white;
  display: flex;
  align-items: center;
  transition: none;
`;
