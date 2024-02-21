/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 13:55:34
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-02-21 16:10:00
 * @FilePath: \cloud-music\src\index.js
 * @Description:
 * 入口文件
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
