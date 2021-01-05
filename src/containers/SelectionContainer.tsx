import React from 'react'
// The selection container export in victory is broken.
// Let's import it from the separate victory-selection-container npm package instead...
import { VictorySelectionContainer } from 'victory-selection-container'

import ChartContainer from './ChartContainer'
import { Datum } from '../types/dataTypes'

interface Props {
  onSelect: (selected: Datum[]) => void,
  onSelectionCleared: () => void
}

const SelectionContainer: React.FC<Props> = ({ onSelect, onSelectionCleared, ...props }) => {

  const selectionContainer = (): JSX.Element =>
    <VictorySelectionContainer
      onSelection={points => onSelect(points[0].data)}
      onSelectionCleared={() => onSelectionCleared()}
    />

  return (
    <ChartContainer
      { ...props }
      component={selectionContainer()}
    />
  )
}

export default SelectionContainer