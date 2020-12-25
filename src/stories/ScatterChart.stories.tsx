import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterChart from '../components/scatter/ScatterChart'
import { testdata } from '../data'
import { printDatum } from './storyUtils'
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

export const ScatterChartWithUseState = Template.bind({})

export const ScatterChartWithRedux = Template.bind({})
ScatterChartWithRedux.args = {
  reduxAction: printDatum
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChart
} as Meta