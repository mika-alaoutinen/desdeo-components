import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'

import BarChart from '../components/barChart/BarChart'
import { testdata } from '../data'
import { printDatum } from './storyUtils'
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

export const BarChartWithUseState = Template.bind({})

export const BarChartWithRedux = Template.bind({})
BarChartWithRedux.args = {
  reduxAction: printDatum
}

export default {
  title: 'DESDEO/BarChart',
  component: BarChart
} as Meta