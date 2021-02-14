import React from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterChart from '../../components/scatter/ScatterChart'
import ScatterChartWrapper, { Props } from '../../components/scatter/ScatterChartWrapper'
import { useOnClickHandler } from '../storyUtils'
import { datasetTuple } from '../../tests/testdata'

export const ScatterChartComponent = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

  return (
    <ScatterChart
      data={data}
      onClick={onClick}
    />
  )
}

const Template: Story<Props> = args =>
  <ScatterChartWrapper {...args} />

export const GroupedBarChart = Template.bind({})
GroupedBarChart.args = {
  data: datasetTuple,
  onClick: coordinate => console.log('clicked', coordinate)
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChartWrapper
} as Meta