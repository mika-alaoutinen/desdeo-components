import React from 'react'
import { VictoryLine } from 'victory'

import { TextualData } from '../../types/dataTypes'

interface Props {
  data: TextualData[],
  name: string,
  opacity: number
}

const ParallelAxesLine: React.FC<Props> = ({ data, name, opacity }) => (
  <VictoryLine
    key={name}
    data={data}
    name={name}
    groupComponent={<g />}
    style={{
      data: {
        opacity,
        stroke: 'tomato'
      }
    }}
  />
)

export default ParallelAxesLine