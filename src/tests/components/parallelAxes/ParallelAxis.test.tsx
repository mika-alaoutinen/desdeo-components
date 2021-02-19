import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { renderComponent, renderVictoryContainer } from '../componentTests'

import ParallelAxesWrapper from '../../../components/parallelAxes/ParallelAxesWrapper'
import { dataset } from '../../testdata'

const component = <ParallelAxesWrapper data={dataset} />

describe('Smoke tests for ParallelAxes rendering', () => {
  it('chart is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('chart has attribute labels', () => {
    render(component)
    expect(screen.getAllByText(/label/)).toHaveLength(2)
  })

  it('has two vertical brush bars', () => {
    const { container } = render(component)
    const brushBars = container.querySelectorAll('rect[role="presentation"]')
    expect(brushBars).toHaveLength(2)
  })

  it('has three lines representing datasets', () => {
    const { container } = render(component)
    const lines = container.querySelectorAll('path[role="presentation"]')
    expect(lines).toHaveLength(3)
  })

  it('vertical brush bars have max values of 3 and 6', () => {
    render(component)
    expect(screen.getByText(/3/)).toBeInTheDocument()
    expect(screen.getByText(/6/)).toBeInTheDocument()
  })
})
