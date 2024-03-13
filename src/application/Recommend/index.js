/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 14:43:31
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-03-13 16:02:26
 * @FilePath: \cloud-music\src\application\Recommend\index.js
 * @Description:
 *
 */
import React from "react";
import Slider from "../../components/slider";

function Recommend() {
  const imgs = [
    "https://pic2.zhimg.com/v2-bac89bd9789cafafaf7d4727ae2ea70d_b.jpg",
    "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_5.jpg",
    "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_1.jpg",
    "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_2.jpg",
  ];
  const bannerList = imgs.map((d) => {
    return { src: d };
  });

  return <Slider bannerList={bannerList} />;
}

export default Recommend;
