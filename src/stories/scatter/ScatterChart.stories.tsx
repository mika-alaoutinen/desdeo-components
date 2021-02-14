import React from 'react'
import { Meta, Story } from '@storybook/react'

import { argTypes, props } from './storyConfig'
import ScatterChart from '../../components/scatter/ScatterChart'
import ScatterChartWrapper, { Props } from '../../components/scatter/ScatterChartWrapper'
import { useOnClickHandler } from '../storyUtils'

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
ScatterChartWithWrapper.args = props

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChartWrapper,
  argTypes
} as Meta