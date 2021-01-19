import React from 'react'
import { VictoryGroup } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { BarChartProps } from '../../types/chartTypes'
import { padding } from './layout'
import {
  drawBar, drawMainAxis, drawDependentAxis, drawTooltip
} from './renderingFunctions'

const GroupedBarChart: React.FC<BarChartProps> = ({
  datasets, onClick, horizontal
}) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <ChartContainer
      padding={horizontal ? padding : undefined}
    >

      {drawMainAxis(datasets)}
      {drawDependentAxis()}

      <VictoryGroup
        colorScale={[ 'brown', 'tomato', 'gold' ]}
        horizontal={horizontal}
        labelComponent={drawTooltip(horizontal)}
        offset={10}
        style={{
          data: {
            width: 10
          }
        }}
      >
        {drawBars()}
      </VictoryGroup>

    </ChartContainer>
  )
}

export default GroupedBarChart