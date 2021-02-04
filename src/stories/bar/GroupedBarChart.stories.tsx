import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChart from '../../components/bar/GroupedBarChart'
import { groupedByAlternatives, groupedByCriteria } from '../../tests/testdata'
import { Coordinate } from '../../types/dataTypes'

// Click handler
const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

export const HorizontalGroupedBarChart = (): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByAlternatives}
    grouping='alternatives'
    onClick={clickHandler}
    horizontal={true}
  />
)

export const VerticalGroupedBarChart = (): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByCriteria}
    grouping='criteria'
    onClick={clickHandler}
  />
)

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChart
} as Meta