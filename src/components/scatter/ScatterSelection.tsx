import React from 'react'
import { VictoryScatter } from 'victory'

import SelectionContainer from '../../containers/SelectionContainer'
import { DataProps } from '../../types/dataTypes'

const ScatterChart: React.FC<DataProps> = ({ data }) => ( 
  <SelectionContainer>
    <VictoryScatter
      data={data}
      size={7}
      style={{
        data: {
          fill: ({ active }) => active ? 'tomato' : 'gray'
        }
      }}
      x='x'
      y='y'
    />        
  </SelectionContainer>
)

export default ScatterChart