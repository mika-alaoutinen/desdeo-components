import React from 'react'
import { VictoryBar, VictoryGroup } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { CoordinateSet } from '../../types/dataTypes'
import { createKey, findMaxValue } from './utils'

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

  return (
    <ChartContainer
      domain={{
        x: [1, datasets.length],
        y: [0, findMaxValue(datasets) + 10]
      }}
    >

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