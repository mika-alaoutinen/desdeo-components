import React from 'react'
import { Story, Meta } from '@storybook/react'

import ScatterSelection from '../components/scatter/ScatterSelection'
import { data } from '../data'
import { DataProps } from '../types/dataTypes'
import { printData } from './storyUtils'

const Template: Story<DataProps> = args => <ScatterSelection { ...args } />

export const ScatterChartWithSelection = Template.bind({})
ScatterChartWithSelection.args = {
  data,
  callback: printData
}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelection
} as Meta