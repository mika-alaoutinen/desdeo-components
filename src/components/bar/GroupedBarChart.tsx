import React from 'react'
import { VictoryChart, VictoryGroup, VictoryTheme } from 'victory'

import { calculateHeight, calculateWidth } from 'containers/containerUtils'
import { OnClickHandler } from 'types/chartTypes'
import { CoordinateSet } from 'types/dataTypes'
import { horizontalPadding, verticalPadding } from './layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from './rendering'

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
    <VictoryChart
       height={calculateHeight(datasets)}
       padding={horizontal ? horizontalPadding : verticalPadding}
       theme={VictoryTheme.material}
       width={calculateWidth(datasets)}
     >
      {drawMainAxis(datasets, labels)}
      {drawDependentAxis()}

      <VictoryGroup
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

    </VictoryChart>
  )
}

export default GroupedBarChart