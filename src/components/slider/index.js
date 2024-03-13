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
import "./index.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider(props) {
  const { bannerList } = props;
  return (
    <Swiper
      // install Swiper modules
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {bannerList.map((d) => {
        return (
          <SwiperSlide>
            <img src={d.src} alt={d.src} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default React.memo(Slider);
