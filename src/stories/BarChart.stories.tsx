import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../components/barChart/BarChart'
import { data } from '../data'
// import { DataProps } from '../types/dataTypes'

// const Template: Story<DataProps> = args => <BarChart { ...args } />

// export const BarChartComponent = Template.bind({})
// BarChartComponent.args = {
//   data: data,
// }

export const BarChartComponent = (): JSX.Element => {
  const [ testdata, setTestdata ] = useState(data)
  return <BarChart
    data={testdata}
    setData={setTestdata}
  />
}

export default {
  title: 'DESDEO/BarChart',
  component: BarChartComponent
} as Meta