import React from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterChart from '../../components/scatter/ScatterChart'
import { useOnClickHandler } from '../storyUtils'
import { coordinates } from '../../data/testdata'
import { OnClickChart } from '../../types/chartTypes'

export const ScatterChartComponent = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

  return (
    <ScatterChart
      data={data}
      onClick={onClick}
      xAxisLabel={'X axis'}
      yAxisLabel={'Y axis'}
    />
  )
}

const Template: Story<OnClickChart> = args =>
  <ScatterChart {...args} />

export const ScatterChartWithWrapper = Template.bind({})
ScatterChartWithWrapper.args = {
  data: coordinates,
  onClick: c => console.log('coordinate', c),
  xAxisLabel: 'X axis',
  yAxisLabel: 'y axis'
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChart,
  argTypes: {
    onClick: {
      table: {
        disable: true
      }
    },
  }
} as Meta