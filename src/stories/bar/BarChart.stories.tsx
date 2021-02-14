import React from 'react'
import { Meta } from '@storybook/react'

import BarChart from '../../components/bar/basic/BarChart'
import { useOnClickHandler } from '../storyUtils'

/*
  BarChart story is different from other bar components, because it uses
  a custom React hook to emulate how the component is used in reality.
  As far as I know, it's not possible to use hooks with Storybook templates.
*/
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