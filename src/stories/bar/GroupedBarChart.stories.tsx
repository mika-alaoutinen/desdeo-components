import React from 'react'
import { Meta } from '@storybook/react'

import GroupedBarChart from '../../components/bar/GroupedBarChart'
import { coordinateSets, testdata } from '../../tests/testdata'
import { Coordinate } from '../../types/dataTypes'
import { convertToCoordinates } from '../../data/dataTransformations'

const data = convertToCoordinates(testdata)

// Click handler
const clickHandler = (coordinate: Coordinate) => console.log('coordinate', coordinate)

export const HorizontalGroupedBarChart = (): JSX.Element => (
  <GroupedBarChart
    datasets={data}
    onClick={clickHandler}
    horizontal={true}
  />
)

export const VerticalGroupedBarChart = (): JSX.Element => (
  <GroupedBarChart
    datasets={coordinateSets}
    onClick={clickHandler}
  />
)

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChart
} as Meta