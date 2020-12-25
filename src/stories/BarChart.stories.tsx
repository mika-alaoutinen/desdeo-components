import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'

import BarChart from '../components/barChart/BarChart'
import { testdata } from '../data'
import { DataProps } from '../types/dataTypes'

const Template: Story<DataProps> = args => {
  const [ data, setData ] = useState(testdata)
  return (
    <BarChart
      { ...args }
      data={data}
      setData={setData}
    />
  )
} 

export const BarChartComponent = Template.bind({})
// BarChartComponent.args = {}

export default {
  title: 'DESDEO/BarChart',
  component: BarChartComponent
} as Meta