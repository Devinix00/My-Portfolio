import styled from "styled-components";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import HomeMain from "../../organisms/homeMain/HomeMain";

function HomeTemplate(): JSX.Element {
  return (
    <Container>
      <Header />
      <HomeMainAndFooterContainer>
        <HomeMain />
        <Footer />
      </HomeMainAndFooterContainer>
    </Container>
  );
}

export default HomeTemplate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HomeMainAndFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
