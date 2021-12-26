import { Variables } from 'react-relay'
import {
  GraphQLResponse,
  ObservableFromValue,
  Environment,
  Network,
  RecordSource,
  Store,
  LogRequestInfoFunction
} from 'relay-runtime'

export const relayTransactionLogger: LogRequestInfoFunction = event => {
  console.log('RELAY: ', event)
}

export const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL || ''

const headers = {
  Accept: 'application/json',
  'Content-type': 'application/json',
  Authorization: `bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`
}

const fetchQuery = (operation: any, variables: Variables): ObservableFromValue<GraphQLResponse> => {
  const body = JSON.stringify({
    query: operation.text, // GraphQL text from input
    variables
  })

  const response = fetch(GRAPHQL_URL, {
    method: 'POST',
    headers,
    body
  }).then(res => res.json())

  return response
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
  log: relayTransactionLogger
})
