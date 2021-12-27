import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import UserCard from '../UserCard'
import { usePaginationFragment } from 'react-relay'
import useInfiniteScroll from '../../hooks/useInfiniteScrool'
import { UserListFragment$key } from './__generated__/UserListFragment.graphql'
import graphql from 'babel-plugin-relay/macro'
import Zoom from '@mui/material/Zoom'
import { CircularProgress } from '@mui/material'

const query = graphql`
  fragment UserListFragment on Query
  @argumentDefinitions(cursor: { type: "String" }, count: { type: "Int", defaultValue: 30 }, query: { type: "String!" })
  @refetchable(queryName: "UserListPaginationQuery") {
    search(after: $cursor, first: $count, type: USER, query: $query) @connection(key: "UserListFragment_search") {
      edges {
        __id
        node {
          ...UserCardFragment
        }
      }
    }
  }
`

interface Props {
  search: UserListFragment$key
}

const UserList: React.FC<Props> = ({ search }) => {
  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(query, search)

  const [sentryRef] = useInfiniteScroll({
    loading: isLoadingNext,
    hasNextPage: hasNext,
    onLoadMore: () => {
      loadNext(30)
    },
    rootMargin: '0px 0px 400px 0px'
  })

  return (
    <>
      <Grid container spacing={2}>
        {data?.search?.edges?.map((user, i) => {
          if (user == null || user.node == null) return null
          return (
            <Zoom data-testid={user.__id} key={user.__id} in>
              <Grid item xs={12} md={6} xl={4}>
                <UserCard userRef={user.node} />
              </Grid>
            </Zoom>
          )
        })}
      </Grid>
      {hasNext && (
        <div ref={sentryRef}>
          <Box sx={{ width: '100%', textAlign: 'center', margin: '12px 24px' }}>
            <CircularProgress variant="indeterminate" />
          </Box>
        </div>
      )}
    </>
  )
}

export default UserList
