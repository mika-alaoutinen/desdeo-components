import React from 'react'
import { render, screen } from '@testing-library/react'

import { renderComponent, renderVictoryContainer } from '../componentTests'
import { parallelAxesData } from '../../testdata'

import ParallelAxes from '../../../components/parallelAxes/component/ParallelAxes'

const attributes = ['wq fishery', 'wq city', 'roi', 'city tax']

const component =
  <ParallelAxes
    attributes={attributes}
    data={parallelAxesData}
    maxTickValues={[ 6.1, 3.5, 6.9, 9.0 ]}
  />

describe('ParallelAxes is rendered correctly', () => {
  it('chart is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has given attribute labels', () => {
    render(component)
    attributes.forEach(attribute =>
      expect(screen.getByText(attribute)).toBeTruthy())
  })

  it('has four vertical brush bars', () => {
    const { container } = render(component)
    const brushBars = container.querySelectorAll('rect[role="presentation"]')
    expect(brushBars).toHaveLength(4)
  })

  it('has two lines representing datasets', () => {
    const { container } = render(component)
    const lines = container.querySelectorAll('path[role="presentation"]')
    expect(lines).toHaveLength(2)
  })
})