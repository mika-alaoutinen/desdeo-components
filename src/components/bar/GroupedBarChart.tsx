import React from 'react'
import { VictoryGroup } from 'victory'

import ChartContainer from 'containers/ChartContainer'
import { OnClickHandler } from 'types/chartTypes'
import { CoordinateSet } from 'types/dataTypes'
import { padding } from './layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from './renderingFunctions'

interface Props {
  datasets: CoordinateSet[],
  labels: string[],
  onClick: OnClickHandler,
  horizontal?: boolean
}

const GroupedBarChart: React.FC<Props> = ({
  datasets, labels, onClick, horizontal
}) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

  return (
    <ChartContainer
      padding={horizontal ? padding : undefined}
    >

      {drawMainAxis(datasets, labels)}
      {drawDependentAxis()}

      <VictoryGroup
        // colorScale={[ 'brown', 'tomato', 'gold' ]}
        horizontal={horizontal}
        labelComponent={drawTooltip(horizontal)}
        offset={8}
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