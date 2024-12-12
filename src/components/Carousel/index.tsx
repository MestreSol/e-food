import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carousel = () => {
  return (
    <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src="https://via.placeholder.com/150" alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/150" alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/150" alt="slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/150" alt="slide 4" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
