import React from 'react'

import {
  dataShouldBeClickable, renderComponent, renderData, renderVictoryContainer
} from '../componentTests'
import { coordinateData } from '../../testdata'

import ScatterChart from '../../../components/scatter/ScatterChart'

const handler = jest.fn()
const component = <ScatterChart data={coordinateData} onClick={handler} />

describe('ScatterChart is rendered correctly', () => {
  it('component is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has five path elements representing data points', () => {
    renderData(component, 5)
  })
})

describe('Data points should be clickable', () => {
  it('registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })
})