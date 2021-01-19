import React from 'react'
import { render, screen } from '@testing-library/react'

import {
  dataShouldBeClickable,
  getPaths,
  renderComponent,
  renderVictoryContainer,
  shouldDisplayLabelOnMouseOver
} from '../componentTests'
import { coordinateSets } from '../../testdata'

import StackedBarChart from '../../../components/bar/StackedBarChart'

// Constants
const handler = jest.fn()
const component = <StackedBarChart datasets={coordinateSets} onClick={handler} />

describe('StackedBarChart is rendered correctly', () => {
  it('chart is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Axes are displayed correctly', () => {
  it('Y axis should have three dataset labels', () => {
    render(component)
    const labels = screen.getAllByText('dataset')
    expect(labels).toHaveLength(3)
  })

  it('chart should have nine bars', () => {
    expect(getPaths(component)).toHaveLength(9)
  })
})

describe('Bars should be interactive', () => {
  it('bar registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })

  it('bar displays label on mouse over', () => {
    shouldDisplayLabelOnMouseOver(component, 'A')
  })
})