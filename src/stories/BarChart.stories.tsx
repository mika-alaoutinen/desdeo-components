import React from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../components/bar/BarChart'
import StackedBarChart from '../components/bar/StackedBarChart'
import { useOnClickHandler } from './storyUtils'
import { barData } from '../tests/testdata'

export const BarChartComponent = (): JSX.Element => {
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