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
    queryMock.mockQuery({
      name: 'HomeQuery',
      data: mockAppQueryData
    })

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

    const element = getByTestId('home_page')
    expect(element instanceof HTMLElement).toBe(true)
  })
})
