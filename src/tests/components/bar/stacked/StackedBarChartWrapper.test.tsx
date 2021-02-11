import React from 'react'
import { render, screen } from '@testing-library/react'

import {
  dataShouldBeClickable,
  getPaths,
  renderComponent,
  renderVictoryContainer
} from '../../componentTests'
import { DataSet } from '../../../../types/dataTypes'

import StackedBarChartWrapper from '../../../../components/bar/stacked/StackedBarChartWrapper'
import { Grouping } from '../../../../types/chartTypes'

const data: DataSet = [
  { label: 'Label A', data: [ 1, 2, 3 ] },
  { label: 'Label B', data: [ 4, 5, 6 ] },
]

const handler = jest.fn()

const createComponent = (grouping: Grouping): JSX.Element =>
  <StackedBarChartWrapper
    data={data}
    grouping={grouping}
    onClick={handler}
    orientation={'horizontal'}
  />

const alternativesComponent = createComponent('alternatives')
const criteriaComponent = createComponent('criteria')

describe('Smoke tests for chart rendering', () => {
  it('alternatives chart: is rendered', () => {
    renderComponent(alternativesComponent)
  })

  it('alternative chart: Victory container is rendered', () => {
    renderVictoryContainer(alternativesComponent)
  })

  it('criteria chart: is rendered', () => {
    renderComponent(criteriaComponent)
  })

  it('criteria chart: Victory container is rendered', () => {
    renderVictoryContainer(criteriaComponent)
  })
})

describe('Chart axes are displayed correctly', () => {
  it('alternatives bar: Y axis should have three Alternative labels', () => {
    render(alternativesComponent)
    const labels = screen.getAllByText('Alternative')
    expect(labels).toHaveLength(3)
  })

  it('alternatives bar: chart should have six bars', () => {
    expect(getPaths(alternativesComponent)).toHaveLength(6)
  })

  it('criteria bar: Y axis should have two criteria labels', () => {
    render(criteriaComponent)
    const labels = screen.getAllByText('Label')
    expect(labels).toHaveLength(2)
  })

  it('criteria bar: chart should have six bars', () => {
    expect(getPaths(criteriaComponent)).toHaveLength(6)
  })
})

describe('Bars should be interactive', () => {
  it('alternatives bar: registers a click event', () => {
    dataShouldBeClickable(alternativesComponent, handler)
  })

  it('criteria bar: registers a click event', () => {
    dataShouldBeClickable(criteriaComponent, handler)
  })
})