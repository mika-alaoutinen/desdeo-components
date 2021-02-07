import React from 'react'
import { Meta } from '@storybook/react'

import { createAlternativesLabels } from './barUtils'
import StackedBarChart from 'components/bar/StackedBarChart'
import { groupedByAlternatives } from 'tests/testdata'
import { Coordinate } from 'types/dataTypes'
import { Orientation } from 'types/layoutTypes'

const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

export const HorizontalStackedBarChart = (): JSX.Element =>
  createComponent('horizontal')

export const VerticalStackedBarChart = (): JSX.Element =>
  createComponent('vertical')

const createComponent = (orientation: Orientation): JSX.Element => (
  <StackedBarChart
    datasets={groupedByAlternatives}
    labels={createAlternativesLabels()}
    onClick={clickHandler}
    orientation={orientation}
  />
)

export default {
  title: 'DESDEO/StackedBarChart',
  component: StackedBarChart
} as Meta