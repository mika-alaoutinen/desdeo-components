import React from 'react'
import { Story, Meta } from '@storybook/react'

import BarChart, { Props } from '../components/barChart/BarChart'
import { data } from '../data'

const Template: Story<Props> = (args) => <BarChart { ...args } />

export const PrimaryBarChart = Template.bind({})
PrimaryBarChart.args = {
  data,
  onClick: () => console.log('data', data)
}

export default {
  title: 'DESDEO/Bar chart',
  component: BarChart
} as Meta