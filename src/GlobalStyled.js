import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const baseLayoutSize = {
  padding: "150px 15%",
};

export const fontSize = {
  title: "80px",
  menu: "18px",
  desc: "16px",
};

export const colors = {
  darkGray: "#1d1d1d",
  black: "#333",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
    a{
      text-decoration: none;
      color: ${colors.darkGray};
    }
`;
