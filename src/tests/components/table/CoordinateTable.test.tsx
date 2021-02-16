import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { renderComponent } from '../componentTests'
import { coordinateData } from '../../../data/testdata'

import CoordinateTable from '../../../components/table/coordinateTable/CoordinateTable'

const handler = jest.fn()
const component = <CoordinateTable data={coordinateData} onClick={handler} />

describe('CoordinateTable is rendered correctly', () => {
  it('component is rendered', () => {
    renderComponent(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has headings Label, X, Y and Selected', () => {
    render(component)
    const expectedHeadings = [ 'Label', 'X', 'Y', 'Selected' ]
    expectedHeadings.forEach(heading =>
      expect(screen.getByText(heading)).toBeInTheDocument())
  })
})

describe('Rows should be clickable', () => {
  it('registers a click event', () => {
    const { container } = render(component)
    const td = container.querySelector('td')
    if (td) {
      fireEvent.click(td)
    }
    expect(handler).toHaveBeenCalled()
  })
})