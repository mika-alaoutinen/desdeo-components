import React from 'react'
import { Meta, Story } from '@storybook/react'

import BarChart from '../../components/bar/basic/BarChart'
import BarChartWrapper, { Props } from '../../components/bar/basic/BarChartWrapper'
import { useOnClickHandler } from '../hooks/coordinateChartHooks'
import { dataset } from '../../data/testdata'

export const BarChartComponent = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

  return <BarChart data={data} onClick={onClick} />
}

const Template: Story<Props> = args => <BarChartWrapper {...args} />

export const BarChartTemplate = Template.bind({})
BarChartTemplate.args = {
  data: dataset[0],
  onClick: value => console.log('value', value),
}

export default {
  title: 'DESDEO/BarChart',
  component: BarChartWrapper,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta
