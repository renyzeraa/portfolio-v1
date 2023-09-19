import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 
:root {
  font-size: 62.5%;
} */

html{
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background: ${({ theme }) => theme.COLORS.GRADIENT};
  overflow: hidden;
}

ul {
  list-style: none;
}

button , a {
  text-decoration: none;
  cursor: pointer;
  transition: filter 0.2s;
}

a {
  color: white;
}


button:hover {
  filter: brightness(0.9)
}

img {
  max-width: 100%;
  display: block;
}

strong {
  color:${({ theme }) => theme.COLORS.WHITE}; 
}


::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem grey; 
  background: black;  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:#b629f8; 
  border-radius:10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #A839FF; 
}

.wrapper {
  padding: 0 24px ;
}

.main-container {
  padding: 0 48px;
  overflow: visible;
  max-width: 1120px;
  margin: 28px auto;
}
`
