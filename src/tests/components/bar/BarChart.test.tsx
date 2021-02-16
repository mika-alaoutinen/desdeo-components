import React from 'react'

import {
  dataShouldBeClickable, renderComponent, renderData, renderVictoryContainer
} from '../componentTests'
import { coordinateData } from '../../../data/testdata'

import BarChart from '../../../components/bar/basic/BarChart'

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
  it('has five path elements representing bars', () => {
    renderData(component, 5)
  })
})

describe('Bars should be clickable', () => {
  it('registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })
})