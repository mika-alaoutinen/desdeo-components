import React from 'react'
import { VictoryGroup, VictoryLabel, VictoryTooltip } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { drawBar, drawMainAxis, drawDependentAxis } from './renderingFunctions'
import { BarChartProps } from '../../types/chartTypes'
import { padding } from './layout'

const GroupedBarChart: React.FC<BarChartProps> = ({
  datasets, onClick, horizontal
}) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  const createTooltip = (): JSX.Element =>
    <VictoryTooltip
      flyoutComponent={<VictoryLabel />}
      style={{ fontSize: 10 }}
    />

  return (
    <ChartContainer
      padding={horizontal ? padding : undefined}
    >

      {drawMainAxis(datasets)}
      {drawDependentAxis()}

      <VictoryGroup
        colorScale={[ 'brown', 'tomato', 'gold' ]}
        horizontal={horizontal}
        labelComponent={createTooltip()}
        offset={10}
        style={{
          data: {
            width: 6
          }
        }}
      >
        {drawBars()}
      </VictoryGroup>

    </ChartContainer>
  )
}

export default GroupedBarChart