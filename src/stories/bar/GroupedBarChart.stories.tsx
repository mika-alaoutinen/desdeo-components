import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChart from '../../components/bar/grouped/GroupedBarChart'
import GroupedBarChartWrapper from '../../components/bar/grouped/GroupedBarChartWrapper'
import { groupedByAlternatives, groupedByCriteria, testdata } from '../../tests/testdata'
import { Coordinate } from '../../types/dataTypes'
import { Orientation } from '../../types/layoutTypes'
import { createAlternativesLabels } from './barUtils'

const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

// Wrappers
export const alternativesWrapper =
  <GroupedBarChartWrapper
    data={testdata}
    grouping={'alternatives'}
    onClick={clickHandler}
    orientation={'horizontal'}
  />

export const criteriaWrapper =
  <GroupedBarChartWrapper
    data={testdata}
    grouping={'criteria'}
    onClick={clickHandler}
    orientation={'horizontal'}
  />

// Grouping data by alternative solutions
const alternativesComponent = (orientation: Orientation): JSX.Element => (
  <GroupedBarChart
    datasets={groupedByAlternatives}
    labels={createAlternativesLabels()}
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