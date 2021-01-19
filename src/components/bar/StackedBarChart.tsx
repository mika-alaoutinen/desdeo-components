import React from 'react'
import { VictoryStack } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { drawBar, drawMainAxis, drawDependentAxis } from './renderingFunctions'
import { BarChartProps } from '../../types/chartTypes'
import { padding } from './layout'

const StackedBarChart: React.FC<BarChartProps> = ({
  datasets, onClick, horizontal
}) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <ChartContainer padding={horizontal ? padding : undefined}>

      {drawMainAxis(datasets)}
      {drawDependentAxis((x: number) => `$${x}k`)}

      <VictoryStack
        colorScale={[ 'brown', 'tomato', 'gold' ]}
        horizontal={horizontal}
        style={{
          data: {
            width: 20
          }
        }}
      >
        {drawBars()}
      </VictoryStack>

    </ChartContainer>
  )
}

export default StackedBarChart