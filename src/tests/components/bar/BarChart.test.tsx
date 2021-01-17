import React from 'react'

import {
  dataShouldBeClickable,
  renderComponent,
  renderDataLabels,
  renderFiveCoordinate,
  renderVictoryContainer
} from '../componentTests'
import { testdata } from '../../testdata'

import BarChart from '../../../components/bar/BarChart'

// Constants
const handler = jest.fn()
const component = <BarChart data={testdata} onClick={handler} />

describe('BarChart is rendered correctly', () => {
  it('is truthy', () => {
    expect(BarChart).toBeTruthy()
  })

  it('chart is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has data labels A-E', () => {
    renderDataLabels(component)
  })

  it('has five path elements representing bars', () => {
    renderFiveCoordinate(component)
  })
})

describe('Bars should be clickable', () => {
  it('registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })
})