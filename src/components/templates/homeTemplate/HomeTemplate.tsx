import styled from "styled-components";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import HomeMain from "../../organisms/homeMain/HomeMain";
import Modal from "../../organisms/modal/Modal";
import useModalStore from "../../../stores/useModalStore/useModalStore";

function HomeTemplate(): JSX.Element {
  const { isShowModal } = useModalStore();
  return (
    <Container>
      <Header />
      <HomeMainAndFooterContainer>
        <HomeMain />
        <Footer />
        {isShowModal ? <Modal /> : null}
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
