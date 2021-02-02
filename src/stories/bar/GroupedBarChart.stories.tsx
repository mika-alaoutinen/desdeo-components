import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChart from '../../components/bar/GroupedBarChart'
import GroupedBarChartCSV from '../../components/bar/GroupedBarChartCSV'
import { coordinateSets, testdata } from '../../tests/testdata'
import { Coordinate } from '../../types/dataTypes'

// Click handler
const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

export const CSVBarChart = (): JSX.Element => (
  <GroupedBarChartCSV
    data={testdata}
    onClick={clickHandler}
    horizontal={true}
  />
)

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

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChart
} as Meta