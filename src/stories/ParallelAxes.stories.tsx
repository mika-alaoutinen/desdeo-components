import React from 'react'
import { Meta } from '@storybook/react'

// import ParallelAxes from '../components/parallelAxes/ParallelAxes'
import ParallelAxesExample from '../components/parallelAxes/ParallelAxesExample'
import ParallelAxes from '../components/parallelAxes/ParallelAxes'
import { parallelAxesData } from '../tests/testdata'

export const ParallelAxesDemo = (): JSX.Element => (
  <ParallelAxesExample
    data={parallelAxesData}
  />
)

export const ParallelAxesComponent = (): JSX.Element => (
  <ParallelAxes
    data={parallelAxesData}
  />
)

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxesExample
} as Meta