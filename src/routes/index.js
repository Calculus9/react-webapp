/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 14:35:42
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-03-13 15:33:39
 * @FilePath: \cloud-music\src\routes\index.js
 * @Description:
 * 路由文件
 * 有主页、推荐、歌手、排名
 */
import React from "react";
import { Navigate, useRoutes,BrowserRouter } from "react-router-dom";
import Home from "../application/Home/index.js";
import Recommend from "../application/Recommend/index.js";
import Singer from "../application/Singer/index.js";
import Rank from "../application/Rank/index.js";

// 路由映射表
const routerMap = [
  {
    path: "/",
    element: <Home />,
    children: [
      // 此处添加嵌套路由
      {
        path: "/",
        exact: true,
        element: <Navigate to={"/recommend"} />, //其他没有注册过的统一重定位
      },
      {
        path: "/recommend",
        element: <Recommend />,
      },
      {
        path: "/singer",
        element: <Singer />,
      },
      {
        path: "/rank",
        element: <Rank />,
      },
    ],
  },
];

const GetRoutes = () => {
  const routes = useRoutes(routerMap);
  return routes;
};

const SetRoutes = () => {
  return (
    <BrowserRouter>
      <GetRoutes />
    </BrowserRouter>
  );
};

export { routerMap, SetRoutes };
