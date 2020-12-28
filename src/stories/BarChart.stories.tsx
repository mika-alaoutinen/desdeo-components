import React from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../components/barChart/BarChart'
import { testdata } from '../data'
import { printDatum, TestEventHandler, useEventHandler } from './storyUtils'
import { EventHandler } from '../types/eventTypes'

export const BarChartWithUseState = (): JSX.Element => {
  const { data, eventHandler }: TestEventHandler = useEventHandler()
  
  return (
    <BarChart
      data={data}
      eventHandler={eventHandler}
    />
  )
}

export const BarChartWithRedux = (): JSX.Element => {
  const eventHandler: EventHandler = {
    type: 'REDUX',
    callback: printDatum
  }

  return (
    <BarChart
      data={testdata}
      eventHandler={eventHandler}
    />
  )
}

export default {
  title: 'DESDEO/BarChart',
  component: BarChart
} as Meta