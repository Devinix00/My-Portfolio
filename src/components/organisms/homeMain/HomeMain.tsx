import styled from "styled-components";
import MySimpleInfo from "../../molecules/mySimpleInfo/MySimpleInfo";
import styles from "./HomeMain.module.scss";
import AboutMe from "../aboutMe/AboutMe";
import TechStacks from "../techStacks/TechStacks";
import Practices from "../practices/Practices";

function HomeMain(): JSX.Element {
  return (
    <Container>
      <div className={styles.inner}>
        <MySimpleInfo />
        <AboutMe />
        <TechStacks />
        <Practices />
      </div>
    </Container>
  );
}

export default HomeMain;

const Container = styled.main`
  flex: 1;
  overflow-x: hidden;
`;
