import React from 'react'
import { VictoryStack } from 'victory'

import ChartContainer from 'containers/ChartContainer'
import { BarChartProps } from 'types/chartTypes'
import { padding } from './layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from './renderingFunctions'

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
        labelComponent={drawTooltip(horizontal)}
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