import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { renderComponent, renderDataLabels } from '../componentTests'
import { coordinateData } from '../../testdata'

import CoordinateTable from '../../../components/table/coordinateTable/CoordinateTable'

// Constants
const handler = jest.fn()
const component = <CoordinateTable data={coordinateData} onClick={handler} />

describe('Table is rendered correctly', () => {
  it('component is rendered', () => {
    renderComponent(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has data labels A-E', () => {
    renderDataLabels(component)
  })

  it('has headings Label, X, Y and Selected', () => {
    render(component)
    const expectedHeadings = [ 'Label', 'X', 'Y', 'Selected' ]
    expectedHeadings.forEach(heading =>
      expect(heading).toBeTruthy())
  })
})

describe('Rows should be clickable', () => {
  it('registers a click event', () => {
    render(component)
    fireEvent.click(screen.getByText('A'))
    expect(handler).toHaveBeenCalled()
  })
})