/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 14:36:56
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-02-22 19:45:43
 * @FilePath: \cloud-music\src\application\Home\index.js
 * @Description: 主页
 *
 */
import React from "react";
import { ChildRouter } from "../../routes/router";
import { Top, Tab, TabItem } from "./style";
import { NavLink } from "react-router-dom";

const tabData = [
  { title: "Example" },
  { title: "Example" },
  { title: "Example" },
];

function Home() {
  return (
    <>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Webapp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink
          to="/recommend"
          className={({ isActive }) => (isActive ? " selected" : "")}
        >
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink
          to="/singer"
          className={({ isActive }) => (isActive ? " selected" : "")}
        >
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink
          to="/rank"
          className={({ isActive }) => (isActive ? " selected" : "")}
        >
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      <ChildRouter />
    </>
  );
}

export default React.memo(Home);
