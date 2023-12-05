import styled from "styled-components";
import TechStackDetailTitle from "../../atoms/techStackDetailTitle/TechStackDetailTitle";
import OtherTechStack from "../../atoms/otherTechStack/OtherTechStack";

interface IProps {
  title: string;
}

function OtherTechStacks({ title }: IProps): JSX.Element {
  return (
    <Container>
      <TechStackDetailTitle title={title} isOtherTechStacks={true} />
      <Wrapper>
        <OtherTechStack title="Axios" />
        <OtherTechStack title="Zustand" />
        <OtherTechStack title="styled-components" />
        <OtherTechStack title="styled-breakpoints" />
        <OtherTechStack title="MUI" />
        <OtherTechStack title="React-quill" />
      </Wrapper>
    </Container>
  );
}

export default OtherTechStacks;

const Container = styled.div`
  padding: 20px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    border: 1px solid #c2c2c2;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    gap: 11.5px;
    align-items: start;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 13px;
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    gap: 15px;
  }
`;
