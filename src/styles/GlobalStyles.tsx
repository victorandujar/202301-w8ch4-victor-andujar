import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;

}

body {
  padding: 30px;
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  font-size: 62.5%;
  font-family: "Chakra Petch";
  margin: 0;
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;

}

a, a:visited, a:active{
text-decoration: none;
}

`;

export default GlobalStyles;
