import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "swiper/swiper-bundle.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MySlider() {

	return (
		// <Swiper
		// 	spaceBetween={50}
		// 	slidesPerView={3}
		// 	navigation
		// 	pagination={{ clickable: true }}
		// 	scrollbar={{ draggable: true }}
		// >
		// 	<SwiperSlide>Slide 1</SwiperSlide>
		// 	<SwiperSlide>Slide 2</SwiperSlide>
		// 	<SwiperSlide>Slide 3</SwiperSlide>
		// 	{/* Add more slides as needed */}
    // </Swiper>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
	);
}

export default MySlider;
