/*
 * @Author: hh 1441211576@qq.com
 * @Date: 2024-02-21 16:14:39
 * @LastEditors: hh 1441211576@qq.com
 * @LastEditTime: 2024-02-21 16:14:43
 * @FilePath: \cloud-music\src\application\Home\style.js
 * @Description:
 * Home样式：导航栏
 */
import styled from "styled-components";
import style from "../../assets/global-style";

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  & > span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`;
