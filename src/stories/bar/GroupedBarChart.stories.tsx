import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChart from 'components/bar/GroupedBarChart'
import { groupedByAlternatives, groupedByCriteria } from 'tests/testdata'
import { Coordinate } from 'types/dataTypes'
import { range } from 'utils/utilFunctions'

const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

// Grouping data by alternative solutions
const alternativesComponent = (horizontal: boolean): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByAlternatives}
    labels={range(10).map(n => `Alternative\n${n}`)}
    onClick={clickHandler}
    horizontal={horizontal}
  />
)

export const GroupedByAlternativesHorizontal = (): JSX.Element =>
  alternativesComponent(true)

export const GroupedByAlternativesVertical = (): JSX.Element =>
  alternativesComponent(false)

// Grouping data by criteria
const criteriaComponent = (horizontal: boolean): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByCriteria}
    labels={[ 'WQ\nFishery', 'WQ\nCity', 'ROI', 'City\nTax', 'Plant\nResources' ]}
    onClick={clickHandler}
    horizontal={horizontal}
  />
)

export const GroupedByCriteriaHorizontal = (): JSX.Element =>
  criteriaComponent(true)

export const GroupedByCriteriaVertical = (): JSX.Element =>
  criteriaComponent(false)

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChart
} as Meta