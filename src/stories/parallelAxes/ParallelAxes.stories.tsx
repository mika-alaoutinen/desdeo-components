import React from 'react'
import { Meta, Story } from '@storybook/react'

import ParallelAxesWrapper, { Props } from '../../components/parallelAxes/wrapper/ParallelAxesWrapper'
import { testdata } from '../../tests/testdata'

const Template: Story<Props> = args =>
  <ParallelAxesWrapper {...args} />

export const ParallelCoordinates = Template.bind({})
ParallelCoordinates.args = {
  data: testdata
}

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxesWrapper
} as Meta