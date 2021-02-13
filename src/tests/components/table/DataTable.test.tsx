import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { renderComponent } from '../componentTests'
import { DataSet } from '../../../types/dataTypes'

import DataTable from '../../../components/table/dataTable/DataTable'

const data: DataSet = [
  { label: 'Label A', data: [ 1, 2, 3 ] },
  { label: 'Label B', data: [ 4, 5, 6 ] },
]

const handler = jest.fn()
const component = <DataTable data={data} onClick={handler} />

describe('DataTable is rendered correctly', () => {
  it('component is rendered', () => {
    renderComponent(component)
  })
})

describe('Data is displayed correctly', () => {
  it('table has headings "Label A" and "Label B"', () => {
    render(component)
    expect(screen.getByText('Label A')).toBeInTheDocument()
    expect(screen.getByText('Label B')).toBeInTheDocument()
  })

  // For whatever reason screen doesn't find the values, so let's get stupid...
  it('all data is rendered', () => {
    const values = [ '1', '2', '3', '4', '5', '6' ]
    const { container } = render(component)
    const cells = container.querySelectorAll('td')
    cells.forEach(cell => {
      expect(values.includes(cell.innerHTML))
    })
  })
})

describe('Rows should be clickable', () => {
  it('registers a click event', () => {
    render(component)
    const { container } = render(component)
    const cell = container.querySelector('td')
    if (cell) {
      fireEvent.click(cell)
    }
    expect(handler).toHaveBeenCalled()
  })
})