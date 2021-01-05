import React from 'react'
import { VictoryScatter } from 'victory'

import SelectionContainer from '../../containers/SelectionContainer'
import { onSelectHandler, selectionClearedHandler } from '../../events/onSelect'
import { mapFillStyle } from '../../styles/victoryStyles'
import { OnSelectChart } from '../../types/chartTypes'
import { Datum } from '../../types/dataTypes'

const ScatterChart: React.FC<OnSelectChart> = ({ data, onSelect }) => (
  <SelectionContainer
    onSelect={(selected: Datum[]) => onSelectHandler(selected, data, onSelect)}
    onSelectionCleared={() => selectionClearedHandler(data, onSelect)}
  >

    <VictoryScatter
      data={data}
      size={7}
      style={{
        data: {
          fill: (data: { datum: Datum }) => mapFillStyle(data.datum)
        }
      }}
    />

  </SelectionContainer>
)

export default ScatterChart