import styled from "styled-components";
import MySimpleInfo from "../../molecules/mySimpleInfo/MySimpleInfo";
import styles from "./HomeMain.module.scss";

function HomeMain(): JSX.Element {
  return (
    <Container>
      <div className={styles.inner}>
        <MySimpleInfo />
      </div>
    </Container>
  );
}

export default HomeMain;

const Container = styled.main`
  flex: 1;
`;
