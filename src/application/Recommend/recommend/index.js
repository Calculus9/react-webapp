/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-03-14 15:40:17
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-03-14 16:01:27
 * @FilePath: \cloud-music\src\application\Recommend\recommend\index.js
 * @Description: 推荐列表
 *
 */
import React from "react";
import "./index.css";

const RecommendList = (props) => {
  const { recommendList } = props;
  // console.log(recommendList);
  return (
    <>
      <div style={{padding:"10px"}}>
        <h1 style={{ fontWeight: 600 }}>推荐歌单</h1>
      </div>

      <div className="recommendWrapper" style={{padding:"0 10px 0 10px"}}>
        {recommendList?.map((d) => {
          return <div className="recommendItem">
            <img src={d.picUrl} alt={d.picUrl}/>
            <div>{d.name}</div>
          </div>;
        })}
      </div>
    </>
  );
};

export default React.memo(RecommendList);
