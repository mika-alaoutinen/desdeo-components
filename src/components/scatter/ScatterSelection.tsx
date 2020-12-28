import React from 'react'
import { VictoryScatter } from 'victory'

import SelectionContainer from '../../containers/SelectionContainer'
import { mapFillStyle } from '../../styles/victoryStyles'
import { DataProps } from '../../types/dataTypes'

const ScatterChart: React.FC<DataProps> = ({ data, eventHandler }) => (
  <SelectionContainer
    data={data}
    eventHandler={eventHandler}
  >
    
    <VictoryScatter
      data={data}
      size={7}
      style={{
        data: {
          fill: ({ datum }) => mapFillStyle(datum)
        }
      }}
    />        

  </SelectionContainer>
)

export default ScatterChart