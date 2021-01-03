import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import BarChart from '../../components/barChart/BarChart'
import { createOnClickHandler, getPaths } from '../testUtils'
import { testdata } from '../testdata'

// Constants
const handler = createOnClickHandler('USE_STATE')
const component = <BarChart data={testdata} onClick={handler} />

describe('BarChart is rendered correctly', () => {
  it('is truthy', () => {
    expect(BarChart).toBeTruthy()
  })

  it('chart is rendered', () => {
    const chart = render(component)
    expect(chart).toBeTruthy()
  })

  it('Victory container is rendered', () => {
    const { container } = render(component)
    const victoryContainers = container.getElementsByClassName('VictoryContainer')
    expect(victoryContainers).toHaveLength(1)
    expect(victoryContainers[0]).toBeTruthy()
  })
})

describe('Data is displayed correctly', () => {
  it('has data labels A-E', () => {
    render(component)
    const expectedLabels = [ 'A', 'B', 'C', 'D', 'E' ]
    expectedLabels.forEach(label =>
      expect(screen.getAllByText(label)).toHaveLength(1))
  })

  it('has five path elements representing bars', () => {
    const paths = getPaths(component)
    expect(paths).toHaveLength(5)
  })
})

describe('Bars should be clickable', () => {
  it('registers a click event', () => {
    const paths = getPaths(component)
    fireEvent.click(paths[0])
    expect(handler.fn).toHaveBeenCalled()
  })
})