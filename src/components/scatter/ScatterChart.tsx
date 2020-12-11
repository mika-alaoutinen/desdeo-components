import React from 'react'
import { VictoryScatter } from 'victory'

import ChartContainer from '../../containers/ChartContainer'
import { TestData } from './data'

interface Props {
  data: TestData[]
}

const style = {
  data: {
    fill: '#c43a31'
  }
}

const ScatterChart: React.FC<Props> = ({ data }) => {
  return (
    <ChartContainer
      x={[ 0, 5 ]}
      y={[ 0, 7 ]}
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
}

export default ScatterChart