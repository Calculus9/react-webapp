/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 16:13:38
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-02-21 16:20:39
 * @FilePath: \cloud-music\src\assets\global-style.js
 * @Description: 全局样式配置
 *
 */

const extendClick = () => {
  return ` position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -10px; bottom: -10px; left: -10px; right: -10px;
    };`;
};
// 一行文字溢出部分用... 代替
const noWrap = () => {
  return `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `;
};

export default {
  "theme-color": "#94BFFF",
  "theme-color-shadow": "#BEDAFF",
  "font-color-light": "#f1f1f1",
  "font-color-desc": "#2E3030",
  "font-color-desc-v2": "#bba8a8", // 略淡
  "font-size-ss": "10px",
  "font-size-s": "12px",
  "font-size-m": "14px",
  "font-size-l": "16px",
  "font-size-ll": "18px",
  "border-color": "#e4e4e4",
  "background-color": "#f2f3f4",
  "background-color-shadow": "rgba (0, 0, 0, 0.3)",
  "highlight-background-color": "#fff",
  extendClick,
  noWrap,
};
