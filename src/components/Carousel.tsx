import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel.css";
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <a href="https://pehchaan.netlify.app" target="_blank" rel="noreferrer">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </a>
        </SwiperSlide>
      
        <SwiperSlide>
          <a href="https://teetsy.netlify.app" target="_blank" rel="noreferrer">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://midday.netlify.app" target="_blank" rel="noreferrer">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://chrome.google.com/webstore/detail/lookup-personal-vocabular/lamkbakfmcoaibacdbpgejffopbhhpgn?hl=en" target="_blank" rel="noreferrer">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://typemaster1234.netlify.app" target="_blank" rel="noreferrer">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </a>
        </SwiperSlide>

      </Swiper>
      
    </>
  );
}
