import React from 'react'
import { Meta, Story } from '@storybook/react'

import { argTypes, props } from './storyConfig'
import { useOnClickHandler } from '../hooks/barChartHooks'
import GroupedBarChartWrapper from '../../components/bar/grouped/GroupedBarChartWrapper'
import { BarChartWrapperProps } from '../../types/chartTypes'

export const GroupedBar = (): JSX.Element => {
  const { data, grouping, onClick, orientation } = useOnClickHandler()

  return (
    <GroupedBarChartWrapper
      data={data}
      grouping={grouping}
      onClick={onClick}
      orientation={orientation}
    />
  )
}

const Template: Story<BarChartWrapperProps> = args => <GroupedBarChartWrapper {...args} />

export const GroupedBarChartTemplate = Template.bind({})
GroupedBarChartTemplate.args = props

export default {
  title: 'DESDEO/GroupedBarChart',
  component: GroupedBarChartWrapper,
  argTypes,
} as Meta
