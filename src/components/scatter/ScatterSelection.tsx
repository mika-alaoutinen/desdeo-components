import React from 'react'
import { VictoryScatter } from 'victory'

import SelectionContainer from '../../containers/SelectionContainer'
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
          fill: ({ active }) => active ? 'tomato' : 'gray'
        }
      }}
    />        
  </SelectionContainer>
)

export default ScatterChart