import styled from "styled-components";
import styles from "./ModalHeader.module.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ModalHeaderTitle from "../../atoms/modalHeaderTitle/ModalHeaderTitle";

interface IProps {
  closeWithDelay: () => void;
}

function ModalHeader({ closeWithDelay }: IProps): JSX.Element {
  return (
    <Container>
      <div className={styles.inner}>
        <ModalHeaderTitle />
        <ExitToAppIcon onClick={closeWithDelay} className={styles.exitIcon} />
      </div>
    </Container>
  );
}

export default ModalHeader;

const Container = styled.div`
  background-color: #212121;
  height: 60px;
`;
