import React from 'react'
import { Meta } from '@storybook/react'

import ScatterChart from '../components/scatter/ScatterChart'
import { useOnClickReactHandler, useOnClickReduxHandler } from './storyUtils'

export const ScatterChartWithUseState = (): JSX.Element => {
  const { data, onClick } = useOnClickReactHandler()

  return (
    <ScatterChart
      data={data}
      onClick={onClick}
    />
  )
}

export const ScatterChartWithRedux = (): JSX.Element => {
  const { data, onClick } = useOnClickReduxHandler()

  return (
    <ScatterChart
      data={data}
      onClick={onClick}
    />
  )
}

export default {
  title: 'DESDEO/ScatterChart',
  component: ScatterChart
} as Meta