import React from 'react'
import { VictoryScatter } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { TestData } from './data'
import { style } from './style'
import { Domain } from '../../containers/types'

interface Props {
  data: TestData[]
}

const domain: Domain = {
  x: [0, 10],
  y: [0, 10]
}

const ScatterChart: React.FC<Props> = ({ data }) => (
  <ChartContainer
    domain={domain}
  >
    <VictoryScatter
      data={data}
      size={7}
      style={style}
      x='x'
      y='y'
    />        
  </ChartContainer>
)

export default ScatterChart