import React from 'react'
import { Meta } from '@storybook/react'

import ScatterChart from '../components/scatter/ScatterChart'
import { testdata } from '../data'
import { printDatum, TestEventHandler, useEventHandler } from './storyUtils'
import { EventHandler } from '../types/eventTypes'

export const ScatterChartWithUseState = (): JSX.Element => {
  const { data, eventHandler }: TestEventHandler = useEventHandler()

  return (
    <ScatterChart
      data={data}
      eventHandler={eventHandler}
    />
  )
}

export const ScatterChartWithRedux = (): JSX.Element => {
  const eventHandler: EventHandler = {
    type: 'REDUX',
    callback: printDatum
  }

  return (
    <ScatterChart
      data={testdata}
      eventHandler={eventHandler}
    />
  )
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChart
} as Meta