import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CircularLoadingCentred from '../components/CircularLoadingCentred'
import Container from '@mui/material/Container'

const Home = lazy(() => import('./Home'))

const Routes: React.FC = () => {
  return (
    <Router>
      <Container>
        <Suspense fallback={CircularLoadingCentred}>
          <Switch>
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  )
}

export default Routes
