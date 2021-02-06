import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChart from 'components/bar/GroupedBarChart'
import { groupedByAlternatives, groupedByCriteria } from 'tests/testdata'
import { Coordinate } from 'types/dataTypes'

// Click handler
const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

export const HorizontalGroupedBarChart = (): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByAlternatives}
    labels={[ 'Alternative\n1', 'Alternative\n2', 'Alternative\n3' ]}
    onClick={clickHandler}
    horizontal={true}
  />
)

export const VerticalGroupedBarChart = (): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByCriteria}
    labels={[ 'WQ\nFishery', 'WQ\nCity', 'ROI', 'City\nTax', 'Plant\nResources' ]}
    onClick={clickHandler}
  />
)

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChart
} as Meta