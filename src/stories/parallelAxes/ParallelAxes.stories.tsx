import React from 'react'
import { Meta, Story } from '@storybook/react'

import ParallelAxesWrapper, {
  Props,
} from '../../components/parallelAxes/wrapper/ParallelAxesWrapper'
import { dataset } from '../../data/testdata'

const Template: Story<Props> = args => <ParallelAxesWrapper {...args} />

export const ParallelCoordinates = Template.bind({})
ParallelCoordinates.args = {
  data: dataset,
}

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxesWrapper,
} as Meta
