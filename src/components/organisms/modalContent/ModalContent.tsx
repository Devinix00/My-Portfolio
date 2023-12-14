import ModalTitle from "../../atoms/modalTitle/ModalTitle";
import ModalIndividualContent from "../modalIndividualContent/ModalIndividualContent";
import styles from "./ModalContent.module.scss";

const modalContents: IModalContents[] = [
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
    githubLink:
      "https://velog.io/@dpldpl/React%EC%9D%98-%EB%AC%B4%ED%95%9C-%EB%A3%A8%ED%94%84-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-%EC%A1%B0%EA%B1%B4%EB%B6%80-%EC%83%81%ED%83%9C-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8%EB%A1%9C-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0",
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
    githubLink:
      "https://velog.io/@dpldpl/%EB%AA%A8%EB%8B%AC%EC%B0%BD-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0",
  },
];

function ModalContent(): JSX.Element {
  return (
    <div className={styles.container}>
      <ModalTitle />
      <ModalIndividualContent />
    </div>
  );
}

export default ModalContent;
