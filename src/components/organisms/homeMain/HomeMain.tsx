import styled from "styled-components";
import MySimpleInfo from "../../molecules/mySimpleInfo/MySimpleInfo";
import styles from "./HomeMain.module.scss";
import AboutMe from "../aboutMe/AboutMe";
import TechStacks from "../techStacks/TechStacks";
import Projects from "../projects/Projects";

function HomeMain(): JSX.Element {
  return (
    <Container>
      <div className={styles.inner}>
        <MySimpleInfo />
        <AboutMe />
        <TechStacks />
        <Projects />
      </div>
    </Container>
  );
}

export default HomeMain;

const Container = styled.main`
  flex: 1;
`;
