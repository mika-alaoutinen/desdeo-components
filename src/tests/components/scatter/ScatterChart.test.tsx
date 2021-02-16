import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
  dataShouldBeClickable, renderComponent, renderVictoryContainer, renderData
} from '../componentTests'
import { coordinates } from '../../testdata'

import ScatterChart from '../../../components/scatter/ScatterChart'

const handler = jest.fn()
const component = <ScatterChart data={coordinates} onClick={handler} />

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