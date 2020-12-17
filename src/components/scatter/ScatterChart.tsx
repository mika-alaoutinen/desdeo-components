import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { Datum } from '../../types/dataTypes'
import { Domain } from '../../types/containerTypes'
import { mapFillStyle, mapOpacityStyle } from '../../styles/style'

interface Props {
  data: Datum[]
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