import React from 'react'
// The selection container export in victory is broken.
// Let's import it from the separate victory-selection-container npm package instead...
import { VictorySelectionContainer } from 'victory-selection-container'

import ChartContainer from './ChartContainer'
import { onSelectHandler, selectionClearedHandler } from '../events/onSelect'
import { OnSelectChart } from '../types/chartTypes'

const SelectionContainer: React.FC<OnSelectChart> = ({ data, onSelect, ...props }) => {

  const selectionContainer = (): JSX.Element =>
    <VictorySelectionContainer
      onSelection={points => onSelectHandler(points[0].data, data, onSelect)}
      onSelectionCleared={() => selectionClearedHandler(data, onSelect)}
    />

  return (
    <ChartContainer
      { ...props }
      component={selectionContainer()}
    />
  )
}

export default SelectionContainer