import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterSelection from '../components/scatter/ScatterSelection'
import { testdata } from '../data'
import { DataProps } from '../types/dataTypes'

const Template: Story<DataProps> = args => {
  const [ data, setData ] = useState(testdata)
  return (
    <ScatterSelection
      { ...args }
      data={data}
      setData={setData}
    />
  )
}

export const ScatterChartWithSelection = Template.bind({})
// ScatterChartWithSelection.args = {}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelection
} as Meta