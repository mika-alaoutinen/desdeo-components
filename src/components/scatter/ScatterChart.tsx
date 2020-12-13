import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { Coordinate } from '../../data/dataTypes'
import { Domain } from '../../victoryTypes/containerTypes'
import { mapFillStyle, mapOpacityStyle } from './style'

interface Props {
  data: Coordinate[]
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
      style={{
        data: {
          fill: data => mapFillStyle(data.datum),
          opacity: data => mapOpacityStyle(data.datum)
        }
      }}
      x='x'
      y='y'
    />        
  </ZoomContainer>
)

export default ScatterChart