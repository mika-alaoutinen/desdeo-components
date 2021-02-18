import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
  dataShouldBeClickable,
  renderComponent,
  renderVictoryContainer,
  renderData,
} from '../componentTests'
import { coordinates } from '../../testdata'

import ScatterChart from '../../../components/scatter/ScatterChart'

const handler = jest.fn()
const component = (
  <ScatterChart data={coordinates} onClick={handler} xAxisLabel='Label A' yAxisLabel='Label B' />
)

describe('Smoke tests for chart rendering', () => {
  it('scatter chart wrapper is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has five path elements representing data points', () => {
    renderData(component, 5)
  })

  it('chart has axis labels', () => {
    render(component)
    expect(screen.getByText(/Label A/)).toBeInTheDocument()
    expect(screen.getByText(/Label B/)).toBeInTheDocument()
  })
})

describe('Data points should be clickable', () => {
  it('registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })
})
