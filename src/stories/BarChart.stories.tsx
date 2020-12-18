import React from 'react'
import { Story, Meta } from '@storybook/react'

import BarChart from '../components/barChart/BarChart'
import { data } from '../data'
import { DataProps } from '../types/dataTypes'
import { printData } from './storyUtils'

const Template: Story<DataProps> = (args) => <BarChart { ...args } />

export const BarChartComponent = Template.bind({})
BarChartComponent.args = {
  data,
  onClick: (printData)
}

export default {
  title: 'DESDEO/BarChart',
  component: BarChart
} as Meta