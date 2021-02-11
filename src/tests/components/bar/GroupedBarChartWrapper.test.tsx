import React from 'react'
import { render, screen } from '@testing-library/react'

import {
  dataShouldBeClickable,
  getPaths,
  renderComponent,
  renderVictoryContainer
} from '../componentTests'
import { DataSet } from '../../../types/dataTypes'

import GroupedBarChartWrapper from '../../../components/bar/grouped/GroupedBarChartWrapper'

const data: DataSet = [
  { label: 'Label A', data: [ 1, 2, 3 ] },
  { label: 'Label B', data: [ 4, 5, 6 ] },
]

const handler = jest.fn()

const alternativesComponent =
  <GroupedBarChartWrapper
    data={data}
    grouping={'alternatives'}
    onClick={handler}
    orientation={'horizontal'}
  />

describe('Grouped bar wrapper is rendered correctly', () => {
  it('chart is rendered', () => {
    renderComponent(alternativesComponent)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(alternativesComponent)
  })
})

describe('Axes are displayed correctly', () => {
  it('Y axis should have three Alternative labels', () => {
    render(alternativesComponent)
    const labels = screen.getAllByText('Alternative')
    expect(labels).toHaveLength(3)
  })

  it('chart should have six bars', () => {
    expect(getPaths(alternativesComponent)).toHaveLength(6)
  })
})

describe('Bars should be interactive', () => {
  it('bar registers a click event', () => {
    dataShouldBeClickable(alternativesComponent, handler)
  })
})