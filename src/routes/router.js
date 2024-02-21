/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 15:51:13
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-02-21 16:11:45
 * @FilePath: \cloud-music\src\routes\router.js
 * @Description:
 *
 */

import { useRoutes } from "react-router";
import { routerMap } from "./index";

function AllRouter() {
  const routerTab = useRoutes(routerMap); // 注册前端路由表

  return <div>{routerTab}</div>;
}

function ChildRouter() {
  const routerTab = useRoutes(routerMap[0].children);
  
  return <div>{routerTab}</div>;
}

export { AllRouter, ChildRouter };
