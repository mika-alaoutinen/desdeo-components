import React from 'react'
import { render, screen } from '@testing-library/react'

import { renderComponent, renderVictoryContainer } from '../componentTests'
import { parallelAxesData } from '../../testdata'

import ParallelAxes from '../../../components/parallelAxes/ParallelAxes'

// Constants
const component = <ParallelAxes data={parallelAxesData} />

describe('ParallelAxes is rendered correctly', () => {
  it('chart is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has attribute labels strength, intelligence and luck', () => {
    render(component)
    const attributes = [ 'strength', 'intelligence', 'luck' ]
    attributes.forEach(attribute =>
      expect(screen.getByText(attribute)).toBeTruthy())
  })

  it('has three vertical brush bars', () => {
    const { container } = render(component)
    const brushBars = container.querySelectorAll('rect[role="presentation"]')
    expect(brushBars.length).toBe(3)
  })

  it('has three lines representing datasets', () => {
    const { container } = render(component)
    const lines = container.querySelectorAll('path[role="presentation"]')
    expect(lines.length).toBe(3)
  })
})