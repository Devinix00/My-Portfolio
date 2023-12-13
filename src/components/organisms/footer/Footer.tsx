import styled from "styled-components";
import styles from "./Footer.module.scss";
import Logos from "../../molecules/logos/Logos";
import DevelopedBy from "../../atoms/developedBy/DevelopedBy";

function Footer(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <FooterContentsContainer>
          <Logos />
          <DevelopedBy />
        </FooterContentsContainer>
      </div>
    </div>
  );
}

export default Footer;

const FooterContentsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
