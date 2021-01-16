import React from 'react'

import BarChart from '../../../components/bar/BarChart'

import {
  dataShouldBeClickable,
  renderComponent,
  renderDataLabels,
  renderFiveDatum,
  renderVictoryContainer
} from '../componentTests'
import { testdata } from '../../testdata'

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
    renderFiveDatum(component)
  })
})

describe('Bars should be clickable', () => {
  it('registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })
})