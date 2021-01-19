import React from 'react'
import {
  VictoryAxis, VictoryGroup, VictoryLabel, VictoryTooltip
} from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { OnClickHandler } from '../../types/chartTypes'
import { CoordinateSet } from '../../types/dataTypes'
import { drawBar } from './renderingFunctions'
import { createAxisLabels, createIntegerArray, getDatasetLength } from './utils'

interface Props {
  datasets: CoordinateSet[],
  onClick: OnClickHandler,
  horizontal?: boolean
}

const GroupedBarChart: React.FC<Props> = ({ datasets, onClick, horizontal }) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, onClick, i))

    const drawXAxis = (): JSX.Element =>
    <VictoryAxis dependentAxis />

  const drawYAxis = (): JSX.Element =>
    <VictoryAxis
      tickFormat={createAxisLabels(datasets)}
      tickValues={createIntegerArray(getDatasetLength(datasets))}
    />

  const createTooltip = (): JSX.Element =>
    <VictoryTooltip
      flyoutComponent={<VictoryLabel />}
      style={{ fontSize: 10 }}
    />

  return (
    <ChartContainer
      padding={{ top: 50, left: 75, right: 50, bottom: 50 }}
    >

      {drawXAxis()}
      {drawYAxis()}

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