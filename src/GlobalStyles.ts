import { createGlobalStyle } from "styled-components";
import Circle from "./assets/circle.svg";

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
input, select {
  border: none;
  &:focus{
    outline: none;
    }
}
body{
  background: no-repeat top left url(${Circle}) #EAF2F2;
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif, 'Noto Sans SC';
}
`;
export default GlobalStyles;
