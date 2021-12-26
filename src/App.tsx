import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './pages/Routes'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './lib/theme'
import { RelayEnvironmentProvider } from 'react-relay'

import Environment from './relay/Enviroment'

export const history = createBrowserHistory()

const App: React.FC = () => {
  return (
    <RelayEnvironmentProvider environment={Environment}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  )
}

export default App
