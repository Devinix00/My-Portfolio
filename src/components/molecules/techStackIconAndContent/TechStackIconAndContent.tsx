import styled from "styled-components";
import TechStackImage from "../../atoms/techStackImage/TechStackImage";
import TechStackDetail from "../../atoms/techStackDetail/TechStackDetail";
import TechStackDetailTitle from "../../atoms/techStackDetailTitle/TechStackDetailTitle";

interface IProps {
  imgSrc: string;
  title: string;
  content: string;
  id: number;
}

function TechStackIconAndContent({
  imgSrc,
  title,
  content,
}: IProps): JSX.Element {
  return (
    <Container>
      <TechStackDetailTitle title={title} />
      <Wrapper>
        <TechStackImage imgSrc={imgSrc} alt={title} />
        <TechStackDetail content={content} />
      </Wrapper>
    </Container>
  );
}

export default TechStackIconAndContent;

const Container = styled.div`
  border: 1px solid #c2c2c2;
  padding: 20px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
