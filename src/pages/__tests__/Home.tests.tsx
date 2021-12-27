import * as React from 'react'
import { queryMock } from '../../__testUtils__/queryMock'
import Home from '../Home'
import { render } from '@testing-library/react'
import data from './mockData.json'
import { UserListFragment } from '../../components/UserList/__generated__/UserListFragment.graphql'
import { createMemoryHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import { RelayEnvironmentProvider } from 'react-relay'
import Environment from '../../relay/Enviroment'
import '@testing-library/jest-dom'

describe('UserList', () => {
  let mockAppQueryData: UserListFragment

  beforeEach(() => {
    // @ts-ignore
    mockAppQueryData = data
  })

  it('should render', async () => {
    /**
     * App fetches the query AppQuery. Here we mock it, telling it to return our mock
     * data declared above.
     */
    queryMock.mockQuery({
      name: 'HomeQuery',
      data: mockAppQueryData
    })

    /**
     * We mount the app and wait for our element that displays the app's content
     * to be visible.
     */

    const history = createMemoryHistory()

    const { getByTestId } = render(
      <RelayEnvironmentProvider environment={Environment}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </RelayEnvironmentProvider>
    )

    // The ProfileDisplayer displays the name, so we wait for that to appear
    const element = getByTestId('home_page')
    expect(element instanceof HTMLElement).toBe(true)
  })
})
