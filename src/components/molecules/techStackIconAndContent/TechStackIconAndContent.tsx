import styled from "styled-components";
import TechStackImage from "../../atoms/techStackImage/TechStackImage";
import TechStackDetail from "../../atoms/techStackDetail/TechStackDetail";
import TechStackDetailTitle from "../../atoms/techStackDetailTitle/TechStackDetailTitle";
import { Variants, motion } from "framer-motion";

const techStackVariantToRight: Variants = {
  offscreen: {
    opacity: 0,
    x: -150,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

const techStackVariantToLeft: Variants = {
  offscreen: {
    opacity: 0,
    x: 150,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

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
  id,
}: IProps): JSX.Element {
  const selectedVariant =
    id % 2 === 0 ? techStackVariantToLeft : techStackVariantToRight;

  return (
    <Container
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: "-75px" }}
      variants={selectedVariant}
    >
      <TechStackDetailTitle title={title} />
      <Wrapper>
        <TechStackImage imgSrc={imgSrc} alt={title} />
        <TechStackDetail content={content} />
      </Wrapper>
    </Container>
  );
}

export default TechStackIconAndContent;

const Container = styled(motion.div)`
  border: 1px solid #c2c2c2;
  padding: 20px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
