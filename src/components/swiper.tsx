import { Swiper, SwiperSlide } from "swiper/react";
// import { useRef, useEffect } from "react";
// import "swipejs/swipe.css";
import "swiper/css";
import { Pagination } from "swiper";

interface Slide {
  image: string;
  description: string;
  title: string;
}

interface Props {
  slides: Slide[];
}

export const MySwipe: React.FC<Props> = ({ slides }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      slidesPerGroup={3}
      slidesPerView={3}
      spaceBetween={50}
      style={{ background: "brown" }}
    >
      <SwiperSlide style={{ height: 100 }}>Slide 1</SwiperSlide>
      <SwiperSlide style={{ height: 100 }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ height: 100 }}>Slide 3</SwiperSlide>
      <SwiperSlide style={{ height: 100 }}>Slide 4</SwiperSlide>
      <SwiperSlide style={{ height: 100 }}>Slide 5</SwiperSlide>
      <SwiperSlide style={{ height: 100 }}>Slide 6</SwiperSlide>
      <SwiperSlide style={{ height: 100 }}>Slide 7</SwiperSlide>
      <SwiperSlide style={{ height: 100 }}>Slide 8</SwiperSlide>
      <SwiperSlide style={{ height: 100 }}>Slide 9</SwiperSlide>
    </Swiper>
  );
};
