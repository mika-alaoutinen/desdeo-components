import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterSelection from '../components/scatter/ScatterSelection'
import { testdata } from '../data'
import { printData } from './storyUtils'
import { DataProps } from '../types/dataTypes'

// Have to declare useState here for it to work correctly
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

export const ScatterChartWithUseState = Template.bind({})

export const ScatterChartWithRedux = Template.bind({})
ScatterChartWithRedux.args = {
  reduxAction: printData
}

export default {
  title: 'DESDEO/ScatterSelection',
  component: ScatterSelection
} as Meta