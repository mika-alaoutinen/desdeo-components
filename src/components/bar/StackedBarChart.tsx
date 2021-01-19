import React from 'react'
import { VictoryStack } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { drawBar, drawMainAxis, drawDependentAxis } from './renderingFunctions'
import { BarChartProps } from '../../types/chartTypes'

const StackedBarChart: React.FC<BarChartProps> = ({
  datasets, onClick, horizontal
}) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <ChartContainer>

      {drawMainAxis(datasets)}
      {drawDependentAxis((x: number) => `$${x}k`)}

      <VictoryStack
        horizontal={horizontal}
      >
        {drawBars()}
      </VictoryStack>

    </ChartContainer>
  )
}

export default StackedBarChart