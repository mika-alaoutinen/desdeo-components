import React from 'react'
import { Meta, Story } from '@storybook/react'

import ParallelAxesWrapper, { Props } from '../../components/parallelAxes/ParallelAxesWrapper'
import { dataset } from '../../data/testdata'

const Template: Story<Props> = args => <ParallelAxesWrapper {...args} />

export const ParallelCoordinates = Template.bind({})
ParallelCoordinates.args = {
  data: dataset,
  onChange: attributeSets => console.log('active sets', attributeSets),
  onLineClick: attributes => console.log('clicked on line with data', attributes),
  onClicking: tuple => console.log('selected attribute with value', tuple),
}

export default {
  title: 'DESDEO/ParallelAxes',
  component: ParallelAxesWrapper,
} as Meta
