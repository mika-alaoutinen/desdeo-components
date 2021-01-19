import React from 'react'
import { Meta } from '@storybook/react'

import StackedBarChart from '../../components/bar/StackedBarChart'
import { coordinateSets } from '../../tests/testdata'
import { Coordinate } from '../../types/dataTypes'

// Click handler
const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

export const HorizontalStackedBarChart = (): JSX.Element => (
  <StackedBarChart
    datasets={coordinateSets}
    onClick={clickHandler}
    horizontal={true}
  />
)

export const VerticalStackedBarChart = (): JSX.Element => (
  <StackedBarChart
    datasets={coordinateSets}
    onClick={clickHandler}
  />
)

export default {
  title: 'DESDEO/StackedBarChart',
  component: StackedBarChart
} as Meta