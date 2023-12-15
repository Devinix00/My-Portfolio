import Project from "../project/Project";
import styles from "./ProjectContainer.module.scss";

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
    ],
    githubBracket: "Github",
    githubLink: "https://github.com/Devinix00/my-portfolio",
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
