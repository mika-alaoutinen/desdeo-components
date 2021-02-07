import React from 'react'
import { VictoryChart, VictoryGroup } from 'victory'

import { calculateHeight, calculateWidth } from 'containers/containerUtils'
import { horizontalPadding, verticalPadding } from './layout'
import { drawBar, drawMainAxis, drawDependentAxis, drawTooltip } from './rendering'
import { MATERIAL_THEME } from 'styles/victoryStyles'
import { OnClickHandler } from 'types/chartTypes'
import { CoordinateSet } from 'types/dataTypes'

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
       height={horizontal ? calculateHeight(datasets) : 350}
       padding={horizontal ? horizontalPadding : verticalPadding}
       theme={MATERIAL_THEME}
       width={horizontal ? 350 : calculateWidth(datasets)}
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