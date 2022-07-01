import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
  color: #333;
  --type-first: Helvetica, Arial, sans-serif;
  --type-second:' Spectral', Georgia;
  font-family: var(--type-first);
  padding-top: 4rem;
}

h1,h2, h3, h4, p {
margin: 0px;
}

ul, li {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}
button{
  display: block;
  font-size: 1rem;
  font-family: var(--type-first);
  color: #333;
}

a{
  text-decoration: none;
}
.container{
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
}
input{
  display: block;
}

`;

export default GlobalStyle;