import styled from "styled-components";
import AboutMeText from "../../atoms/aboutMeText/AboutMeText";
import styles from "./AboutMe.module.scss";
import MyPicture from "../../atoms/myPicture/MyPicture";
import MyInfoContainer from "../../molecules/myInfoContainer/MyInfoContainer";

function AboutMe(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <AboutMeText />
        <MyProfileInfo>
          <MyPicture />
          <MyInfoContainer />
        </MyProfileInfo>
      </div>
    </div>
  );
}

export default AboutMe;

const MyProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
