import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black-1: #212121;
    --white-1: #ffffff;
    --gray-1: #e5e5e5;
    --gray-2: #ccc;
    --gray-3: #fafafa;
    --gray-4: #f0f0f0;
    --orange-1: #fca311;
    --blue-1: #14213D;
    --blue-2: #1676fe;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
