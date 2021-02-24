import React from 'react'
import '@testing-library/jest-dom'

import {
  clickingOnCellCallsClickHandler,
  colorShouldChangeOnMouseHover,
  defaultColorShouldBeWhite,
  renderTableComponent,
} from './tableRowTests'

import DataTableColumn from '../../../components/table/dataTable/DataTableColumn'
import { Value } from '../../../types/dataTypes'

const data: Value[] = [
  { id: '1', isSelected: true, value: 1 },
  { id: '2', isSelected: false, value: 2 },
  { id: '3', isSelected: false, value: 3 },
]

const handler = jest.fn()
const component = <DataTableColumn data={data} onClick={handler} />

describe('DataTableColumn is rendered correctly', () => {
  it('component is rendered', () => {
    expect(renderTableComponent(component)).toBeTruthy()
  })
})

describe('Background color of a row changes', () => {
  it('background is white by default', () => {
    defaultColorShouldBeWhite(component)
  })

  it('background changes to whitesmoke on mouse hover and back to white on mouse leave', () => {
    colorShouldChangeOnMouseHover(component)
  })

  it('font color is tomato when cell is selected', () => {
    const container = renderTableComponent(component)
    const cell = container.querySelector('td')
    if (cell) {
      expect(cell).toHaveStyle({ color: 'tomato' })
    }
  })
})

describe('Clicking on a table cell calls onClick function', () => {
  it('onClick is called', () => {
    clickingOnCellCallsClickHandler(component, handler)
  })
})
