import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import {
  renderComponent, renderVictoryContainer, renderData
} from '../componentTests'
import { DataSetTuple } from '../../../types/dataTypes'

import ScatterSelectionWrapper from '../../../components/scatter/ScatterSelectionWrapper'

const data: DataSetTuple = [
  { label: 'Label A', data: [ 1, 2, 3 ] },
  { label: 'Label B', data: [ 4, 5, 6 ] },
]

const onSelect = jest.fn()
const onSelectionCleared = jest.fn()

const component =
  <ScatterSelectionWrapper
    data={data}
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