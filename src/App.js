/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 13:55:34
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-03-13 15:29:42
 * @FilePath: \cloud-music\src\App.js
 * @Description: 根组件
 *
 */
import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { SetRoutes, routerMap } from "./routes";
import store from "./store/index";
import { RouterProvider } from "react-router";
function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <i className="iconfont">&#xe62b;</i>
        {/* <RouterProvider router={routerMap} /> */}
        <SetRoutes />
      </div>
    </Provider>
  );
}

export default App;
