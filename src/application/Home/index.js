/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 14:36:56
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-02-21 19:59:56
 * @FilePath: \cloud-music\src\application\Home\index.js
 * @Description: 主页
 *
 */
import React from "react";
import { ChildRouter } from "../../routes/router";
import { Top } from "./style";


const tabData = [
  { title: 'Example' },
  { title: 'Example' },
  { title: 'Example' },
];

function Home() {
  return (
    <>

      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Webapp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      {/* <Tabs tabs={tabData}></Tabs> */}
      <ChildRouter />
    </>
  );
}

export default React.memo(Home);
