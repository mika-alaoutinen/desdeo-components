import React from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../components/barChart/BarChart'
import StackedBarChart from '../components/barChart/StackedBarChart'
import { useOnClickHandler } from './storyUtils'
import { barData } from '../tests/testdata'

export const BarChartWithUseState = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

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