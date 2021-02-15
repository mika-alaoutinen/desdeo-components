import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
  dataShouldBeClickable, renderComponent, renderVictoryContainer, renderData
} from '../componentTests'
import { DataSetTuple } from '../../../types/dataTypes'

import ScatterChartWrapper from '../../../components/scatter/ScatterChartWrapper'

const data: DataSetTuple = [
  { label: 'Label A', data: [ 1, 2, 3 ] },
  { label: 'Label B', data: [ 4, 5, 6 ] },
]

const handler = jest.fn()

const component = <ScatterChartWrapper data={data} onClick={handler} />

describe('Smoke tests for chart rendering', () => {
  it('scatter chart wrapper is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has three path elements representing data points', () => {
    renderData(component, 3)
  })

  it('chart has a Y-axis label', () => {
    render(component)
    expect(screen.getByText(/Label A/)).toBeInTheDocument()
  })

  it('chart has an X-axis label', () => {
    render(component)
    expect(screen.getByText(/Label B/)).toBeInTheDocument()
  })
})

describe('Data points should be clickable', () => {
  it('registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })
})