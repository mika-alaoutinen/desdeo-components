import React from 'react'
import {
  VictoryAxis, VictoryBar, VictoryGroup, VictoryLabel, VictoryTooltip
} from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { CoordinateSet } from '../../types/dataTypes'
import { createAxisLabels, createTickValues } from './utils'

interface Props {
  datasets: CoordinateSet[]
}

const GroupedBarChart: React.FC<Props> = ({ datasets }) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) =>
      drawBar(dataset, dataset.label ? dataset.label : i.toString()))

  const drawBar = ({ data }: CoordinateSet, key: string): JSX.Element =>
    <VictoryBar
      key={key}
      data ={data}
    />

  const drawXAxis = (): JSX.Element =>
    <VictoryAxis dependentAxis />

  const drawYAxis = (): JSX.Element =>
    <VictoryAxis
      tickFormat={createAxisLabels(datasets)}
      tickValues={createTickValues(datasets.map(dataset => dataset.data).length)}
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
        horizontal
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