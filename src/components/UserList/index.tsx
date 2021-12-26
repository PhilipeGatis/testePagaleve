import React from 'react'
import { usePreloadedQuery, PreloadedQuery, GraphQLTaggedNode } from 'react-relay'
import UserList from './UserList'
import { HomeQuery } from '../../pages/__generated__/HomeQuery.graphql'

const Wrapper: React.FC<{
  queryReference: PreloadedQuery<HomeQuery>
  query: GraphQLTaggedNode
}> = ({ queryReference, query }) => {
  const data = usePreloadedQuery(query, queryReference)
  return <UserList search={data} />
}

export default Wrapper
