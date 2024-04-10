import Project from "../project/Project";
import styles from "./ProjectContainer.module.scss";
import myPortfolioImage1 from "../../../images/myPortfolio/KakaoTalk_Photo_2024-01-09-15-20-03 001.jpeg";
import myPortfolioImage2 from "../../../images/myPortfolio/KakaoTalk_Photo_2024-01-09-15-20-04 002.jpeg";
import myPortfolioImage3 from "../../../images/myPortfolio/KakaoTalk_Photo_2024-01-09-15-20-04 003.jpeg";
import myPortfolioImage4 from "../../../images/myPortfolio/KakaoTalk_Photo_2024-01-09-15-25-38 001.jpeg";
import myPortfolioImage5 from "../../../images/myPortfolio/KakaoTalk_Photo_2024-01-09-15-25-38 002.jpeg";
import blogImage1 from "../../../images/blog/KakaoTalk_Photo_2024-01-09-15-42-00 001.jpeg";
import blogImage2 from "../../../images/blog/KakaoTalk_Photo_2024-01-09-15-42-01 002.jpeg";
import blogImage3 from "../../../images/blog/KakaoTalk_Photo_2024-01-09-15-42-01 003.jpeg";
import blogImage4 from "../../../images/blog/KakaoTalk_Photo_2024-01-09-15-42-01 004.jpeg";
import blogImage5 from "../../../images/blog/KakaoTalk_Photo_2024-01-09-15-42-01 005.jpeg";
import AIVariavleNameImage1 from "../../../images/AI-Variable-Name/KakaoTalk_Photo_2024-01-09-14-07-28 004.jpeg";
import AIVariavleNameImage2 from "../../../images/AI-Variable-Name/KakaoTalk_Photo_2024-01-09-14-07-28 005.jpeg";
import AIVariavleNameImage3 from "../../../images/AI-Variable-Name/KakaoTalk_Photo_2024-01-09-14-07-28 006.jpeg";
import toDoListImage1 from "../../../images/toToList/KakaoTalk_Photo_2024-01-09-14-07-28 001.jpeg";
import toDoListImage2 from "../../../images/toToList/KakaoTalk_Photo_2024-01-09-14-07-28 002.jpeg";
import toDoListImage3 from "../../../images/toToList/KakaoTalk_Photo_2024-01-09-14-07-28 003.jpeg";

const projectTypes: IProject[] = [
  {
    type: "Portfolio",
    descriptionBracket: "간단한 소개",
    description: "지금 보고 계시는 포트폴리오 웹입니다.",
    featuresBracket: "기능들",
    features: ["자기 소개", "About Me", "Tech Stacks", "Projects"],
    techStacksBracket: "Tech Stacks",
    techStacks: [
      "React",
      "Typescript",
      "styled-components",
      "styled-breakpoints",
      "SCSS",
      "MUI",
      "Zustand",
      "Swiper",
    ],
    githubBracket: "Github",
    githubLink: "https://github.com/Devinix00/my-portfolio",
    images: [
      myPortfolioImage1,
      myPortfolioImage2,
      myPortfolioImage3,
      myPortfolioImage4,
      myPortfolioImage5,
    ],
  },
  {
    type: "Blog",
    descriptionBracket: "간단한 소개",
    description: "CRUD 위주의 게시판 연습 프로젝트입니다.",
    featuresBracket: "기능들",
    features: [
      "로그인, 회원가입, 회원정보 수정",
      "글 포스팅,수정,삭제",
      "좋아요 및 댓글",
    ],
    techStacksBracket: "Tech Stacks",
    techStacks: ["Next.Js", "Typescript", "MUI", "SCSS", "Zustand"],
    githubBracket: "Github",
    githubLink: "https://github.com/Devinix00/blog-project",
    images: [blogImage1, blogImage2, blogImage3, blogImage4, blogImage5],
  },
  {
    type: "AI Variable Name",
    descriptionBracket: "간단한 소개",
    description: "Chat GPT API를 이용한 인공지능 변수 작명 서비스 입니다.",
    featuresBracket: "기능들",
    features: [
      "Chat GPT API를 이용한 개발자용 변수 작명",
      "case 선택 가능 (camelCase, PascalCase, snake_case)",
    ],
    techStacksBracket: "Tech Stacks",
    techStacks: ["Next.Js", "Typescript", "MUI", "SCSS", "Zustand"],
    githubBracket: "Github",
    githubLink: "https://github.com/Devinix00/AI-Variable-Name",
    images: [AIVariavleNameImage1, AIVariavleNameImage2, AIVariavleNameImage3],
  },
  {
    type: "To Do List",
    descriptionBracket: "간단한 소개",
    description: "할일을 추가하고 삭제하는 To Do List입니다.",
    featuresBracket: "기능들",
    features: [
      "할 일 추가",
      "할 일 삭제",
      "한 일 체크",
      "한 일과 하지 않은 일 나누기",
    ],
    techStacksBracket: "Tech Stacks",
    techStacks: [
      "Next.Js",
      "Typescript",
      "React-Query",
      "Axios",
      "Json-server",
    ],
    githubBracket: "Github",
    githubLink: "https://github.com/Devinix00/ToDoList-Next13-Atomic",
    images: [toDoListImage1, toDoListImage2, toDoListImage3],
  },
];

function ProjectContainer(): JSX.Element {
  return (
    <div className={styles.container}>
      {projectTypes?.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default ProjectContainer;
