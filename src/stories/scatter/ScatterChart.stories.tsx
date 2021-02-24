import React from 'react'
import { Meta, Story } from '@storybook/react'

import ScatterChart from '../../components/scatter/ScatterChart'
import { useCoordinateClickHandler } from '../hooks/coordinateChartHooks'
import { coordinates } from '../../data/testdata'
import { CoordinateChart } from '../../types/chartTypes'

export const ScatterChartComponent = (): JSX.Element => {
  const { data, onClick } = useCoordinateClickHandler()

  return (
    <ScatterChart data={data} onClick={onClick} xAxisLabel={'WQ Fishery'} yAxisLabel={'WQ City'} />
  )
}

const Template: Story<CoordinateChart> = args => <ScatterChart {...args} />

export const ScatterChartTemplate = Template.bind({})
ScatterChartTemplate.args = {
  data: coordinates,
  onClick: coordinate => console.log('coordinate', coordinate),
  xAxisLabel: 'WQ Fishery',
  yAxisLabel: 'WQ City',
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChart,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta
