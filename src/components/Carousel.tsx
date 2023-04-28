import React, { FC, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel.css";
import { EffectCoverflow, Pagination } from "swiper";

interface modeData {
  modeType: string;
  card1: string;
  card2: string;
  card3: string;
  card4: string;
  card5: string;
  card6: string;
}

const Carousel:FC<modeData> = (mode): ReactElement => {
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
          <a href="https://www.censorify.netlify.app" target="_blank" rel="noreferrer">
            <img src={mode.card1} alt="View Project"/>
          </a>
        </SwiperSlide>
        
        <SwiperSlide>
          <a href="https://www.npmjs.com/package/react-fancy-circular-carousel" target="_blank" rel="noreferrer">
            <img src={mode.card2} alt="View Project"/>
          </a>
        </SwiperSlide>
      
        <SwiperSlide>
          <a href="https://pehchaan.netlify.app" target="_blank" rel="noreferrer">
            <img src={mode.card3} alt="View Project"/>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://teetsy.netlify.app" target="_blank" rel="noreferrer">
            <img src={mode.card4} alt="View Project"/>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://chrome.google.com/webstore/detail/lookup-personal-vocabular/lamkbakfmcoaibacdbpgejffopbhhpgn?hl=en" target="_blank" rel="noreferrer">
            <img src={mode.card5} alt="View Project"/>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://typemaster1234.netlify.app" target="_blank" rel="noreferrer">
            <img src={mode.card6} alt="View Project"/>
          </a>
        </SwiperSlide>

      </Swiper>
      
    </>
  );
}

export default Carousel;