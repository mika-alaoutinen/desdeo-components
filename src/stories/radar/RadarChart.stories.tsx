import React from 'react'
import { Meta, Story } from '@storybook/react'

import RadarChart from '../../components/radar/RadarChart'

const Template: Story = args => <RadarChart {...args} />

export const RadarChartTemplate = Template.bind({})
RadarChartTemplate.args = {}

export default {
  title: 'DESDEO/RadarChart',
  component: RadarChart,
} as Meta
