import React from 'react'
import { VictoryScatter } from 'victory'

import VictoryChartContainer from '../../containers/VictoryChartContainer'
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
  console.log('data', data)
  
  return (
    <VictoryChartContainer domain={{ x: [0, 5], y: [0, 7] }}>
      <VictoryScatter
        data={data}
        size={7}
        style={style}
        x='x'
        y='y'
      />        
    </VictoryChartContainer>
  )
}

export default ScatterChart