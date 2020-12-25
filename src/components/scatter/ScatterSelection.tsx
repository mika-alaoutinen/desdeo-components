import React from 'react'
import { VictoryScatter } from 'victory'

import SelectionContainer from '../../containers/SelectionContainer'
import { mapFillStyle } from '../../styles/style'
import { DataProps } from '../../types/dataTypes'

const ScatterChart: React.FC<DataProps> = ({ data, callback }) => (
  <SelectionContainer
    onSelect={callback}
    onUnselect={callback}
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