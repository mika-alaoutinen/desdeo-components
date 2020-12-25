import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterChart from '../components/scatter/ScatterChart'
import { testdata } from '../data'
import { DataProps } from '../types/dataTypes'

const Template: Story<DataProps> = args => {
  const [ data, setData ] = useState(testdata)
  return (
    <ScatterChart
      { ...args }
      data={data}
      setData={setData}
    />
  )
}

export const ScatterChartComponent = Template.bind({})
// ScatterChartComponent.args = {}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChartComponent
} as Meta