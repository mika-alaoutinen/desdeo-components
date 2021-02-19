import React from 'react'
import { Meta, Story } from '@storybook/react'

import RadarTest from '../../components/radar/RadarTest'

const Template: Story = args => <RadarTest {...args} />

export const RadarTestTemplate = Template.bind({})
RadarTestTemplate.args = {}

export default {
  title: 'DESDEO/RadarTest',
  component: RadarTest,
} as Meta
