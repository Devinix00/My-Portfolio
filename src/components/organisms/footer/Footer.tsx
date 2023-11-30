import styled from "styled-components";
import styles from "./Footer.module.scss";
import Logos from "../../molecules/logos/Logos";
import DevelopedBy from "../../atoms/developedBy/DevelopedBy";

function Footer(): JSX.Element {
  return (
    <Contaienr>
      <div className={styles.inner}>
        <FooterContentsContainer>
          <Logos />
          <DevelopedBy />
        </FooterContentsContainer>
      </div>
    </Contaienr>
  );
}

export default Footer;

const Contaienr = styled.footer`
  height: 180px;
  background-color: #212121;
  color: white;
`;

const FooterContentsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
