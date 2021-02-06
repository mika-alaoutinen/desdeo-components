import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChart from 'components/bar/GroupedBarChart'
import { groupedByAlternatives, groupedByCriteria } from 'tests/testdata'
import { Coordinate } from 'types/dataTypes'

// Click handler
const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

export const HorizontalGroupedBarChart = (): JSX.Element => {
  const range = [...Array(10).keys()].map(i => i + 1)
  const labels = range.map(n => `Alternative\n${n}`)

  return (
    <GroupedBarChart
      datasets={groupedByAlternatives}
      labels={labels}
      onClick={clickHandler}
      horizontal={true}
    />
  )
}

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