import React from 'react'
import { Meta } from '@storybook/react'

import ParallelAxes from '../../components/parallelAxes/ParallelAxes'
import ParallelAxesWrapper from '../../components/parallelAxesWrapper/ParallelAxesWrapper'
import { testdata } from '../../tests/testdata'

export const ParallelAxesComponent = (): JSX.Element =>
  <ParallelAxesWrapper data={testdata} />

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxes
} as Meta