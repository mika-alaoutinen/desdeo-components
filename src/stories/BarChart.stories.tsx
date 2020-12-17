import React from 'react'
import { Story, Meta } from '@storybook/react'

import BarChart, { Props } from '../components/barChart/BarChart'
import { data } from '../data'
import { Datum } from '../types/dataTypes'

const Template: Story<Props> = (args) => <BarChart { ...args } />

export const PrimaryBarChart = Template.bind({})
PrimaryBarChart.args = {
  data,
  onClick: ({ x, y, isSelected }: Datum) => console.log('x', x, 'y', y, 'selected', isSelected)
}

export default {
  title: 'DESDEO/Bar chart',
  component: BarChart
} as Meta