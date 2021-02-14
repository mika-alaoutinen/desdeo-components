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

export const ScatterChartWithWrapper = Template.bind({})
ScatterChartWithWrapper.args = {
  data: datasetTuple,
  onClick: (coordinate) => console.log('coordinate', coordinate),
  xAxisLabel: 'WQ Fishery',
  yAxisLabel: 'WQ City',
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChartWrapper,
  argTypes: {
    onClick: {
      table: {
        disable: true
      }
    },
  }
} as Meta