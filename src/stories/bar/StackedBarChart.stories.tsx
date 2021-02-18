import React from 'react'
import { Meta, Story } from '@storybook/react'

import { argTypes, props } from './storyConfig'
import StackedBarChartWrapper from '../../components/bar/stacked/StackedBarChartWrapper'
import { BarChartWrapperProps } from '../../types/chartTypes'

const Template: Story<BarChartWrapperProps> = args => <StackedBarChartWrapper {...args} />

export const StackedBarChart = Template.bind({})
StackedBarChart.args = props

export default {
  title: 'DESDEO/StackedBarChart',
  component: StackedBarChartWrapper,
  argTypes,
} as Meta
