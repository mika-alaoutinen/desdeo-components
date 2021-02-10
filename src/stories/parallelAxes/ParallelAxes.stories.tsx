import React from 'react'
import { Meta } from '@storybook/react'

import ParallelAxes from '../../components/parallelAxes/ParallelAxes'
import ParallelAxesWrapper from '../../components/parallelAxesWrapper/ParallelAxesWrapper'
import { parallelAxesData } from '../../tests/testdata'

export const ParallelAxesComponent = (): JSX.Element =>
  <ParallelAxesWrapper data={parallelAxesData} />

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxes
} as Meta