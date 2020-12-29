import React from 'react'
import { PointProps } from 'victory'
// The selection container export in victory is broken.
// Let's import it from the separate victory-selection-container npm package instead...
import { VictorySelectionContainer } from 'victory-selection-container'

import ChartContainer from './ChartContainer'
import { onSelectionHandler, selectionClearedHandler } from '../events/onSelection'
import { Datum } from '../types/dataTypes'
import { OnClickHandler } from '../types/eventTypes'

interface Props {
  data: Datum[],
  onClick: OnClickHandler
}

const SelectionContainer: React.FC<Props> = ({ data, onClick, ...props }) => {

  const onSelection = (points: PointProps[]): Datum[] =>
    onSelectionHandler(points[0].data, data, onClick)
  
  const onSelectionCleared = (): Datum[] =>
    selectionClearedHandler(data, onClick)
  
  const selectionContainer = (): JSX.Element =>
    <VictorySelectionContainer
      onSelection={onSelection}
      onSelectionCleared={onSelectionCleared}
    />
  
  return (
    <ChartContainer
      { ...props }
      component={selectionContainer()}
    />
  )
}

export default SelectionContainer