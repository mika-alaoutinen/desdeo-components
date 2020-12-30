import React from 'react'
import { VictoryScatter } from 'victory'

import SelectionContainer from '../../containers/SelectionContainer'
import { mapFillStyle } from '../../styles/victoryStyles'
import { OnSelectionChart } from '../../types/chartTypes'

const ScatterChart: React.FC<OnSelectionChart> = ({ data, onSelect }) => (
  <SelectionContainer
    data={data}
    onSelection={onSelect}
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