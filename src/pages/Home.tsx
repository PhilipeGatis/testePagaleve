import React, { useCallback, Suspense } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from '../assets/animation.json'
import UserList from '../components/UserList'
import CircularLoadingCentred from '../components/CircularLoadingCentred'
import SearchField from '../components/SearchField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { loadQuery, useQueryLoader } from 'react-relay'
import Enviroment from '../relay/Enviroment'
import graphql from 'babel-plugin-relay/macro'
import { HomeQuery } from './__generated__/HomeQuery.graphql'

export const query = graphql`
  query HomeQuery($query: String!) {
    ...UserListFragment @arguments(query: $query)
  }
`

const prepare = loadQuery<HomeQuery>(Enviroment, query, { query: '' })

const Home: React.FC<RouteComponentProps> = () => {
  const [queryReference, load] = useQueryLoader<HomeQuery>(query, prepare)

  const fetch = useCallback(value => {
    load(value)
  }, [])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={4}>
      <Grid item xs={12}>
        <Box paddingTop={3}>
          <Lottie options={defaultOptions} height={200} width={200} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <SearchField onEnter={value => fetch({ query: value })} />
      </Grid>
      <Grid item xs={12} width={'100%'}>
        <Suspense fallback={<CircularLoadingCentred />}>
          <UserList queryReference={queryReference!} query={query} />
        </Suspense>
      </Grid>
    </Grid>
  )
}

export default Home
