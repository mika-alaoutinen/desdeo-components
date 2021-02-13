import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'

import DataTableColumn from '../../../components/table/dataTable/DataTableColumn'

const data: number[] =[ 1, 2, 3 ]
const handler = jest.fn()
const component = <DataTableColumn data={data} onClick={handler} />

describe('DataTableColumn is rendered correctly', () => {
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

  it('background changes to whitesmoke on mouse hover and back to white on mouse leave', () => {
    const container = renderComponent()
    const row = container.querySelector('tr')
    if (row) {
      fireEvent.mouseEnter(row)
      expect(row).toHaveStyle({ background: 'whitesmoke' })
      fireEvent.mouseLeave(row)
      expect(row).toHaveStyle({ background: 'white' })
    }
  })
})

describe('Clicking on a table cell calls onClick function', () => {
  it('onClick is called', () => {
    const container = renderComponent()
    const row = container.querySelector('td')
    if (row) {
      fireEvent.click(row)
    }
    expect(handler).toHaveBeenCalled()
  })
})

const renderComponent = (): Element => {
  const tbody = document.createElement('tbody')
  const { container } = render(component, {
    container: document.body.appendChild(tbody)
  })
  return container
}