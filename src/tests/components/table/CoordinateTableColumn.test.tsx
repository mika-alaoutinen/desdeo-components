import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ROW_SELECTED_COLOR } from '../../../components/table/tableStyles'
import { Coordinate } from '../../../types/dataTypes'

import CoordinateTableColumn from '../../../components/table/coordinateTable/CoordinateTableColumn'

const handler = jest.fn()

describe('CoordinateTableColumn is rendered correctly', () => {
  it('component is rendered', () => {
    expect(renderComponent(createCoordinate())).toBeTruthy()
  })

  it('if coordinate has no label, show text "no label"', () => {
    const coordinate: Coordinate = {
      id: '123',
      x: 1,
      y: 1
    }
    renderComponent(coordinate)
    expect(screen.getByText(/no label/)).toBeInTheDocument()
  })
})

describe('Background color of a row changes on mouse hover', () => {
  it('background is white by default', () => {
    const container = renderComponent(createCoordinate())
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: 'white' })
  })

  it('background changes to whitesmoke on mouse hover and back to white on mouse leave', () => {
    const container = renderComponent(createCoordinate())
    const row = container.querySelector('tr')
    if (row) {
      fireEvent.mouseEnter(row)
      expect(row).toHaveStyle({ background: 'whitesmoke' })
      fireEvent.mouseLeave(row)
      expect(row).toHaveStyle({ background: 'white' })
    }
  })

  it('background is #ffdfda when row is selected', () => {
    const container = renderComponent(createCoordinate(true))
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: ROW_SELECTED_COLOR })
  })
})

describe('Clicking on a table cell calls onClick function', () => {
  it('onClick is called', () => {
    const container = renderComponent(createCoordinate())
    const row = container.querySelector('td')
    if (row) {
      fireEvent.click(row)
    }
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

const createComponent = (coordinate: Coordinate): JSX.Element =>
  <CoordinateTableColumn coordinate={coordinate} onClick={handler} />

const createCoordinate = (isSelected?: boolean): Coordinate => ({
  id: '123',
  label: 'A',
  isSelected,
  x: 1,
  y: 1
})