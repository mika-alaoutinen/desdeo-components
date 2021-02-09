import React from 'react'
import { Meta } from '@storybook/react'

import ParallelAxes from 'components/parallelAxes/ParallelAxes'
import ParallelAxesWrapper from 'components/parallelAxesWrapper/ParallelAxesWrapper'
import { parallelAxesData } from 'tests/testdata'

export const ParallelAxesWrapperComponent = (): JSX.Element =>
  <ParallelAxesWrapper data={parallelAxesData} />

export const ParallelAxesComponent = (): JSX.Element => (
  <ParallelAxes
    attributes={['strength', 'intelligence', 'luck']}
    data={parallelAxesData}
  />
)

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxes
} as Meta