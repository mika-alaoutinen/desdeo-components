import React from 'react'
import { Meta } from '@storybook/react'

import ScatterChart from '../components/scatter/ScatterChart'
import { TestEventHandler, useReactHandler, useReduxHandler } from './storyUtils'

export const ScatterChartWithUseState = (): JSX.Element => {
  const { data, onClick }: TestEventHandler = useReactHandler()

  return (
    <ScatterChart
      data={data}
      onClick={onClick}
    />
  )
}

export const ScatterChartWithRedux = (): JSX.Element => {
  const { data, onClick }: TestEventHandler = useReduxHandler()
  
  return (
    <ScatterChart
      data={data}
      onClick={onClick}
    />
  )
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChart
} as Meta