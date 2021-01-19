import React from 'react'
import { VictoryGroup, VictoryLabel, VictoryTooltip } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { OnClickHandler } from '../../types/chartTypes'
import { CoordinateSet } from '../../types/dataTypes'
import { drawBar, drawMainAxis, drawDependentAxis } from './renderingFunctions'

interface BarChartProps {
  datasets: CoordinateSet[],
  onClick: OnClickHandler,
  horizontal?: boolean
}

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
      padding={{ top: 50, left: 75, right: 50, bottom: 50 }}
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