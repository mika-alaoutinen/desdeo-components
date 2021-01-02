import React from 'react'
import { VictoryScatter } from 'victory'

import SelectionContainer from '../../containers/SelectionContainer'
import { mapFillStyle } from '../../styles/victoryStyles'
import { OnSelectChart } from '../../types/chartTypes'

const ScatterChart: React.FC<OnSelectChart> = ({ data, onSelect }) => (
  <SelectionContainer
    data={data}
    onSelect={onSelect}
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