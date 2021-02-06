import React from 'react'
import { VictoryChart, VictoryStack, VictoryTheme } from 'victory'

import { BarChartProps } from 'types/chartTypes'
import { horizontalPadding } from './layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from './renderingFunctions'

const StackedBarChart: React.FC<BarChartProps> = ({
  datasets, onClick, horizontal
}) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <VictoryChart
      domainPadding={20}
      padding={horizontal ? horizontalPadding : undefined}
      theme={VictoryTheme.material}
    >

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

    </VictoryChart>
  )
}

export default StackedBarChart