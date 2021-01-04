import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Table from '../../components/table/Table'
import { renderComponent, renderDataLabels } from './componentTests'
import { createOnClickHandler } from '../testUtils'
import { testdata } from '../testdata'

// Constants
const handler = createOnClickHandler('USE_STATE')
const component = <Table data={testdata} onClick={handler} />

describe('Table is rendered correctly', () => {
  it('is truthy', () => {
    expect(Table).toBeTruthy()
  })

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
    expect(handler.fn).toHaveBeenCalled()
  })
})

describe('Background color of a row changes on mouse hover', () => {
  it('selected row has color #ffdfda', () => {
    const { container } = render(component)
    const rows = getTableRows(container)
    expect(rows[0]).toHaveStyle({ background: '#ffdfda' })
  })

  it('default row color is white', () => {
    const { container } = render(component)
    const rows = getTableRows(container)
    expect(rows[1]).toHaveStyle({ background: 'white' })
  })

  it('row color is whitesmoke when mouse is hovered over it', () => {
    const { container } = render(component)
    const rows = getTableRows(container)
    fireEvent.mouseEnter(rows[1])
    expect(rows[1]).toHaveStyle({ background: 'whitesmoke' })
  })
})

const getTableRows = (container: Element): NodeListOf<Element> => {
  return container.querySelectorAll('tbody > tr')
}