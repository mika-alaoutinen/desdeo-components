import React from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../components/barChart/BarChart'
import StackedBarChart from '../components/barChart/StackedBarChart'
import { TestEventHandler, useReactHandler, useReduxHandler } from './storyUtils'
import { barData } from './testdata'

export const BarChartWithUseState = (): JSX.Element => {
  const { data, onClick }: TestEventHandler = useReactHandler()
  
  return (
    <BarChart
      data={data}
      onClick={onClick}
    />
  )
}

export const BarChartWithRedux = (): JSX.Element => {
  const { data, onClick }: TestEventHandler = useReduxHandler()

  return (
    <BarChart
      data={data}
      onClick={onClick}
    />
  )
}

export const UninteractiveStackedBarChart = (): JSX.Element => (
  <StackedBarChart data={barData} />
)

export default {
  title: 'DESDEO/BarChart',
  component: BarChart
} as Meta