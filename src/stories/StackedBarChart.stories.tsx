import React from 'react'
import { Story, Meta } from '@storybook/react'

import StackedBarChart, { Props } from '../components/barChart/StackedBarChart'
import { barData } from './testdata'

const Template: Story<Props> = args => <StackedBarChart { ...args } />

export const StackedBarChartComponent = Template.bind({})
StackedBarChartComponent.args = {
  data: barData
}

export default {
  title: 'DESDEO/StackedBarChart',
  component: StackedBarChart
} as Meta