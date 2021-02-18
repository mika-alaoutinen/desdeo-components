import React from 'react'

import {
  dataShouldBeClickable,
  renderComponent,
  renderData,
  renderVictoryContainer,
} from '../componentTests'
import { dataset } from '../../../tests/testdata'

import BarChartWrapper from '../../../components/bar/basic/BarChartWrapper'

const handler = jest.fn()
const component = <BarChartWrapper data={dataset[0]} onClick={handler} />

describe('BarChart is rendered correctly', () => {
  it('chart is rendered', () => {
    renderComponent(component)
  })

  it('Victory container is rendered', () => {
    renderVictoryContainer(component)
  })
})

describe('Data is displayed correctly', () => {
  it('has three path elements representing bars', () => {
    renderData(component, 3)
  })
})

describe('Bars should be clickable', () => {
  it('registers a click event', () => {
    dataShouldBeClickable(component, handler)
  })
})
