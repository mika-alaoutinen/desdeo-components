import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
  clickingOnCellCallsClickHandler,
  colorShouldChangeOnMouseHover,
  defaultColorShouldBeWhite,
  renderTableComponent,
} from './tableRowTests'

import { ROW_SELECTED_COLOR } from '../../../components/table/tableStyles'
import { Coordinate } from '../../../types/dataTypes'

import CoordinateTableColumn from '../../../components/table/coordinateTable/CoordinateTableColumn'

const handler = jest.fn()

describe('CoordinateTableColumn is rendered correctly', () => {
  it('component is rendered', () => {
    const component = createComponent(createCoordinate())
    expect(renderTableComponent(component)).toBeTruthy()
  })

  it('if coordinate has no label, show text "no label"', () => {
    const coordinate: Coordinate = {
      id: '123',
      x: 1,
      y: 1,
    }

    const component = createComponent(coordinate)
    renderTableComponent(component)
    expect(screen.getByText(/no label/)).toBeInTheDocument()
  })
})

describe('Background color of a row changes', () => {
  it('background is white by default', () => {
    const component = createComponent(createCoordinate())
    defaultColorShouldBeWhite(component)
  })

  it('background changes to whitesmoke on mouse hover and back to white on mouse leave', () => {
    const component = createComponent(createCoordinate())
    colorShouldChangeOnMouseHover(component)
  })

  it('background is #ffdfda when row is selected', () => {
    const component = createComponent(createCoordinate(true))
    const container = renderTableComponent(component)
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: ROW_SELECTED_COLOR })
  })
})

describe('Clicking on a table cell calls onClick function', () => {
  it('onClick is called', () => {
    const component = createComponent(createCoordinate())
    clickingOnCellCallsClickHandler(component, handler)
  })
})

const createComponent = (coordinate: Coordinate): JSX.Element => (
  <CoordinateTableColumn coordinate={coordinate} onClick={handler} />
)

const createCoordinate = (isSelected?: boolean): Coordinate => ({
  id: '123',
  label: 'A',
  isSelected,
  x: 1,
  y: 1,
})
