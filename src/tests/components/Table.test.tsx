import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

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