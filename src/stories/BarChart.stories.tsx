import React from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../components/bar/BarChart'
import GroupedBarChart from '../components/bar/GroupedBarChart'
import StackedBarChart from '../components/bar/StackedBarChart'
import { useOnClickHandler } from './storyUtils'
import { barData, coordinateSets } from '../tests/testdata'

export const BarChartComponent = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

  return (
    <BarChart
      data={data}
      onClick={onClick}
    />
  )
}

export const HorizontalGroupedBarChart = (): JSX.Element => (
  <GroupedBarChart datasets={coordinateSets} />
)

export const UninteractiveStackedBarChart = (): JSX.Element => (
  <StackedBarChart data={barData} />
)

export default {
  title: 'DESDEO/BarChart',
  component: BarChart
} as Meta