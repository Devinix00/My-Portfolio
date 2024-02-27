import DetailTitle from "../../atoms/detailTitle/DetailTitle";
import TechStackIconAndContent from "../../molecules/techStackIconAndContent/TechStackIconAndContent";
import styles from "./TechStacks.module.scss";
import htmlLogo from "../../../images/logos/html.png";
import cssLogo from "../../../images/logos/css.png";
import jsLogo from "../../../images/logos/js.png";
import tsLogo from "../../../images/logos/ts.png";
import reactQueryLogo from "../../../images/logos/react-query.svg";
import reactLogo from "../../../images/logos/react.png";
import nextJsLogo from "../../../images/logos/nextjs.png";
import styled from "styled-components";
import OtherTechStacks from "../../molecules/otherTechStacks/OtherTechStacks";

interface ITechStack {
  id: number;
  imgSrc: string;
  title: string;
  content: string;
}

const techStacks: ITechStack[] = [
  {
    id: 1,
    imgSrc: htmlLogo,
    title: "HTML",
    content:
      "웹 애플리케이션의 골격을 설계하는 데 있어 HTML을 능숙하게 사용할 수 있습니다. 구조적이고 의미 있는 마크업을 통해 강력하고 효율적인 웹사이트를 구축하려 노력합니다.",
  },
  {
    id: 2,
    imgSrc: cssLogo,
    title: "CSS",
    content:
      "주로 SCSS를 모듈화하여 스타일링하며, Media Query를 통해 반응형 웹 애플리케이션을 제작할 수 있습니다. Flexbox와 Grid에 대한 이해도가 있으며, 이를 활용해 레이아웃을 구성할 수 있습니다.",
  },
  {
    id: 3,
    imgSrc: jsLogo,
    title: "Javascript",
    content:
      "JavaScript 기술을 사용하여 웹사이트에 동적 기능을 추가할 수 있습니다. AJAX, Fetch API를 통해 비동기적 웹 애플리케이션을 만드는 것에 능숙하며, DOM 조작을 통해 사용자와의 상호작용을 향상시킬 수 있습니다.",
  },
  {
    id: 4,
    imgSrc: tsLogo,
    title: "Typscript",
    content:
      "TypeScript를 사용하여 더 안정적이고 유지보수하기 쉬운 웹 애플리케이션을 개발합니다. 강력한 타입 시스템을 통해 타입 에러와 같은 에러를 줄이고, 코드 관리를 효율적으로 하기 위해 노력합니다.",
  },
  {
    id: 5,
    imgSrc: reactLogo,
    title: "React",
    content:
      "React를 활용해 재사용 가능한 컴포넌트 기반의 사용자 인터페이스를 구축할 수 있습니다. React의 life cycle을 이해하고 있으며, hook을 이용해 상태 관리와 사이드 이펙트를 처리합니다.",
  },
  {
    id: 6,
    imgSrc: reactQueryLogo,
    title: "React Query",
    content:
      "React Query를 통해 서버 상태 관리와 데이터 fetch를 용이하게 할 수 있습니다. 백엔드와의 효율적인 데이터 동기화를 통해 사용자 경험을 개선하고 캐싱, 동기화, 데이터 업데이트 등의 기능을 구현합니다.",
  },
  {
    id: 7,
    imgSrc: nextJsLogo,
    title: "Next.Js",
    content:
      "App 라우터 기반의 웹 애플리케이션을 개발하고 배포한 경험이 있으며, 클라이언트 사이드 렌더링(CSR), 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG)의 차이에 대해 이해하고 있습니다. ",
  },
];

function TechStacks(): JSX.Element {
  return (
    <div className={styles.container} id="techStacks">
      <DetailTitle title="Tech Stacks" />
      <TechStackIconAndContentContainer>
        {techStacks.map((techStack) => (
          <TechStackIconAndContent key={techStack.id} {...techStack} />
        ))}
        <OtherTechStacks title="그 외의 Tech Stacks" />
      </TechStackIconAndContentContainer>
    </div>
  );
}

export default TechStacks;

const TechStackIconAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;
