import React from 'react'
import { Meta } from '@storybook/react'

import ParallelAxes from 'components/parallelAxes/ParallelAxes'
import ParallelAxesWrapper from 'components/parallelAxesWrapper/ParallelAxesWrapper'
import { parallelAxes } from 'tests/testdata'

export const ParallelAxesComponent = (): JSX.Element =>
  <ParallelAxesWrapper data={parallelAxes} />

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxes
} as Meta