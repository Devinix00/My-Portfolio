import styled from "styled-components";
import ProjectDetailTitle from "../../atoms/projectDetailTitle/ProjectDetailTitle";
import ProjcetContent from "../projcetContent/ProjcetContent";

function Project({ ...project }: IProject): JSX.Element {
  return (
    <Container>
      <ProjectDetailTitle {...project} />
      <ProjcetContent {...project} />
    </Container>
  );
}

export default Project;

const Container = styled.div`
  border: 1px solid #c2c2c2;
  padding: 20px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 30px;
  }
`;
