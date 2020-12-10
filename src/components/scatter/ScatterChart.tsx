import React from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory'

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
    <VictoryChart
      domain={{ x: [0, 5], y: [0, 7] }}
      theme={VictoryTheme.material}
    >
      <VictoryScatter
        data={data}
        size={7}
        style={style}
        x='x'
        y='y'
      />        
    </VictoryChart>
  )
}

export default ScatterChart