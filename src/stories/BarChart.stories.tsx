import React from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../components/bar/BarChart'
import GroupedBarChart from '../components/bar/GroupedBarChart'
import StackedBarChart from '../components/bar/StackedBarChart'
import { useOnClickHandler } from './storyUtils'
import { coordinateSets } from '../tests/testdata'
import { Coordinate } from '../types/dataTypes'

// Click handler
const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

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
  <GroupedBarChart
    datasets={coordinateSets}
    onClick={clickHandler}
    horizontal={true}
  />
)

export const VerticalGroupedBarChart = (): JSX.Element => (
  <GroupedBarChart
    datasets={coordinateSets}
    onClick={clickHandler}
  />
)

export const VerticalStackedBarChart = (): JSX.Element => (
  <StackedBarChart
    datasets={coordinateSets}
    onClick={clickHandler}
  />
)

export default {
  title: 'DESDEO/BarChart',
  component: BarChart
} as Meta