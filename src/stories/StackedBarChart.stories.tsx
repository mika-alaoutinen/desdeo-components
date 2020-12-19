import React from 'react'
import { Story, Meta } from '@storybook/react'

import StackedBarChart, { Props } from '../components/barChart/StackedBarChart'
import { barData } from '../data'

const Template: Story<Props> = args => <StackedBarChart { ...args } />

export const StackedBarChartComponent = Template.bind({})
StackedBarChartComponent.args = {
  data: barData,
  onClick: () => console.log(barData)
}

export default {
  title: 'DESDEO/StackedBarChart',
  component: StackedBarChart
} as Meta