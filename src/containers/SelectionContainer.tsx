import React from 'react'
import { PointProps } from 'victory'
// The selection container export in victory is broken.
// Let's import it from the separate victory-selection-container npm package instead...
import { VictorySelectionContainer } from 'victory-selection-container'

import ChartContainer from './ChartContainer'
import { onSelectionHandler, selectionClearedHandler } from '../events/onSelection'
import { Datum, ReduxAction, SetData } from '../types/dataTypes'

interface Props {
  data: Datum[],
  setData?: SetData,
  onSelect?: ReduxAction
}

const SelectionContainer: React.FC<Props> = ({ data, setData, onSelect, ...props }) => {

  const onSelection = (points: PointProps[]): Datum[] =>
    onSelectionHandler(points[0].data, data, setData, onSelect)
  
  const onSelectionCleared = (): Datum[] =>
    selectionClearedHandler(data, setData, onSelect)
  
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