/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 14:43:31
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-03-14 15:45:02
 * @FilePath: \cloud-music\src\application\Recommend\index.js
 * @Description:
 *
 */
import React from "react";
import Slider from "../../components/slider";
import RecommendList from "./recommend";
import { recommendListData } from "./mock";

function Recommend() {
  // mockdata
  const imgs = [
    "https://pic2.zhimg.com/v2-bac89bd9789cafafaf7d4727ae2ea70d_b.jpg",
    "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_5.jpg",
    "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_1.jpg",
    "https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/large_image_2.jpg",
  ];



  // Data
  const bannerList = imgs.map((d) => {
    return { src: d };
  });
  
  const recommendList = recommendListData.map((d) => {
    return {
      id: d,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  })

  return (
    <>
      <Slider bannerList={bannerList} />
      <RecommendList recommendList={recommendList}/>
    </>
  );
}

export default Recommend;
