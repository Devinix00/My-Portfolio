import styles from "./MyInfoDetail.module.scss";

function MyInfoDetail(): JSX.Element {
  return (
    <div className={styles.myInfoDetail}>
      열정이 가득한 프론트엔드 개발자입니다. <br />
      개발은 단순히 직업을 넘어 제 삶의 중요한 부분이며, <br />
      새로운 기술을 배우는 것에서 즐거움을 느낍니다. <br /> <br />
      최적의 UX를 제공하기 위해 노력하고 있으며, <br />
      현대적인 반응형 디자인으로 사용자들에게 <br />
      매력적인 웹 서비스를 제공하는 것을 목표로 합니다. <br /> <br />
      React와 같은 라이브러리를 기반으로 <br />
      동적이고 상호작용이 풍부한 웹 앱을 개발합니다. <br /> <br />
      프로젝트마다 제 개발 열정을 담아, <br />
      보다 나은 UX를 위해 최선을 다하겠습니다!
    </div>
  );
}

export default MyInfoDetail;
