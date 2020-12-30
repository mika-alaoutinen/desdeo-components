import React from 'react'
import { PointProps } from 'victory'
// The selection container export in victory is broken.
// Let's import it from the separate victory-selection-container npm package instead...
import { VictorySelectionContainer } from 'victory-selection-container'

import ChartContainer from './ChartContainer'
import { onSelectionHandler, selectionClearedHandler } from '../events/onSelection'
import { Datum } from '../types/dataTypes'
import { OnSelectionHandler } from '../types/eventTypes'

interface Props {
  data: Datum[],
  onSelection: OnSelectionHandler
}

const SelectionContainer: React.FC<Props> = ({ data, onSelection, ...props }) => {

  const selection = (points: PointProps[]): void =>
    onSelectionHandler(points[0].data, data, onSelection)
  
  const selectionCleared = (): void =>
    selectionClearedHandler(data, onSelection)
  
  const selectionContainer = (): JSX.Element =>
    <VictorySelectionContainer
      onSelection={selection}
      onSelectionCleared={selectionCleared}
    />
  
  return (
    <ChartContainer
      { ...props }
      component={selectionContainer()}
    />
  )
}

export default SelectionContainer