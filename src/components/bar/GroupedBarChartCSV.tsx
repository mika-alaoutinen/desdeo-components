import React from 'react'
import { VictoryGroup } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { CSVProps } from '../../types/chartTypes'
import { padding } from './layout'
import {
  drawBarCSV, drawMainAxisCSV, drawDependentAxis, drawTooltip
} from './renderingFunctions'

const GroupedBarChartCSV: React.FC<CSVProps> = ({ data, onClick, horizontal }) => {

  const drawBars = (): JSX.Element[] =>
    data.map((column, i) => drawBarCSV(column, onClick, i))

  return (
    <ChartContainer
      padding={horizontal ? padding : undefined}
    >

      {drawMainAxisCSV(data)}
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

export default GroupedBarChartCSV