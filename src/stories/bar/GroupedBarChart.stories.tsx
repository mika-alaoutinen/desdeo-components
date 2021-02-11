import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChartWrapper from '../../components/bar/grouped/GroupedBarChartWrapper'
import { testdata } from '../../tests/testdata'
import { Grouping } from '../../types/chartTypes'
import { Coordinate } from '../../types/dataTypes'
import { Orientation } from '../../types/layoutTypes'

const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

const wrapperComponent = (grouping: Grouping, orientation: Orientation): JSX.Element =>
  <GroupedBarChartWrapper
    data={testdata}
    grouping={grouping}
    onClick={clickHandler}
    orientation={orientation}
  />

// Grouping data by alternative solutions
export const HorizontalAlternativesWrapper = (): JSX.Element =>
  wrapperComponent('alternatives', 'horizontal')

export const VerticalAlternativesWrapper = (): JSX.Element =>
  wrapperComponent('alternatives', 'vertical')

// Grouping data by criteria
export const HorizontaCriteriaWrapper = (): JSX.Element =>
  wrapperComponent('criteria', 'horizontal')

export const VerticalCriteriaWrapper = (): JSX.Element =>
  wrapperComponent('criteria', 'vertical')

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChartWrapper
} as Meta