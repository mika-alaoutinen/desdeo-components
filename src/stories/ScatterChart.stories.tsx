import React from 'react'
import { Story, Meta } from '@storybook/react'

import ScatterChart from '../components/scatter/ScatterChart'
import { data } from '../data'
import { DataProps } from '../types/dataTypes'
import { printData } from './storyUtils'

const Template: Story<DataProps> = args => <ScatterChart { ...args } />

export const ScatterChartComponent = Template.bind({})
ScatterChartComponent.args = {
  data,
  onClick: printData
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChart
} as Meta