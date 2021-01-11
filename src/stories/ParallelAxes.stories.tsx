import React from 'react'
import { Meta } from '@storybook/react'

import ParallelAxesChart from '../components/parallelAxes/ParallelAxesChart'
import ParallelAxesExample from '../components/parallelAxes/ParallelAxesExample'
import { parallelAxesData } from '../tests/testdata'

export const ParallelAxesDemo = (): JSX.Element => (
  <ParallelAxesExample
    data={parallelAxesData}
  />
)

export const ParallelAxes = (): JSX.Element => (
  <ParallelAxesChart
    data={parallelAxesData}
  />
)

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxesExample
} as Meta