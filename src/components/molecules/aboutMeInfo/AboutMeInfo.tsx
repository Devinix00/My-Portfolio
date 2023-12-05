import AboutMeInfoIcon from "../../atoms/aboutMeInfoIcon/AboutMeInfoIcon";
import styles from "./AboutMeInfo.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import CelebrationIcon from "@mui/icons-material/Celebration";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import velogIcon from "../../../images/icon/velog.jpg";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import AboutMeInfoContent from "../../atoms/aboutMeInfoContent/AboutMeInfoContent";

interface IProps {
  type: string;
}

function AboutMeInfo({ type }: IProps): JSX.Element {
  const contentMap: { [type: string]: string | JSX.Element } = {
    name: "김범수",
    bornIn: "2000-04-13",
    residence: "서울특별시 은평구 구산동",
    number: "010-5605-2258",
    email: "dpldpl123456@naver.com",
    github: (
      <Link
        to="https://github.com/KitsuNeko00"
        target="_blank"
        className={styles.link}
      >
        Github
      </Link>
    ),
    blog: (
      <Link
        to="https://velog.io/@dpldpl"
        target="_blank"
        className={styles.link}
      >
        Velog
      </Link>
    ),
  };

  const content = contentMap[type];

  const iconMap: { [type: string]: JSX.Element } = {
    name: <PersonIcon style={{ fontSize: "30px" }} />,
    bornIn: <CelebrationIcon style={{ fontSize: "30px" }} />,
    residence: <HomeIcon style={{ fontSize: "30px" }} />,
    number: <CallIcon style={{ fontSize: "30px" }} />,
    email: <EmailIcon style={{ fontSize: "30px" }} />,
    github: <GitHubIcon style={{ fontSize: "30px" }} />,
    blog: <img src={velogIcon} alt="velog" className={styles.blog} />,
  };

  const icon = iconMap[type];

  return (
    <div className={styles.container}>
      <AboutMeInfoIcon icon={icon} />
      <AboutMeInfoContent content={content} />
    </div>
  );
}

export default AboutMeInfo;
