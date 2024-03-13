/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-03-13 15:40:14
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-03-13 16:39:01
 * @FilePath: \cloud-music\src\components\slider\index.js
 * @Description:
 *
 */
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";
import { SliderContainer } from "./style";

function Slider(props) {
  const { bannerList } = props;
  return (
    <div style={{position:"relative"}}>
      <Swiper
        loop
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {bannerList.map((d) => {
          return (
            <SwiperSlide className="slider-width">
              <img src={d.src} alt={d.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderContainer ></SliderContainer>
    </div>
  );
}
export default React.memo(Slider);
