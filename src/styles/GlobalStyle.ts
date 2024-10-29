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
}
`;

export default GlobalStyle;
