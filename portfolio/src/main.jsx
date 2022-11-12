import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Projects />
    </ThemeProvider>
  </React.StrictMode>
)
