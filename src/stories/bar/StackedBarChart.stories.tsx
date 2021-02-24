import React from 'react'
import { Meta, Story } from '@storybook/react'

import { argTypes, props } from './storyConfig'
import StackedBarChartWrapper from '../../components/bar/stacked/StackedBarChartWrapper'
import { BarChartWrapperProps } from '../../types/chartTypes'
import { useOnClickHandler } from '../hooks/barChartHooks'

export const StackedBarWithHooks = (): JSX.Element => {
  const { data, grouping, onClick, orientation } = useOnClickHandler()

  return (
    <StackedBarChartWrapper
      data={data}
      grouping={grouping}
      onClick={onClick}
      orientation={orientation}
    />
  )
}

const Template: Story<BarChartWrapperProps> = args => <StackedBarChartWrapper {...args} />

export const StackedBarChart = Template.bind({})
StackedBarChart.args = props

export default {
  title: 'DESDEO/StackedBarChart',
  component: StackedBarChartWrapper,
  argTypes,
} as Meta
