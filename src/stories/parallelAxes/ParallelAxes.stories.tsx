import React from 'react'
import { Meta } from '@storybook/react'

import ParallelAxes from 'components/parallelAxes/ParallelAxes'
import { parallelAxesData } from 'tests/testdata'

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