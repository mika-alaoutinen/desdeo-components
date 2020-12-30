import React from 'react'
import { PointProps } from 'victory'
// The selection container export in victory is broken.
// Let's import it from the separate victory-selection-container npm package instead...
import { VictorySelectionContainer } from 'victory-selection-container'

import ChartContainer from './ChartContainer'
import { onSelectHandler, selectionClearedHandler } from '../events/onSelect'
import { Datum } from '../types/dataTypes'
import { OnSelectHandler } from '../types/eventTypes'

interface Props {
  data: Datum[],
  onSelect: OnSelectHandler
}

const SelectionContainer: React.FC<Props> = ({ data, onSelect, ...props }) => {

  const selection = (points: PointProps[]): void =>
    onSelectHandler(points[0].data, data, onSelect)
  
  const selectionCleared = (): void =>
    selectionClearedHandler(data, onSelect)
  
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