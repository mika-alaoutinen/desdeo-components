import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
  renderComponent, renderVictoryContainer, renderData
} from '../componentTests'
import { coordinates } from '../../testdata'

import ScatterSelection from '../../../components/scatter/ScatterSelection'

const onSelect = jest.fn()
const onSelectionCleared = jest.fn()

const component =
  <ScatterSelection
    data={coordinates}
    onSelect={onSelect}
    onSelectionCleared={onSelectionCleared}
  />

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