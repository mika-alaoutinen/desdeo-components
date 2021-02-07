import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChart from 'components/bar/GroupedBarChart'
import { groupedByAlternatives, groupedByCriteria } from 'tests/testdata'
import { Coordinate } from 'types/dataTypes'
import { Orientation } from 'types/layoutTypes'
import { range } from 'utils/utilFunctions'

const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

// Grouping data by alternative solutions
const alternativesComponent = (orientation: Orientation): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByAlternatives}
    labels={range(10).map(n => `Alternative\n${n}`)}
    onClick={clickHandler}
    orientation={orientation}
  />
)

export const GroupedByAlternativesHorizontal = (): JSX.Element =>
  alternativesComponent('horizontal')

export const GroupedByAlternativesVertical = (): JSX.Element =>
  alternativesComponent('vertical')

// Grouping data by criteria
const criteriaComponent = (orientation: Orientation): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByCriteria}
    labels={[ 'WQ\nFishery', 'WQ\nCity', 'ROI', 'City\nTax', 'Plant\nResources' ]}
    onClick={clickHandler}
    orientation={orientation}
  />
)

export const GroupedByCriteriaHorizontal = (): JSX.Element =>
  criteriaComponent('horizontal')

export const GroupedByCriteriaVertical = (): JSX.Element =>
  criteriaComponent('vertical')

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChart
} as Meta