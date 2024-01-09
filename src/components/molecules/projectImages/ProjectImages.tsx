import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "./ProjectImages.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface IProps {
  style: React.CSSProperties;
  project: IProject;
}

function ProjectImages({ style, project }: IProps): JSX.Element {
  const swiper = useSwiper();

  return (
    <Swiper
      style={style}
      className={styles.container}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {project.images?.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="프로젝트 이미지들" className={styles.image} />
        </SwiperSlide>
      ))}
      <button
        onClick={() => swiper.slideNext()}
        style={{ visibility: "hidden" }}
      />
    </Swiper>
  );
}

export default ProjectImages;
