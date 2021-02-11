import React from 'react'
import { Meta } from '@storybook/react'

import StackedBarChartWrapper from '../../components/bar/stacked/StackedBarChartWrapper'
import { testdata } from '../../tests/testdata'
import { Grouping } from '../../types/chartTypes'
import { Coordinate } from '../../types/dataTypes'
import { Orientation } from '../../types/layoutTypes'

const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

const wrapperComponent = (grouping: Grouping, orientation: Orientation): JSX.Element =>
  <StackedBarChartWrapper
    data={testdata}
    grouping={grouping}
    onClick={clickHandler}
    orientation={orientation}
  />

// Grouping data by alternative solutions
export const HorizontalAlternativesStackedBars = (): JSX.Element =>
  wrapperComponent('alternatives', 'horizontal')

export const VerticalAlternativesStackedBars = (): JSX.Element =>
  wrapperComponent('alternatives', 'vertical')

// Grouping data by criteria
export const HorizontalCriteriaStackedBars = (): JSX.Element =>
  wrapperComponent('criteria', 'horizontal')

export const VerticalCriteriaStackedBars = (): JSX.Element =>
  wrapperComponent('criteria', 'vertical')

export default {
  title: 'DESDEO/StackedBarChart',
  component: StackedBarChartWrapper
} as Meta