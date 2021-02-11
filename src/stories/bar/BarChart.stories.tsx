import React from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../../components/bar/basic/BarChart'
import { useOnClickHandler } from '../storyUtils'

export const BarChartComponent = (): JSX.Element => {
  const { data, onClick } = useOnClickHandler()

  return (
    <BarChart
      data={data}
      onClick={onClick}
    />
  )
}

export default {
  title: 'DESDEO/BarChart',
  component: BarChart
} as Meta