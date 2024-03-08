import useModalTypeStore from "../../../stores/useModalTypeStore/useModalTypeStore";
import ModalTitle from "../../atoms/modalTitle/ModalTitle";
import ModalIndividualContent from "../modalIndividualContent/ModalIndividualContent";
import styles from "./ModalContent.module.scss";

const portfolioModalContents: IModalContents[] = [
  {
    title:
      "1. React의 무한 루프 문제 해결: 조건부 상태 업데이트로 성능 최적화하기",

    circumstance: `콘솔 창을 확인해보니, Maximum update depth exceeded 오류가 발생. 
        이 오류는 컴포넌트가 무한 루프에 빠졌을 때 나타나는 것으로, 
        특정 컴포넌트의 상태 업데이트 로직이 주요 원인으로 의심되었음.`,

    reason: `childSize상태가 의존성 배열에 포함되어 있었기 때문에, 
        useEffect가 다시 실행되게 됨. 
        childSize 상태의 변화가 다시 useEffect의 실행을 유발하는 무한 루프를 만들게 된 것.`,

    process: `useEffect의 의존성 배열에서 childSize를 제거함. 
        이 변경은 childSize 상태의 변경이 useEffect를 다시 실행하지 않도록 함. 
        이로써 childSize의 변경이 더 이상 무한 루프를 유발하지 않게 되었음.
        이후에 상태 업데이트를 조건부로 만들어 새로운 너비와 높이를 계산한 후, 
        이 값들이 현재 childSize 상태와 다를 경우에만 setChildSize를 호출하는 방법으로 수정.`,

    blogLink:
      "https://velog.io/@dpldpl/React의-무한-루프-문제-해결-조건부-상태-업데이트로-성능-최적화하기-문제-해결",
  },
  {
    title: "2. 모달창 애니메이션 문제 해결",

    circumstance: `모달 창을 React와 Zustand를 사용하여 구현하는 과정에서,
        모달이 나타날 때는 애니메이션이 잘 적용되지만
        사라질 때는 애니메이션 없이 즉시 사라지는 문제가 발생.`,

    reason: `Zustand의 상태 변경이 애니메이션 시작 전에 발생하여, 
        CSS 애니메이션이 렌더링 되기도 전에 모달 컴포넌트가 사라지게 되던 것이 원인이었음.`,

    process: `closeModal 함수 대신, closeWithDelay라는 새로운 함수를 구현하여 
        모달의 닫힘 애니메이션이 완료된 후에 상태 변경이 이루어지도록 조정. 
        이를 위해 setTimeout을 사용하여 지정된 시간(예: 150ms)이 지난 후에 
        closeModal을 호출하도록 설정함.`,

    blogLink: "https://velog.io/@dpldpl/모달창-애니메이션-문제-해결-문제-해결",
  },
];

const blogModalContents: IModalContents[] = [
  {
    title: "1. 커스텀 훅과 상태관리: state(상태) 끌어올리기",

    circumstance: `컴포넌트 내에서 여러 개의 체크박스 상태(isCheckedAll)를 관리하면서 
      동시에 페이지네이션 기능을 적용하려 했을 때, 
      페이지가 변경될 때마다 체크박스 상태를 초기화하는 기능의 구현에 어려움을 겪음.`,

    reason: `isCheckedAll 상태는 UserContentsContainer 내부에 위치했으므로, 
      페이지네이션 로직을 담당하는 별도의 custom hook에서는 이 상태에 직접 접근할 수 없었음.
      또한 여러 custom hook들이 각각의 로직과 관련된 상태만을 관리하고 있었기 때문에, 
      상호작용하는 로직 간에 상태 공유가 어려웠음.`,

    process: `상위 컴포넌트에서 isCheckedAll 상태를 생성하고, 
      이 상태와 그 변경 함수를 하위 컴포넌트와 custom hook에 props로 전달.`,

    blogLink:
      "https://velog.io/@dpldpl/커스텀-훅과-상태관리-state상태-끌어올리기-문제-해결#원인",
  },
  {
    title: "2. HTTP 409 error Conflict",

    circumstance: `Next.Js 애플리케이션에서 회원가입 폼의
      데이터를 서버로 전송하는 과정에서 
      HTTP 409 Conflict 오류가 발생.  (POST 요청)`,

    reason: `클라이언트는 Content-Type을 application/json으로 설정했으나, 
      실제로 서버에 전송된 데이터는 FormData. 
      Content-Type과 본문 데이터 타입의 불일치.`,

    process: `FormData 객체 대신에 JSON 문자열을 생성하여 fetch 요청의 body로 전달.`,

    blogLink:
      "https://velog.io/@dpldpl/HTTP-409-error-Conflict-단순한-해결-문제-해결",
  },
  {
    title: "3. Zustand persist: 페이지 새로고침 시 전역상태 초기화 방지",

    circumstance: `zustand로 전역 상태관리 하고 있던
      api의 응답데이터중 하나인 userId 값이
      페이지 새로고침 시에 초기화 됨.`,

    reason: `페이지가 새로 고쳐지면 JavaScript 환경이 초기화되어 
      모든 메모리 내 상태가 재설정되기 때문.`,

    process: `Zustand persist를 이용하여 storage에 저장.`,

    blogLink:
      "https://velog.io/@dpldpl/Zustand-persist-페이지-새로고침-시-전역상태-초기화-방지-문제-해결",
  },
  {
    title: "4. Next.Js의 Server Action으로 데이터 revalidate 동기화",

    circumstance: `블로그 글을 포스팅한 이후에 글 조회 페이지로 접속했을 때,
      최신글이 업데이트 되지 않음. 
      새로고침을 눌러봐도 이전의 글들만 보이는 문제가 발생.`,

    reason: `서버 측에서 데이터가 캐시되어 초기 상태의 데이터가 저장되어 있었음. 
      그 결과, 아무리 글을 작성해도 API가 재통신되지 않았고, 
      이로 인해 이전의 데이터만 계속해서 보여지고 있었던 것.`,

    process: `Next.js의 Server Action 기능 중 하나인 revalidate를 이용하여 
      데이터를 재검증하고 동기화하는 데에 성공.`,

    blogLink:
      "https://velog.io/@dpldpl/Next.Js-Server-Action-API-응답-데이터-캐시-Revalidate-문제-해결",
  },
  {
    title: "5. Next.Js Hydration: SSR과 CSR 간의 class 불일치 문제 해결하기",

    circumstance: `좋아요를 누른 사용자에 한해 좋아요 버튼의 색상을 바꿔주는 기능을 
    구현하던 도중 Hydration 관련 에러 발생.`,

    reason: `서버 사이드와 클라이언트 사이드의 상태 불일치가 원인이었음.
    Hydration 이전 초기 페이지 로드 시점의 isLiked 상태와 
    최종 렌더링 시점의 isLiked 상태가 달랐기 때문.`,

    process: `SSR과 CSR사이의 불일치를 해결하기 위해
    useState를 사용하여 초기값 설정.
    이후에 useEffect를 이용하여 클라이언트 사이드에서 렌더링이 된 이후에
    상태를 업데이트 하는 것으로 코드 수정.`,

    blogLink:
      "https://velog.io/@dpldpl/Next.Js-Hydration-SSR과-CSR-간의-class-불일치-문제-해결하기-문제-해결",
  },
  {
    title: "6. JWT access token 전역으로 저장하지 않고 다른 요청 헤더로 보내기",

    circumstance: `기존 코드에서 access token을 localStorage에 저장하여 관리하고 있었는데,
    이 방법은 보안에 취약하다는 이유로 권장되지 않는다고 한다.
    axios를 이용하면 access token을 전역으로 관리하지 않고도
    다른 요청 헤더에 전달할 수 있지만
    Next.Js에서는 확장된 fetch 함수가 권장된다기에 fetch함수로 서버와 통신하며 
    access token을 좀 더 안전하게 관리하는 법에 대해서 고민하고 있었다.`,

    reason: `
    만약 웹 애플리케이션이 XSS 공격에 취약한 경우, 
    `,

    process: `
    utils 디렉토리에 tokenManager.ts 파일을 생성하고, 
    클로저 패턴을 도입하여 access token을 함수의 지역변수로 설정하였다.
    해당 함수는 setToken과 getToken이라는 메소드를 반환한다.
    이 때, access token은 함수의 지역변수이므로 외부에서 접근이 불가능하며
    setToken과 getToken 메소드를 이용해서만 접근이 가능하다.
    클로저 패턴을 도입하여 토큰을 전역으로 저장하지 않고
    더 안전하게 관리할 수 있었다.
    `,

    blogLink:
      "https://velog.io/@dpldpl/JWT-access-token-전역으로-저장하지-않고-다른-요청-헤더로-보내기-문제-해결",
  },
];
const AIVariableNameContents: IModalContents[] = [
  {
    title: "모바일 환경에서의 하단 고정 컴포넌트 브라우저 넘침 문제",

    circumstance: `모바일 브라우저에서 스크롤이 최하단에 도달했을 때 
      사용자가 화면을 더 내리면 공백이 생겨 브라우저가 올라가 보이는 현상이 발생. 
      이로 인해 하단에 고정된 입력 폼이 브라우저 바깥(아래)의 공백에 위치하게 되어 
      사용자 경험(UX)에 부정적인 영향.`,

    reason: `입력 폼 컴포넌트가 
      postion: fixed;로 스타일링 되어 
      해당 요소를 문서의 흐름에서 제거하고 
      부모 요소와의 관계를 무시하게 만들기 때문에 
      모바일 브라우저가 최하단을 넘어 공백이 생겼을때 
      그 공백에 위치하게 된 것.`,

    process: `해당 요소를 position: absolute; bottom:0;으로 수정함으로 간단하게 해결`,

    blogLink:
      "https://velog.io/@dpldpl/모바일-환경에서의-하단-고정-컴포넌트-브라우저-넘침-문제-문제-해결",
  },
];

function ModalContent(): JSX.Element {
  const { modalType } = useModalTypeStore();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <ModalTitle />
        {modalType === "Portfolio"
          ? portfolioModalContents.map((content, index) => (
              <ModalIndividualContent content={content} key={index} />
            ))
          : null}

        {modalType === "Blog"
          ? blogModalContents.map((content, index) => (
              <ModalIndividualContent content={content} key={index} />
            ))
          : null}

        {modalType === "AI Variable Name"
          ? AIVariableNameContents.map((content, index) => (
              <ModalIndividualContent content={content} key={index} />
            ))
          : null}
      </div>
    </div>
  );
}

export default ModalContent;
