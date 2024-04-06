import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


function ScrollImages() {


  return (

    <Swiper

      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={850}
      slidesPerView={3}
      loop={true}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img src="/images/slider/s1.webp" alt="Slide 1" width="900" height="500" style={{ marginRight: '10px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider/s2.webp" alt="Slide 1" width="900" height="500" style={{ marginRight: '10px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider/s3.webp" alt="Slide 1" width="900" height="500" style={{ marginRight: '10px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider/s5.webp" alt="Slide 1" width="900" height="500" style={{ marginRight: '10px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider/s6.webp" alt="Slide 1" width="900" height="500" style={{ marginRight: '10px' }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/slider/s7.webp" alt="Slide 1" width="900" height="500" style={{ marginRight: '10px' }} />
      </SwiperSlide>

    </Swiper>
  );
}

export default ScrollImages;
