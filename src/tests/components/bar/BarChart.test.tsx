import React from 'react'

import {
  dataShouldBeClickable,
  renderComponent,
  renderDataLabels,
  renderFiveDatum,
  renderVictoryContainer
} from '../componentTests'
import { coordinateData } from '../../testdata'

import BarChart from '../../../components/bar/basic/BarChart'

// Constants
const handler = jest.fn()
const component = <BarChart data={coordinateData} onClick={handler} />

describe('BarChart is rendered correctly', () => {
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