import React from 'react'
import { Meta, Story } from '@storybook/react'

import RadarChartWrapper, { Props } from '../../components/radar/RadarChartWrapper'
import { radarDataset } from '../../data/testdata'

const Template: Story<Props> = args => <RadarChartWrapper {...args} />

export const RadarChartTemplate = Template.bind({})
RadarChartTemplate.args = {
  data: radarDataset,
}

export default {
  title: 'DESDEO/RadarChart',
  component: RadarChartWrapper,
} as Meta
