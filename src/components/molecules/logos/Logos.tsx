import styled from "styled-components";
import Logo from "../../atoms/logo/Logo";

function Logos(): JSX.Element {
  return (
    <Container>
      <Logo path="https://github.com/KitsuNeko00" content="Github" />
      <Logo path="https://velog.io/@dpldpl" content="Velog" />
    </Container>
  );
}

export default Logos;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
