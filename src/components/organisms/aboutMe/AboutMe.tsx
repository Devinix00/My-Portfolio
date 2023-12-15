import styled from "styled-components";
import styles from "./AboutMe.module.scss";
import MyPicture from "../../atoms/myPicture/MyPicture";
import AboutMeInfoContainer from "../../molecules/aboutMeInfoContainer/AboutMeInfoContainer";
import DetailTitle from "../../atoms/detailTitle/DetailTitle";

function AboutMe(): JSX.Element {
  return (
    <div className={styles.container}>
      <DetailTitle title="About Me" />
      <MyProfileInfo>
        <MyPicture />
        <AboutMeInfoContainer />
      </MyProfileInfo>
    </div>
  );
}

export default AboutMe;

const MyProfileInfo = styled.div`
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: flex;
    justify-content: space-between;
  }
`;
