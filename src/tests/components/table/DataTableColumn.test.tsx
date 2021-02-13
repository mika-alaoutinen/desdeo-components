import React from 'react'
import '@testing-library/jest-dom'

import {
  clickingOnCellCallsClickHandler,
  colorShouldChangeOnMouseHover,
  defaultColorShouldBeWhite,
  renderTableComponent
} from './tableRowTests'

import DataTableColumn from '../../../components/table/dataTable/DataTableColumn'

const data: number[] =[ 1, 2, 3 ]
const handler = jest.fn()
const component = <DataTableColumn data={data} onClick={handler} />

describe('DataTableColumn is rendered correctly', () => {
  it('component is rendered', () => {
    expect(renderTableComponent(component)).toBeTruthy()
  })
})

describe('Background color of a row changes on mouse hover', () => {
  it('background is white by default', () => {
    defaultColorShouldBeWhite(component)
  })

  it('background changes to whitesmoke on mouse hover and back to white on mouse leave', () => {
    colorShouldChangeOnMouseHover(component)
  })
})

describe('Clicking on a table cell calls onClick function', () => {
  it('onClick is called', () => {
    clickingOnCellCallsClickHandler(component, handler)
  })
})