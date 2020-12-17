import React from 'react'
import { Story, Meta } from '@storybook/react'

import BarChart, { Props } from '../components/barChart/BarChart'
import { data } from '../data'
import { printData } from './utils'

const Template: Story<Props> = (args) => <BarChart { ...args } />

export const BarChartComponent = Template.bind({})
BarChartComponent.args = {
  data,
  onClick: (printData)
}

export default {
  title: 'DESDEO/BarChart',
  component: BarChart
} as Meta