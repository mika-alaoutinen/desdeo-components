import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../components/barChart/BarChart'
import { testdata } from '../data'
import { printDatum } from './storyUtils'
import { EventHandler } from '../types/eventTypes'

// TODO: could useState code be moved to a hook?
export const BarChartWithUseState = (): JSX.Element => {
  const [ data, setData ] = useState(testdata)
  const eventHandler: EventHandler = {
    type: 'USE_STATE',
    callback: setData
  }

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