import React from 'react'
import { VictoryAxis, VictoryBar, VictoryGroup } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { CoordinateSet } from '../../types/dataTypes'
import { createKey, tickValues } from './utils'

interface Props {
  datasets: CoordinateSet[]
}

const GroupedBarChart: React.FC<Props> = ({ datasets }) => {

  const drawBars = (): JSX.Element[] =>
    datasets.map((dataset, i) => drawBar(dataset, createKey(dataset.label, i)))

  const drawBar = ({ data }: CoordinateSet, key: string): JSX.Element =>
    <VictoryBar
      key={key}
      data ={data}
    />

  const drawXAxis = (): JSX.Element =>
    <VictoryAxis dependentAxis />

  const drawYAxis = (): JSX.Element =>
    <VictoryAxis
      tickFormat={createLabels()}
      tickValues={createTickValues()}
    />

  const createLabels = (): string[] =>
    datasets.map(({ label }, i) => label ? label : `Label ${i}`)

  const createTickValues = (): number[] =>
    tickValues(datasets.map(dataset => dataset.data).length)

  return (
    <ChartContainer
      padding={{ top: 50, left: 75, right: 50, bottom: 50 }}
    >

      {drawXAxis()}
      {drawYAxis()}

      <VictoryGroup
        colorScale={[ 'brown', 'tomato', 'gold' ]}
        horizontal
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