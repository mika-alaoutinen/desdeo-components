import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { TestData } from './data'
import { style } from './style'
import { Domain } from '../../containers/types'

interface Props {
  data: TestData[]
}

const domain: Domain = {
  x: [0, 100],
  y: [0, 100]
}

const ScatterChart: React.FC<Props> = ({ data }) => (
  <ZoomContainer domain={domain}>
    <VictoryScatter
      data={data}
      size={7}
      style={style}
      x='x'
      y='y'
    />        
  </ZoomContainer>
)

export default ScatterChart