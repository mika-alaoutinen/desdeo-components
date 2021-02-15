import React from 'react'
import { VictoryScatter } from 'victory'

import SelectionContainer from '../../containers/SelectionContainer'
import { drawDependentAxis, drawMainAxis } from './rendering'
import { mapFillStyle } from '../../styles/victoryStyles'
import { OnSelectChart } from '../../types/chartTypes'

const ScatterChart: React.FC<OnSelectChart> = ({
  data, onSelect, onSelectionCleared, xAxisLabel, yAxisLabel
}) => (

  <SelectionContainer
    onSelect={onSelect}
    onSelectionCleared={onSelectionCleared}
  >

    {drawMainAxis(xAxisLabel)}
    {drawDependentAxis(yAxisLabel)}

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