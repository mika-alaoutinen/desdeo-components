import React from 'react'
import { Meta, Story } from '@storybook/react'

import { argTypes, props } from './storyConfig'
import GroupedBarChartWrapper from '../../components/bar/grouped/GroupedBarChartWrapper'
import { BarChartWrapperProps } from '../../types/chartTypes'

const Template: Story<BarChartWrapperProps> = args =>
  <GroupedBarChartWrapper {...args} />

export const GroupedBarChart = Template.bind({})
GroupedBarChart.args = props

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChartWrapper,
  argTypes
} as Meta