import React from 'react'
import { VictoryScatter } from 'victory'

import ZoomContainer from '../../containers/ZoomContainer'
import { Coordinate } from '../../data/dataTypes'
// import { createStyle } from './style'
import { Domain } from '../../containers/victoryTypes'

interface Props {
  data: Coordinate[]
}

const domain: Domain = {
  x: [0, 100],
  y: [0, 100]
}

const ScatterChart: React.FC<Props> = ({ data }) => {

  const mapFillStyle = (coordinate: Coordinate): string =>
    coordinate.y % 2 === 0 ? 'black' : 'tomato'
  
  return ( 
    <ZoomContainer domain={domain}>
      <VictoryScatter
        data={data}
        size={7}
        style={{
          data: {
            fill: data => mapFillStyle(data.datum)
          }
        }}
        x='x'
        y='y'
      />        
    </ZoomContainer>
  )
}

export default ScatterChart