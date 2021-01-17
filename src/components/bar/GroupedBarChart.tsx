import React from 'react'
import { VictoryBar, VictoryGroup } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { CoordinateSet } from '../../types/dataTypes'

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

  const createKey = (label: string|undefined, index: number): string =>
    label ? label : index.toString()

  return (
    <ChartContainer
      domain={{
        x: [0, 100],
        y: [0, 100]
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