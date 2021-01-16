import '@testing-library/jest-dom'

import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import TableRow from '../../../components/table/TableRow'
import { ROW_SELECTED_COLOR } from '../../../components/table/tableStyles'
import { Datum } from '../../../types/dataTypes'

// Constants
const handler = jest.fn()

describe('TableRow is rendered correctly', () => {
  it('is truthy', () => {
    expect(TableRow).toBeTruthy()
  })

  it('component is rendered', () => {
    expect(renderComponent(createDatum())).toBeTruthy()
  })
})

describe('Background color of a row changes on mouse hover', () => {
  it('background is white by default', () => {
    const container = renderComponent(createDatum())
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: 'white' })
  })

  it('background is #ffdfda when row is selected', () => {
    const container = renderComponent(createDatum(true))
    const row = container.querySelector('tr')
    expect(row).toHaveStyle({ background: ROW_SELECTED_COLOR })
  })

  it('background is whitesmoke on mouse hover', () => {
    const container = renderComponent(createDatum())
    const row = container.querySelector('tr')
    fireEvent.mouseEnter(row)
    expect(row).toHaveStyle({ background: 'whitesmoke' })
  })
})

describe('Clicking on a table row calls onClick function', () => {
  it('onClick is called', () => {
    const container = renderComponent(createDatum())
    const row = container.querySelector('tr')
    fireEvent.click(row)
    expect(handler).toHaveBeenCalled()
  })
})

const renderComponent = (datum: Datum): Element => {
  const component = createComponent(datum)
  const tbody = document.createElement('tbody')
  const { container } = render(component, {
    container: document.body.appendChild(tbody)
  })
  return container
}

const createComponent = (datum: Datum): JSX.Element =>
  <TableRow datum={datum} onClick={handler} />

const createDatum = (isSelected?: boolean): Datum => ({
  id: '123',
  label: 'A',
  isSelected,
  x: 1,
  y: 1
})