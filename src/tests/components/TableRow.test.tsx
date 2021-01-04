import '@testing-library/jest-dom'

import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import TableRow from '../../components/table/TableRow'
import { ROW_SELECTED_COLOR } from '../../components/table/tableStyles'
import { Datum } from '../../types/dataTypes'

describe('TableRow is rendered correctly', () => {
  it('is truthy', () => {
    expect(TableRow).toBeTruthy()
  })

  it('component is rendered', () => {
    expect(renderComponent()).toBeTruthy()
  })
})

describe('Background color of a row changes on mouse hover', () => {
  it('background is white by default', () => {
    const container = renderComponent()
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: 'white' })
  })

  it('background is #ffdfda when row is selected', () => {
    const container = renderComponent(true)
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: ROW_SELECTED_COLOR })
  })

  it('background is whitesmoke on mouse hover', () => {
    const container = renderComponent()
    const row = container.querySelector('tr')
    fireEvent.mouseEnter(row)
    expect(row).toHaveStyle({ background: 'whitesmoke' })
  })
})

const renderComponent = (isSelected?: boolean): Element => {
  const component = createComponent(isSelected)
  const tbody = document.createElement('tbody')
  const { container } = render(component, {
    container: document.body.appendChild(tbody)
  })
  return container
}

const createComponent = (isSelected?: boolean): JSX.Element => {
  const datum: Datum = {
    id: '123',
    label: 'A',
    isSelected,
    x: 1,
    y: 1
  }

  return <TableRow datum={datum} onClick={jest.fn()} />
}