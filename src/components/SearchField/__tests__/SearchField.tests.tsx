import * as React from 'react'
import SearchField from '../index'
import { render, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

describe('UserList', () => {
  it('should render', async () => {
    const mockCallback = jest.fn(value => {
      console.log(value)
    })
    const { getByTestId } = render(<SearchField onEnter={mockCallback} />)

    // The ProfileDisplayer displays the name, so we wait for that to appear
    const element = getByTestId('searchField')
    expect(element instanceof HTMLInputElement).toBe(true)
  })

  it('should be change on type', async () => {
    const mockCallback = jest.fn(value => {
      console.log(value)
    })
    const { getByTestId } = render(<SearchField onEnter={mockCallback} />)

    // The ProfileDisplayer displays the name, so we wait for that to appear
    const element = getByTestId('searchField')
    fireEvent.input(element, { target: { value: 'Philipe' } })
    expect((element as HTMLInputElement).value).toBe('Philipe')
  })
})
