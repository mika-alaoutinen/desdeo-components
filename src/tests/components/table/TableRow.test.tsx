import '@testing-library/jest-dom'

import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { ROW_SELECTED_COLOR } from 'components/table/tableStyles'
import { Coordinate } from 'types/dataTypes'

import TableRow from 'components/table/TableRow'

// Constants
const handler = jest.fn()

describe('TableRow is rendered correctly', () => {
  it('component is rendered', () => {
    expect(renderComponent(createCoordinate())).toBeTruthy()
  })
})

describe('Background color of a row changes on mouse hover', () => {
  it('background is white by default', () => {
    const container = renderComponent(createCoordinate())
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: 'white' })
  })

  it('background is #ffdfda when row is selected', () => {
    const container = renderComponent(createCoordinate(true))
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: ROW_SELECTED_COLOR })
  })

  it('background is whitesmoke on mouse hover', () => {
    const container = renderComponent(createCoordinate())
    const row = container.querySelector('tr')
    fireEvent.mouseEnter(row)
    expect(row).toHaveStyle({ background: 'whitesmoke' })
  })
})

describe('Clicking on a table row calls onClick function', () => {
  it('onClick is called', () => {
    const container = renderComponent(createCoordinate())
    const row = container.querySelector('tr')
    fireEvent.click(row)
    expect(handler).toHaveBeenCalled()
  })
})

const renderComponent = (datum: Coordinate): Element => {
  const component = createComponent(datum)
  const tbody = document.createElement('tbody')
  const { container } = render(component, {
    container: document.body.appendChild(tbody)
  })
  return container
}

const createComponent = (datum: Coordinate): JSX.Element =>
  <TableRow datum={datum} onClick={handler} />

const createCoordinate = (isSelected?: boolean): Coordinate => ({
  id: '123',
  label: 'A',
  isSelected,
  x: 1,
  y: 1
})