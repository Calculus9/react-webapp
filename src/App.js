/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 13:55:34
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-02-21 18:14:56
 * @FilePath: \cloud-music\src\App.js
 * @Description: 根组件
 *
 */
import React from "react";

import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { SetRoutes } from "./routes";

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62b;</i>
      <SetRoutes/>
      {/* <AllRouter /> */}
    </div>
  );
}

export default App;
