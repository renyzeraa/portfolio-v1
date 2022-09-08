import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100}; 
}

ul {
  list-style: none;
}

button , a {
  text-decoration: none;
  cursor: pointer;
  transition: filter 0.2s;
}

a:hover {
  font-weight: bold !important;
}

button:hover {
  filter: brightness(0.9)
}

img {
  max-width: 100%;
  display: block;
}

`
