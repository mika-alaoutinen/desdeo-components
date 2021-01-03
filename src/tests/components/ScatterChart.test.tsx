import React from 'react'

import ScatterChart from '../../components/scatter/ScatterChart'

import {
  dataShouldBeClickable,
  renderComponent,
  renderDataLabels,
  renderFiveDatum,
  renderVictoryContainer
} from './componentTests'

import { createOnClickHandler } from '../testUtils'
import { testdata } from '../testdata'

// Constants
const handler = createOnClickHandler('USE_STATE')
const component = <ScatterChart data={testdata} onClick={handler} />

describe('ScatterChart is rendered correctly', () => {
  it('is truthy', () => {
    expect(ScatterChart).toBeTruthy()
  })

  it('component is rendered', () => {
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

  it('has five path elements representing data points', () => {
    renderFiveDatum(component)
  })
})

describe('Data points should be clickable', () => {
  it('registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })
})