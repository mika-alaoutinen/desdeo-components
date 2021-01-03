import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import BarChart from '../../components/barChart/BarChart'
import { createOnClickHandler } from '../testUtils'
import { testdata } from '../testdata'

const handler = createOnClickHandler('USE_STATE')

describe('BarChart is rendered correctly', () => {
  it('is truthy', () => {
    expect(BarChart).toBeTruthy()
  })

  it('chart is rendered', () => {
    const chart = render(<BarChart data={testdata} onClick={handler} />)
    expect(chart).toBeTruthy()
  })

  it('Victory container is rendered', () => {
    const { container } = render(<BarChart data={testdata} onClick={handler} />)
    const victoryContainers = container.getElementsByClassName('VictoryContainer')
    expect(victoryContainers).toHaveLength(1)
    expect(victoryContainers[0]).toBeTruthy()
  })
})

describe('Data is displayed correctly', () => {
  it('has data labels A-E', () => {
    render(<BarChart data={testdata} onClick={handler} />)
    const expectedLabels = [ 'A', 'B', 'C', 'D', 'E' ]
    expectedLabels.forEach(label =>
      expect(screen.getAllByText(label)).toHaveLength(1))
  })

  it('has five path elements representing bars', () => {
    expect(getPaths()).toHaveLength(5)
  })
})

describe('Bars should be clickable', () => {
  it('registers a click event', () => {
    const paths = getPaths()
    fireEvent.click(paths[0])
    expect(handler.fn).toHaveBeenCalled()
  })
})

// Utility functions
const getPaths = (): NodeListOf<SVGPathElement> => {
  const { container } = render(<BarChart data={testdata} onClick={handler} />)
  return container.querySelectorAll('path')
}